import { Component,OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Params,Router } from '@angular/router';
import {RecipeService}  from '../recipe.service'
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
id;
IsAdd:boolean;
recipeForm:FormGroup;
recp:Recipe;

constructor(private recipeService: RecipeService,private route: ActivatedRoute, private router:Router){

}

ngOnInit(){
 
  this.route.params.subscribe((params: Params)=>{
this.id= params['id'];
  })
  console.log(this.id);
  if(this.id==null){
    this.IsAdd=true;
  }
  else{
    this.IsAdd=false;
    

  }
  this.SetFormData();
  console.log(this.recipeForm);
}

SetFormData(){
  if(!this.IsAdd){
     this.recp=this.recipeService.GetTheRecipe(this.id);
  }
  else{
    this.recp = new Recipe('','','',[]);
  }
  this.recipeForm= new FormGroup({
    'name': new FormControl(this.recp.name,[Validators.required]),
    'description': new FormControl(this.recp.description,[Validators.required]),
    'imageUrl': new FormControl (this.recp.imageUrl,Validators.required),
    'ingS': new FormArray([])
  });
 
  this.recp.ingS.forEach(element => {
  const fGroup= new FormGroup({
    'name':new FormControl(element.name,Validators.required),
    'amount':new FormControl(element.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
  });
 (<FormArray> this.recipeForm.get('ingS')).push(fGroup);
});
}

OnSbmit(){
if(this.IsAdd){
  this.recipeService.AddRecipe(this.recipeForm.value);
this.router.navigate(['../'],{relativeTo:this.route})
}
else{
  this.recipeService.UpdateRecipe(this.id,this.recipeForm.value);
  this.router.navigate(['../'],{relativeTo:this.route})

}
this.recipeForm.reset();
}
get GetIngredients(){
 return  (<FormArray>this.recipeForm.get('ingS')).controls;
}
AddIngredint(){
  const fGroup= new FormGroup({
    'name':new FormControl('',Validators.required),
    'amount':new FormControl('',[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
  });
  (<FormArray> this.recipeForm.get('ingS')).push(fGroup);

}
DeleteIngrediant(index:number){
  (<FormArray>this.recipeForm.get('ingS')).removeAt(index);
}
cancel(){
  if(this.IsAdd){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
  this.router.navigate(['../'],{relativeTo:this.route})

}
}
