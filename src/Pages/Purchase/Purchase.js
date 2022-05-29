import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import usePurchase from '../../hooks/usePurchase';


const Purchase = () => {
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();

    }

    return (
        <form onSubmit={handlePlaceOrder} className='flex flex-col items-center mt-20'>
            <input type="text" value={user?.displayName} className="input input-bordered input-primary w-2/6 block mt-2" />
            <input type="text" value={user?.email} className="input input-bordered input-primary w-2/6 block mt-2" />
            <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
            <input type="text" className="input input-bordered input-primary w-2/6 block mt-2" />
            <button className='btn btn-primary mt-3'>Order Now</button>
        </form>

    );
};

export default Purchase;