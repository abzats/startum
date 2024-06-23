import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnchorLinkDirective } from '../anchor-link.directive';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, TranslateModule, AnchorLinkDirective],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {}
