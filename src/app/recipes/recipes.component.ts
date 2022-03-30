import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Recipe } from './recipe.module';
=======

import { Recipe } from './recipe.model';
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

<<<<<<< HEAD
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
=======
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050
  }

}
