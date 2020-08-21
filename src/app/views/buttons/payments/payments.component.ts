import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
  }
  filter(){}
}
