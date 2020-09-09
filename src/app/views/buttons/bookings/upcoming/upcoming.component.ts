import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  FloorName: any;
  Block: any;
  SlotNumber: any;
  VehicleModel: any;
  booking_single: any;
  Booking_Date: any;
  Check_In_date: any;
  Check_Out_date: any;
  Check_In_Time: any;
  Check_Out_Time: any;
  ActualBookingAmount: any;
  ActualBookingDuration: any;
  customerMobile:any;
  finalamount:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.booking_single = this.getFromLocal('booking_single');
    console.log(this.booking_single);
    this.Booking_Date = new Date(this.booking_single.Booked_Date_and_Time)
    console.log(this.Booking_Date);
    let array = this.booking_single.slot_details.split(",");
    this.FloorName = array[0];
    this.Block = array[1];
    this.SlotNumber = array[2];
    this.customerMobile =this.booking_single.Customer_id.Phone;
    this.VehicleModel = this.booking_single.Vehicle_id.Vehicle_Name;
    this.Check_In_date = new Date(this.booking_single.Checking_date);
    console.log(this.Check_In_date);
    this.Check_Out_date = new Date(this.booking_single.Checkout_date);
    console.log(this.Check_In_date);
    this.Check_In_Time = this.booking_single.Checking_time;
    this.Check_Out_Time = this.booking_single.Checkout_time;
    this.ActualBookingAmount = this.booking_single.Price_Details;
    this.ActualBookingDuration = this.booking_single.total_checking_duration;
    this.finalamount = this.booking_single.total_amount;
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }
  updateDate(ed) {

  }
}
