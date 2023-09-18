import { Directive, ElementRef, HostListener, OnChanges } from '@angular/core';

@Directive({
  selector: '[appPasswordlengthdetector]'
})
export class PasswordlengthdetectorDirective implements OnChanges {

  constructor(private el: ElementRef) { 
    console.log(el);
  }
  
  @HostListener("window:keyup") ngOnChanges(){
    let count = this.el.nativeElement.value.length;
    console.log(length)
    if(count < 5) {
      this.el.nativeElement.style.backgroundColor = "red";
    }else if(count >= 5 && count <= 10) {
        this.el.nativeElement.style.backgroundColor = 'green'
    } else if(count > 10) {
        this.el.nativeElement.style.backgroundColor = 'purple'
    }
  }
}
