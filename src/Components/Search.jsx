import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

import { FcRating } from 'react-icons/fc';
import { CiTimer } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { AddItems } from '../Redux/CardSlice';

export default function Search() {
  const { searchId } = useParams(); 
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchId) {
      axios.get(`https://dummyjson.com/recipes/search?q=${searchId}`)
        .then((res) => res.data)
        .then((data) => {
          setSearchResults(data.recipes); 
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [searchId]); 

  return (
    <>
     <div style={{textAlign:'center',marginTop:'3rem'}}>
      <h2 style={{color:'#0acb0a'}}>Search Results for: {searchId}</h2>
      </div>
      {searchResults.length>1?
    <div className="card-container">
       {searchResults?.map((item, index) => (
            <div className="card" key={index}>
            <img src={item.image} className="card-img" alt="recipe" />
            <div className="card-body">
              <div className="card-top-info">
                <div className="info-item">
                  <CiTimer className="info-icon timer-icon" />
                  <span>{item.prepTimeMinutes} mins</span>
                </div>
                <div className="info-item">
                  <FcRating className="info-icon" />
                  <span>{item.rating}</span>
                </div>
              </div>
              <div style={{ marginTop: '1.3rem' }}>
                <h3>{item.name}</h3>
                <p><b>₹{item.caloriesPerServing}</b></p>
                <button className='btn' onClick={() => dispatch(AddItems({ id:item.id, image:item.image, name:item.name, price: item.caloriesPerServing, qty: 1}))}>Add Cart</button>
              </div>
            </div>
          </div>
      ))}
    </div>:<div style={{textAlign:'center',color:'#0acb0a',fontSize:'1.5rem',marginTop:'5rem'}}>Not Found</div>}
    </> 
  );
}
