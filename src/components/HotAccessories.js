import React from 'react'
import HotItemCard from './HotItemCard.js'
import '../styles/hotaccessories.css'

const HotAccessories = ({music,musicCover,smartdevice,smartdevicecover,home,homecover,lifestyle,lifestylecover,moblieaccessories,moblieaccessoriescover}) => {
    return (
      <div className='hotaccessories'>
          <div>
          <img src={musicCover||smartdevicecover||homecover||lifestylecover||moblieaccessoriescover} alt="cover" />
          </div>
  
          {/* second part */}
          <div>
              {music && music.map((item,index)=>(
                  <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
              ))}
              {smartdevice && smartdevice.map((item,index)=>(
                  <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
              ))}
              {home && home.map((item,index)=>(
                  <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
              ))}
              {lifestyle && lifestyle.map((item,index)=>(
                  <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
              ))}
              {moblieaccessories && moblieaccessories.map((item,index)=>(
                  <HotItemCard key={item.image}  name={item.name} price={item.price} image={item.image} index={index} />
              ))}
  
              <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
          </div>
      </div>
  
    )
  }
  
  export default HotAccessories