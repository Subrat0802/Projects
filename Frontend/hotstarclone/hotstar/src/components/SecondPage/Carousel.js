import React, { useState, useEffect } from 'react';
import { SECOND_PAGE_CAROUSEL } from '../../utils/images';

const Carousel = () => {
    const [carImg, setCarImg] = useState(SECOND_PAGE_CAROUSEL[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % SECOND_PAGE_CAROUSEL.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setCarImg(SECOND_PAGE_CAROUSEL[index]);
    }, [index]);

    return (
        <div className='w-full  '>
            <img className='mt-14' src={carImg} alt="carousel"/>
        </div>
    );
};

export default Carousel;








// import React, { useState } from 'react'
// import { SECOND_PAGE_CAROUSEL } from '../../utils/images'

// const Carousel = () => {
//     const [carImg, setCarImg] = useState();

//     let i=0;
//     useState(() => {
//         setInterval(() => {
//             setCarImg(SECOND_PAGE_CAROUSEL[i]);
//             if(i < SECOND_PAGE_CAROUSEL.length){
//                 i++;
//             }
//             else if(SECOND_PAGE_CAROUSEL.length === i){
//                 i=0;
//             }
//         }, 3000);
//     }, [])


//   return (
//     <div className='w-full h-[100vh] '>
//         <img className='' src={carImg}/>
//     </div>
//   )
// }

// export default Carousel