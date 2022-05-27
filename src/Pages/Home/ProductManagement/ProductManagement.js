import React from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
    const picture = 'https://images.unsplash.com/photo-1515774196898-32cfeafc353c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80';
    return (
        <div className='product-management-section'>
            <div className='product-management-pic'>
                <img src={picture} alt="" />
            </div>
            <div className='product-management-list'>
                <h1 className='text-4xl'><span>P</span>roduct Management</h1>
                <ul className='text-2xl text-center'>
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
    );
};

export default ProductManagement;