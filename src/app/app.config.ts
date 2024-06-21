import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateJsonLoader } from '../translate-json-loader';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forChild({
        loader: {
          provide: TranslateLoader,
          useFactory: () => {
            return new TranslateJsonLoader();
          },
        },
      }),
    ),
    TranslateStore,
  ],
};
