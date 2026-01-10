import { LucideTrophy } from "lucide-react";


export default function StudentDashboard() {
  return (
    <div className="w-full">
      <main className='flex flex-col gap-8'>
        <div>
          <h1 className='text-2xl md:text-[36px] leading-tight md:leading-[40px] font-bold font-montserrat'>Member Dashboard</h1>
        </div>
        <div>
          <div>
            <h4 className="text-lg md:text-[22px] font-bold">Enroll Classes</h4>
          </div>
          <div className="flex flex-wrap gap-4 my-8">

              <div className="w-full sm:w-1/2 md:w-[165px]">
                <div className="w-full aspect-[165/166] md:w-[165px] md:h-[166px]">
                    <img className="w-full h-full object-cover rounded" src="/src/assets/images/yogaimage.png" alt="yoga image" loading="lazy" />
                </div>
                <div className="mt-2">
                    <p className="text-base md:text-[16px] font-medium">Yoga for Beginners</p>
                    <span className="text-sm md:text-[14px] text-adminsmtext">Instructor: Lily Harpa</span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-[165px]">
                  <div className="w-full aspect-[165/166] md:w-[165px] md:h-[166px]">
                    <img className="w-full h-full object-cover rounded" src="\src\assets\images\strenth.png" alt="Strength image" loading="lazy" />
                  </div>
                  <div className="mt-2">
                     <p className="text-base md:text-[16px]">Strength Training</p>
                     <span className="text-sm md:text-[14px]">Instructor: Owen Bennett</span>
                  </div>
              </div>

              <div className="w-full sm:w-1/2 md:w-[165px]">
                  <div className="w-full aspect-[165/166] md:w-[165px] md:h-[166px]">
                    <img className="w-full h-full object-cover rounded" src="/src/assets/images/cardio.png" alt="cardio image" loading="lazy"  />
                  </div>
                  <div className="mt-2">
                        <p className="text-base md:text-[16px]">Cardio Blast</p>
                        <span className="text-sm md:text-[14px]">Instructor: Avo Faster</span>
                  </div>
              </div>

          </div>
        </div>

        <div>
          <div>
            <h4 className="text-lg md:text-[22px] font-bold">Next Upcoming Class</h4>
          </div>

          <div>
              <div className="inline-flex gap-4 py-4 items-center">
                <div className="w-10 h-10 md:w-[48px] md:h-[48px] flex items-center justify-center bg-[#243847] rounded-[8px]">
                  <LucideTrophy />
                </div>
                <div>
                  <p className="text-base md:text-[16px] font-medium">Fitness Challenge</p>
                  <span className="text-sm md:text-[14px] text-adminsmtext">October, 15, 2025</span>
                </div>
              </div>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-lg md:text-[22px] font-bold">Fitness Progress</h4>
          </div>

         <div className="w-full max-w-3xl md:w-[902px] h-auto md:h-[174px] flex flex-col gap-4 rounded-[8px] bg-[#243847] my-8 px-4 py-8">
            <div>
              <p className="text-base md:text-[16px] font-medium">Weight Change</p>
            </div>
            <div>
              <h1 className="text-xl md:text-[24px] font-bold font-montserrat">-2 Lbs</h1>
            </div>
            <div>
              <p className="text-base md:text-[16px] text-[#fa6138] font-medium">-2%</p>
            </div>
          </div>

        <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-btnprimary cursor-pointer w-full sm:w-[97px] h-[40px] rounded-[8px] text-center text-sm md:text-[14px] font-bold">Payment</button>
            <button className="bg-[#243847] cursor-pointer w-full sm:w-[165px] h-[40px] text-sm md:text-[14px] font-bold text-center rounded-[8px] ">Class Registration</button>
          </div>
        </div>

      </main>

    </div>
  );
}
