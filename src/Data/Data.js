// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,
  } from "@iconscout/react-unicons";

  import img1 from '../imgs/img1.png'
  import img2 from '../imgs/img2.png'
  import img3 from '../imgs/img3.png'

// Sidebar Data
export const SidebarData = [
    {
        icon : UilEstate,
        heading : "Dashboard",
    },
    {
        icon : UilClipboardAlt,
        heading : "Orders",
    },
    {
        icon : UilUsersAlt,
        heading : "Customers",
    },
    {
        icon : UilPackage,
        heading : "Products",
    },
    {
        icon : UilChart,
        heading : "Analytics",
    },
]


// Cards Data
export const CardsData = [
    {
        title : "Revenue",
        color : {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 84,
        value : "92,568",
        png : UilUsdSquare,
        series: [
            {
              name: "Revenue",
              data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Commission",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 45,
        value: "25,453",
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "Commission",
            data: [10, 100, 50, 70, 80, 30, 40],
          },
        ],
    },
    {
        title: "Profit",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "67,115",
        png: UilClipboardAlt,
        series: [
          {
            name: "Profit",
            data: [10, 25, 15, 30, 12, 15, 20],
          },
        ],
    },
]


// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Nithin Kamath",
    noti: "has ordered a Macbook Pro M2 Laptop.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Sachin Bansal",
    noti: "has cancelled the order of a iPhone 14 Pro Max Mobile.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Bhavish Aggarwal",
    noti: "has received a Apple Series C Watch.",
    time: "1.5 hours ago",
  },
];