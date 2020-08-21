import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { HomeBannerComponent } from './admin/home-banner/home-banner.component';
import { AdminuserlistComponent } from './admin/adminuserlist/adminuserlist.component';
import { AdminusercreateComponent } from './admin/adminusercreate/adminusercreate.component';
import { AccessrollComponent } from './admin/accessroll/accessroll.component';
import { SubcatdoctorComponent } from './admin/subcatdoctor/subcatdoctor.component';
import { SymptomsComponent } from './admin/symptoms/symptoms.component';
import { SpecializationsComponent } from './admin/specializations/specializations.component';
import { AppusersComponent } from './admin/appusers/appusers.component';
import { ViewbookingformComponent } from './bookings/viewbookingform/viewbookingform.component';
import { ViewbookingestimationComponent } from './bookings/viewbookingestimation/viewbookingestimation.component';
import { OtploginComponent } from './otplogin/otplogin.component';
import { PaymentsComponent } from './payments/payments.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { CheckinComponent } from './bookings/checkin/checkin.component';
import { CheckoutComponent } from './bookings/checkout/checkout.component';
import { SlotBookingComponent } from './slotmanagement/slot-booking/slot-booking.component';
import { SlotBlockingComponent } from './slotmanagement/slot-blocking/slot-blocking.component';
import { QrcodegenerationComponent } from './qrcode/qrcodegeneration/qrcodegeneration.component';
import { UpcomingComponent } from './bookings/upcoming/upcoming.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Buttons'
    },
    children: [
      {
        path: '',
        redirectTo: 'buttons'
      },
      


      {
        path: 'Home_banner',
        component: HomeBannerComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'admin_user_list',
        component: AdminuserlistComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'admin_user_create',
        component: AdminusercreateComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'accessroll',
        component: AccessrollComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'subcatdoctor',
        component: SubcatdoctorComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'symptoms',
        component: SymptomsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'specializations',
        component: SpecializationsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'Appuserlist',
        component: AppusersComponent,
        data: {
          title: 'Brand buttons'
        }
      },

    
      {
        path: 'view_bookings',
        component: ViewbookingformComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'view_estimation',
        component: ViewbookingestimationComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'upcoming',
        component: UpcomingComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'checkin',
        component: CheckinComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'slotbooking',
        component: SlotBookingComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'slotblocking',
        component: SlotBlockingComponent,
        data: {
          title: 'Brand buttons'
        }
      },

      {
        path: 'login_1',
        component: OtploginComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'QRCodeGeneration',
        component: QrcodegenerationComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'payments',
        component: PaymentsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      {
        path: 'downloads',
        component: DownloadsComponent,
        data: {
          title: 'Brand buttons'
        }
      },
      





    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
