import React from 'react'

export default function LandingPage() {
  return (
    <>
           <div class="px-40 flex flex-1 justify-center py-5">
          <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div class="@container">
              <div class="@[480px]:p-4">
                <div
                  class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVSfQjnl6BaffyeGRIujBvjuoL2Z2NQ8RkRIaka2FStPNfmKzYdhpHf8g8HM1ZaeJ6KOMoQA4D8am2SEbub3fpiU-_ldw7JeQOZTcjcu0E6qy5IUd4NZ52nwRy0JSUv26gO7b4VNmaMhy8lumLqVYgqc3aeoTG3xuIwjBvXLlSCAXkLCUCRLBhOePo3DAJpfVf-7QOWnO9tL9sYccLuWGpMavF7KjhMgxxAei4_LxaYC7MkzuSW9LLezsOg0NuMlBWQj61efqc68o");'
                >
                  <div class="flex flex-col gap-2 text-center">
                    <h1
                      class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Welcome to Fitness Hub
                    </h1>
                    <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Please select your role to log in.
                    </h2>
                  </div>
                  <button
                    class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0b80ee] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span class="truncate">Staff Login</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div class="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#223649] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full"
                >
                  <span class="truncate">Student Login</span>
                </button>
                <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#223649] text-white text-sm font-bold leading-normal tracking-[0.015em] w-full"
                >
                  <span class="truncate">Admin Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
