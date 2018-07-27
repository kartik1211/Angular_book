import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridents:Ingrident[];
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingridents=this.shoppingListService.getIngridents();
    this.shoppingListService.ingridentsChanged.subscribe((ingridents:Ingrident[])=>{
      this.ingridents=ingridents;
    });
  }


}
