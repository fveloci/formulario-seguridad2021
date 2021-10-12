import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import jwt_decode from 'jwt-decode';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    let authorized = false;

    const decodedToken: any = jwt_decode(token);
    decodedToken.resource_access['nodejs-microservice'].roles.map(role => {
        console.log(role);
        if (role === 'admin') {
          authorized = true;
        }
      });

    return authorized;
  }

}
