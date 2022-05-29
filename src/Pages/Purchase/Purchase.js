import React, { useEffect, useState } from 'react';

const Purchase = () => {

    const [purchase, setPurchase] = useState([])
    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            <h2>This is purchase</h2>
        </div>
    );
};

export default Purchase;