const FollowUs = () => {
    const followers = [
        {
            id: 1,
            image: '/followers/follower-1.avif',
        },
        {
            id: 2,
            image: '/followers/follower-2.avif',
        },
        {
            id: 3,
            image: '/followers/follower-3.avif',
        },
        {
            id: 4,
            image: '/followers/follower-4.avif',
        },
        {
            id: 5,
            image: '/followers/follower-5.avif',
        },
        {
            id: 6,
            image: '/followers/follower-6.avif',
        },
        {
            id: 7,
            image: '/followers/follower-7.avif',
        }
    ];

    return (
        <div className="w-full pb-[150px]">
            <div className="w-full flex flex-col items-center mb-[80px]">
                <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">follow us on instagram</h3>
                <p className="text-base text-[#8a8a8a] font-poppins font-normal max-w-[614px] w-full">Join our community and stay updated with the latest trends!</p>
            </div>
            <div className="flex items-end gap-4 justify-center">
                {
                followers.map((follower) => (
                    <div 
                        key={follower.id} 
                        className={
                            follower.id === 2 || follower.id === 4 || follower.id === 6 
                                ? "w-[180px] md:w-[256px] h-[270px] md:h-[380px] rounded-lg overflow-hidden flex items-end" 
                                : "w-[120px] md:w-[160px] h-[150px] md:h-[220px] rounded-lg overflow-hidden flex items-end"
                            }
                    >
                        <img src={follower.image} alt="" className="w-full h-full object-cover" />
                    </div>
                ))
                }
            </div>
        </div>
    );
} 

export default FollowUs;