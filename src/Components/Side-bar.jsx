import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  Settings,
  Wallet,
  Calendar
} from "lucide-react";

export default function SideBar() {

    const navs = [
            { to: "/admin",   name: "Dashboard", icon: <Home size={20} />},
            { to: "/member",   name: "Members",   icon: <Users size={20} />},
            { to: "/classes",  name: "Classes",   icon: <Calendar size={20} />},
            { to: "/trainers", name: "Trainers",  icon: <Users size={20} />},
            { to: "/billling", name: "Billing",   icon: <Wallet size={20} />},
            { to: "/settings", name: "Settings",  icon: <Settings size={20} />}
        ];


  return (
    <div>
        <nav className='flex flex-col gap-4 pl-4 pt-4 w-64'>
                <div>
                    <h2 className='font-poppins text-lg leading-tight tracking-[-0.015em]'>Nyame GymHall</h2>
                    <p className='text-[14px] leading-6 text-adminsmtext'>Admin</p>
                </div>
                <div>
                    <ul className='flex flex-col gap-4 items-center text-center justify-center'>
                      {
                        navs.map((nav, index ) => {
                            return (
                                <NavLink to={nav.to} className={({ isActive }) => `flex gap-2 w-full leading-5.4 text-[14px] text-center  font-montserrat p-2 rounded-full cursor-pointer transition hover:bg-[#223649] ${isActive? "bg-[#223649]" : "" }`} key={index}>
                                    <span>{ nav.icon }</span>
                                    <a href="#">{ nav.name }</a>
                                </NavLink>
                            );
                        })
                      }  
                    </ul>
                </div>
            </nav>
    </div>
  )
}
