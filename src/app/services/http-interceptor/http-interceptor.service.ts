import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    return from(Storage.get({key: 'token'}))
    .pipe(
      switchMap((response : any) => {
        const token = response.value;
        let request = req;
        if (token) {
          request = req.clone({
            setHeaders: {
              'Accept' : 'application/json',
              'Authorization': 'Bearer ' + token,
            }
          });
        }
        return next.handle(request)
        .pipe(
          catchError((error) => {
            if (error) {
              if (error.error.message === 'not_authenticated') {
                Storage.clear();
                this.router.navigate(['login']);
              }
            }
            return throwError(error);
          })
        );
      })
    );
  }
}
