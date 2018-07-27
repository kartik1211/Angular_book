import { Recipe} from "./recipe.model";
import {EventEmitter, Injectable } from '@angular/core';
import { Ingrident } from "../shared/ingrident.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    constructor(private shoppingListService:ShoppingListService){}

    recipeSelected=new EventEmitter<Recipe>();
   private recipes=[
        new Recipe('Schnitzel','Super Tasty Schnitzel','https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingrident('Meat',1),
            new Ingrident('French Fries',20)
        ]),
        new Recipe('HamBurger','Rim of lettuce sitting on a black plate','https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
        [
            new Ingrident('Buns',2),
            new Ingrident('Meat',1),
            new Ingrident('Lettuce',1)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
      addIngridientsToShoppingList(ingridents:Ingrident[]){
        this.shoppingListService.addIngridents(ingridents);
      }

      getRecipe(index:number){
        return this.recipes[index];
      }
}