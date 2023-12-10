import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mt-10'>
           <Banner></Banner>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;