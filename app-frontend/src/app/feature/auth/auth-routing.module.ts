import {RouterModule, Routes} from "@angular/router";
import {RegisterPage} from "./pages/register/register.page";
import {LoginPage} from "./pages/login/login.page";
import {NgModule} from "@angular/core";


const routes: Routes = [
  { path: 'auth/login', component: LoginPage },
  { path: 'auth/register', component: RegisterPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
