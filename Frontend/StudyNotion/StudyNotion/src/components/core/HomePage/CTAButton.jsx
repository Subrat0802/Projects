import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({children, active, linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold transition-all duration-200 
                ${active ? "bg-yellow-25 text-black" : "bg-richblack-800"} hover:scale-95 `}>
            {children}
        </div>
    </Link>
  )
}

export default CTAButton