
import React from 'react'

const PriceAndTime = ({ onClick, children }) => {
  return (
    <div>
     <button onClick={onClick} className=' g_show_btn'>{children}</button>
    </div>
  )
}

export default PriceAndTime
