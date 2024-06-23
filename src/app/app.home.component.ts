import { CommonModule } from '@angular/common';
import { Component, DestroyRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
  selector: 'app-home',
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
    TranslateModule,
  ],
  templateUrl: './app.home.component.html',
  styles: `:host {
    display: block;
  }`,
})
export class AppHomeComponent {
  constructor(private activatedRoute: ActivatedRoute, private translateService: TranslateService, private destroy: DestroyRef) {
    this.wireTranslations();
  }

  wireTranslations() {
    this.activatedRoute.data.subscribe((data: any) => {
      if (data.lang) {
        this.translateService.use(data.lang);
      }
    });
  }
}
