import Hero from "../components/Hero"
import NewArrivals from "../components/NewArrivals"
import ShopByCategory from "../components/ShopByCategory"
import ShoppingStats from "../components/ShoppingStats"
import TopRated from "../components/TopRated"

const Home = () => {
  return (
    <div>
      <Hero />
      <ShoppingStats />
      <ShopByCategory />
      <TopRated />
      <NewArrivals />
    </div>
  )
}

export default Home