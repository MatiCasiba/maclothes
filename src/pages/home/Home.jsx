import Banner from "../../components/banner/Banner"
import Brand from "../../components/brand/Brand"
import Deals from "../../components/deals/Deals"
import HomeNavbar from "../../components/homeNavbar/HomeNavbar"
import NewArrival from "../../components/newArrival/NewArrival"

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

    </div>
  )
}

export default Home