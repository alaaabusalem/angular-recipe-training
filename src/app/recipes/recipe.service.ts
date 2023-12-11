import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model"
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from '@angular/core';
import {ShoppingListService} from '../shopping-list/shopping-list.service'
import { Subject } from "rxjs";
@Injectable()
export class RecipeService{
  private  recipesList:Recipe[]=[
        new Recipe("recipe1","recipe1recipe1recipe1recipe1recipe1","https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
       ,[new Ingredient('Burger Bread',1),new Ingredient('onion',2),new Ingredient('Cheese',1)] ),
        new Recipe("recipe2","recipe2recipe2recipe2recipe2recipe2recipe2","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1z0d_Jke01v4ErGgNeyx8ROBp-v0TW3ZxBg&usqp=CAU"
        ,[new Ingredient('Bread',2),new Ingredient('Egg',2)])
        ]

        constructor(private shopListService: ShoppingListService){}

       // shRecipeDitailsEvent= new EventEmitter<Recipe>();
       shRecipeDitailsEvent= new Subject<Recipe>();
       public GetRecipeArr(){
            return this.recipesList.slice();
        }

        
     AddToShoppingList(ingredient:Ingredient[]){
        console.log("recipe servic Add");

       this.shopListService.AddNewIngredients(ingredient);
     }
     GetTheRecipe(index:number){
      return this.recipesList.slice()[index];
     }

}