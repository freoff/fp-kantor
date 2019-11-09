import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialConfigModule } from './modules/material-config.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HaderImageComponent } from './components/hader-image/hader-image.component';

const pipes = [];
const components = [HaderImageComponent, RegistrationFormComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, HttpClientModule, TranslateModule, MaterialConfigModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialConfigModule, TranslateModule, ReactiveFormsModule, ...components],
  entryComponents: []
})
export class SharedModule {}
