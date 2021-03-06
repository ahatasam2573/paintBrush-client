import React from 'react';
import AvailableItems from './AvailableItems';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary';
import ImproveSection from './ImproveSection';
import ProductManagement from './ProductManagement';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableItems></AvailableItems>
            <BusinessSummary></BusinessSummary>
            <Testimonial></Testimonial>
            <ImproveSection></ImproveSection>
            <ProductManagement></ProductManagement>
        </div>
    );
};

export default Home;