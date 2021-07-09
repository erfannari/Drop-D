import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  king: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) {
  }
  signUp(email: string, password: string): any {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDVP5jgY7DPh6e5eopTJvE6IghX_iEyET8',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
