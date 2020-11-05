import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // Get the input elements rom the dom
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef;
  @ViewChild('numberInput',{static:true}) numberInput: ElementRef;
  @ViewChild('measureInput',{static:true}) measureInput: ElementRef;
  // Export these elemsnts to shopping-list component

  constructor(private shoppingListservice:ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const ingName = this.nameInput.nativeElement.value;
    const ingMeasure = this.measureInput.nativeElement.value
    const ingQuantity = this.numberInput.nativeElement.value
    const newIngredient = new Ingredient(ingName,ingMeasure,ingQuantity); // construct an ingredient object 
    this.shoppingListservice.addIngredient(newIngredient) // then emit it to the ingredient service
    // this.ingredientEmitted.emit(newIngredient)
    //console.log(this.nameInput.nativeElement.value + " emitted")
  }

  onDeleteIngredient(){}

  onCancelIngredient(){}

}
