import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../customValidators';

@Component({
  selector: 'fp-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  @Output() submitRegistration = new EventEmitter<any>();

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {}

  onFormSubmit() {
    if (this.form.valid) {
      this.submitRegistration.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      password: ['', [passwordValidator]]
    });
  }
}
