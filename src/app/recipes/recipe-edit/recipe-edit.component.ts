import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id:number;
   recipe:Recipe;
  constructor(private localStorage: LocalStorage, private route:ActivatedRoute, private recipeService: RecipeService) { }
  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.localStorage.removeItem('updatedRecipe').subscribe(() => {
        this.recipe= this.recipeService.getRecipe(this.id);
      });
    });
  }

  sync() {
    this.localStorage.setItem('updatedRecipe', this.recipe).subscribe(() => {
      window.close();
    });
  }

}
