import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[collapseBtnDirective]'
})
export class CollapseBtnDirectiveDirective implements OnInit {

  @Input() targetElement = '';
  @Input() expanded = '';

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) {
    
  }
  ngOnInit(): void {
    this._renderer.setAttribute(this._elRef.nativeElement, 'data-bs-toggle', 'collapse');
    this._renderer.setAttribute(this._elRef.nativeElement, 'data-bs-target', this.targetElement);
    this._renderer.setAttribute(this._elRef.nativeElement, 'aria-expanded', this.expanded);
    this._renderer.setAttribute(this._elRef.nativeElement, 'aria-controls', this.targetElement);
  }

}
