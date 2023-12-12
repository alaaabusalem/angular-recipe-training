import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipListComponent } from './recipes/recip-list/recip-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recip-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './directives/dropdown.directive'
import {ShoppingListService} from './shopping-list/shopping-list.service'
import {AppRouting} from './app.routing.module';
import { SelectRecipeComponent } from './recipes/select.recipe/select.recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RecipeService} from './recipes/recipe.service'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SelectRecipeComponent,
    RecipeEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
