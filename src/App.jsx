import { useEffect } from 'react'
import { fetchDataFromAPI } from './UTILS/API'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { getApiConfigurations,getGeners } from './Store/homeSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchResult from './pages/SearchResult/SearchResult';
import Home from './pages/Home/Home';
import Details from './pages/details/Details';
import Explore from './pages/Explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import './App.css'

function App() {
  const dispatch = useDispatch()
  const {url}=useSelector((state)=>state.home)
  useEffect(() => {
    fetchApiConfig()
    genresCall()
    
  }, []);
  const fetchApiConfig = ()=>{
    fetchDataFromAPI('/configuration')
      .then((res)=>{
        console.log(res)
        const url={
          backdrop:res.images.secure_base_url+'original',
          poster:res.images.secure_base_url+'original',
          profile:res.images.secure_base_url+'original',
        }
        dispatch(getApiConfigurations(url))
      })
  }
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromAPI(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGeners(allGenres));
};
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:mediaType/:id' element={<Details />} />
          <Route path='/search/:query' element={<SearchResult/>} />
          <Route path='/explore/:mediaType/' element={<Explore/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
