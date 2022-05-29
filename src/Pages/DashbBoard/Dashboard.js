import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-5">
                <h2 className='text-4xl font-bold text-accent'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label htmlFor="my-drawer-2" class="drawer-overlay "></label>
                <ul class="bg-yellow-100 menu p-4 overflow-y-auto w-80 text-base-content">
                    <li className='text-2xl text-purple-500'><Link to='/dashboard'>My Orders</Link></li>
                    <li className='text-2xl text-purple-500'><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li className='text-2xl text-purple-500'><Link to='/dashboard/portfolio'>My Portfolio</Link></li>
                    <li className='text-2xl text-purple-500'><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;