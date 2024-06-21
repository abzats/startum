import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    TranslateModule,
  ],
  templateUrl: './app.component.html',
  styles: `:host {
    display: block;
  }`,
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    this.wireTranslations();
  }

  wireTranslations() {
    const defaultLang = 'ru';
    this.translateService.setDefaultLang(defaultLang);
    // this.route.queryParamMap
    //   .pipe(takeUntilDestroyed(this.destroy))
    //   .subscribe((params) => {
    //     let lang = params.get('lang');
    //     if (lang === null) {
    //       this.translateService.use(defaultLang);
    //     } else {
    //       this.translateService.use(lang);
    //     }
    //   });
  }
}
