import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {Routes ,RouterModule} from '@angular/router'
import { SelectRecipeComponent } from './recipes/select.recipe/select.recipe.component'
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'

const appRoutes:Routes=[
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
{path: 'recipes', component:RecipesComponent,children:[
    {path:'', component: SelectRecipeComponent,pathMatch: 'full'},
    {path: 'new', component:RecipeEditComponent},
    {path:':id', component: RecipeDetailComponent},
    {path: ':id/edit', component:RecipeEditComponent}
]},
{path: 'shopping-list', component:ShoppingListComponent},



]

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouting{


}