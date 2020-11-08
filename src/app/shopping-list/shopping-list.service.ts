import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService{
    //event emitter saying that the array has been updated
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [ // create some initial ingredient data
        new Ingredient('apples', 'each', 5),
        new Ingredient('brown sugar', 'tablespoon', 2)
      ];

    // add one ingredient to the shopping list
    addIngredient(ingredient: Ingredient){
        // if the ingredient added has the same nameand measure, then just update the quantity
        var match = this.ingredientsMatch(this.ingredients, ingredient)
        if(match.result){
            this.ingredients[match.index].quantity = Number(this.ingredients[match.index].quantity) + Number(ingredient.quantity)
        } else {
            this.ingredients.push(ingredient);
        }
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    
    // add an array of ingredients to th shopping list
    addIngredients(ingredients:Ingredient[]){
        var numIngredients = ingredients.length;
        for(var i = 0; i < numIngredients; i++){
            this.addIngredient(ingredients[i]);
        }
    }

    // make a method to get the ingredient data
    getIngredients(){ // This allows the ingredients array to be accessed from outside the service
        return this.ingredients.slice(); // get a copy of the ingredients array in this service
    }

    // Returns true if there exists an ingredient in the ingredients array that matches (name and measure) the ingredient that we're adding
    ingredientsMatch(ingredients: Ingredient[], ingredient: Ingredient){
        var match = {"result":false,"index":-1};
        for(var i = 0; i < ingredients.length; i++){
            if(ingredient.name==ingredients[i].name && ingredient.measure==ingredients[i].measure){
                match.result=true
                match.index=i
                break
            }
        }
        return match
    }
}