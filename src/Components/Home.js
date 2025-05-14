import React from 'react';
import Category from './Category';
import Items from './Items';
import Hero from './Hero';


function Home() {
  return (
    <>
 
    <div>
      <section>
        <Hero/>
      </section>
      
      <section>
        <Category />
      </section>
      
      <section>
        <Items />
      </section>
    </div>
 
       
       </>
  );
}

export default Home;
