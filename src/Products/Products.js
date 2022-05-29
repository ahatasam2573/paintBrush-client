import React from 'react';
import { useNavigate } from 'react-router-dom';
import useItems from '../hooks/useItems';

const Products = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();

    const handleNavigateToPurchase = () => {
        navigate('/purchase');
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                items?.map(item => <div className="card lg:max-w-lg bg-primary shadow-xl m-6">
                    <figure className="px-10 pt-10">
                        <img src={item.picture} alt={item.name} className="rounded-xl w-52 h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-accent text-2xl">{item.name}</h2>
                        <p>{item.description}</p>
                        <p className='text-2xl text-accent'>Price: {item.price}$</p>
                        <p className='p-0'>Quantity: {item.quantity}</p>
                        <p className='p-0'>Minimum Order: {item.minimumOrder}</p>
                        <div className="card-actions">
                            <button onClick={handleNavigateToPurchase} className="btn btn-accent text-white">Buy Now</button>
                        </div>
                    </div>
                </div >)
            }
        </div>
    );
};

export default Products;