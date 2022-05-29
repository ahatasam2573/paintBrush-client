import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='px-12'>
            <h1 className='text-5xl text-center font-bold text-secondary'>My Portfolio</h1>
            <h2>Name: Md.Ahatasamul Haque Siam</h2>
            <h2>Email: ahatasamulsium@gmail.com</h2>
            <h2>Educational Background: <br />I am a 3rd year student of Faculty of Computer Science and Engineering(CSE) and Department of CSE in Daffodil International University , Dhaka-1280, Bangladesh.</h2>
            <h2 className='text-3xl font-bold grid grid-cols-1 gap-7 text-center mt-9 text-accent'>List of technologies or skills I have as a web developer: <br /></h2>
            <div >
                <ul className='my-3'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap and Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>React Js</li>
                    <li>Node Js</li>
                    <li>Express Js</li>
                    <li>Mongodb</li>
                </ul>
            </div>

            <h2 className='text-3xl font-bold grid grid-cols-1 gap-7 text-center mt-9 text-accent'>My Projects <br /> </h2>
            <ul>
                <li>https://falgun-fashion-house.web.app/home</li>
                <li>https://gaming-console-reviewer.netlify.app/home</li>
                <li>https://ahatasam-wild-photograph-7e28d.web.app/</li>
            </ul>

        </div>
    );
};

export default MyPortfolio;