import { EventEmitter } from '@angular/core';
import { makeNRecipes } from '../faker/recipe-creation';
import { Recipe } from './recipe.model'

export class RecipeService{ // doesn't need any decorators unless another service gets injected into this service   
    recipeSelected = new EventEmitter<Recipe>(); //object instantiated from event emitter

    // A place to manage our recipes
    private recipes: Recipe[] = makeNRecipes(5,7); // can't directly access this from outside the service 

    getRecipes(){ // This allows the recipes array to be accessed from outside the service
        return this.recipes.slice(); // get a copy of the recipe array in this service
    }

}