import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../api.service';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Headers, RequestOptions } from '@angular/http';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-viewbookingform',
  templateUrl: './viewbookingform.component.html',
  styleUrls: ['./viewbookingform.component.scss']
})
export class ViewbookingformComponent implements OnInit {
  selectedValue: string = '';
  Booking_List: any;
  t: any;
  rangeDates: any;
  umpcomin_text: any = "Upcoming"
  parking_detail: any;
  displayBasic: boolean;
  bookingid: any;
  status: any;
  list: any;
  today: any = new Date();
  Check_In_date: any = new Date();
  Check_In_Time: any = new Date();
  Check_Out_date: any = new Date();
  Check_Out_Time: any = new Date();
  fil_Vehicle_Type: any;
  fil_Status: any;
  fil_booking_date: any;
  fil_BookingId: any;
  fil_VehicleNumber: any;
  Main_list: any;
  data: any;
  status_time: any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit() {
    this.playAudio();
    console.log(
      this.Check_In_date,
      this.Check_In_Time,
      this.Check_Out_date,
      this.Check_Out_Time)
    let ph = this.getFromLocal('phnumber');
    let t = this.getFromLocal('token');
    this.parking_detail = this.getFromLocal('parking_detail');
    console.log(this.parking_detail);
    this.getlist();
    this.list = setInterval(() => {
      this.getlist();
    }, 5000);

    // this._api.DoctorListlets().subscribe(
    //   (response: any) => {
    //     console.log("*****");
    //     console.log(response);
    //   }
    // );

  }
  ngOnDestroy() {
    clearInterval(this.list);
  }
  bookingacceptance(data) {
    this.saveInLocal('Booking_list', data);
    console.log(data);
    this.router.navigate(['Home/Admin/bookingacceptance']);
  }
  DeleteDoctor(i) {
    this._api.DeleteDoctor(i).subscribe(
      (response: any) => {
        console.log(response);
        alert(response.message);
        this.ngOnInit();
      }
    );
  }


  getlist() {
    let data =
    {
      "parkingdetails_id": this.parking_detail._id

    }

    console.log(data);
    this._api.parking_bookinglist(data).subscribe(
      (response: any) => {
        console.log(response);
        this.Main_list = response.Data;
        this.Booking_List = response.Data;

      }
    );
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  chosenDate($event) {
    console.log($event)
  }
  editdetail(data) {
    this.saveInLocal('booking_single', data);
    if (data.Booking_status == "Upcoming") {
      this.router.navigate(['Home/Admin/upcoming']);
    }
    if (data.Booking_status == "Check In") {
      this.router.navigate(['Home/Admin/checkin']);
    }
    if (data.Booking_status == "Check Out") {
      this.router.navigate(['Home/Admin/checkout']);
    }

  }

  text() {
    console.log(this.umpcomin_text)
  }


  upcoming_change(item) {
    this.bookingid = item._id;
    this.displayBasic = true;
    this.status = item.Booking_status;
    this.status_time = item.admin_status_update_time;
    if (this.status == "Check In") {
      this.Check_In_date = new Date(item.Checking_date);
      this.Check_In_Time = item.Checking_time;
    }
    if (this.status == "Check-out") {
      this.Check_Out_date = new Date(item.Checkout_date);
      this.Check_Out_Time = item.Checkout_time;
    }
    console.log(this.status, this.Check_Out_date, this.Check_Out_Time)
  }
  edit() {
    console.log(this.status_updated_time(this.status_time))
    if (this.status_updated_time(this.status_time) <= 5 && this.status != "Upcoming") {
      alert("Sorry, you can't change the status now. please try again 5 minutes later.")
    }
    else {
      if (this.status == "Upcoming") {
        this.data = {
          "_id": this.bookingid,
          "Booking_status": this.status,
          "Checking_date": this.Check_In_date,
          "Checking_time": this.Check_In_Time,
          "Checkout_date": this.Check_Out_date,
          "Checkout_time": this.Check_Out_Time,
          "last_admin_update_status": this.status,
          "admin_status_update_time": new Date(),
        }
      }
      if (this.status == "Check In") {
        this.data = {
          "_id": this.bookingid,
          "Booking_status": this.status,
          "Checking_date": new Date(),
          "Checking_time": new Date().getTime(),
          "last_admin_update_status": this.status,
          "admin_status_update_time": new Date(),
        }
      }
      if (this.status == "Check-out") {
        this.data = {
          "_id": this.bookingid,
          "Booking_status": this.status,
          "Checkout_date": new Date(),
          "Checkout_time": new Date().getTime(),
          "last_admin_update_status": this.status,
          "admin_status_update_time": new Date(),
        }
      }
      console.log(this.data)
      this._api.parking_statusedit(this.data).subscribe(
        (response: any) => {
          console.log(response);
          if (response.Code == 200) {
            alert("Booking status Changed");
            this.ngOnInit();
            this.displayBasic = false;
          }

        }
      );
    }

  }
  calculateDiff(data) {
    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    console.log(days)
    return days;

  }
  filter() {
    this.Booking_List = this.Main_list;
    if (this.fil_Vehicle_Type != undefined) {
      console.log()
      this.Booking_List = this.Booking_List.filter(x => (x.Vehicle_type_id.Vehicle_Type == this.fil_Vehicle_Type));
    }
    if (this.fil_Status != undefined) {
      this.Booking_List = this.Booking_List.filter(x => (x.Booking_status == this.fil_Status));

    }
    if (this.fil_booking_date != undefined) {

    }
    if (this.fil_BookingId != undefined && this.fil_BookingId != "") {
      this.Booking_List = this.Booking_List.filter(x => (x.Booking_id == this.fil_BookingId));

    }
    if (this.fil_VehicleNumber != undefined && this.fil_VehicleNumber != "") {
      this.Booking_List = this.Booking_List.filter(x => (x.Vehicle_id.Vehicle_No == this.fil_VehicleNumber));
    }
    console.log(this.Booking_List);
    clearInterval(this.list);
  }
  refresh() {
    this.Booking_List = this.Main_list;
    this.list = setInterval(() => {
      this.getlist();
    }, 5000);
    this.fil_Vehicle_Type = undefined;
    this.fil_Status = undefined;
    this.fil_booking_date = undefined;
    this.fil_BookingId = undefined;
    this.fil_VehicleNumber = undefined;
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "../../../../../assets/eventually-590.mp3";
    audio.load();
    audio.play();
  }
  status_updated_time(data) {
    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60);
    console.log(days)
    return days;

  }
}






