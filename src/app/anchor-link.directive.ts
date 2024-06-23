import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: 'a[href]',
  standalone: true,
})
export class AnchorLinkDirective {
  constructor(private route: ActivatedRoute, private element: ElementRef) {
    if (
      this.element.nativeElement.href.indexOf('maps.app') === -1 &&
      this.element.nativeElement.href.indexOf('tel:') === -1 &&
      this.element.nativeElement.href.indexOf('mailto:') === -1
    ) {
      this.route.params.subscribe(() => {
        const initialValue = this.element.nativeElement.href.split('#')[1];
        if (initialValue) {
          this.element.nativeElement.href = '/' + this.route.snapshot.data['link'] + '#' + initialValue;
        }
      });
    }
  }
}
