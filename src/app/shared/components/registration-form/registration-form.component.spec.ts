import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';
import { TranslateModuleMock } from '@mocks/translation-module/translations-module.mocks';
import { MaterialConfigModule } from '../../modules/material-config.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { query } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;
  let de: DebugElement;

  const getSubmitRegistrationButton = () => de.query(By.css('[data-cy-registration-submit]'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent],
      imports: [TranslateModuleMock, MaterialConfigModule, ReactiveFormsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should build form object ', () => {
    expect(component.form.value).toEqual({ name: '', email: '', password: '' });
  });
  it('should emit submitRegistrationEvent on click', (done) => {
    fixture.detectChanges();
    component.form.patchValue({ name: 'Some name', email: 'email@email.com', password: '1234ABCDabcd' });
    component.submitRegistration.subscribe((data) => {
      expect(data).toEqual({ name: 'Some name', email: 'email@email.com', password: '1234ABCDabcd' });
      done();
    });

    expect(component.form.valid).toBeTruthy();
    getSubmitRegistrationButton().nativeElement.click();
    fixture.detectChanges();
  });
  it('should have all required inputs', () => {
    const inputs = de.queryAll(By.css('input'));
    expect(inputs.length).toEqual(3);
  });
});
