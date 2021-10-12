import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './components/form/form.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {RoleGuard} from './guards/role.guard';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: 'form', component: FormComponent, canActivate: [RoleGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
