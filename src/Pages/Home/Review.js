import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl flex mt-2 bg-gradient-to-r from-secondary to-accent">
            <div className="card-body">
                <p>{review.review}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar m-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt='avatar' />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl bold text-primary font-bold'>{review.name}</h4>
                    <p>{review.place}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;