import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, NgZone } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { OverlayDirective } from './overlay.directive';
import { PriceComponent } from './price/price.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TopBarComponent,
    HeroSectionComponent,
    PriceComponent,
    TeamComponent,
    SignUpComponent,
    FooterComponent,
    ContactUsComponent,
    EventsComponent,
    GalleryComponent,
    OverlayDirective,
  ],
  templateUrl: './app.component.html',
  styles: `:host {
    display: block;
  }`,
})
export class AppComponent {
  private doc: Document;

  constructor(private host: ElementRef, private zone: NgZone, @Inject(DOCUMENT) doc: any) {
    this.doc = doc;
  }

  ngOnInit() {
    const observer = new ResizeObserver((entries) => {
      this.zone.run(() => {
        setTimeout(() => {
          const { width } = entries[0].contentRect;
          if (this.doc.body.classList.contains('show-overlay')) {
            return;
          }

          const originalValue = 'width=device-width, initial-scale=1';
          const nonResponsiveValue = 'width=1024, initial-scale=1, maximum-scale=1';
          const viewportTag = this.doc.head.querySelector('meta[name="viewport"]');

          if (width > 800 || width < 660) {
            viewportTag?.setAttribute('content', originalValue);
          } else {
            viewportTag?.setAttribute('content', nonResponsiveValue);
          }
        }, 100);
      });
    });

    observer.observe(this.host.nativeElement);
  }
}
