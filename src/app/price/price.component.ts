import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent {}
