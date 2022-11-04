import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SnackService} from "../../../../shared/services/snack.service";
import {UserService} from "../../../../data-access/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });


  constructor(private fb: FormBuilder, private route: Router, private snackService: SnackService, private userService: UserService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.invalid) {
      // The provided data are invalid
      this.snackService.invalidDataError(
        "Invalid Data"
      );
      return;
    }
    let formValue = this.loginForm.value;

    this.userService.login(
      formValue.email,
      formValue.password
    ).subscribe((success) => {
        if(success){
          this.route.navigate(['../home']);
        }else{
          // Login was unsuccessful => inform the user
        this.snackService.invalidDataError("invalid Data")
          }
      });
  }


}
