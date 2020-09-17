import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService:RecipeService){}

  ngOnInit(): void {
    // listen to the event emitter from the recipeservice
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe
      }
    )
  }
}
