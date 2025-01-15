import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

const Collapsible = ({title,children,icon}) => {
   const [collapse,setCollapse] =  useState(true);
  return (
    <div className='border-b border-gray mb-4' >
        <div className='cursor-pointer p-2 flex items-center justify-between gap-x-4' onClick={()=>setCollapse(!collapse)} >
            <div className='flex gap-2 items-center' >
              {icon}
              <p className='font-medium text-sm' >{title}</p>
            </div>
            <FaChevronDown className={`opacity-30 ${!collapse && 'rotate-180'} `} />
        </div>
        {!collapse && <div className='p-2 text-sm' >
            {children}
        </div>}
    </div>
  )
}

export default Collapsible