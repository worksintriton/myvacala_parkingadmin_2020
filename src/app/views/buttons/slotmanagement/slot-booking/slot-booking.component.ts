import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.scss']
})
export class SlotBookingComponent implements OnInit {
  carslot:boolean;
  bikeslot:boolean;
  vehicle_list:any;
  VehicleType:any;
  Parkingname:any;
  Ownername:any;
  ownerprimarycontact:any;
  Secondcontact:any;
  poccontact:any;
  gst:any;
  gstaddress:any;
  map:any;
  lat:any;
  lang:any;
  owner_email:any;
  poc_email:any;
  bikeslots:any;
  carslots:any;

  
  newInclude:any;
  Included_new:any[]=[];
  include_list:any[]=[];
  Included:any;
  amount:any;

  newInclude1:any;
  Included_new1:any[]=[];
  include_list1:any[]=[];
  Included1:any;
  amount1:any;

  newInclude2:any;
  Included_new2:any[]=[];
  include_list2:any[]=[];
  Included2:any;
  amount2:any;

  newInclude3:any;
  Included_new3:any[]=[];
  include_list3:any[]=[];
  Included3:any;
  amount3:any;

  newInclude4:any;
  Included_new4:any[]=[];
  include_list4:any[]=[];
  Included4:any;
  amount4:any;

  newInclude5:any;
  Included_new5:any[]=[];
  include_list5:any[]=[];
  Included5:any;
  amount5:any;

  newInclude6:any;
  Included_new6:any[]=[];
  include_list6:any[]=[];
  Included6:any;
  amount6:any;

  newInclude7:any;
  Included_new7:any[]=[];
  include_list7:any[]=[];
  Included7:any;
  amount7:any;
  slotdate1:any;

  bikeslot1:any;
  bike_inlcude1:any[]=[];
  bikeslot2:any;
  bike_inlcude2:any[]=[];
  include_bike1:any[]=[];
  include_bike2:any[]=[];
  area1:any;
  floor1:any;
  slot1:any;

  SlotWeekDaytime1:any;
  SlotWeekDaytime2:any;
  SlotWeekDaytime3:any;
  SlotWeekDaytime4:any;
  SlotWeekDaytime5:any;
  SlotWeekDaytime6:any;
  SlotWeekDaytime7:any;
  SlotWeekDaytime8:any;
  SlotWeekDaytime9:any;
  SlotWeekDaytime10:any;
  SlotWeekDaytime11:any;
  SlotWeekDaytime12:any;
  SlotWeekDaytime13:any;
  SlotWeekDaytime14:any;
  SlotWeekDaytime15:any;
  SlotWeekDaytime16:any;
  AreaName:any;
  SubAreaName:any;
  SlotNumber:any;
  RentperTime:any;
  timefor:any;
  time1:any;

  constructor(
    private router: Router,   

   private http: HttpClient,

   private _api : ApiService,
   @Inject(SESSION_STORAGE) private storage: StorageService) { }


  ngOnInit() {
    this.carslot=false;
    this.bikeslot=false;
    this.VehicleType=" ";
    this.AreaName=" ";
    this.SubAreaName="";
    this.RentperTime="";
    this.SlotNumber="";
    this.timefor="";
  }
  showbikeslot()
  {
    this.bikeslot=true;
  }
  showcarslot()
  {

    this.carslot=true;
  }
  openmechanicbookings()
  {
    this.router.navigate(['Home/buttons/slotblocking']);
  }
  addbikeslot()
{
  this.bikeslot1 =this.bikeslots;  
  for(let a =0; a<this.bikeslot1;a++ ){
    this.include_bike1.push(this.bikeslot1);        
    console.log(this.include_bike1); 
  }
  this.bikeslots="";
}
deletebike(i){
  this.include_bike1.splice(i, 1);
}
addcarslot()
{
  this.bikeslot2 =this.carslots;  
  for(let a =0; a<this.bikeslot2;a++ ){
    this.include_bike2.push(this.bikeslot2);        
    console.log(this.include_bike2); 
  }
  this.carslots="";
}
deletcar(i){
  this.include_bike2.splice(i, 1);
}
}
