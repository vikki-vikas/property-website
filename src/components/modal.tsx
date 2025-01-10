import React from 'react'
import Slider from './slider';

type ModalType = {
    closeModal : Function,
    children?: React.ReactNode;
}

const Modal = ({onClose}) => {
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
            <div className='grid grid-cols-2 text-white' >
                <div>
                    <p>Ma Sarada Upavan Phase II</p>
                    <p>₹76.71 L - 1.51 Cr</p>
                </div>
                <div className='hidden lg:block' >
                    <button className='bg-green-600 p-2 px-4 rounded-md float-right' >Contact Developer</button>
                </div>
            </div>
            <Slider />
        </div>
      </div>
    </div>
     </>
}

export default Modal

