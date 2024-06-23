import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnchorLinkDirective } from '../anchor-link.directive';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, AnchorLinkDirective],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {}
