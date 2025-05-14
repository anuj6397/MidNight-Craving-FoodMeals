import React, { useEffect, useState } from 'react';
import { CiTimer } from 'react-icons/ci';
import { FcRating } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddItems } from '../Redux/CardSlice';

export default function CategoryPage() {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    if (name) {
      fetch(`https://dummyjson.com/recipes/tag/${name}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes))
        .catch((err) => console.error(err));
    }
  }, [name]);

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2 style={{color:'#0acb0a'}}>Search Results for: {name}</h2>
      </div>
      <div className="card-container">
        {recipes?.map((item, index) => (
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
                <button className='btn'onClick={() => dispatch(AddItems({ id:item.id, image:item.image, name:item.name, price: item.caloriesPerServing, qty: 1}))}>Add Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
