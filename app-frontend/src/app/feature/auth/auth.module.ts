import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPage } from './pages/auth/auth.page';
import { SharedModule } from '../../shared/shared.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [AuthPage, LoginPage, RegisterPage],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatDatepickerModule,
  ],
})
export class AuthModule {}
