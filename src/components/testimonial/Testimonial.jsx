import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'swiper/css';
import { useEffect, useRef, useState } from 'react';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [swiperInstance, setSwiperInstance] = useState(null)

    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
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
        <div className='w-full min-h-[840px] h-full bg-[#fafafa] overflow-hidden pt-[100px] pb-[58px]'>
            <div className='lg:container mx-auto'>
                {/* header title */}
                <div className="w-full flex flex-col items-center mb-[80px]">
                    <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">this is what our customers say</h3>
                    <p className="text-base text-[#8a8a8a] font-poppins font-normal max-w-[614px] w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum illum ducimus quo fugiat. Ea ullam architecto cupiditate!</p>
                </div>

                {/* sliders */}
                <div className='w-full h-auto relative pb-20'>

                    <Swiper
                        modules={[Navigation]}
                        onSwiper={setSwiperInstance}
                        breakpoints={breakpoints}
                        className="w-full"
                    >
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-1.avif" alt="customer 1" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>james k.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>traveler</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-2.avif" alt="customer 2" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>john C.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>surfer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-3.avif" alt="customer 3" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>astrid J.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>model</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-4.avif" alt="customer 4" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>Michael s.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>software developer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-5.avif" alt="customer 5" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>Jessica R.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>administrator</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex items-center justify-between p-8 bg-white shadow-2xl min-w-[864px] w-full min-h-[400px] h-full rounded-lg gap-10'>
                                <div className='relative max-w-[242px] w-full min-h-[242px] h-full testimonial-img'>
                                    <img className='max-w-[242px] w-full min-h-[242px] h-full object-cover relative z-10' src="/customers/customer-6.avif" alt="customer 6" />
                                </div>
                                <div className='flex flex-col gap-6 flex-1'>
                                    <p className='text-base text-black font-poppins font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere doloribus voluptate quos magnam voluptatibus, sed error adipisci nisi fuga.</p>
                                    <span className='flex items-center gap-1.5 pb-5 border-b-[1px] border-[#484848] max-w-[230px] w-full'>
                                        {
                                            [...Array(5)]?.map((_, index) => (
                                                <FaStar key={index} size={'1.5rem'} color='#fca120' />
                                            ))
                                        }
                                    </span>
                                    <h4 className='text-4xl text-[#484848] font-normal capitalize'>Elizabeth T.</h4>
                                    <span className='text-base text-[#484848] font-poppins font-normal capitalize'>cashier</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>

                    <div className='flex items-center gap-5 mt-4'>

                        <button
                            ref={prevRef}
                            className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                        >
                            <IoIosArrowBack size={'1.8rem'} />
                        </button>


                        <button
                            ref={nextRef}
                            className='w-[48px] h-[48px] bg-white shadow flex items-center justify-center border-[1px] border-[#8a8a8a] rounded-full cursor-pointer'
                        >
                            <IoIosArrowForward size={'1.8rem'} />
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testimonial