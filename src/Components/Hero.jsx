import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import img2 from './Image/Sushi_replace.avif';
import img3 from './Image/Veggies_new.avif';
import { IoIosSearch } from 'react-icons/io';

export default function Hero() {
       const [searchQuery, setSearchQuery] = useState('');

    const searchQueryHandler = (e) => {
        if ((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0) {
            navigate(`/search/${searchQuery}`);
            setSearchQuery('');
            
        }
    };
     const navigate = useNavigate();
  return (
    <>
     {/*hero section start */}
            <div className="hero-container">
                <img src={img2} className="sideright-img" />
                <div className="hero-content">
                    <div className="hero2">
                        <p>Food & essentials delivered at midnight speed.</p>
                        <p>Discover best restaurants. Midnight Craving it!</p>
                    </div>

                    <div className="nav-search">
                        <span className="search-container">
                            <input type="text" placeholder="Search..."className="search-input"onChange={(e) => setSearchQuery(e.target.value)}onKeyUp={searchQueryHandler} value={searchQuery}
                            />
                            <IoIosSearch className="search-icon" />
                        </span>
                    </div>
                </div>
                <img src={img3} className="sideleft-img" />
            </div>
    </>
  )
}
