import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  user = null;
  constructor(private authServce: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
     return this.authServce.isAuthenticated().pipe(map(user => {
       if(user) {
         return true;
       }else {
         this.router.navigate(['/login']);
         return false;
       }
     }))
  }
}
