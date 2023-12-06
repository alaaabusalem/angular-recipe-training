import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
public name:string;
public description:string;
public imageUrl:string;
public ingS:Ingredient[];
 constructor(name:string, des:string , imgUrl:string, ing:Ingredient[]){
this.name=name;
this.description=des;
this.imageUrl=imgUrl;
this.ingS=ing;
 }
}