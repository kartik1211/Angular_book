import { Ingrident } from "../shared/ingrident.model";
import { EventEmitter,Output } from '@angular/core';

export class ShoppingListService{

 ingridentsChanged=new EventEmitter<Ingrident[]>();
 private   ingridents=[
        new Ingrident('Apples',3),
        new Ingrident('Tomatoes',2)
      ]


getIngridents(){
    return this.ingridents.slice();
}

addIngrident(ingrident:Ingrident){
    this.ingridents.push(ingrident);
    this.ingridentsChanged.emit(this.ingridents.slice());
}

addIngridents(ingridents:Ingrident[]){
    this.ingridents.push(...ingridents);
    this.ingridentsChanged.emit(this.ingridents.slice());
}

}