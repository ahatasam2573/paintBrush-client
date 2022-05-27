import React from 'react';
import { CurrencyDollarIcon, FlagIcon, LocationMarkerIcon, } from '@heroicons/react/solid'

const BusinessSummary = () => {
    return (
        <div>
            <h2 className='text-center text-3xl py-4 text-accent'>Millions of Peoples take service from our website</h2>
            <h4 className='text-center text-xl py-2 text-secondary'>Always try to serve good products</h4>
            <div className='flex justify-center items-center'>
                <div>
                    <FlagIcon className='h-48 w-48'></FlagIcon>
                    <p className='text-center text-2xl text-accent'>100 Countries</p>
                </div>
                <div>
                    <LocationMarkerIcon className='h-48 w-48'></LocationMarkerIcon>
                    <p className='text-center text-2xl text-accent'>Location</p>
                </div>
                <div>
                    <CurrencyDollarIcon className='h-48 w-48'></CurrencyDollarIcon>
                    <p className='text-center text-2xl text-accent'>We accept only on dollar</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;