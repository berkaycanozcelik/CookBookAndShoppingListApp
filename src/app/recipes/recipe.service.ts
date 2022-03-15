import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe('1 Test Recipe','This is a test1','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('2 Test Recipe','This is a test2','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272'),
    new Recipe('3 Test Recipe','This is a test3','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  constructor() { }
}
