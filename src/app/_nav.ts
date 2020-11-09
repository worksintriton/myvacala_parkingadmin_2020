interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  // {
  //   name: 'Dashboard',
  //   url: '/Home/dashboard',
  //   icon: 'icon-speedometer',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
 
  {
    name: 'Bookings',
    url: '/Home/Admin/view_bookings',
    icon: 'icon-notebook',
    // children: [
    //   {
    //     name: 'View Bookings',
    //     url: '/Home/Admin/view_bookings',
    //     icon: 'icon-plus'
    //   },
    // ]
  },
  
  
  {
    name: 'Payments',
    url: '/Home/Admin/payments',
    icon: 'fa fa-money'
  },
  {
    name: 'Slot Management',
    url: '/Home/Admin/slotbooking',
    icon: 'fa fa-gear',
    // children: [
    //   {
    //     name: 'Slot Booking',
    //     url: '/Home/Admin/slotbooking',
    //     icon: 'icon-notebook'
    //   },
    //   {
    //     name: 'Slot Blocking',
    //     url: '/Home/Admin/slotblocking',
    //     icon: 'icon-ban'
    //   },
    // ]
    
  },
  {
    name: 'QR Code List',
    url: '/Home/Admin/QRCodeGeneration',
    icon: 'fa fa-qrcode'
  },
  // {
  //   name: 'Coupon Code',
  //   url: '/Home/Admin/couponcode',
  //   icon: 'fa fa-clone'
  // },
  // {
  //   name: 'Notifications',
  //   url: '/Home/Admin/notifications',
  //   icon: 'icon-bell'
  // },
  // {
  //   name: 'Downloads',
  //   url: '/Home/Admin/downloads',
  //   icon: 'fa fa-download'
  // },
  
 
];
