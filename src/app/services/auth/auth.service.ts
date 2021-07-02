import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private apiSrv: ApiService) { }

  /**
   * Check if use is logged
   */
  isLoggedIn() : Observable<any> {
    return from(Storage.get({key: 'token'}))
    .pipe(
      switchMap((res: any) => {
        const token = res.value;
        if (!token) return Promise.resolve(false);
        else {
          return this.apiSrv.isAuthenticated()
          .pipe(
            tap(async (user) => {
              if (user) {
                await Storage.set({
                  key: 'user',
                  value: typeof user === 'object' ? JSON.stringify(user) : user
                });
              }
            })
          );
        }
      })
    );
  }
}
