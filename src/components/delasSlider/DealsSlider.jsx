import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight} from 'react-icons/hi';
import 'swiper/css';
import { useRef } from 'react';

const DealsSlider = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const breakpoints = {
    0:{
        slidesPerView: 1,
        spaceBetween: 10,
    },
    768:{
        slidesPerView: 1,
        spaceBetween: 20,
    },
    1024:{
        slidesPerView: 1,
        spaceBetween: 30,
    },
    1440:{
        slidesPerView: 1,
        spaceBetween: 40,
    }
  }
  return (
    <div className='overflow-hidden ralative pb-16'>
        <div className='absolute left-0 bottom-0 flex items-center gap-5 z-50'>
            <div>
                <button 
                    ref={prevRef}
                    className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                >
                    <HiOutlineArrowCircleLeft size={'1.8rem'} />
                </button>
            </div>
            <div>
                <button 
                    ref={nextRef}
                    className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                >
                    <HiOutlineArrowCircleRight size={'1.8rem'} />
                </button>
            </div>
        </div>
        
        <Swiper 
            modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper)=> {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={breakpoints}
        >
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-1.webp" alt="deals one" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-2.webp" alt="deals 2" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-3.webp" alt="deals 3" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-4.jpg" alt="deals 4" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-5.jpg" alt="deals 5" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img className='w-full max-h-[582px] h-full object-cover' src="/deals/deals-6.jpg" alt="deals 6" />
                    <div className='absolute bottom-25 left-0 transform translate-y-1/2 translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10'>
                        <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                        <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default DealsSlider