import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { makeNRecipes } from '../../faker/recipe-creation';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];

  // inject the service
  constructor(private recipeService:RecipeService){

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
