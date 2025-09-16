import { Link } from "react-router"

const Banner = () => {
  return (
    <div className="w-full pt-[90px]">
       <div className="lg:container mx-auto">
            <div className="flex items-center justify-between gap-6 min-h-[756px] h-full">
                <div className="max-w-1/3 w-full min-h-[1075px] h-full bg-[#e8e8e4] rounded-lg flex items-end justify-center overflow-hidden">
                    <img src="/banner/banner-3.png" alt="banner image" className="w-full h-full object-contain" />
                </div> {/* left side */}

                <div className="max-w-1/3 w-full flex flex-col items-stretch justify-between h-[1075px] min-h-[756px]">
                    <div className="w-full h-[150px] bg-[#fcd5ce] rounded-lg flex items-center justify-center overflow-hidden">
                        <img className="w-full h-full object-cover" src="/banner/banner-peoples-2.png" alt="" />
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center py-8">
                        <h3 className="text-[#484848] text-[5vw] md:text-[91px] font-poppins font-medium uppercase leading-none">
                            ultimate <br />
                            <span className="text-white text-stroke text-[8vw] md:text-[145px]">sale</span>
                        </h3>
                        <p className="text-[#484848] text-xl font-normal font-poppins uppercase mb-5">new collection</p>
                        <Link to={''} className="text-white font-poppins font-medium px-6 py-2.5 bg-black rounded-lg inline-block text-xl uppercase mb-8">shop now</Link>
                    </div>

                    <div className="w-full h-[150px] bg-[#ffe5d9] rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src="/banner/banner-7.avif" alt="" />
                    </div>
                </div>

                <div className="max-w-1/3 w-full min-h-[1075px] h-full bg-[#ffe5d9] rounded-lg flex items-end justify-center overflow-hidden">
                    <img src="/banner/banner-6.png" alt="banner image" className="w-full h-full object-contain" />
                </div> {/* right side */}
            </div>
        </div> 
    </div>
  )
}

export default Banner