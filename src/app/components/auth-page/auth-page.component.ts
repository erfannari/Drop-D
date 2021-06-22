import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {
  isLoginMOde = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  onSwitchMode(): any {
    this.isLoginMOde = !this.isLoginMOde;
  }

  onSubmit(form: NgForm): any {
    console.log(form.value);
    form.reset();
  }
}
