import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../services/form/form.service';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formService: FormService,
              private formBuilder: FormBuilder,
              private router: Router
             ) { }

  ngOnInit(): void {
    this.buildForm();
    if (localStorage.getItem('token')) {
      alert('Cierra sesión para ir al login');
      this.router.navigateByUrl('home');
    }
  }
  buildForm(){
    this.form = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  sendForm(){
    console.log(this.form.value);
    this.formService.login(this.form.value).subscribe( async res => {
      localStorage.setItem('token', await res.access_token);
      /*const token: any = jwt_decode(res.access_token);
      localStorage.setItem('roles', token.resource_access['nodejs-microservice'].roles);
      console.log(token)*/
      this.router.navigateByUrl('/home');
    }, err => {
      console.log(err.msg);
    });
  }

}
