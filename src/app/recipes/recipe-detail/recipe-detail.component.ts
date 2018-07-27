import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id:number;
  recipe:Recipe; 
  constructor(private recipeService:RecipeService, private activatedRoute:ActivatedRoute,
    private router:Router) { }
  onAddIngrediants(){
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingredients);
  }
  ngOnInit() {
    const id=this.activatedRoute.params.subscribe((params:Params)=>{
      this.id=+params['id'];
     this.recipe= this.recipeService.getRecipe(this.id);
    });
  }

  onEditRecipe(){
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute});
 
    this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
  }

}
