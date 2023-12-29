import HeroBanner from './HeroBanner/HeroBanner'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'
import Trending from './Trending/Trending'
import './styles.scss'

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home