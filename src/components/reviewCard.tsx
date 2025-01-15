import React from 'react'
import { FaTools } from 'react-icons/fa'
import { HiMiniStar } from 'react-icons/hi2'
import { SiTicktick } from 'react-icons/si'

const ReviewCard = () => {
  return (
    <div className='bg-white rounded-lg p-4 gap-4 min-w-[18rem] lg:min-w-[30rem]' >
        <div className='flex justify-between items-center gap-x-1' >
            <div className='flex gap-2' >
                <div>
                    <div className='w-10 h-10 rounded-full bg-purple-500' >
                    </div>
                </div>
                <div>
                    <p className='text-sm' >Noufal</p>
                    <p className='text-xs opacity-60' >Lived before | 4 months ago</p>
                </div>
            </div>

            <div className='bg-yellow-100 bg-opacity-70 text-xs px-2 p-1 rounded-md' >
                <p className='text-xs' >3.3 <HiMiniStar className='inline mb-1' /> </p>
            </div>
        </div>
        <div className='grid lg:grid-cols-2 mt-4 gap-y-8' >
            <div className='pr-2' >
                <p className='font-semibold text-xs' > <SiTicktick className='inline mr-1 mb-1' /> Good things here</p>
                <p className='text-xs mt-2 opacity-60' >Bommasandra is a pretty good to stay with a minimum budget and low hous rent fees and it has good wide</p>
            </div>
            <div className='border-l lg:pl-4' >
                <p className='font-semibold text-xs' ><FaTools className='inline mr-1 mb-1' /> Things that need improvement</p>
                <p className='text-xs mt-2 opacity-60' >Bommasandra is a pretty good to stay with a minimum budget and low hous rent fees and it has good wide</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard