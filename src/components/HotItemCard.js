import React from 'react'
import '../styles/hotitemcard.css'

const HotItemCard = ({name,price,image,index}) => {
    return (
      <div className='hotitemcard'>
          <img src={image} alt= {`${index} card` }/>
          <p>{name}</p>
          <span>{price}</span>
  
  
      </div>
    )
  }
  
  export default HotItemCard