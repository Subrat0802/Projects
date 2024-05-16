import React from 'react'
import OfferCarousel from '../components/componentsHomePage/OfferCarousel'
import { CAROUSEL_OFFERS_IMG } from '../utils/mockData'
import ItemsCarousel from '../components/componentsHomePage/ItemsCarousel'
import Restaurants from '../components/componentsHomePage/Restaurants'


const Home = () => {

  // const locationSelector = useSelector(
  //   (store) => store.toggleLocationSideBar.showLocationSideBar
  // );
    

  return (
    <div className='min-h-[100vh] w-10/12 mx-auto '>
        
        <div className='pt-20'>
            <OfferCarousel data={CAROUSEL_OFFERS_IMG}/>
        </div>

        <div>
            <ItemsCarousel />
        </div>

        <div>
            <Restaurants />
        </div>
    </div>
  )
}

export default Home