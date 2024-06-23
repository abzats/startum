import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AnchorLinkDirective } from '../anchor-link.directive';
import { FirebaseService, PriceItem } from '../firebase.service';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule, TranslateModule, AnchorLinkDirective],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent {
  lang = this.translateService.currentLang as 'ru' | 'en' | 'da';
  price$: Promise<PriceItem[]>;

  styles: { bg: string; p: string }[] = [
    { bg: 'bg-blue', p: '' },
    { bg: 'bg-dark-blue', p: 'white' },
    { bg: 'bg-green', p: '' },
  ];

  constructor(private readonly fb: FirebaseService, private readonly translateService: TranslateService) {
    this.price$ = this.fb.getPrices();
  }

  replaceDoubleCharacters(text: string): string {
    return text.replaceAll('\\n', '\n');
  }
}
