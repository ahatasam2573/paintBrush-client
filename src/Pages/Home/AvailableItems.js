import React, { useState } from 'react';
import Item from './Item';
import { useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { format } from 'date-fns';

const AvailableItems = () => {
    const [items, setItems] = useItems();
    const [date, setDate] = useState(new Date());
    const cutItems = items.slice(0, 3)
    const navigate = useNavigate();


    const handleNavigateToAllProducts = event => {
        event.preventDefault();
        navigate('/products')
    }

    return (
        <div>
            <h2 className='my-5  text-center text-3xl text-accent pb-0 font-bold'>Our Provide Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    cutItems.map(item => <Item
                        key={item._id}
                        item={item}
                        selected={date}
                        onSelect={setDate}
                    ></Item>)
                }
            </div>
            <button style={{ display: 'block', marginLeft: 'auto', marginRight: '0px' }} onClick={handleNavigateToAllProducts} className='btn btn-accent text-white w-70 mb-7'>Explore More Products</button>
        </div>

    );
};

export default AvailableItems;