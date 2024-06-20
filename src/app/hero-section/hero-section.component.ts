import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, ScheduleComponent],
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
