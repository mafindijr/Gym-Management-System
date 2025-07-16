import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {

   

  return (
    <>
        <div className='flex flex-col items-center font-montserrat text-footertext justify-evenly h-[200px] px-20'>
          <div className='flex items-center text-center justify-between px-8 w-[96%]'>
                <div><a href="#">Privacy Policy</a></div>
                <div><a href="#">Terms of services</a></div>
                <div><a href="#">Contact Us</a></div>
          </div>
            {/* <div className='flex flex-col items-center gap-4 text-center justify-center'> */}
                <div className="flex items-center space-x-4 justify-center">

                  <div>
                    <a href="#"><Twitter size={24} /></a>
                   </div>
                   <div className='border-2 p-1 rounded-full'>
                    <a href="#"><Facebook size={20} /></a>
                   </div>
                   <div>
                    <a href="#"><Instagram size={24} /></a>
                   </div>

                </div>

                <div><p>&copy; 2025 FitnessHub. All rights reserved</p></div>
            </div>
        {/* </div> */}
    </>
  )
}
