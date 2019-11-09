import { passwordValidator, validateRegex } from './password.validator';

const VALID_PASSWORDS = ['abcd1234ABCD', 'abcd1234ABCD', 'abcd1234!@#ABCD'];
const INVALID_PASSWORDS = [
  'avcdefghijk',
  'abcd1234ABCDVALIDTOLONGLONG',
  'allsmallLetter',
  'onlysmallAndcap',
  '1234567',
  'short',
  'with space'
];
describe('Password Validation', () => {
  it('should pass if all passwords are wrong', () => {
    INVALID_PASSWORDS.forEach((password) => {
      expect(passwordValidator({ value: password })).not.toBeNull('get:' + password);
    });
  });
  it('should pass all validations', () => {
    VALID_PASSWORDS.forEach((password) => {
      expect(passwordValidator({ value: password })).toBeNull('get:' + password);
    });
  });
});
