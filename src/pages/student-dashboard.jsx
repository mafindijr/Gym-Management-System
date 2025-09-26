import { LucideTrophy } from "lucide-react";


export default function StudentDashboard() {
  return (
    <div className="w-full">

      <main className='flex flex-col gap-8'>
        <div>
          <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Member Dashboard</h1>
        </div>
        <div>
          <div>
            <h4 className="text-[22px] leading-[28px] font-bold">Enroll Classes</h4>
          </div>
          <div className="inline-flex gap-4 my-8">

              <div>
                <div className="w-[165px] h-[166px]">
                    <img src="/src/assets/images/yogaimage.png" alt="yoga image" loading="lazy" />
                </div>
                <div>
                    <p className="text-[16px] leading-[24px] font-medium">Yoga for Beginners</p>
                    <span className="text-[14px] leading-[21px] text-adminsmtext">Instructor: Lily Harpa</span>
                </div>
              </div>

              <div>
                  <div className="w-[165px] h-[166px]">
                    <img src="\src\assets\images\strenth.png" alt="Stremthing image" loading="lazy" />
                  </div>
                  <div>
                     <p>Strenth Training</p>
                     <span>Instructor: Owen Bennett</span>
                  </div>
              </div>

              <div>
                  <div className="w-[165px] h-[166px]">
                    <img src="/src/assets/images/cardio.png" alt="cardio image" loading="lazy"  />
                  </div>
                  <div>
                    <div>
                        <p>Cardio Blast</p>
                        <span>Instructor: Avo Faster</span>
                    </div>
                  </div>
              </div>

          </div>
        </div>
        <div>
          <div>
            <h4 className="text-[22px] leading-[28px] font-bold">Next Upcoming Class</h4>
          </div>

          <div>
              <div className="inline-flex gap-4 py-4">
                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#243847] rounded-[8px]">
                  <LucideTrophy />
                </div>
                <div>
                  <p className="text-[16px] leading-[24px] font-medium">Fitness Challenge</p>
                  <span className="text-[14px] leading-[21px] text-adminsmtext">October, 15, 2025</span>
                </div>
              </div>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-[22px] leading-[28px] font-bold">Fitness Progress</h4>
          </div>

         <div className="w-[902px] h-[174px] flex flex-col gap-4 rounded-[8px] bg-[#243847] my-8 px-4 py-8">
            <div>
              <p className="text-[16px] leading-[24px] font-medium">Weight Change</p>
            </div>
            <div>
              <h1 className="text-[24px] leading-[30px] font-bold font-montserrat">-2 Lbs</h1>
            </div>
            <div>
              <p className="text-[16px] leading-[24px] text-[#fa6138] font-medium">-2%</p>
            </div>
          </div>

        <div className="flex gap-4">
            <button className="bg-btnprimary cursor-pointer w-[97px] h-[40px] rounded-[8px] text-center text-[14px] leading-[21px] font-bold">Payment</button>
            <button className="bg-[#243847] cursor-pointer w-[165px] h-[40px] text-[14px] leading-[21px] font-bold text-center rounded-[8px] ">Class Registration</button>
          </div>
        </div>

      </main>

    </div>
  );
}
