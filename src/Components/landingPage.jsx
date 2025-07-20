import React from 'react'

export default function LandingPage() {
  return (
    <>
         <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                 style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url("/gymlandingimg.png")`
                }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-4xl font-black font-Montserrat leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Welcome to Fitness Hub
                    </h1>
                    <h2 className="text-white text-sm font-Montserrat font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Please select your role to log in.
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal font-Poppins @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Staff Login</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#223649] text-white text-sm font-Poppins font-bold leading-normal tracking-[0.015em] w-full"
                >
                  <span className="truncate">Student Login</span>
                </button>
                <button
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#223649] text-white text-sm font-Poppins font-bold leading-normal tracking-[0.015em] w-full"
                >
                  <span className="truncate">Admin Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
     </>
  )
}
