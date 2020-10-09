import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authSrv: AuthService,
              private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const urls = ['/login','/create-account','/register'];
    let guest = urls.includes(state.url);
    return this.authSrv.isLoggedIn()
    .pipe(
      map(token => {
        if (token) {
          //If it is loggedin and it belongs to guest routes
          if (guest) {
            this.router.navigate(['/home']);
            return false;
          }
          return true;
        } else if (guest) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
  
}
