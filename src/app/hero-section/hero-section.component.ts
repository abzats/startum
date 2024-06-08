import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
}
