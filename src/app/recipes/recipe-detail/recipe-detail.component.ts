import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';
import { StorageService } from '../../LocalStorageService';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(private localStorage: LocalStorage, private recipeService: RecipeService, private activatedRoute: ActivatedRoute,
    private router: Router, private storageService: StorageService) { }
  onAddIngrediants() {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingredients);
  }
  ngOnInit() {
    const id = this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });

    this.storageService.changes.subscribe(res => {
      this.recipe = res.value;
    })
  }

}
