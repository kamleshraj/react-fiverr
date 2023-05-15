import React from 'react'
import '../catCard/card.scss'

const Card = ({subTitle,title,imgUrl}) => {
  return (
    <div className='catCard'>
      <img src={imgUrl} alt='card'/>
      <div className='card-content'>
        <div>{subTitle}</div>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Card