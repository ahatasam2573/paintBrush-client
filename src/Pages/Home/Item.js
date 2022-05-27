import React from 'react';

const Item = ({ item }) => {
    const { name, description, price, picture } = item;
    return (
        <div class="card lg:w-lg bg-primary shadow-xl m-6">
            <figure class="px-10 pt-10">
                <img src={picture} alt={name} class="rounded-xl w-52 h-52" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-accent text-2xl">{name}</h2>
                <p>{description}</p>
                <p className='text-2xl text-accent'>Price:{price}$</p>
                <div class="card-actions">
                    <button class="btn btn-accent text-white">Buy Now</button>
                </div>
            </div>
        </div >
    );
};

export default Item;