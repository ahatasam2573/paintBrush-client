import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const navigate = useNavigate();
    const handleNavigateToPurchase = () => {
        navigate('/purchase');
    }
    const { name, description, price, picture, quantity, minimumOrder } = item;
    return (
        <div className="card lg:max-w-lg bg-primary shadow-xl m-6">
            <figure className="px-10 pt-10">
                <img src={picture} alt={name} className="rounded-xl w-52 h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent text-2xl">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-accent'>Price: {price}$</p>
                <p>Quantity: {quantity}</p>
                <p>Minimum Order: {minimumOrder}</p>
                <div className="card-actions">
                    <button onClick={handleNavigateToPurchase} className="btn btn-accent text-white">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Item;