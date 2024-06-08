import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PriceComponent } from './price/price.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamComponent } from './team/team.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TopBarComponent,
    HeroSectionComponent,
    PriceComponent,
    TeamComponent,
    SignUpComponent,
    FooterComponent,
  ],
  templateUrl: './app.home.component.html',
  styles: `:host {
    display: block;
  }`,
})
export class HomeComponent {}
