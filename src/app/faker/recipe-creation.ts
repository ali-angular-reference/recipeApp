import { Recipe } from '../recipe/recipe.model';
import { NumberFormatStyle } from '@angular/common';
import makeFakeDummyData from './faker-commands';
import { dishImageUrls, taste, ingName, measure } from '../fixtures/dom-resources';
import { Ingredient } from '../shared/ingredient.model';


function makeNRecipes(numberOfRecipes:number, numberOfIngs:number){
  const faker = new makeFakeDummyData();
  var recipes: Recipe[] = [];
  for(var i = 0; i < numberOfRecipes; i++){ // create i recipes
    var ingredients: Ingredient[] = [];
    for(var j = 0; j < numberOfIngs; j++){ // create j ingredients for every recipe
      var name = selectRandomFromList(ingName);
      var meas = selectRandomFromList(measure);
      var quantity = 2
      ingredients.push(new Ingredient(name, meas, quantity))
    }
    // console.log(ingredients)
    var recipeName = faker.makeFakeDishName();
    var recipeDesc = faker.makeFakeAdjective() + ' ' + faker.makeFakeNoun() + ' is ' + selectRandomFromList(taste)
    recipes.push(new Recipe(recipeName, recipeDesc, dishImageUrls[i], ingredients));
    // console.log(recipes)
  }
  return recipes;
}

function selectRandomFromList(list:any){
  return list[Math.floor(Math.random()*list.length)]
}

export {makeNRecipes};
