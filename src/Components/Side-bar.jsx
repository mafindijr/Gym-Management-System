import { NavLink } from "react-router-dom";

export default function SideBar() {

    const navs = [
            { to: "/admin", name: "Dashboard", icon: "X"},
            { to: "member", name: "Members", icon: "X"},
            { name: "Classes", icon: "X"},
            { name: "Trainers", icon: "X"},
            { name: "Billing", icon: "X"},
            { name: "Settings", icon: "X"}
        ];


  return (
    <div>
        <nav className='flex flex-col gap-4 pl-4 pt-4 w-64'>
                <div>
                    <h2 className='font-poppins text-lg leading-tight tracking-[-0.015em]'>Nyame GymHall</h2>
                    <p className='text-[14px] leading-6 text-adminsmtext'>Admin</p>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                      {
                        navs.map((nav, index ) => {
                            return (
                                <NavLink to={nav.to} className='flex gap-2 w-full leading-5.4 text-[14px]  font-montserrat bg-[#223649] p-2 rounded-full cursor-pointer' key={index}>
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
