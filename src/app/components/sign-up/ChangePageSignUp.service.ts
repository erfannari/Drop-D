import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor() {
  }

  OnChangeSignUpLogin(): any {
    const backgroundSignUp: any = document.getElementById('background-sign-up');
    const backgroundLogin: any = document.getElementById('background-login');
    document.getElementById('background-sign-up').style.transitionDuration = '.3s';
    document.getElementById('background-login').style.transitionDuration = '.3s';
    if (backgroundSignUp.style.opacity === '1') {
      backgroundSignUp.style.opacity = '0';
      backgroundLogin.style.opacity = '1';
      backgroundLogin.style.zIndex = '10';
    } else {
      backgroundSignUp.style.opacity = '1';
      backgroundLogin.style.opacity = '0';
      backgroundLogin.style.zIndex = '-10';
    }
  }
}
