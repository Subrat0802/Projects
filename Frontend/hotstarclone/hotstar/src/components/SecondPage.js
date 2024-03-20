import React from 'react'
import Carousel from './SecondPage/Carousel'
import SecondaryContainer from './SecondPage/SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
const SecondPage = () => {

    useNowPlayingMovies();

  return (
    <div className='bg-[#141414]'>
        <Carousel />
        <SecondaryContainer />
    </div>
  )
}

export default SecondPage