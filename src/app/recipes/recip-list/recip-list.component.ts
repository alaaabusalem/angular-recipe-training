import { Component,Output,EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import{RecipeService} from '../recipe.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrl: './recip-list.component.css',
})
export class RecipListComponent implements OnInit{
recipesList:Recipe[];
//@Output() recipeSelected= new EventEmitter<Recipe>();
constructor(private recipeService:RecipeService, private router: Router, private route: ActivatedRoute){}
ngOnInit() {
  this.recipesList = this.recipeService.GetRecipeArr();
}
/*passRecipeSelected(rec:Recipe){
  this.recipeSelected.emit(rec);
}*/
ToNew(){
this.router.navigate(['new'],{relativeTo:this.route});
}
}
  