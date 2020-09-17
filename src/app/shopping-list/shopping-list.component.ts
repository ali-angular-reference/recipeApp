import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  constructor(private shoppingListService:ShoppingListService) {}

  //onIngredientDeleted(){}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    // listen to the event emitter from the recipeservice
    this.shoppingListService.ingredientAdded.subscribe(
      (ingredient:Ingredient)=>{
        this.ingredients = this.ingredients.concat(ingredient)
      }
    )
  }

}
