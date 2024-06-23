import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorLinkDirective } from '../anchor-link.directive';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ScheduleComponent, TranslateModule, AnchorLinkDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  showSchedule = false;

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if (event.code === 'Escape' && this.showSchedule) {
      event.preventDefault();
      this.showSchedule = false;
    }
  }
}
