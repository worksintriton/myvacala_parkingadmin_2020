import { Component, OnInit, Inject ,ViewChild, ElementRef} from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { saveAs } from 'file-saver';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  providers: [DatePipe],
})
export class PaymentsComponent implements OnInit {
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0,
    // minDate: new Date(Date.now()), 
    // maxDate: new Date(Date.now()),  
    // barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Check In Date', // HTML input placeholder attribute (default: '')
    useEmptyBarTitle: false,
  };
  Vehicle_No_fil: any;
  option: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'DD/MM/YYYY',
    barTitleFormat: 'MMMM YYYY',
    dayNamesFormat: 'dd',
    firstCalendarDay: 0,
    // minDate: new Date(Date.now()), 
    // maxDate: new Date(Date.now()),  
    // barTitleIfEmpty: 'Click to select a date',
    placeholder: 'Check Out Date', // HTML input placeholder attribute (default: '')
    useEmptyBarTitle: false,
  };
  date: any;
  date_out: any;
  paymentlist: any;
  parking: any;
  Main_list: any;
  Bookingid: any;
//   @ViewChild('dae',{static: true}) date1: ElementRef;

// resetDate() {
//     this.date.reset();
// }
  constructor(
    private router: Router,

    private http: HttpClient,
    private datePipe: DatePipe,
    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) { }

  ngOnInit() {
    this.parking = this.getFromLocal("parking_detail");
    let id = {
      "parkingdetails_id": this.parking._id
    }
    console.log(id)
    this._api.payment_list(id).subscribe((res: any) => {
      console.log("payment_list");
      console.log(res);
      this.Main_list = res.Data;
      this.paymentlist = res.Data;
    });
  }
  filter() {
    this.paymentlist = this.Main_list;
    if (this.Bookingid != undefined && this.Bookingid != "") {
      console.log()
      this.paymentlist = this.paymentlist.filter(x => (x.Booking_id == this.Bookingid));
    }
    if (this.date != undefined) {
      let date_in = this.datePipe.transform(this.date, 'dd-MM-yyyy')
      this.paymentlist = this.paymentlist.filter(x => (x.Checking_date.slice(0, 10) == date_in));
      console.log(date_in)
      console.log( this.paymentlist[0].Checking_date.slice(0, 10))
    }
    if (this.date_out != undefined) {
      let date_out = this.datePipe.transform(this.date_out, 'dd-MM-yyyy')
      this.paymentlist = this.paymentlist.filter(x => (x.Checkout_date.slice(0, 10) == date_out));
      console.log(date_out)
      console.log( this.paymentlist[0].Checkout_date.slice(0, 10))
    }
    if (this.Vehicle_No_fil != undefined && this.Vehicle_No_fil != "") {
      this.paymentlist = this.paymentlist.filter(x => (x.Vehicle_id.Vehicle_No == this.Vehicle_No_fil));
    }
    console.log(this.paymentlist);
    console.log(this.Bookingid);
    console.log(this.date);
    console.log(this.date_out);
    console.log(this.Vehicle_No_fil);
  }
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
  refresh() {
    this.paymentlist = this.Main_list;
    this.Bookingid = undefined;
    this.date = undefined;
    this.date_out = undefined;
    this.Vehicle_No_fil = undefined;
  }
}
