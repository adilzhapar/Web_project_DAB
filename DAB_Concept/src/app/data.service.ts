import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthToken } from './models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/auth/login/`, {
      username,
      password
    });
  }

  // getCompanies(): Observable<[]> {
  //   return this.http.get<[]>(`${this.BASE_URL}//`);
  // }


}
