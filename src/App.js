import './App.css';
import PreNavBar from './components/PreNavBar';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  
  return (
  <Router>
    
    <PreNavBar />
    <Navbar />
    
    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>



    <Slider start={data.banner.start} />
    <Offers offer={data.offer} />
    <Heading text="STAR PRODUCTS" />
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES" />
    <HotAccessoriesMenu />
    
    <Routes>
      <Route exact path="/musicStore"  
        element = {<HotAccessories music = {data.hotAccessories.music} musicCover = {data.hotAccessoriesCover.music}/>}/>
      <Route exact path="/smartDevices"  
        element = {<HotAccessories smartdevice = {data.hotAccessories.smartDevice} smartdevicecover = {data.hotAccessoriesCover.smartDevice}/>}/>
      <Route exact path="/home"  
        element = {<HotAccessories home = {data.hotAccessories.home} homecover = {data.hotAccessoriesCover.home}/>}/>
      <Route exact path="/lifestyle"  
        element = {<HotAccessories lifestyle = {data.hotAccessories.lifeStyle} lifestylecover = {data.hotAccessoriesCover.lifeStyle}/>}/>
      <Route exact path="/mobileAccessories"  
        element = {<HotAccessories moblieaccessories = {data.hotAccessories.mobileAccessories} moblieaccessoriescover = {data.hotAccessoriesCover.mobileAccessories}/>}/>
      </Routes>
    
   <Heading text="PRODUCT REVIEWS" />

   <ProductReviews ProductReviews={data.productReviews} />

   <Heading text="VIDEOS" />

   <Videos videos={data.videos}/>

   <Heading text="IN THE PRESS" />

   <Banner banner={data.banner} />
   <Footer footer={data.footer}/>

   </Router>
  );
}

export default App;
