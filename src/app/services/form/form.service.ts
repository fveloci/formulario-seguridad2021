import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  KEYCLOAK_URL = 'http://localhost:8080/auth/realms/Demo-Realm/protocol/openid-connect/token';
  BACK_URL = 'http://localhost:3000/client/save';

  constructor(private http: HttpClient,
              private router: Router) { }

  login(data: any): Observable<any> {
    const body = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('grant_type', 'password')
      .set('client_id', 'nodejs-microservice')
      .set('client_secret', '621b977f-1ee4-40a2-a121-0e28a3a1be7e');
    return this.http.post(this.KEYCLOAK_URL, body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }
  saveUserForm(data: any): Observable<any>{
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')

    return this.http.post(this.BACK_URL, data, {headers});
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
  }

}
