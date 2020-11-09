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
  today:any = new Date();
  Check_In_date:any;
  Check_In_Time:any;
  Check_Out_date:any;
  Check_Out_Time:any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }




  ngOnInit() {
    let ph = this.getFromLocal('phnumber');
    let t = this.getFromLocal('token');
    this.parking_detail = this.getFromLocal('parking_detail');
    console.log(this.parking_detail);
    this.getlist();
    this.list = setInterval(() => {
      this.getlist();
    }, 5000);

    this._api.DoctorListlets().subscribe(
      (response: any) => {
        console.log("*****");
        console.log(response);
      }
    );

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

  }
  edit() {
    let data = {
      "_id": this.bookingid,
      "Booking_status": this.status
    }
    console.log(data)
    this._api.parking_statusedit(data).subscribe(
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
  calculateDiff(data){
    let date = new Date(data);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }
}






