import { Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[translate]'
})
// tslint:disable-next-line:directive-class-suffix
export class TranslateDirectiveMock {
  constructor() {}
}
