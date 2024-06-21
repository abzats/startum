import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {}
