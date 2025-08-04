import { Link } from "react-router"

const Banner = () => {
  return (
    <div className="w-full pt-[90px]">
       <div className="lg:container mx-auto">
            <div className="flex items-center justify-between gap-6 min-h-[756px] h-full">
                <div className="max-w-1/3 w-full min-h-[756px] h-full bg-[#e8e8e4] rounded-lg flex items-end justify-center">
                    <img src="/banner/banner-3.png" alt="banner image" />
                </div> {/* left side */}

                <div className="max-w-1/3 flex flex-col items-baseline justify-between">
                    <div className="w-full min-h-[150px] h-full bg-[#fcd5ce] rounded-lg flex items-center justify-center">
                        <img className="w-full object-cover" src="/banner/banner-peoples-2.png" alt="" />
                    </div>

                    <div className="text-center">
                        <h3 className="text-[#484848] text-[91px] font-poppins font-medium uppercase">ultimate <br /><span className="text-white text-stroke text-[145px]">sale</span></h3>
                        <p className="text-[#484848] text-xl font-normal font-poppins uppercase mb-5">new collection</p>
                        <Link to={''} className="text-white font-poppins font-medium px-6 py-2.5 bg-black rounded-lg inline-block text-xl uppercase mb-8">shop now</Link>
                    </div>

                    <div className="min-h-[150px] h-full w-full bg-[#fcd5ce] rounded-lg">
                        <img className="w-full object-cover" src="/banner/banner-peoples-3.png" alt="" />
                    </div>
                </div>

                <div className="max-w-1/3 w-full min-h-[756px] h-full bg-[#ffe5d9] rounded-lg flex items-end justify-center">
                    <img src="/banner/banner-6.png" alt="banner image" />
                </div> {/* right side */}
            </div>
        </div> 
    </div>
  )
}

export default Banner