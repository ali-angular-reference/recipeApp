import { Recipe } from '../recipe/recipe.model';
import { NumberFormatStyle } from '@angular/common';
import makeFakeDummyData from './faker-commands';
import { dishImageUrls, taste } from '../fixtures/dom-resources';


function makeNRecipes(numberOfRecipes:number){
  const faker = new makeFakeDummyData();
  var recipes: Recipe[] = [];
  for(var i = 0; i < numberOfRecipes; i++){
    recipes.push(new Recipe(faker.makeFakeDishName(),faker.makeFakeAdjective() + ' ' + faker.makeFakeNoun() + ' is ' + taste[selectRandomFromList(taste)], dishImageUrls[i]));
  }
  return recipes;
}

function selectRandomFromList(list:any){
  return Math.floor(Math.random()*list.length)
}

export {makeNRecipes};
