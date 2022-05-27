import React from 'react';
import AvailableItems from './AvailableItems';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableItems></AvailableItems>
        </div>
    );
};

export default Home;