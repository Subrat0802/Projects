import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ItemCards from './ItemCards'

const MenuItems = () => {
  const [showIndex, setShowIndex] = useState(null)
  const itemsData = useSelector((store) => store.restsReducer.restaurantsMenuItems ) || null

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])
  return (
    <div className='mt-7'>
      {
        itemsData === null ? <h1>Loading...</h1> : itemsData.map((el, index) => (
          
            <div>
                <ItemCards data={el?.card?.card} 
                  showItems={index === showIndex ? true : false}
                  showIndex
                  setShowIndex={() => setShowIndex(showIndex === null ? index : null)} 
              />
            </div> 
          
        ))
      }
    </div>
  )
}

export default MenuItems