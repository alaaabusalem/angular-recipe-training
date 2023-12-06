import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
 @Input() recipeItem:Recipe;
 @Input() index:string;

 constructor(private recipeService: RecipeService){}
}
