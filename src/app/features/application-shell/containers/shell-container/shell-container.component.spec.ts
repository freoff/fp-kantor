import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellContainerComponent } from './shell-container.component';
import { ShellComponentMock } from '@mocks/components/shell-component.mock';

describe('ShellContainerComponent', () => {
  let component: ShellContainerComponent;
  let fixture: ComponentFixture<ShellContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShellContainerComponent, ShellComponentMock]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
