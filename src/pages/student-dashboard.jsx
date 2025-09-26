


export default function StudentDashboard() {
  return (
    <div className="w-full">

      <main className='flex flex-col border-2 border-amber-600'>
        <div>
          <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Member Dashboard</h1>
        </div>
        <div>
          <div>
            <h4>Enroll Classes</h4>
          </div>
          <div className="inline-flex gap-8 p-8">

              <div>
                <div className="w-[165px] h-[166px]">
                    <img src="/src/assets/images/yogaimage.png" alt="yoga image" loading="lazy" />
                </div>
                <div>
                    <p>Yoga for Beginners</p>
                    <span>Instructor: Lily Harpa</span>
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
            <h4>Next Upcoming Class</h4>
          </div>

          <div>
              <div>
                <div></div>
                <div></div>
              </div>
          </div>
        </div>

        <div>
          <div>
            <h4>Fitness Progress</h4>
          </div>
        <div>

         </div>
          <div>
            <button>Payment</button>
            <button>Class Registration</button>
          </div>
        </div>

      </main>

    </div>
  );
}
