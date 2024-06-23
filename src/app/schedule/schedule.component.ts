import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorLinkDirective } from '../anchor-link.directive';
import { FirebaseService, ScheduleItem } from '../firebase.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule, TranslateModule, AnchorLinkDirective],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  schedule$?: Promise<ScheduleItem[]>;

  styles: { bg: string; p: string }[] = [
    { bg: 'bg-dark-blue', p: 'white' },
    { bg: 'bg-green', p: '' },
    { bg: 'bg-blue', p: '' },
    { bg: 'bg-dark-green', p: 'white' },
    { bg: 'bg-yellow', p: '' },
  ];

  constructor(private readonly fb: FirebaseService) {}

  ngOnInit(): void {
    this.schedule$ = this.fb.getSchedule();
  }

  replaceDoubleCharacters(text: string): string {
    return text.replaceAll('\\n', '\n');
  }
}
