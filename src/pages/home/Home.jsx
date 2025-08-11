import Banner from "../../components/banner/Banner"
import Brand from "../../components/brand/Brand"
import HomeNavbar from "../../components/homeNavbar/HomeNavbar"

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

    </div>
  )
}

export default Home