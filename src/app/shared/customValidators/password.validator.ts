import { FormControl } from '@angular/forms';
import { VALIDATION_ERRORS_CODES } from '../../collections/errors.codes';

// Password expresion that requires one lower case letter, one upper case letter, one digit, 6-13 length, and no spaces.
// tslint:disable-next-line:max-line-length
// source http://regexlib.com/(X(1)A(uX615F18NJTegkUf4mttQZErmeuZ0TAtQTDIH4kgiugJmqNMJgxEfjePDL2LM4RQSVf0pRyf691PuH40p5Vr3RFFM_apvQjrFCEfyLbZh7h_fPWWa1exOw1ZdF0DbHVvEdyWYHFCflUqln14MbB0H-9q8kVE7g2i1R60jHyURO9eqz67J3a0Z2AfjFOABgtM0))/REDetails.aspx?regexp_id=157
const goodPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

export const passwordValidator = (formControl) => {
  return validateRegex(formControl.value) ? null : { [VALIDATION_ERRORS_CODES.passwordInvalid]: true };
};

export function validateRegex(stringToValidate: string) {
  return goodPasswordRegex.test(stringToValidate);
}
