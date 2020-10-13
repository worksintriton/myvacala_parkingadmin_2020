import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../api.service';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  phonenumber: any;
  phError = false;
  phErrorMsg: any;

  loginDetails: any;
  userData: any;
  validation = false;

  loginError = false;
  loginErrorMsg: any;

  email: any;
  emailError = false;
  emailErrorMsg: any;


  password: any;
  passwordError = false;
  passwordErrorMsg: any;

  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) {

  }

  ngOnInit() {
  }
  emailValidator() {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let emailcheck = reg.test(this.email);
    if (this.email === '' || this.email === undefined || this.email === null) {
      this.emailError = true;
      this.emailErrorMsg = 'Email Address Required.'
    } else if (!emailcheck) {
      this.emailError = true;
      this.emailErrorMsg = 'Enter Valid Email Address.'
    } else {
      this.emailError = false;
    }
  }
  passwordValidator() {
    if (this.password === '' || this.password === undefined || this.password === null) {
      this.passwordError = true;
      this.passwordErrorMsg = 'Password Required.'
    } else {
      this.passwordError = false;
    }
  }
  mobileValidator(data) {
    if (data === undefined || data === '' || data === null) {
      this.phError = true;
      this.phErrorMsg = "Please enter valid phone number"
    } else if (isNaN(data)) {
      this.phError = true;
      this.phErrorMsg = "Please enter valid phone number"
    } else if (data.length !== 10) {
      this.phError = true;
      this.phErrorMsg = "Please enter valid phone number"
    } else {
      this.phError = false;
    }
  }
  emailChange(data) {
    //console.log(data);
    this.email = data;
    this.emailValidator();
  }

  passwordChange(data) {
    //console.log(data);
    this.password = data;
    this.passwordValidator();
  }
  validator() {
    this.emailValidator();
    this.mobileValidator(this.phonenumber);
    if (!this.emailError && !this.phError) {
      this.validation = true;
    } else {
      this.validation = false;
    }
  }
  onLogin() {
    if (this.phError == false) {
      let ph = {
        "owner_pri_contact": this.phonenumber
      }
      this._api.Login(ph).subscribe(
        (response: any) => {
          console.log("response");
          console.log(response);
          if (response.Code == 200) {
            alert(response.Message);
            this.saveInLocal("parking_detail", response.Data);
            this.saveInLocal("OTP", response.OTP);
            this.saveInLocal("phone", this.phonenumber);
            // this.router.navigate(['Home/buttons/view_bookings']);
            this.router.navigate(['OTPValidation']);
          }
          else if (response.Code == 400) {
            alert(response.Message);
          }
        }
      );

    }
    else {
      alert("Please enter valid phone number")
    }

    this.validator();
    if (this.validation) {

    }
  }
  loginotp() {

    if (this.phonenumber === '') {
      this.phError = true;
      this.phErrorMsg = 'Phone Number Required.'
    } else if (this.phonenumber < 10) {
      this.phError = true;
      this.phErrorMsg = 'Phone Number Should be 10 Digits.'
    } else {
      this.phError = false;
    }

    let data =
    {
      "Primary_Contact": +this.phonenumber

    }
    this._api.loginprocess(data).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Code == 300) {
          alert(response.Message);
        } else {
          console.log(this.phonenumber, response.Data.OTP)
          this.saveInLocal('phnumber', this.phonenumber);
          this.saveInLocal('otp', response.Data.OTP);
          this.router.navigate(['OTPValidation']);
        }
      }
    );


  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
}

