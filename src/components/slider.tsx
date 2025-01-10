import c1 from './../../public/content/c1.avif'
import c2 from './../../public/content/c2.avif'
import c3 from './../../public/content/c3.avif'
import c4 from './../../public/content/c4.avif'



import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

export default function App() {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    [
        {
            img :  <img src={c1} />
        },
        {
            img :  <img src={c2} />
        },
        {
            img :  <img src={c3} />
        },
        {
            img :  <img src={c4} />
        },
        {
            img :  <img src={c1} />
        },
        {
            img :  <img src={c2} />
        }
    ]
  );


  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>

        <div className="append-buttons flex gap-2 my-4">

            <button onClick={() => slideTo(1)} className=" text-white text-xs p-2 px-4 border border-white rounded-full prepend-slide">
            Slide 1
            </button>
            <button onClick={() => slideTo(4)} className=" text-white text-xs p-2 px-4 border border-white rounded-full slide-250">
            Slide 4
            </button>
            <button onClick={() => slideTo(6)} className=" text-white text-xs p-2 px-4 border border-white rounded-full slide-500">
            Slide 6
            </button>
        </div>

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
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent.img}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

