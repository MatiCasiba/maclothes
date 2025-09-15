import { Link } from "react-router"


const Blinder = () => {
  return (
    <div className="w-full pb-[150px] pt-[150px]">
        <div className="lg:container mx-auto">

            {/* top wrapper */}
            <div className="flex items-center">
                <div className="max-w-1/2 w-full min-h-[570px]">
                    <img className="w-full h-full object-cover min-h-[570px]" src="/blinder/blinder_1.png" alt="blinder image" />
                </div>
                <div className="max-w-1/2 w-full min-h-[570px] bg-[#dadada] p-8 flex justify-center flex-col">
                    <span className="text-base text-[#767676] font-poppins font-normal capitalize mb-5 block">women collections</span>
                    <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">peaky blinders</h3>
                    <span className="text-base text-black font-poppins font-normal uppercase underline mb-5 block">description</span>
                    <p className="text-base text-[#767676] font-poppins font-normal mb-5 max-w-[515px] w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure vitae excepturi nihil dicta neque autem?</p>
                    <p className="text-base text-[#767676] font-poppins font-normal capitalize">size: <span className="inline-block px-4 py-1 bg-black rounded-sm text-white ml-3 mb-5">m</span></p>
                    <p className="text-2xl text-black mb-5">$100.00</p>
                    <Link to={'/shop'} className="text-base text-white font-poppins font-medium capitalize px-6 py-2.5 bg-black rounded-lg max-w-[270px] w-full h-auto flex items-center justify-center">buy now</Link>
                </div>
            </div>

            {/* bottom wrapper */}
            
        </div>
    </div>
  )
}

export default Blinder