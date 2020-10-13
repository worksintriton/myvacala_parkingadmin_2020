import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import Swal from 'sweetalert2'
import { resetFakeAsyncZone } from '@angular/core/testing';
@Component({
  selector: 'app-slot-booking',
  templateUrl: './slot-booking.component.html',
  styleUrls: ['./slot-booking.component.scss']
})
export class SlotBookingComponent implements OnInit {
  carslot: boolean;
  bikeslot: boolean;
  vehicle_list: any;
  VehicleType: any;
  Parkingname: any;
  Ownername: any;
  ownerprimarycontact: any;
  Secondcontact: any;
  poccontact: any;
  gst: any;
  gstaddress: any;
  map: any;
  lat: any;
  lang: any;
  owner_email: any;
  poc_email: any;
  bikeslots: any;
  carslots: any;


  newInclude: any;
  Included_new: any[] = [];
  include_list: any[] = [];
  Included: any;
  amount: any;

  newInclude1: any;
  Included_new1: any[] = [];
  include_list1: any[] = [];
  Included1: any;
  amount1: any;

  newInclude2: any;
  Included_new2: any[] = [];
  include_list2: any[] = [];
  Included2: any;
  amount2: any;

  newInclude3: any;
  Included_new3: any[] = [];
  include_list3: any[] = [];
  Included3: any;
  amount3: any;

  newInclude4: any;
  Included_new4: any[] = [];
  include_list4: any[] = [];
  Included4: any;
  amount4: any;

  newInclude5: any;
  Included_new5: any[] = [];
  include_list5: any[] = [];
  Included5: any;
  amount5: any;

  newInclude6: any;
  Included_new6: any[] = [];
  include_list6: any[] = [];
  Included6: any;
  amount6: any;

  newInclude7: any;
  Included_new7: any[] = [];
  include_list7: any[] = [];
  Included7: any;
  amount7: any;
  slotdate1: any;

  bikeslot1: any;
  bike_inlcude1: any[] = [];
  bikeslot2: any;
  bike_inlcude2: any[] = [];
  include_bike1: any[] = [];
  include_bike2: any[] = [];
  area1: any;
  floor1: any;
  slot1: any;

  SlotWeekDaytime1: any;
  SlotWeekDaytime2: any;
  SlotWeekDaytime3: any;
  SlotWeekDaytime4: any;
  SlotWeekDaytime5: any;
  SlotWeekDaytime6: any;
  SlotWeekDaytime7: any;
  SlotWeekDaytime8: any;
  SlotWeekDaytime9: any;
  SlotWeekDaytime10: any;
  SlotWeekDaytime11: any;
  SlotWeekDaytime12: any;
  SlotWeekDaytime13: any;
  SlotWeekDaytime14: any;
  SlotWeekDaytime15: any;
  SlotWeekDaytime16: any;
  AreaName: any;
  SubAreaName: any;
  SlotNumber: any;
  RentperTime: any;
  timefor: any;
  time1: any;
  blk: boolean = true;
  rvk: boolean = false;
  blkk: boolean = true;
  rvkk: boolean = false;
  parking_detail: any = [];
  bike_slot: any = [];
  car_slot: any = [];
  parking: any = [];
  Floor_val: any;
  Block_val: any;
  Slot_val: any;
  constructor(
    private router: Router,

    private http: HttpClient,

    private _api: ApiService,
    @Inject(SESSION_STORAGE) private storage: StorageService) { }


