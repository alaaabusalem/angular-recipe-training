import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService{
    ingredients:Ingredient[]=[
        new Ingredient('apple',5),
        new Ingredient('tomato',2),
          ];
          //updateArrEvent= new EventEmitter<Ingredient[]>();
          updateArrEvent= new Subject<Ingredient[]>();
          GetIngredientArr(){
            return this.ingredients.slice();
          }

          AddNewIngredient(ingredient:Ingredient){
            console.log(ingredient);
            this.ingredients.push(ingredient);
            //this.updateArrEvent.emit(this.ingredients.slice());
            this.updateArrEvent.next(this.ingredients.slice());

          }

AddNewIngredients(ingredient:Ingredient[]){
    console.log(ingredient);
    this.ingredients.push(...ingredient);
    //this.updateArrEvent.emit(this.ingredients.slice());
    this.updateArrEvent.next(this.ingredients.slice());

  }
}