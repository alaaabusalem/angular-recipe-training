import { Component,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service'
import {ActivatedRoute,Params, Router} from '@angular/router'
import {OnInit} from '@angular/core'
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit{
 @Input() recipeDetail:Recipe;
 index:number;
 constructor(private recipeService:RecipeService, private route: ActivatedRoute, private router:Router){}
 ngOnInit(){
this.route.params.subscribe((params: Params)=>{
this.index= +params['id'];

this.recipeDetail=this.recipeService.GetTheRecipe(this.index);
})
 }
 AddToShopping(){
  console.log("details Add");
  this.recipeService.AddToShoppingList(this.recipeDetail.ingS);
 }
 Edit(){
this.router.navigate(['edit'],{relativeTo: this.route});
 }
 DeleteRecipe(){
  this.recipeService.DeleteRecipe(this.index);
  this.router.navigate(['./recipes']);

 }
}
