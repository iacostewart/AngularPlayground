import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
// import { userInfo } from '../../models/UserInfo'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private _from: FormBuilder, private authService: AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }
createForm() {
  this.loginForm = this._from.group({
    email: new FormControl,
    password: new FormControl
  });
}
onSubmit() {
  this.authService.login(this.loginForm.value);
  // console.log(userInfo)
}
}
