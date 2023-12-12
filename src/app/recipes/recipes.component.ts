import { Component,OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import {RecipeService} from '../recipes/recipe.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  //providers:[RecipeService]

})
export class RecipesComponent implements OnInit{
recipe:Recipe;
constructor(private recipeService:RecipeService){}
ngOnInit(): void {
  this.recipeService.shRecipeDitailsEvent.subscribe((recip:Recipe)=>{
this.recipe=recip;
  })
}
}

