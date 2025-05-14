import React, { useRef } from 'react'
import img1 from './Image/img1.png'
import img2 from './Image/nutrition-plan.png'
import img3 from './Image/diet.png'
import img4 from './Image/salad.png'
import img5 from './Image/nutrition.png'
import img6 from './Image/food.png'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { IoIosSend } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import img7 from './Image/beauty-woman-happy-eating-food-cartoon-hand-drawn-cartoon-art-illustration_979495-143953.avif'
import img8 from './Image/man-eating-lunch-illustration-isolated_18591-83960.avif'
import img9 from './Image/brain-power-food-vector-illustration-60829699.webp'
import Swal from 'sweetalert2'


export default function Service() {
   const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6dda7c7c-922a-4d7f-b48f-4df1b1be67dc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  const targetRef = useRef();

  const scrollToBottom = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className='service-container'>
        <div className='service-containerPara'>
          <p>Transform your health with</p>
          <p>personalized nutrition plans</p>
           <button onClick={scrollToBottom}>Get any query </button>
        </div>
        <div className='service-conatinerImg'>
          <img src={img1} height={'400px'} width={'400px'} />
        </div>
      </div>


      <div className='service-bigContainer'>
        <div className='service-containerbox'>
          <img src={img2} height={'90px'} width={'90px'} />
          <h4>Meal plan</h4>
          <p>A meal plan is a structured guide for daily eating to meet specific health or fitness goals.</p>
          <button><a href='/meal'style={{ textDecoration: 'none', color: 'black' }}>See More...</a></button>
        </div>
        <div className='service-containerbox'>
          <img src={img3} height={'90px'} width={'90px'} />
          <h4>Nutritional Level</h4>
          <p>Nutrition level refers to the amount and quality of nutrients in the food consumed.</p>
         <button><a href='/meal'style={{ textDecoration: 'none', color: 'black' }}>See More...</a></button>
        </div>
        <div className='service-containerbox'>
          <img src={img4} height={'90px'} width={'90px'} />
          <h4>Healthy Diet</h4>
          <p>A healthy diet is a balanced mix of nutritious foods for optimal health.s</p>
           <button><a href='/meal'style={{ textDecoration: 'none', color: 'black' }}>See More...</a></button>
        </div>
        <div className='service-containerbox'>
          <img src={img5} height={'90px'} width={'90px'} />
          <h4>Heathy strategy</h4>
          <p>A healthy strategy is a balanced approach to wellness through mindful habits.</p>
           <button><a href='/meal'style={{ textDecoration: 'none', color: 'black' }}>See More...</a></button>
        </div>
      </div>


      <div className='service-container2'>
        <div className=' service-container2Img'>
          <h3 className='service-h3'>How to work:</h3>
          <img src={img6} height={'350px'} width={'350px'} />
        </div>
        <div className='service-container2Para'>
          <p className='bold'>1.Why do we crave food late at night?</p>
          <p className='normal'>It’s usually boredom, stress, or irregular meal timings—not true hunger. But hey, your taste buds don’t know that at 1 AM!</p>
          <hr />
          <p className='bold'>2. What are some healthier midnight snack options?</p>
          <p className='normal'>Try Greek yogurt with honey, a banana, air-popped popcorn, or a handful of nuts.</p>
          <hr />
          <p className='bold'>3. What’s a quick fix when I’m craving something sweet at midnight?</p>
          <p className='normal'>A mug cake, a spoonful of Nutella, or a fruit smoothie can satisfy your sweet tooth without too much effort.</p>
          <button className='btn'><a href='/menu' style={{ textDecoration: 'none', color: 'black' }}>Our Menu...</a></button>
        </div>
      </div>


      <div className='service-container3'>
        <div className='service-conatiner'>
          <p className='service-core'>The core my work </p>
          <p className='service-para'>The "Midnight Craving – Get in Touch" section reflects a passion for late-night creativity and spontaneous innovation. It invites like-minded thinkers to connect, collaborate, and turn midnight ideas into meaningful realities.</p>
        </div>
        <div className='big-service-conatiner'>
          <div className='big-service-containerbox'>
            <div className='core-cards'>
                <h4>Your Body's Natural Healing</h4>
              <img src={img7} height={'200px'} width={'200px'} />
            </div>
          </div>
         
            <div className='big-service-containerbox'>
              <div className='core-cards'>
            <h4>Biochemical balance</h4>
           <img src={img8} height={'200px'} width={'200px'} />
            </div>
          </div>
         
            <div className='big-service-containerbox'>
            <div className='core-cards'>
              <h4>The Power of Mindset</h4>
              <img src={img9} height={'200px'} width={'200px'} />
            </div>
          </div>
        </div>
      </div>

      <div className="service-body">
        <div className="service-text">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <IoShieldCheckmarkOutline className="icon" />
              "Craving an idea? Let’s brew some creativity over a midnight chai!"
            </li>
            <li>
              <IoShieldCheckmarkOutline className="icon" />
              "Got an urgent thought? Don’t let the midnight munchies get in the way — reach out!"
            </li>
            <li>
              <IoShieldCheckmarkOutline className="icon" />
              "Midnight snack? We serve solutions – let’s turn that craving into something awesome!"
            </li>
          </ul>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/anuj-rajput-7279b81b9/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={{ fontSize: '2rem', color: '#0077B5' }} />
            </a>
            <a href="https://github.com/anuj6397" target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ fontSize: '2rem', color: '#000' }} />
            </a>
            <a href="https://www.instagram.com/__anujrajput_6397/" target="_blank" rel="noopener noreferrer">
              <FaInstagram style={{ fontSize: '2rem', color: '#E1306C' }} />
            </a>
            <a href="mailto:anujk702441@gmail.com" target="_blank">
              <MdEmail style={{ fontSize: '2rem', color: 'green' }} />
            </a>
          </div>
        </div>

        <form className="service-form" onSubmit={onSubmit}ref={targetRef}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea name="message" placeholder="Your message here..." />

          <button className="service-btn" type="submit">
            Submit <IoIosSend className="send-icon" />
          </button>
        </form>
      </div>

    </>
  )
}
