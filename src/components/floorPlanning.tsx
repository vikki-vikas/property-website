import React, { useState } from 'react'
import f1 from '../../public/content/f1.avif'
import f2 from '../../public/content/f2.avif'

const FloorPlanning = () => {

    const [activeIndex,setActiveIndex] = useState(0);
    const [activeSubIndex,setActiveSubIndex] = useState(0);

    const categoriesData = [
        {
            categoryName : "2 BHK Aparmrnt",
            price : "76.71L - 1.08cr",
            subCategorys : [
                {
                    title : "1096 sq.ft",
                    image : f1,
                    price : "78 L",
                    specificaions : [
                        {
                            title : "Attached Balcony with Bedroom 1",
                            subTitle : "11' 0'' X 4' 0''"
                        },
                        {
                            title : "Bedroom 1",
                            subTitle : "11' 0'' X 11' 0''"
                        },
                        {
                            title : "Attached Balcony with Bedroom 1",
                            subTitle : "11' 0'' X 4' 0''"
                        },
                        {
                            title : "Bedroom 1",
                            subTitle : "11' 0'' X 11' 0''"
                        },
                        {
                            title : "Attached Balcony with Bedroom 1",
                            subTitle : "11' 0'' X 4' 0''"
                        },
                        {
                            title : "Bedroom 1",
                            subTitle : "11' 0'' X 11' 0''"
                        },
                        {
                            title : "Attached Balcony with Bedroom 1",
                            subTitle : "11' 0'' X 4' 0''"
                        },
                        {
                            title : "Bedroom 1",
                            subTitle : "11' 0'' X 11' 0''"
                        },
                    ]
                },
                {
                    title : "1096 sq.ft",
                    image : f2,
                    price : "78 L",
                    specificaions : []
                },
                {
                    title : "1096 sq.ft",
                    image : f1,
                    price : "78 L",
                    specificaions : []
                }
            ]
        }
    ]

  return (
    <>
        <div className='flex gap-4 text-xs' >
            {categoriesData.map((category:any,catIndex:number)=>{
                return <div className={`bg-gray border-b-2 cursor-pointer ${activeIndex == catIndex && 'border-blue' } p-2 px-4`}
                onClick={()=>{setActiveIndex(catIndex)}}
                >
                    <p>{category.categoryName}</p>
                    <p>{category.price}</p>
                </div>
            })}
        </div>
        <div className='mt-5' >
            <div className='flex gap-4 overflow-x-auto no-scrollbar text-xs' >
                {categoriesData[activeIndex].subCategorys.map((subCate:any,subCatIndex:number)=>{
                    return <p className={`min-w-max p-2 border-b-2 cursor-pointer ${activeSubIndex == subCatIndex && 'border-blue' }`} onClick={()=>{setActiveSubIndex(subCatIndex)}} >{subCate.title}</p>
                })}
            </div>
            <div className='grid place-items-center mt-5' >
                <p className='text-left font-semibold w-full' >₹ {categoriesData[activeIndex].subCategorys[activeSubIndex].price}</p>
                <img src={categoriesData[activeIndex].subCategorys[activeSubIndex].image} alt="" />
            </div>

            <div className='flex gap-x-4 overflow-x-auto no-scrollbar' >
                {categoriesData[activeIndex].subCategorys[activeSubIndex].specificaions.map((spec,index)=>{
                    return <div className='p-2 border rounded-md min-w-max text-xs md:text-base' >
                        <p>{spec.title}</p>
                        <p className='opacity-50' >{spec.subTitle}</p>
                    </div>
                })}
            </div>

        </div>
    </>
  )
}

export default FloorPlanning