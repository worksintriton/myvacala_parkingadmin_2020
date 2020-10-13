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
  {
    name: 'Dashboard',
    url: '/Home/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
 
  {
    name: 'Bookings',
    url: '/Home/buttons/view_bookings',
    icon: 'icon-notebook',
    // children: [
    //   {
    //     name: 'View Bookings',
    //     url: '/Home/buttons/view_bookings',
    //     icon: 'icon-plus'
    //   },
    // ]
  },
  
  
  {
    name: 'Payments',
    url: '/Home/buttons/payments',
    icon: 'fa fa-money'
  },
  {
    name: 'Slot Management',
    url: '/Home/buttons/slotbooking',
    icon: 'fa fa-gear',
    // children: [
    //   {
    //     name: 'Slot Booking',
    //     url: '/Home/buttons/slotbooking',
    //     icon: 'icon-notebook'
    //   },
    //   {
    //     name: 'Slot Blocking',
    //     url: '/Home/buttons/slotblocking',
    //     icon: 'icon-ban'
    //   },
    // ]
    
  },
  {
    name: 'QR Code List',
    url: '/Home/buttons/QRCodeGeneration',
    icon: 'fa fa-qrcode'
  },
  // {
  //   name: 'Coupon Code',
  //   url: '/Home/buttons/couponcode',
  //   icon: 'fa fa-clone'
  // },
  // {
  //   name: 'Notifications',
  //   url: '/Home/buttons/notifications',
  //   icon: 'icon-bell'
  // },
  // {
  //   name: 'Downloads',
  //   url: '/Home/buttons/downloads',
  //   icon: 'fa fa-download'
  // },
  
 
];
