import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
 
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit{
id;
  IsAdd:boolean;
constructor(private route: ActivatedRoute){

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
}
}
