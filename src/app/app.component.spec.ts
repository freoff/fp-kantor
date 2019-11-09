import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslationService } from '@services/translation.service';
import { TranslationServiceMock } from '@mocks/services/translation-service.mock';
import { TranslateModuleMock } from '@mocks/translation-module/translations-module.mocks';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModuleMock],
      declarations: [AppComponent],
      providers: [{ provide: TranslationService, useClass: TranslationServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should call translationService setup', () => {
    const setupAppspy = spyOn(component, 'setupApp');
    component.ngOnInit();
    expect(setupAppspy).toHaveBeenCalledTimes(1);
  });
});
