import React from 'react'
import '../styles/VideoCard.css'

const playButton=<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85V9.85L38 23.85ZM19 23.85ZM19 32.4 32.45 23.85 19 15.3Z"/></svg>

const VideoCard = ({image,name,index}) => {
  return (
    <div className="videoCard" style={{backgroundImage:`url(${image})`}}>
        <a href="#/">{playButton}</a>
        <p>{name}</p>
    </div>
  )
}

export default VideoCard