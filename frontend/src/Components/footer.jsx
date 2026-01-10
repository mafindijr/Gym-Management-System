import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {

   

  return (
    <>
        <div className='flex flex-col items-center font-montserrat text-footertext justify-evenly gap-6 py-8 px-4 sm:px-6 md:px-10'>
          <div className='flex flex-col sm:flex-row items-center text-center justify-center gap-6 sm:gap-8 md:gap-12 w-full'>
                <a href="#" className='text-sm md:text-base hover:text-btnprimary transition'>Privacy Policy</a>
                <a href="#" className='text-sm md:text-base hover:text-btnprimary transition'>Terms of services</a>
                <a href="#" className='text-sm md:text-base hover:text-btnprimary transition'>Contact Us</a>
          </div>

          <div className="flex items-center space-x-4 justify-center">
                  <a href="#" className='hover:text-btnprimary transition p-2'><Twitter size={20} /></a>
                  <div className='border-2 p-1 rounded-full hover:border-btnprimary transition'>
                    <a href="#"><Facebook size={18} /></a>
                  </div>
                  <a href="#" className='hover:text-btnprimary transition p-2'><Instagram size={20} /></a>
          </div>

          <div><p className='text-xs md:text-sm'>&copy; 2025 FitnessHub. All rights reserved</p></div>
        </div>
    </>
  )
}
