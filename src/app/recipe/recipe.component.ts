import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService] // this component and al child components get this instance of the recipe service
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  // listem for the item clicked event from the recipe service
  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe; // set the selected recipe as the recipe that I got from the event
      }
    );
  }

  recipeReceived(){}
}
