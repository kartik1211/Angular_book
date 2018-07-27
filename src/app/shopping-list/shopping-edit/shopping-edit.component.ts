import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { Ingrident } from '../../shared/ingrident.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  onAdd(){
      const ingridentName=this.nameInputRef.nativeElement.value;
      const ingridentAmount=this.amountInputRef.nativeElement.value;
      const newIngridient=new Ingrident(ingridentName,ingridentAmount);
      this.shoppingListService.addIngrident(newIngridient);
    }
}
