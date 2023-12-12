import { Component, ViewChild,ElementRef,Output,EventEmitter ,OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { Subscription } from 'rxjs';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnDestroy,OnInit{
  subEvent: Subscription;
//@ViewChild('name', { static: true }) nameRef!: ElementRef<HTMLInputElement>; 
//@ViewChild('amount', { static: true }) amountRef!: ElementRef<HTMLInputElement>; 
name:string;
amount:number;
index:number;
isUpdated=false;
subupdateIngredEvent: Subscription;
@ViewChild('f', { static: true }) myForm:NgForm;
//@Output() addIngredientEvent= new EventEmitter<Ingredient>();
constructor(private shopListService: ShoppingListService){}
ngOnInit(): void {
  this.subupdateIngredEvent=this.shopListService.updateIngredEvent.subscribe(index=>{
this.isUpdated=true;
this.index=index;
const ing=this.shopListService.GetIngredient(index);
this.myForm.setValue({
  name:ing.name,
  amount:ing.amount
})
  })
}
Submit(){
 //const Name=this.nameRef.nativeElement.value;
//const Amount=this.amountRef.nativeElement.value;
this.name= this.myForm.value.name;
this.amount=parseFloat(this.myForm.value.amount);
if(this.isUpdated){
  this.shopListService.UpdateIngredient(this.index,new Ingredient(this.name,this.amount));

}
//console.log(this.myForm);
else{

this.shopListService.AddNewIngredient(new Ingredient(this.name,this.amount));
}
//console.log("hi");
this.myForm.reset();
this.isUpdated=false;
}

Clear(){
  this.myForm.reset();
  this.isUpdated=false; 
}

ngOnDestroy(): void {
  
}
}
