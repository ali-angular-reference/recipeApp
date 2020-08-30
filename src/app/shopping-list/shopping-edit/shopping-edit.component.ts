import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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
  @Output() ingredientEmitted = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    const newIngredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.measureInput.nativeElement.value,
      this.numberInput.nativeElement.value)
    this.ingredientEmitted.emit(newIngredient)
    console.log(this.nameInput.nativeElement.value + " emitted")
  }

  onDeleteIngredient(){}

  onCancelIngredient(){}

}
