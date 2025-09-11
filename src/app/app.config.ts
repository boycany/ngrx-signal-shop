import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    // Set default icon font set to "material-icons-outlined"
    // provideAppInitializer(() => {
    //   inject(MatIconRegistry).setDefaultFontSetClass('material-icons-outlined');
    // }),
  ],
};
