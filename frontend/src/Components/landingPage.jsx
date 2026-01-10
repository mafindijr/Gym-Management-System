import { useState } from 'react'
import Modal from "./modal"
import LoginPage from './Auth/login'


export default function LandingPage() {

  const [openModal, setOpenModal] = useState(false);
  

  
  return (
    <>
         <div className="px-4 sm:px-6 md:px-10 lg:px-20 flex flex-1 justify-center py-8 md:py-12">
          <div className="layout-content-container flex flex-col max-w-4xl w-full">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[320px] sm:min-h-[400px] md:min-h-[500px] flex-col gap-4 sm:gap-6 md:gap-8 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-center p-4 sm:p-6 md:p-8 rounded-lg"
                 style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("/gymlandingimg.png")`
                }}
                >
                  <div className="flex flex-col gap-2 md:gap-3 text-center max-w-2xl">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black font-Montserrat leading-tight tracking-[-0.033em]">
                      Welcome to Nyame Fitness Hub
                    </h1>
                    <h2 className="text-xs sm:text-sm md:text-base font-Montserrat text-gray-200">
                      Please select your role to log in.
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[140px] sm:min-w-[160px] md:min-w-[200px] cursor-pointer items-center justify-center rounded-full h-10 px-4 sm:px-5 md:px-6 md:h-12 bg-[#0b80ee] text-white text-xs sm:text-sm md:text-base font-bold hover:bg-blue-700 transition"
                    onClick={() => setOpenModal(true)}
                  >
                    <span className="truncate">Staff Login</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row gap-3 max-w-md sm:max-w-lg w-full px-0 sm:px-2">
                <button
                  className="w-full h-10 rounded-full bg-[#223649] text-white text-xs sm:text-sm md:text-base font-bold hover:bg-[#2a4659] transition"
                  onClick={() => setOpenModal(true)}
                >
                    <span className="truncate">Member Login</span>
                </button>
                <button
                  className="w-full h-10 rounded-full bg-[#223649] text-white text-xs sm:text-sm md:text-base font-bold hover:bg-[#2a4659] transition"
                  onClick={() => setOpenModal(true)}
                >
                  <span className="truncate">Admin Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <LoginPage />
        </Modal>
     </>
  )
}
