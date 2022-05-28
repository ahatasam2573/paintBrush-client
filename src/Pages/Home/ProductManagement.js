import React from 'react';

const ProductManagement = () => {
    return (
        <div className="hero max-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <img style={{ height: '300px', width: '600px' }} src="https://images.unsplash.com/photo-1515774196898-32cfeafc353c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt='pic' />
                <div className='px-9 ml-9'>
                    <h1 className="text-4xl font-bold"><span className='text-9xl text-primary'>P</span>roduct Management</h1>
                    <ul className='py-6 text-xl'>
                        <li><h4>List Product</h4></li>
                        <li><h4>Add a New Product</h4></li>
                        <li><h4>Product Variations</h4></li>
                        <li><h4>Selling Price Group</h4></li>
                        <li><h4>Product Units</h4></li>
                        <li><h4>Product Brand List</h4></li>
                        <li><h4>Add Product Brands</h4></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductManagement;