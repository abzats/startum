import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FirebaseService, ScheduleItem } from '../firebase.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  schedule$: Promise<ScheduleItem[]>;

  styles: { bg: string; p: string }[] = [
    { bg: 'bg-dark-blue', p: 'white' },
    { bg: 'bg-green', p: '' },
    { bg: 'bg-blue', p: '' },
    { bg: 'bg-dark-green', p: 'white' },
    { bg: 'bg-yellow', p: '' },
  ];

  constructor(private readonly fb: FirebaseService) {
    this.schedule$ = this.fb.getSchedule();
  }

  replaceDoubleCharacters(text: string): string {
    return text.replaceAll('\\n', '\n');
  }
}
