import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  isLoggedIn() : Observable<any> {
    return from(Storage.get({key: 'token'}))
    .pipe(
      switchMap((res: any) => {
        const token = res.value;
        if (!token) return Promise.resolve(false);
        else {
          return Promise.resolve(true);
        }
      })
    );
  }
}
