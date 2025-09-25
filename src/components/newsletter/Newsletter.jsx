
const Newsletter = () => {
  return (
    <div className="w-full bg-white pt-[150px] pb-[50px]">
        <div className="lg:container mx-auto">
            <div className="flex items-center justify-between">

                {/* left side wrapper */}
                <div className="max-w-[355px] w-full min-h-[747px] h-full">
                    <img className="w-full h-full object-cover" src="/newsletter/newsletter-1.webp" alt="newsletter image" />
                </div>

                {/* middle side wrapper */}
                <div className="flex items-center flex-col gap-5 max-w-[630px] w-full p-8 shadow-2xl rounded-xl">
                    <h1 className="text-4xl text-[#484848] font-normal capitalize">subscribe to our newsletter</h1>
                    <p className="text-base text-[#8a8a8a] font-poppins font-normal text-center max-w-[614px] w-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, vitae iste cum tempora illo eligendi laboriosam vero ex similique non.</p>
                    <form className="w-full flex flex-col gap-6">
                        <input 
                            className="border border-[#e0e0e0] rounded-md p-3" 
                            type="text" 
                            placeholder="demo@gmail.com"
                        />
                        <button className="bg-black text-white font-poppins rounded-md p-3 cursor-pointer" type="submit">Subscribe</button>
                    </form>
                </div>

                {/* right side wrapper */}
                <div className="max-w-[355px] w-full min-h-[747px] h-full">
                    <img className="w-full h-full object-cover" src="/newsletter/newsletter-2.webp" alt="newsletter image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter