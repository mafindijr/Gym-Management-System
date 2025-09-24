


export default function StudentDashboard() {
  return (
    <div>
      <main className='w-full'>
        <div>
          <h1 className='text-[36px] leading-[40px] font-bold font-montserrat'>Student Dashboard</h1>
        </div>
        <div>
          <h4>Enroll Classes</h4>
          <div className="inline-flex gap-8 p-8">
            <div>
              <img src="/src/assets/images/yogaimage.png" alt="yoga image" loading="lazy" />
              <span>Yoga Class</span>
            </div>
            <div>
              <img src="/src/assets/images/cardio.png" alt="cardio image" loading="lazy" />
              <span>Cardio Class</span>
            </div>
            <div>
              <img src="\src\assets\images\strenth.png" alt="Stremthing image" loading="lazy" />
              <span>Strnthing Class</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
