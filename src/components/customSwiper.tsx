import React, { forwardRef, useImperativeHandle, useState } from 'react'

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type slide = {
    img : any
}

type CustomSwiper = {
    slides : Array<slide>,
    navigation ?: boolean
}

const CustomSwiper = forwardRef(({slides,navigation=true}:CustomSwiper,ref) => {

    const [swiperRef, setSwiperRef] = useState<any>(null);

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
        };

    useImperativeHandle(ref, () => ({
        callChildFunction: slideTo,
      }));



      
    return (
        <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        breakpoints={{
        // When window width is >= 1024px
        1024: {
            slidesPerView: 2,
        },
        // Default (below 640px)
        0: {
            slidesPerView: 1,
        },
        }}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        // type: 'fraction',
        // }}
        navigation={navigation}
        virtual
    >
        {slides.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
            {slideContent.img}
        </SwiperSlide>
        ))}
    </Swiper>
    )
})

export default CustomSwiper