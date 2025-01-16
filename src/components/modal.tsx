import React from 'react'
import Slider from './slider';

type ModalType = {
    closeModal : Function,
    children?: React.ReactNode;
}

const Modal = ({onClose,children}) => {
    return <> 
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black "
    >
      <div
        className="relative w-full overflow-hidden h-screen p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-white text-3xl hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <div className='mt-10' >
          {children}
        </div>
      </div>
    </div>
     </>
}

export default Modal

