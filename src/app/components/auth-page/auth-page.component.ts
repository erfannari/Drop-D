import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  // const regex = /^[A-Za-z0-9_]+$/;
  isLoginMOde = true;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {

  }

  onSwitchMode(): any {
    this.isLoginMOde = !this.isLoginMOde;
  }

  onSubmit(form: NgForm): any {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMOde) {
       // ...
    } else {
      this.authService.signUp(email, password)
        .subscribe(responseData => {
          console.log(responseData);
        }, error => {
          console.log(error);
        });
    }
    form.reset();
  }
}
