import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaderImageComponent } from './hader-image.component';

describe('HaderImageComponent', () => {
  let component: HaderImageComponent;
  let fixture: ComponentFixture<HaderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HaderImageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
