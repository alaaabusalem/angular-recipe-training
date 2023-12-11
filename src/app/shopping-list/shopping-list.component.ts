import { Component, OnInit, OnDestroy } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model'
import {ShoppingListService} from './shopping-list.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients:Ingredient[];
  subEvent: Subscription;

  constructor(private shopListService: ShoppingListService){}

    ngOnInit(): void {
      this.ingredients=this.shopListService.GetIngredientArr();
      this.subEvent=this.shopListService.updateArrEvent.subscribe((ingredS:Ingredient[])=>{
       this.ingredients=ingredS;
      })
    }
  ngOnDestroy(): void {
    this.subEvent.unsubscribe();
  }
}
