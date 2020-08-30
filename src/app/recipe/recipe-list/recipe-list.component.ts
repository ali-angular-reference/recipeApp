import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { makeNRecipes } from '../../faker/recipe-creation';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeEmitted = new EventEmitter<Recipe>();
  recipes: Recipe[] = makeNRecipes(5);
  constructor() {}

  ngOnInit(): void {
  }

  onRecipeClicked(recipe: Recipe){
    this.recipeEmitted.emit(recipe)
    console.log("recipe clicked")
  }

}
