<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.module';
import { RecipeService } from '../../recipe.service';
=======
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
<<<<<<< HEAD

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
=======
  @Input() index: number;

  ngOnInit() {
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050
  }
}
