import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model'
import {ShoppingListService} from './shopping-list.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
  ingredients:Ingredient[];
  constructor(private shopListService: ShoppingListService){}

    ngOnInit(): void {
      this.ingredients=this.shopListService.GetIngredientArr();
      this.shopListService.updateArrEvent.subscribe((ingredS:Ingredient[])=>{
       this.ingredients=ingredS;
      })
    }
  
}
