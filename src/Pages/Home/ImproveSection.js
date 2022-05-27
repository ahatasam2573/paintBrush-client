import React from 'react';


const ImproveSection = () => {
    return (
        <div class="hero max-h-screen py-7">
            <div class="hero-content flex-col lg:flex-row">
                <img style={{ width: '850px', height: '300px' }} src="https://images.unsplash.com/photo-1576669801820-a9ab287ac2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhcmVob3VzZSUyMG1hbmFnbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="max-w-sm rounded-lg" alt='pic' />
                <div className='px-9 ml-12'>
                    <h1 class="text-4xl font-bold"><span className='text-9xl text-primary'>I</span>mprove performance <br />& process Time</h1>
                    <h1>Better organize your warehouse with the smart <br /> double entry inventory system.</h1>
                    <p class="py-6">Get the most efficient stocking method and improve all your <br /> internal operations. Odoo's double-entry inventory has no <br /> stock input, output or transformation. Instead, all operations <br /> are stock moves between locations.</p>
                </div>
            </div>
        </div>
    );
};

export default ImproveSection;