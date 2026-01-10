import React, { Children } from 'react'
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-bgtable rounded-lg shadow-lg max-w-full sm:max-w-[90%] md:max-w-[600px] lg:max-w-[700px] w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-[#334d66]">
          <button
            onClick={onClose}
            className="ml-auto text-footertext hover:text-white text-2xl leading-none transition"
          >
            ×
          </button>
        </div>
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
