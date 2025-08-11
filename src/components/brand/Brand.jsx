import React from 'react'

const Brand = () => {
    return (
        <divc className="w-full min-h-[200px] bg-white pt-5">
            <div className='lg:container mx-auto'>
                <div className=" w-full min-h-[200] flex items-center justify-between gap-8">
                    {/* brand wrapper */}
                    <div className='cursor-pointer'> 
                        <img src="/brand/macowens-esc.png" alt="brand macowens" />
                    </div>

                    <div className='cursor-pointer'> 
                        <img src="/brand/prada.webp" alt="brand prada" />
                    </div>

                    <div className='cursor-pointer'> 
                        <img src="/brand/markova.jpg" alt="brand markova" />
                    </div>

                    <div className='cursor-pointer'> 
                        <img src="/brand/zara.png" alt="brand zara" />
                    </div>
                </div>
            </div>
        </divc>
    )
}

export default Brand