import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  Wallet,
  Calendar
} from "lucide-react";

export default function SideBar({ navs, name }) {
  // Default to admin navs if none provided
  const defaultNavs = [
    { to: "/admin",    name: "Dashboard", icon: <Home size={20} />},
    { to: "/member",   name: "Members",   icon: <Users size={20} />},
    { to: "/classes",  name: "Classes",   icon: <Calendar size={20} />},
    { to: "/trainers", name: "Trainers",  icon: <Users size={20} />},
    { to: "/billing",  name: "Billing",   icon: <Wallet size={20} />},
    { to: "/settings", name: "Settings",  icon: <Settings size={20} />}
  ];

  const navLinks = navs || defaultNavs;
  const dashboardName = name || "Admin";

  return (
    <div>
      <nav className='flex flex-col fixed left-0 gap-4 pl-4 pt-4 w-64'>
        <div>
          <NavLink to='/' className='font-poppins text-lg leading-tight tracking-[-0.015em]'>Nyame GymHall</NavLink>
          <p className='text-[14px] leading-6 text-adminsmtext'>{dashboardName}</p>
        </div>
        <div>
          <div className='flex flex-col gap-4 items-center text-center justify-center'>
            {
              navLinks.map((nav, index ) => {
                return (
                  <NavLink to={nav.to} className={({ isActive }) => `flex gap-2 w-full leading-5.4 text-[14px] text-center  font-montserrat p-2 rounded-full cursor-pointer transition hover:bg-[#22364973] ${isActive? "bg-[#223649]" : "" }`} key={index}>
                    <span>{ nav.icon }</span>
                    <span>{ nav.name }</span>
                  </NavLink>
                );
              })
            }  
          </div>
        </div>
      </nav>
    </div>
  )
}
