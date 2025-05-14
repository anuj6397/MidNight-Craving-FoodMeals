import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img from './Image/logo2.png'
import img1 from './Image/img3.jpg'


export default function Menu() {
  const [slide, setSlide] = useState(5);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes/tags")
      .then(res => res.data)
      .then(data => setCategory(data));
  }, []);

  const handlePrev = () => {
    if (slide > 0) setSlide(slide - 5);
  };

  const handleNext = () => {
    if (slide + 5 < category.length) setSlide(slide + 5);
  };

  return (
    <>
    <div className='menu-conatiner'>
      <div className='menu-para'>
        <p>Tell me what’s keeping that pretty mind of yours so quiet</p>
      </div>
      <div className='menu-conatinerImg'>
         <img src={img1}/>
      </div>
      
    </div>


    <div  style={{marginLeft:"8%",marginTop:'1.4rem'}}>
    <h2 style={{ fontSize: '1.5rem',fontWeight:'bold' }}>What's on your mind?</h2>
    </div>
      <div className="slider-container">
      
        <button className="prev-btn" onClick={handlePrev}>&#8592;</button>
        <button className="next-btn" onClick={handleNext}>&#8594;</button>
        <div className="horizontal-slider">
          {category.map((value, index) => (
            <div key={index} className="slide-item">
              <Link to={`/category/${value}`} style={{ textDecoration: 'none' }}>
                <p className='para' style={{ transform: `translateX(-${slide * 100}%)` }} ><img src={img} className='menu-img'  />{value}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <hr style={{ marginTop: '2rem' }} />
      
    </>
  );
}