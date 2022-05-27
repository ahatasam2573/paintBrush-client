import React from 'react';
import AvailableItems from './AvailableItems';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableItems></AvailableItems>
            <BusinessSummary></BusinessSummary>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;