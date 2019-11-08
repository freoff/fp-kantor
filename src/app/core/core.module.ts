import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NGX_TRANSLATE_CONFIG } from './config';

@NgModule({
  declarations: [],
  imports: [BrowserAnimationsModule, CommonModule, TranslateModule.forRoot(NGX_TRANSLATE_CONFIG)]
})
export class CoreModule {}
