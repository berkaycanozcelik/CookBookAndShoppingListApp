import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Recipe } from '../recipe.module';
=======
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
<<<<<<< HEAD

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {

    this.recipes = this.recipeService.getRecipes();
  }

=======
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
>>>>>>> 31ffcd5c785b64b9ad32863a37b8308bd4fca050

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
