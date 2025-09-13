import React, { Children } from 'react'
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {

        return (
            <div>
                {isOpen && (
                <div className='fixed inset-0 bg-black/80 flex items-center justify-center z-50'>
                    <div className="bg-homebg p-8 rounded-[8px] w-[50%] relative shadow-lg">
                        <button
                         onClick={onClose}
                        className='absolute cursor-pointer top-2 right-4'
                        >
                        <X color='white' size={25}/>
                        </button>
                        {children}
                    </div>
                </div>
              )}
            </div>
       )
}
