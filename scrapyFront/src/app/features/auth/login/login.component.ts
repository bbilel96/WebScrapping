import { Component, OnInit } from '@angular/core';
import {User} from '../../../@core/model/user/user';
import { FormGroup} from '@angular/forms';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {FormService} from '../../../@core/service/form/form.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../@core/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User ;
  loginForm: FormGroup;
   connection: boolean;
  constructor(private formBuilder: RxFormBuilder,
              private formService: FormService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.user = new User();
    this.loginForm = this.formBuilder.formGroup(this.user);

  }
  submit(): void {
    this.connection = this.authService.login(this.user.nom, this.user.password);
    this.loginForm = this.formService.activeErrorInput(this.loginForm);
    if (this.loginForm.valid) {
      if (this.authService.login(this.user.nom, this.user.password) === true) {
        localStorage.setItem('auth', 'true');

        this.router.navigate(['index']);
      }
    }
  }

}
