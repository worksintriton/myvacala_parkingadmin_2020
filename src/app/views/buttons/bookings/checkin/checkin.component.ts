import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  selectedimgae1:any;
  Pic:any;
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
    private _api: ApiService,
    private http: HttpClient,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() { 
    this.booking_single = this.getFromLocal('booking_single');
  console.log(this.booking_single);
  this.Booking_Date = new Date(this.booking_single.Booked_Date_and_Time)
  console.log(this.Booking_Date);
  let array = this.booking_single.slot_details.split(",");
  this.FloorName = this.booking_single.floor;
  this.Block = this.booking_single.block;
  this.SlotNumber = this.booking_single.slot;
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
  this.Pic = this.booking_single.attach_pic;
}
  fileupload(event) {
    this.selectedimgae1 = event.target.files[0];
    this.addfiles();
  }

  addfiles() {
    const fd = new FormData();
    fd.append('sampleFile', this.selectedimgae1, this.selectedimgae1.name);
    this.http.post('http://3.101.31.129:3000/upload', fd)
      .subscribe((res: any) => {
        console.log(res);
        this.Pic = res.Data;
        this.edit();
      });
  }
  delete(){
    this.Pic = '';
    this.edit();
  }

  edit() {
    let data = {
      "_id": this.booking_single._id,
      "attach_pic": this.Pic
    }
    console.log(data)
    this._api.parking_statusedit(data).subscribe(
      (response: any) => {
        console.log(response);
        if(response.Code ==200){ 
          if(this.Pic != ''){
            alert("Image file attached");
          }
          if(this.Pic == ''){
            alert("Image file removed");
          }
          this.router.navigate(['Home/Admin/view_bookings']);
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
