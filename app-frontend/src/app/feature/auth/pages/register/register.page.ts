import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { User } from '../../../../shared/models/user.model';
import { UserService } from '../../../../data-access/services/user.service';
import { Router } from '@angular/router';
import { SnackService } from '../../../../shared/services/snack.service';
import { CustomValidators } from '../../../../shared/validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialFormGroup: FormGroup;
  personalFormGroup: FormGroup;
  addressFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private route: Router,
    private userService: UserService,
    private snackService: SnackService
  ) {
    this.credentialFormGroup = new FormGroup({
      email: new FormControl(
        [''],
        [Validators.required, CustomValidators.validEmail]
      ),
      password: new FormControl(
        [''],
        [
          Validators.required,
          CustomValidators.hasLowercaseLetters,
          CustomValidators.hasUppercaseLetters,
          CustomValidators.hasNumbers,
          Validators.minLength(6),
        ]
      ),
      repeatPassword: new FormControl(
        [''],
        [
          Validators.required,
          CustomValidators.matchFields('password', 'repeatPassword'),
        ]
      ),
    });

    this.personalFormGroup = new FormGroup({
      firstName: new FormControl([''], [Validators.required]),
      lastName: new FormControl([''], [Validators.required]),
      dateOfBirth: new FormControl([''], [Validators.required]),
    });

    this.addressFormGroup = new FormGroup({
      street: new FormControl([''], [Validators.required]),
      houseNumber: new FormControl([''], [Validators.required]),
      zipCode: new FormControl(
        [''],
        [Validators.required, Validators.minLength(5)]
      ),
      city: new FormControl([''], [Validators.required]),
    });
  }

  allFormsAreValid(): boolean {
    return (
      this.credentialFormGroup.valid &&
      this.personalFormGroup.valid &&
      this.addressFormGroup.valid
    );
  }

  ngOnInit(): void {}

  register() {
    let user: User = {
      id: undefined,
      ...this.credentialFormGroup.value,
      ...this.personalFormGroup.value,
      ...this.addressFormGroup.value,
    };
    this.userService.register(user).subscribe((success) => {
      if (success) {
        // Navigate to home screen
        this.route.navigate(['../home']);
      } else {
        // Register was unsuccessful => inform the user
        this.snackService.authError(
          'Diese E-Mail gehört schon zu einem Account'
        );
      }
    });
  }
}
