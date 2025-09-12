import StudentSettingsForm from "../Components/student-settings-form";

export default function StudentSettings() {
  return (
    <main className='flex flex-col col-span-4 gap-4 w-full'>
      <h1 className='text-[32px] leading-[40px] font-bold font-montserrat'>Settings</h1>
      <StudentSettingsForm />
    </main>
  );
}
