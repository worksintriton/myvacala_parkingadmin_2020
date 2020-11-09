import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2'
import { resetFakeAsyncZone } from '@angular/core/testing';
import { saveAs } from 'file-saver';
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
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
  date:any;
  date_out:any;
  paymentlist:any;
  parking:any;
  constructor(
    private router: Router,

    private http: HttpClient,

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
      this.paymentlist = res.Data;
    });
  }
  filter(){}
  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }
}
