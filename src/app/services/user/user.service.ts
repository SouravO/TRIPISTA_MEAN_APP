import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  createNewUser(payload:any) {
    return this.http.post(`${environment.baseURL} api/auth/signup`, payload);
  }
  userLogin(payload:any) {
    return this.http.post(`${environment.baseURL} api/auth/login`, payload);
  }
  getProtectedData() {
    return this.http.get(`${environment.baseURL} api/auth/refreshtoken`);
  }
  constructor(private http: HttpClient) {}
}
