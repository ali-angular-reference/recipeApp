import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // create an emmitter to output what menu item is clicked so the right component is shown
  @Output() viewEmit = new EventEmitter<{chooseRecipe:boolean,chooseShoppingList:boolean}>();

  chooseRecipe = true
  chooseShoppingList = false
  constructor() { }
  collapsed = true;
  ngOnInit(): void {
  }

  recipeChosen(){
    this.chooseRecipe = true
    this.chooseShoppingList = false
    // emit the view recipe/view shopping list states
    this.viewEmit.emit({chooseRecipe:this.chooseRecipe,chooseShoppingList:this.chooseShoppingList})
    console.log('choose recipe emmitted: ' + this.chooseRecipe)
  }

  shoppingListChosen(){
    this.chooseRecipe = false
    this.chooseShoppingList = true
    this.viewEmit.emit({chooseRecipe:this.chooseRecipe,chooseShoppingList:this.chooseShoppingList})
    console.log('show shopping list emmitted' + this.chooseShoppingList)
  }

}
