import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipe = true
  showShoppingList = false
  title = 'recipeApp';

  updateView(event:{chooseRecipe:boolean,chooseShoppingList:boolean}){
    console.log('chooseRecipe is ' + event.chooseRecipe)
    console.log('chooseShoppingList is ' + event.chooseShoppingList)
    this.showRecipe = event.chooseRecipe
    this.showShoppingList = event.chooseShoppingList
  }

}
