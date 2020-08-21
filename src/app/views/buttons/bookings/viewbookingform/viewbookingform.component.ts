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
  umpcomin_text:any = "Upcoming"
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    let ph = this.getFromLocal('phnumber');
    let t = this.getFromLocal('token');
    let data =
    {
      "Primary_Contact": ph

    }

    console.log(data);
    this._api.DoctorListlets().subscribe(
      (response: any) => {
        console.log("*****");
        console.log(response);
      }
    );
    this._api.BookingList(data).subscribe(
      (response: any) => {
        console.log(response);
        this.Booking_List = response.Data;
      }
    );
  }
  checkoutpage() {
    this.router.navigate(['Home/buttons/checkout']);
  }
  checkinpage() {
    this.router.navigate(['Home/buttons/checkin']);
  }
  bookingacceptance(data) {
    this.saveInLocal('Booking_list', data);
    console.log(data);
    this.router.navigate(['Home/buttons/bookingacceptance']);
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



  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }

  getFromLocal(key): any {
    return this.storage.get(key);
  }


  chosenDate($event) {
    console.log($event)
  }
  upcoming() {
    this.router.navigate(['Home/buttons/upcoming']);
  }
  upcoming_change() {
    Swal.fire({
      title: 'Are you sure?',
      html: "<p>You Want to change the Status to </><select style='width: 210px; height:40px; margin-top:10px' class='btn btn-success' [(ngModel)]='umpcomin_text' (change)='text()'><option value='Upcoming'>Upcoming</option><option value='Check In'>Check In</option></select> ",
      confirmButtonText: "Yes"
    })

  }
  checkinpage_change(){
    Swal.fire({
      title: 'Are you sure?',
      html: "<p>You Want to change the Status to </><select style='width: 210px; height:40px; margin-top:10px' class='btn btn-success' ><option>Upcoming</option><option>Check Out</option></select> ",
      confirmButtonText: "Yes"
    })
  }
  text(){
    console.log(this.umpcomin_text)
  }
}






