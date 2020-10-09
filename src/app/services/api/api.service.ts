import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Plugins } from '@capacitor/core';
import { switchMap } from 'rxjs/operators';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl: string;
  headers: any;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

  }

  /**
   * Login an user
   * @param param0 
   */
  login({email, password}) : Observable<any> {
    const url = `${this.apiUrl}login`;
    const params = {
      email,
      password
    };
    console.log(url);
    return this.http.post(url, params, {headers: this.headers});
  }

  /**
   * Logout an user
   */
  logout() : Observable<any> {
    const url = `${this.apiUrl}logout`;
    return from(Storage.clear())
    .pipe(
      switchMap(() => {
        return this.http.get(url);
      })
    );
  }

  /**
   * Check if company code exists
   * @param companyCode 
   */
  checkCompanyCode(companyCode: any) : Observable<any> {
    const url = `${this.apiUrl}company/code`;
    const params = {
      company_code: companyCode
    };
    return this.http.post(url, params);
  }

  /**
   * Get country list available
   */
  getCountryList() : Observable<any> {
    const url = `${this.apiUrl}countries/list`;
    return this.http.get(url);
  }

  /**
   * Register a new user
   * @param data 
   */
  registerUser(data: any = {}) : Observable<any> {
    const url = `${this.apiUrl}user/register`;
    return this.http.post(url, data); 
  }

  /**
   * Get a company list
   */
  getCompanyList() : Observable<any> {
    const url = `${this.apiUrl}company/list`;
    return this.http.get(url);
  }

  /**
   * Get latest communications
   */
  getCommunications() : Observable<any> {
    const url = `${this.apiUrl}communication/list`;
    return this.http.get(url);
  }

  /**
   * Get topics list
   */
  getTopicList() : Observable<any> {
    const url = `${this.apiUrl}topic/list`;
    return this.http.get(url);
  }

  /**
   * Get the topic by id
   * @param id 
   */
  getTopic(id: number) : Observable<any> {
    const url = `${this.apiUrl}topic/detail/${id}`;
    return this.http.get(url);
  }

  /**
   * Get resource list
   */
  getResourceList() : Observable<any> {
    const url = `${this.apiUrl}resource/list`;
    return this.http.get(url);
  }

  /**
   * Get resource list
   */
  getResource(id: number) : Observable<any> {
    const url = `${this.apiUrl}resource/detail/${id}`;
    return this.http.get(url);
  }

  sendMessageContactForm(content: any) : Observable<any> {
    const url = `${this.apiUrl}user/contact-form`;
    const params = {...content};
    return this.http.post(url, params);
  }
}
