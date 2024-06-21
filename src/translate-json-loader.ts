import { TranslateLoader } from '@ngx-translate/core';
import { of } from 'rxjs';

import * as translationDa from './assets/i18n/da.json';
import * as translationEn from './assets/i18n/en.json';
import * as translationRu from './assets/i18n/ru.json';

export class TranslateJsonLoader implements TranslateLoader {
  constructor() {}

  public getTranslation(lang: string) {
    switch (lang) {
      case 'en':
        {
          return of(translationEn);
        }
        break;
      case 'da':
        {
          return of(translationDa);
        }
        break;
      case 'ru':
        {
          return of(translationRu);
        }
        break;
      default:
        {
          return of(translationRu);
        }
        break;
    }
  }
}
