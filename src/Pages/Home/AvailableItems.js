import React, { useState, useEffect } from 'react';
import Item from './Item';

const AvailableItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('toolsItems.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='my-5  text-center text-3xl text-primary font-bold'>Our Provide Items</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default AvailableItems;