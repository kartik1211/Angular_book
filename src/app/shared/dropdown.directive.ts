import {Directive,HostListener,HostBinding} from '@angular/core';

@Directive({
    selector:'[appDropDown]'//as an attribute
})

export class DropDownDirective{
   @HostBinding('class.open') isOpen=false;//open is the bootstrap class to which we want to attach/detach to!
    @HostListener('click') ManageToggleOpen(){
        this.isOpen=!this.isOpen;
    }
}