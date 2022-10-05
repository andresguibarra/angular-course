import { outputAst } from '@angular/compiler'
import { Directive, HostListener, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core'

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elRef: ElementRef) {}
  @Output() onDropdownClick = new EventEmitter()
  @HostBinding('class.open') isOpen = false
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
    this.onDropdownClick.emit(this.isOpen);
  }
}
