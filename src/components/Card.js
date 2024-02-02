import React from 'react'
import './Card.css'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa'

const Card = (props ) => {
    let review = props.review;
  return (
    <div className='book'>
        <div className='image'>       
                <img className='photo' src='hero.png' alt='images' />
              {/* <h2 className='images'>{review.image}</h2> */}
                <div className='circle' ></div>
        </div>

        <div className='name' >
            <h2 className='name1'>{review.name}</h2>
        </div>

         <div className='job'>
            <p className='job1'>{review.job}</p>
         </div>

         <div className='qoute'>
             <FaQuoteLeft/>
         </div>

         <div className='review'>
            {review.text}
         </div>

         <div className='qoute1'>
            <FaQuoteRight/>
         </div>

        
    </div>
  )
}

export default Card;
