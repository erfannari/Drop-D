import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TogglePasswordService {

  constructor() {
  }

  togglePasswordSignUp(): any {
    const inputSignUP: any = document.getElementById('password-signUp');
    if (inputSignUP.type === 'password') {
      inputSignUP.type = 'text';
    } else {
      inputSignUP.type = 'password';
    }
  }
  togglePasswordLogin(): any {
    const inputLogin: any = document.getElementById('password-login');
    if (inputLogin.type === 'password') {
      inputLogin.type = 'text';
    } else {
      inputLogin.type = 'password';
    }
  }
}
