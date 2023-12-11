import { Component, ViewChild,ElementRef,Output,EventEmitter ,OnDestroy} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnDestroy{
  subEvent: Subscription;
@ViewChild('name', { static: true }) nameRef!: ElementRef<HTMLInputElement>; // Specify the type
@ViewChild('amount', { static: true }) amountRef!: ElementRef<HTMLInputElement>; // Specify the type
@Output() addIngredientEvent= new EventEmitter<Ingredient>();
constructor(private shopListService: ShoppingListService){}

AddIngredint(){
 const Name=this.nameRef.nativeElement.value;
const Amount=this.amountRef.nativeElement.value;
console.log("Hi");

this.shopListService.AddNewIngredient(new Ingredient(Name,parseFloat(Amount)));
}

ngOnDestroy(): void {
  
}
}
