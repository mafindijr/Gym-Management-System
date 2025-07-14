import { Twitter, Facebook, Instagram } from 'lucide-react';

export default function Footer() {

   

  return (
    <>
        <div className='flex items-center font-montserrat text-footertext justify-between h-[200px] px-20'>
            <div><a href="#">Privacy Policy</a></div>
            <div className='flex flex-col items-center gap-4 text-center justify-center'>
                <div><a href="#">Terms of services</a></div>
                <div className="flex items-center space-x-4 justify-center">

                   <Twitter size={24} />
                   <Facebook size={24} />
                   <Instagram size={24} />

                </div>
                <div><p>&copy; 2025 FitnessHub. All rights reserved</p></div>
            </div>
            <div><a href="#">Contact Us</a></div>
        </div>
    </>
  )
}
