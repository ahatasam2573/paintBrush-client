import React from 'react';
import AvailableItems from './AvailableItems';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableItems></AvailableItems>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;