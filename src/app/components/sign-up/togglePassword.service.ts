import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TogglePasswordService {

  constructor() {
  }

  togglePassword(): any {
    const input: any = document.getElementById('password');

    if (input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
}
