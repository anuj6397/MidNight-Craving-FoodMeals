// Items.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CiTimer } from 'react-icons/ci'
import { FcRating } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { AddItems } from '../Redux/CardSlice'

export default function Items() {
  const [items, setItems] = useState([])
  const dispatch = useDispatch()

  

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => 
        setItems(res.data.recipes) )
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div style={{ marginLeft: '90px' }} className='card-heading'>
        <h4 style={{ marginTop: '5rem', fontWeight: '700' }}>
          Explore a Wide Variety of Dishes Perfect for Every Mood and Craving
        </h4>
      </div>

      <div className="card-container">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} className="card-img" alt={item.name} />
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
              <div className='card-title' style={{ marginTop: '1.3rem' }}>
                <h3>{item.name}</h3>
                <p><b>₹{item.caloriesPerServing}</b></p>
                <button className='card-btn' onClick={() => dispatch(AddItems({ id: item.id, image: item.image, name: item.name, price: item.caloriesPerServing, qty: 1 }))}>
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
