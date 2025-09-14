import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { HiOutlineArrowCircleLeft, HiOutlineArrowCircleRight } from 'react-icons/hi';
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';

const DealsSlider = () => {

    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [swiperInstance, setSwiperInstance] = useState(null)

    useEffect(() => {
        if(swiperInstance && prevRef.current && nextRef.current){
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance])

    const breakpoints = {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
        }
    }
    return (
        <div className='overflow-hidden relative pb-16'> 

            <Swiper
                modules={[Navigation]}
                onSwiper={setSwiperInstance}
                breakpoints={breakpoints}
                className="w-full"
            >
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-1.webp"
                            alt="deals one"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-2.webp"
                            alt="deals 2"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-3.webp"
                            alt="deals 3"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-4.jpg"
                            alt="deals 4"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-5.jpg"
                            alt="deals 5"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative flex flex-col items-center justify-center'>
                        <img
                            className='w-full max-w-[420px] h-auto object-contain mx-auto rounded-md'
                            src="/deals/deals-6.jpg"
                            alt="deals 6"
                        />
                        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 max-w-[217px] w-full max-h-[130px] h-full bg-white flex flex-col items-center justify-center gap-2.5 z-10 shadow-md rounded-md'>
                            <h5 className='text-base text-[#484848] font-poppins font-normal capitalize mb-2.5'>01 - Spring sale</h5>
                            <span className='text-xl text-[#484848] font-poppins capitalize font-medium'>30% off</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='flex items-center gap-5 mt-4'>

                <button
                    ref={prevRef}
                    className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                >
                    <HiOutlineArrowCircleLeft size={'1.8rem'} />
                </button>


                <button
                    ref={nextRef}
                    className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                >
                    <HiOutlineArrowCircleRight size={'1.8rem'} />
                </button>

            </div>

        </div>
    )
}

export default DealsSlider