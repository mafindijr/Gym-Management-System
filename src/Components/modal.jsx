import React, { Children } from 'react'
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {

        return (
            <div>
                {isOpen && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
                    <div className="bg-[#223649] p-6 rounded-[8px] w-[50%] shadow-lg">
                        <button
                         onClick={onClose}
                        className='flex justify-end cursor-pointer w-full'
                        >
                        <X color='black' size={25}/>
                        </button>
                        {children}
                    </div>
                </div>
              )}
            </div>
       )
}
