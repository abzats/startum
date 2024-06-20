import { DOCUMENT } from '@angular/common';
import { Directive, Inject, Input } from '@angular/core';

@Directive({
  selector: '[appOverlay]',
  standalone: true,
})
export class OverlayDirective {
  @Input() set appOverlay(val: boolean) {
    if (val) {
      this.doc.body.classList.add('show-overlay');
    } else {
      this.doc.body.classList.remove('show-overlay');
    }
  }

  private doc: Document;
  constructor(@Inject(DOCUMENT) doc: any) {
    this.doc = doc;
  }
}
