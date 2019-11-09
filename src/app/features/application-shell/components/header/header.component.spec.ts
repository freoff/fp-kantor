import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { TranslateModuleMock } from '@mocks/translation-module/translations-module.mocks';
import { MaterialConfigModule } from '../../../../shared/modules/material-config.module';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { TapFormatter } from 'tslint/lib/formatters';
import { tap } from 'rxjs/operators';
import applicationRoutes from '@routes';
import { MatLabel } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        TranslateModuleMock,
        MaterialConfigModule,
        RouterTestingModule.withRoutes([
          { path: applicationRoutes.authorizationRegister.join('/'), component: MatLabel },
          { path: applicationRoutes.authorizationLogin.join('/'), component: MatLabel }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Login button', () => {
    let loginButton: () => DebugElement;
    beforeEach(() => {
      loginButton = () => fixture.debugElement.query(By.css('[data-cy-login-button]'));
    });
    it('should show login button if not logged ', () => {
      component.logged = false;
      fixture.detectChanges();
      expect(loginButton()).toBeTruthy();
    });
    it('should not show login button if logged ', () => {
      component.logged = true;
      fixture.detectChanges();
      console.log('button', loginButton());
      expect(loginButton()).toBeFalsy();
    });
    it('should click on login redirect to authorization', (done) => {
      router.events.pipe(tap(console.log)).subscribe((ev: NavigationStart) => {
        if (ev instanceof NavigationStart) {
          console.log(ev.url);
          expect(ev.url).toEqual('/authorization/login');
        }
        done();
      });
      component.logged = false;
      const loginbutton = loginButton();
      expect(loginbutton).toBeTruthy();
      loginbutton.triggerEventHandler('click', null);
      fixture.detectChanges();
    });
  });
  describe('registration button', () => {
    const getRegistrationButton = () => fixture.debugElement.query(By.css('[data-cy-register-button]'));
    it('should be visible', () => {
      component.logged = false;
      fixture.detectChanges();
      expect(getRegistrationButton()).toBeTruthy();
    });
    it('should be not visible', () => {
      component.logged = true;
      fixture.detectChanges();
      expect(getRegistrationButton()).toBeFalsy();
    });
    it('should redirect to registration', (done) => {
      router.events.pipe(tap(console.log)).subscribe((ev: NavigationStart) => {
        if (ev instanceof NavigationStart) {
          expect(ev.url).toEqual('/' + applicationRoutes.authorizationRegister.join('/'));
        }
        done();
      });
      component.logged = false;
      fixture.detectChanges();
      expect(getRegistrationButton()).toBeTruthy();
      getRegistrationButton().triggerEventHandler('click', null);
      fixture.detectChanges();
    });
  });
});
