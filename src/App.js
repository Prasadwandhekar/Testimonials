import React from 'react';
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './data';

function App() {
  return (
  
    <div className='App'>
    <div  className='data'>
        <h1 className='navbar' >Our Testimonials</h1>
        <div className='underline'></div>
        <Testimonial reviews={reviews}/>
    </div> 
    </div>
    
  );
}

export default App;
