import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { ButtonsRoutingModule } from './buttons-routing.module';

import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import { StorageServiceModule } from 'angular-webstorage-service';
import { AdminuserlistComponent } from './admin/adminuserlist/adminuserlist.component';
import { AdminusercreateComponent } from './admin/adminusercreate/adminusercreate.component';
import { AccessrollComponent } from './admin/accessroll/accessroll.component';
import { HomeBannerComponent } from './admin/home-banner/home-banner.component';
import { SubcatdoctorComponent } from './admin/subcatdoctor/subcatdoctor.component';
import { SymptomsComponent } from './admin/symptoms/symptoms.component';
import { SpecializationsComponent } from './admin/specializations/specializations.component';
import { AppusersComponent } from './admin/appusers/appusers.component';
import { ViewbookingformComponent } from './bookings/viewbookingform/viewbookingform.component';
import { OtploginComponent } from './otplogin/otplogin.component';
import { ViewbookingestimationComponent } from './bookings/viewbookingestimation/viewbookingestimation.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { SlotBlockingComponent } from './slotmanagement/slot-blocking/slot-blocking.component';
import { SlotBookingComponent } from './slotmanagement/slot-booking/slot-booking.component';
import { CheckinComponent } from './bookings/checkin/checkin.component';
import { CheckoutComponent } from './bookings/checkout/checkout.component';
import { QrcodegenerationComponent } from './qrcode/qrcodegeneration/qrcodegeneration.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import {CalendarModule} from 'primeng/calendar';
import { UpcomingComponent } from './bookings/upcoming/upcoming.component';
// Angular

@NgModule({
  imports: [
    CommonModule,
    StorageServiceModule,
    ButtonsRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    NgDatepickerModule,
    CalendarModule
  ],
  declarations: [
    AdminuserlistComponent,
    AdminusercreateComponent,
    AccessrollComponent,
    HomeBannerComponent,
    SubcatdoctorComponent,
    SymptomsComponent,
    SpecializationsComponent,
    AppusersComponent,
    ViewbookingformComponent,
    OtploginComponent,
    ViewbookingestimationComponent,
    PaymentsComponent,
    NotificationsComponent,
    DownloadsComponent,
    SlotBlockingComponent,
    SlotBookingComponent,
    CheckinComponent,
    CheckoutComponent,
    QrcodegenerationComponent,
    UpcomingComponent,
  
  ]
})
export class ButtonsModule { }
