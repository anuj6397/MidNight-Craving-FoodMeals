
import img from './Image/logo.png';
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from 'react-icons/io';
import { MdMiscellaneousServices } from 'react-icons/md';
import { useEffect, useState } from 'react';
import CartItems from './CartItems';
import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState('');
    const [showLocationModal, setShowLocationModal] = useState(false);

    const [locationInput, setLocationInput] = useState('');
    const [locationData, setLocationData] = useState({});

    const getLocation = async () => {
        try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            setLocationData(data);
            setLocationInput(`${data.city}, ${data.region}, ${data.country_name}`);
        } catch (error) {
            console.error("Error fetching location:", error);
        }
    };

    useEffect(() => {
        getLocation();
    }, []);

    const handleLocation = () => {
        // Already fetched data in getLocation(); You can just close the modal or update anything if needed.
        setShowLocationModal(false);
    };

    const items = useSelector(state => state.cart);
    

    const showList = (page) => {
        setToggle(true);
        setCurrentPage(page);
    };

    const showLocation = (page) => {
        setShowLocationModal(true);
        setCurrentPage(page);
    };


    return (
        <>
            <div className="nav-container">
                {toggle && <div className="overlay open" onClick={() => setToggle(false)} />}
                {showLocationModal && <div className="overlay open" onClick={() => setShowLocationModal(false)} />}

                {/* Sidebar */}
                <div className={`sidebar ${toggle ? "open" : ""}`}>
                    {currentPage === 'cart' && <CartItems />}
                </div>
                <div className={`sidebarr ${showLocationModal ? "open" : ""}`}>
                    {currentPage === 'location' && <GeoLocation locationInput={locationInput} setLocationInput={setLocationInput} handleLocation={handleLocation} locationData={locationData} />}
                </div>

                {/* Navbar Main */}
                <div className="nav-logo"><a href='/'><img src={img} alt="logo" /></a><h4>MidNight-Craving</h4>

                    <div className="nav-location" onClick={() => showLocation('location')} style={{ cursor: 'pointer' }}>
                        <span>
                            <CiLocationOn className="location" /> Locations{' '}
                            <IoIosArrowDown style={{ fontSize: '1rem', color: 'red' }} />
                        </span>
                        {locationInput || "Loading..."}
                    </div>
                </div>


                {/* Navigation List */}
                <div className='nav-list'>
                    <ul>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/service"><MdMiscellaneousServices className='icon' />Service Us</a></li>
                        <li onClick={() => showList('cart')} style={{ cursor: 'pointer' }}>
                            <AiOutlineShoppingCart className='style-cart' style={{ fontSize: '1.5rem' }} />
                            <sup style={{ color: 'red', fontSize: '0.95rem' }}>{items.length}</sup>
                        </li>
                    </ul>
                </div>
            </div>
  

        </>
    );
}

function GeoLocation({ locationInput, setLocationInput, handleLocation, locationData }) {
    return (
        <div className="location-container" style={{ padding: '1rem' }}>
            <h4>Select Location</h4>
            <input type='text' placeholder='Location...' className="Location-input" value={locationInput} onChange={(e) => setLocationInput(e.target.value)} />
            <button className='location-btn' onClick={handleLocation}>Confirm Location</button>

            {locationData?.country_name && (
                <>
                    <span>
                        <CiLocationOn className="location" /> Location{' '}
                        <a href='/'><IoIosArrowDown style={{ fontSize: '1rem', color: '#0acb0a' }} /></a>
                    </span>
                </>
            )}

        </div>
    );
}
