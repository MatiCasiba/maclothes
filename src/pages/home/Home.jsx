import Banner from "../../components/banner/Banner"
import Blinder from "../../components/blinder/Blinder"
import Brand from "../../components/brand/Brand"
import Deals from "../../components/deals/Deals"
import FollowUs from "../../components/followUs/FollowUs"
import HomeNavbar from "../../components/homeNavbar/HomeNavbar"
import NewArrival from "../../components/newArrival/NewArrival"
import Testimonial from "../../components/testimonial/Testimonial"

const Home = () => {
  return (
    <div className="">
        {/* home page navbar */}
        <HomeNavbar />

        {/* banner component */}
        <div>
            <Banner />
        </div>

        {/* brand component */}
        <div>
            <Brand />
        </div>

        {/* deals component */}
        <div>
          <Deals />
        </div>

        <div>
          <NewArrival />
        </div>

        {/* blinder component */}
        <div>
          <Blinder />
        </div>

        {/* follow us component */}
        <div>
          <FollowUs />
        </div>

        {/* testimonial component */}
        <div>
          <Testimonial />
        </div>

    </div>
  )
}

export default Home