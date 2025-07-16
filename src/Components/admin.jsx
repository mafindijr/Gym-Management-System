import React from 'react'

export default function Admin() {

        const navs = [
            { name: "Dashboard", icon: ""},
            { name: "Members", icon: ""},
            { name: "Classes", icon: ""},
            { name: "Trainers", icon: ""},
            { name: "Billing", icon: ""},
            { name: "Settings", icon: ""}
        ];

  return (
    <div>
        <div className='grid grid-cols-3 col-2-span-2'>
            <nav className=''>
                <div>
                    <h1>Nyame GymHall</h1>
                    <p>Admin</p>
                </div>
                <div>
                    <ul>
                      {
                        navs.map((nav, index ) => {
                            return (
                                <li key={index}>
                                    <span>{ nav.icon }</span>
                                    <a href="#">{ nav.name }</a>
                                </li>
                            );
                        })
                      }  
                    </ul>
                </div>
            </nav>

            <main className=''>
                <div>
                    <h1>Dashboard</h1>
                </div>

                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <div>quikck actions</div>
                    <div>buttons</div>
                    <div>gym overview</div>
                    <div>the obvverview insight cards here</div>
                </div>
            </main>
        </div>
    </div>
  )
}
