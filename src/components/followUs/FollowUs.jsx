
const FollowUs = () => {

  const followers = [
    {
        id: 1,
        image: '/followers/follower-1.avif',
        width: '320',
        height: '308'
    },
    {
        id: 2,
        image: '/followers/follower-2.avif',
        width: '256',
        height: '380'
    },
    {
        id: 3,
        image: '/followers/follower-3.avif',
        width: '256',
        height: '308'
    },
    {
        id: 4,
        image: '/followers/follower-4.avif',
        width: '256',
        height: '380'
    },
    {
        id: 5,
        image: '/followers/follower-5.avif',
        width: '256',
        height: '308'
    },
    {
        id: 6,
        image: '/followers/follower-6.avif',
        width: '256',
        height: '380'
    },
    {
        id: 7,
        image: '/followers/follower-7.avif',
        width: '256',
        height: '308'
    }
  ]

  return (
    <div className="w-full pb-[150px]">
        <div className="w-full flex flex-col items-center mb-[80px]">
            <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">follow us on instagram</h3>
            <p className="text-base text-[#8a8a8a] font-poppins font-normal max-w-[614px] w-full">Join our community and stay updated with the latest trends!</p>
        </div>
        <div className="flex items-center">
            {
                followers?.map((follower) => (
                    <div key={follower?.id} className={`min-h-[${follower?.height}px] h-full w-[${follower?.width}px] w-full`}>
                        <img src={follower?.image} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FollowUs