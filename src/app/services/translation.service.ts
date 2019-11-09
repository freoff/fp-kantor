import { Injectable } from '@angular/core';
import { applicationConfig } from '@config';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {}

  setup() {
    this.translate.setDefaultLang(applicationConfig.defaultLanguage);
    this.translate.use(applicationConfig.defaultLanguage);
  }

  changeLang(lang) {
    return this.translate.use(lang);
  }
}
