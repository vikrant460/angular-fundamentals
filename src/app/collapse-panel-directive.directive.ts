import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollapsePanelDirective]'
})
export class CollapsePanelDirectiveDirective implements OnInit {

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {

   }
  ngOnInit(): void {
    // const hostElem = this._elRef.nativeElement;
    // console.log(hostElem.children);
    // console.log(hostElem.parentNode);
  }

  ngAfterViewInit() {
    const hostElem = this._elRef.nativeElement;
    this._renderer.addClass(hostElem, "collapse")
    this._renderer.addClass(hostElem.firstChild, "card")
    this._renderer.addClass(hostElem.firstChild, "card-body")
    console.log(hostElem);
  }

}
