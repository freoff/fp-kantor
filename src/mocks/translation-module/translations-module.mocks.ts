/* tslint:disable */
import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateDirectiveMock } from './translate-directive.mock';
import { TranslatePipeMock } from './translate-pipe.mock';
import { TranslationServiceMock } from './translation-service.mock';

@NgModule({
  imports: [],
  declarations: [TranslateDirectiveMock, TranslatePipeMock],
  exports: [TranslateDirectiveMock, TranslatePipeMock],
  providers: [{ provide: TranslateService, useClass: TranslationServiceMock }]
})
export class TranslateModuleMock {}
