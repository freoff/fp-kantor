import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { ShellComponent } from './shell.component';
import { MaterialConfigModule } from '../../../../shared/modules/material-config.module';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent, HeaderMOCKComponent],
      imports: [MaterialConfigModule, RouterTestingModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('header should be visible', () => {
    expect(fixture.debugElement.query(By.css('#header'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('#header')).nativeElement.innerHTML).toBe('FP_HEADER');
  });
});

@Component({
  selector: 'fp-header',
  template: `
    <h1 id="header">FP_HEADER</h1>
  `
})
class HeaderMOCKComponent {
  @Input() logged;
}
