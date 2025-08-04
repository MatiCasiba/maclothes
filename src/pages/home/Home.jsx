import Banner from "../../components/banner/Banner"
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

    </div>
  )
}

export default Home