  ngOnInit() {
    this.parking = this.getFromLocal("parking_detail");
    let id = {
      "_id": this.parking._id
    }
    console.log(id)
    this._api.Parking_Detail_by_id(id).subscribe((res: any) => {
      console.log(res)
      this.parking_detail = res.Data;
      this.bike_slot = this.parking_detail[0].parking_details_slots_Bike_details;
      this.car_slot = this.parking_detail[0].parking_details_slots_Car_details;
      console.log(this.parking_detail)
      console.log(this.bike_slot)
      console.log(this.car_slot)
    });

  }
  showbikeslot() {
    this.bikeslot = !this.bikeslot;
    if (this.bikeslot == false) {
      this.include_bike1 = []
    }
  }
  showcarslot() {

    this.carslot = !this.carslot;
    if (this.carslot == false) {
      this.include_bike2 = []
    }
  }
  openmechanicbookings() {
    this.router.navigate(['Home/buttons/slotblocking']);
  }
  addbikeslot() {
    this.bikeslot1 = this.bikeslots;
    for (let a = 0; a < this.bikeslot1; a++) {
      this.include_bike1.push({ "area": '', "floor": '', "slot": '', "status": "enable" });
      console.log(this.include_bike1);
    }
    this.bikeslots = "";
  }
  deletebike(i) {
    this.include_bike1.splice(i, 1);
  }
  addbike() {
    this.bike_slot = this.bike_slot.concat(this.include_bike1);
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Bike_details": this.bike_slot,
      "parking_details_slots_count_Bike": this.bike_slot.length,
      
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.include_bike1 = [];
      this.ngOnInit();
    });
  }
  addcarslot() {
    this.bikeslot2 = this.carslots;
    for (let a = 0; a < this.bikeslot2; a++) {
      this.include_bike2.push({ "area": '', "floor": '', "slot": '', "status": "enable" });
      console.log(this.include_bike2);
    }
    this.carslots = "";
  }
  deletcar(i) {
    this.include_bike2.splice(i, 1);
  }

  addcar() {
    this.car_slot = this.car_slot.concat(this.include_bike2);
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Car_details": this.car_slot,
      "parking_details_slots_count_Car": this.car_slot.length,
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.include_bike2 = [];
      this.ngOnInit();
    });
  }


  bikeblock(i) {
    this.bike_slot[i].status = "disable"
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Bike_details": this.bike_slot,
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.ngOnInit();
    });

    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You want to Block this slot!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes',
    //   cancelButtonText: 'No'
    // }).then((result) => {
    //   if (result.value) {
    //     this.blk = false;
    //     this.rvk = true;
    //     Swal.fire(
    //       'Done',
    //       'Your imaginary file has been deleted.',
    //       'success'
    //     )
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {

    //     Swal.fire(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     )
    //   }
    // })
  }



  bikerevoke(i) {
    this.bike_slot[i].status = "enable"
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Bike_details": this.bike_slot,
      
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.ngOnInit();
    });
  }


  carblock(i) {
    this.car_slot[i].status = "disable"
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Car_details": this.car_slot,
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.ngOnInit();
    });
  }


  carrevoke(i) {
    this.car_slot[i].status = "enable"
    let data = {
      "_id": this.parking._id,
      "parking_details_slots_Car_details": this.car_slot,
    }
    console.log(data)
    this._api.Parking_owner_edit(data).subscribe((res: any) => {
      console.log(res)
      alert(res.Message);
      this.ngOnInit();
    });
  }


  // parkingCreation() {
  //   let data = {
  //     "_id": this.parking_detail._id,
  //     "parking_details_slots_Bike_details": this.include_bike1,
  //     "parking_details_slots_Car_details": this.include_bike2,
  //     "parking_details_slots_count_Bike": this.include_bike1.length,
  //     "parking_details_slots_count_Car": this.include_bike2.length,
  //   }
  //   console.log(data)
  //   this._api.Parking_owner_edit(data).subscribe((res: any) => {
  //     console.log(res)
  //     alert(res.Message);
  //   });
  // }



  saveInLocal(key, val): void {
    this.storage.set(key, val);
  }
  getFromLocal(key): any {
    return this.storage.get(key);
  }

  filter() {
    console.log(this.Floor_val)
    console.log(this.Slot_val)
    console.log(this.Block_val)
    if ((this.Floor_val != undefined && this.Floor_val != '') || (this.Slot_val != undefined && this.Slot_val != '') || (this.Block_val != undefined && this.Block_val != '')) {

      if ((this.Floor_val != undefined && this.Floor_val != '')) {
        this.bike_slot = this.bike_slot.filter((x: any) => x.floor == this.Floor_val);
        this.car_slot = this.car_slot.filter((x: any) => x.floor == this.Floor_val);
      }
      if ((this.Slot_val != undefined && this.Slot_val != '')) {
        this.bike_slot = this.bike_slot.filter((x: any) => x.slot == this.Slot_val);
        this.car_slot = this.car_slot.filter((x: any) => x.slot == this.Slot_val);
      }
      if ((this.Block_val != undefined && this.Block_val != '')) {
        this.bike_slot = this.bike_slot.filter((x: any) => x.area == this.Block_val);
        this.car_slot = this.car_slot.filter((x: any) => x.area == this.Block_val);
      }
    }
  }

  reset() {
    this.ngOnInit();
    this.Floor_val=undefined;
    this.Block_val = undefined;
    this.Slot_val = undefined;
  }
  
  _keyPress(event: any) {
    const pattern = /[0-9\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();

    }
  }
}
