import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SnackService } from '../../../../shared/services/snack.service';
import {AuthService} from "../../../../data-access/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private snackService: SnackService,
    private auth: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  /**
   * Sends the login formData to the responding service and informs whether the login was successful or not
   */
  login() {
    if (this.loginForm.invalid) {
      // The provided data are invalid
      this.snackService.invalidDataError('Invalid Data');
      return;
    }
    let formValue = this.loginForm.value;

    let success = this.auth.login(formValue.username, formValue.password)
    if (success) {
          this.route.navigate(['/bouncy-house']);
        } else {
          // Login was unsuccessful => inform the user
          this.snackService.invalidDataError('invalid Data');
        }


  }
}
