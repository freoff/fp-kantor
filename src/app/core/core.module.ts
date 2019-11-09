import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NGX_TRANSLATE_CONFIG } from './config';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationShellModule } from '../features/application-shell/application-shell.module';

const FEATURE_MODULES = [ApplicationShellModule];

@NgModule({
  declarations: [],
  imports: [
    FEATURE_MODULES,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot(NGX_TRANSLATE_CONFIG)
  ]
})
export class CoreModule {}
