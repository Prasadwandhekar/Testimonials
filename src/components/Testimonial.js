import React, { useState } from 'react'
import Card from './Card'
// import reviews from '../data'
import './Card.css'

import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';


const Testimonial = (props) => {
    let reviews = props.reviews;

    const [index ,setIndex] = useState(0);

    function leftshithandler (){
          if(index -1 <0 ){
            setIndex(reviews.length-1);
          } 
          else{
            setIndex(index-1);
          }
    }

    function rightshifthandler (){
          if(index+1 >=  reviews.length){
            setIndex(0);
          }
          else{
            setIndex(index+1);
          }
    }

    function surprisehandler (){
      let randomIndex = Math.floor (Math.random() * reviews.length);
      setIndex(randomIndex);
    }




  return (
    <div className='card'>
         <Card review={reviews[index]}></Card>

         <div className='btn'>
            <button 
              onClick={leftshithandler}
             className='left'>
                <FiChevronLeft/>
            </button>
            <button 
              onClick={rightshifthandler}
            className='right'>
                <FiChevronRight/>
            </button>
         </div>

         <div className='button'>
            <button
            onClick={surprisehandler}
             className='btn1'>
                Surprise Me
            </button>
         </div>
          
    </div>
  )
}

export default Testimonial
