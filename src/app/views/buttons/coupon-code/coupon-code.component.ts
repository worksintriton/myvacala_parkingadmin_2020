import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
@Component({
  selector: 'app-coupon-code',
  templateUrl: './coupon-code.component.html',
  styleUrls: ['./coupon-code.component.scss']
})
export class CouponCodeComponent implements OnInit {

  Expiry_Date: Date = undefined;
  Value_Type: any = undefined;
  Count: any;
  Value: any;
  Description: any;
  validate: boolean = false;
  user_list: any;
  customers: any = undefined;
  user_arr: any = [];
  user_status: any = [];
  coupon_list: any = [];
  searchText: any;
  Start_Date: Date = undefined;
  MasterServiceName: any = "5f1ea10d89b6693decfabf09";
  VehicleType: any = undefined;
  mainservice_list: any;
  main_list: any = [];
  vehicledetails_list: any = [];
  vehicle_type: any;
  mainservice_id: any;
  amount: any;
  Coupon_Code: any;
  searchCoupon: any;
  searchQR: any;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM DD YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    minDate: new Date(),
  };
  options1: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'MMM DD YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
  };
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {

    this._api.coupon_list().subscribe((res: any) => {
      let list = res.Data.reverse();
      this.coupon_list = list.filter((x)=> x.Masterservice_id._id =="5f1ea10d89b6693decfabf09")
    })

    this._api.user_list().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.user_list = response.Data;
        console.log(this.user_list);
        for (let i = 0; i < this.user_list.length; i++) {
          this.user_status.push({ "add": true });
        }
        console.log(this.user_status)
      }
    );
    this._api.getmainservicelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.main_list = response.Data;
        this.mainservice_list = this.main_list
        console.log("this.mainservice_list");
        console.log(this.mainservice_list);
      }
    );
    this._api.vehiclelist().subscribe(
      (response: any) => {
        console.log(response.Data);
        this.vehicle_type = response.Data;
        console.log("dfhsjk");
        console.log(this.vehicle_type);
      }
    );

  }
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
  add(data, n) {
    if (this.user_arr.some((x) => x == data)) {
      this.user_arr = this.user_arr.filter(y => y != data);
      this.user_status[n].add = true;
      console.log("test")
      console.log(this.user_arr)
    }
    else {
      this.user_arr.push(data);
      this.user_status[n].add = false;
    }
    console.log(this.user_arr)
  }
  addarray() {
    if (this.customers == "all") {
      this.user_arr = [];
      // for (let i = 0; i < this.user_list.length; i++) {
      //   this.user_arr.push(this.user_list[i]._id);
      //   console.log(this.user_arr)
      // }
    }
    // else{
    //   this.user_arr =[];
    // }
  }
  validation() {
    if ((this.Value_Type == "Percentage" ? (this.amount != undefined && this.amount != '') : true) && this.VehicleType != undefined && (this.Coupon_Code != undefined && this.Coupon_Code != '') && this.Value_Type != undefined && this.Value != undefined && this.Value != '' && this.Description != undefined && this.Description != '' && this.Count != undefined && this.Count != '' && this.customers != undefined) {
      this.validate = true;
    }
  }


  addcoupon() {
    this.validation()
    if (this.validate == true) {
      let data = {
        "Customer_id": this.user_arr,
        "Expiry_Date": this.Expiry_Date,
        "Value_Type": this.Value_Type,
        "Count": this.Count,
        "Value": this.Value,
        "Description": this.Description,
        "Coupon_For": this.customers,
        "Coupon_Code": this.Coupon_Code,
        "Start_Date": this.Start_Date,
        "Masterservice_id": this.MasterServiceName,
        "Vehicle_type_id": this.VehicleType,
        "Mainservice_id": this.mainservice_id,
        "Amount": this.amount,
      }
      console.log(data);
      this._api.coupon_codde_create(data).subscribe((response: any) => {
        console.log(response);
        if (response.Code == 422) {
          alert("Please provide valid Expiry_Date");
        } else {
          this.ngOnInit();
          alert(response.Message);
          this.reset();
          // this.router.navigate(['/superadmin/master/create_master_service'])

        }

      }

      );
    }
    else {
      alert("Please fill all the fields")
    }
  }
  reset() {
    this.customers = undefined;
    this.Value_Type = undefined;
    this.Value = undefined;
    this.Count = undefined;
    this.user_arr = [];
    this.Expiry_Date = undefined;
    this.Description = undefined;
    this.VehicleType = undefined;
    this.Start_Date = new Date();
    this.mainservice_id = undefined;
    this.amount = undefined;
    this.Coupon_Code = undefined;
  }
  vechiclt_type_select() {
    this.mainservice_list = this.main_list;
    // this.vehicledetails_list = this.vihicle_list;
    if (this.VehicleType != undefined) {
      this.mainservice_list = this.mainservice_list.filter(x => x.Vehicle_Type_id._id == this.VehicleType);
      // this.vehicledetails_list = this.vehicledetails_list.filter(x => x.Vehicle_Type == this.VehicleType);
      console.log(this.mainservice_list)
      this.mainservice_id = this.mainservice_list[0]._id
    }
  }
  disable(id) {
    let data = {
      "_id": id,
      Coupon_status: "Disable"
    }
    this._api.coupon_codde_edit(data).subscribe((response: any) => {
      console.log(response);
      if (response.Code == 422) {
        alert(response.Message);
      } else {
        this.ngOnInit();
        alert(response.Message);
        this.reset();
        // this.router.navigate(['/superadmin/master/create_master_service'])

      }

    }

    );

  }
  enalble(id) {
    let data = {
      "_id": id,
      Coupon_status: "Enable"
    }
    this._api.coupon_codde_edit(data).subscribe((response: any) => {
      console.log(response);
      if (response.Code == 422) {
        alert(response.Message);
      } else {
        this.ngOnInit();
        alert(response.Message);
        this.reset();
        // this.router.navigate(['/superadmin/master/create_master_service'])

      }

    }

    );
  }
  delete(id) {
    let data = {
      "_id": id,
    }
    this._api.coupon_codde_delete(data).subscribe((response: any) => {
      console.log(response);
      if (response.Code == 422) {
        alert(response.Message);
      } else {
        this.ngOnInit();
        alert(response.Message);
        this.reset();
        // this.router.navigate(['/superadmin/master/create_master_service'])

      }

    });
  }
  date() {
    console.log(this.Start_Date)
    this.Expiry_Date = this.Start_Date;
    this.options1.minDate = this.Start_Date;
  }
}
