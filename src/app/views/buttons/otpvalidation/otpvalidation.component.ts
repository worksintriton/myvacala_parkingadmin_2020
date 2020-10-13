import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-otpvalidation',
  templateUrl: './otpvalidation.component.html',
  styleUrls: ['./otpvalidation.component.scss']
})
export class OtpvalidationComponent implements OnInit {
  otpnumber: any;
  token: any;
  parking_detail: any = [];
  OTP:any;
  ph:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.OTP = this.getFromLocal("OTP")
    this.ph = this.getFromLocal("phone")
    console.log(this.ph)
  }
  otpvalidation() {
    let otp = this.OTP;
    console.log(otp);

    if (this.otpnumber == otp) {
      this.router.navigate(['Home/buttons/view_bookings']);
    }
    else {
      alert("invalid OTP");
      // let data =
      // {
      //   "Primary_Contact": ph,
      //   "OTP": +this.otpnumber

      // }
      // this._api.otpvalidationapi(data).subscribe(
      //   (response: any) => {
      //     console.log(response);
      //     console.log(response.Data.token);
      //     if (response.Code == 300) {
      //       alert(response.Message);
      //     } else {
      //       sessionStorage.setItem('phonenumber', ph);
      //       this.saveInLocal('token', response.Data.token);
      //       this.saveInLocal('vendor_id', response.Data.user._id);
      //       console.log(response.Data.user._id);
      //       this.router.navigate(['Home/buttons/view_bookings']);
      //     }
      //   }
      // );

    }
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  resend(){
    let ph = {
      "owner_pri_contact": this.ph
    }
    this._api.Login(ph).subscribe(
      (response: any) => {
        console.log("response");
        console.log(response);
        if (response.Code == 200) {
          alert(response.Message);
        }
        else if (response.Code == 400) {
          alert(response.Message);
        }
      }
    );
  }
}
