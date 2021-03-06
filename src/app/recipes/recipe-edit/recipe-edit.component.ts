import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { RecipeService } from '../recipes.service';
import { StorageService } from '../../LocalStorageService';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(private localStorage: LocalStorage, private route: ActivatedRoute, private recipeService: RecipeService, private storageService: StorageService) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  sync() {
    this.storageService.store('updatedRecipe', this.recipe);
    window.close();
  }

}
