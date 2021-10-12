import { Component, OnInit } from '@angular/core';
import {FormService} from '../../services/form/form.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmin = false;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token);
    decodedToken.resource_access['nodejs-microservice'].roles.map(role => {
      if (role === 'admin'){
        this.isAdmin = true;
      }
    });
  }

  logout(){
    this.formService.logout();
  }

}
