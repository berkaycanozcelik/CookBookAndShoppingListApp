import { Injectable } from '@angular/core';
import { Recipe } from './recipe.module';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipe(index: number) {
    return  this.recipes[index];
  }
}
