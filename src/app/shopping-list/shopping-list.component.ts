import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 'each', 5),
    new Ingredient('brown sugar', 'tablespoon', 2)
  ];
  constructor() { }

  onIngredientAdded(newIngredient:Ingredient){
    this.ingredients.push(newIngredient)
    console.log(newIngredient.name + " added to the shopping list")
  }

  //onIngredientDeleted(){}

  ngOnInit() {
  }

}
