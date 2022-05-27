import React from 'react';
import quote from '../../images/quote.svg'
import people1 from '../../images/people1.png'
import people2 from '../../images/people2.png'
import people3 from '../../images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Harry',
            review: 'So good service and loved it',
            img: people1,
            place: 'California'
        },
        {
            _id: 2,
            name: 'William Smith',
            review: 'One of the best doctor servicing website i have ever seen',
            img: people2,
            place: 'Washington DC'
        },
        {
            _id: 3,
            name: 'Sheldon Jackson',
            review: 'Loved it take treatment and also they are very kind and fast',
            img: people3,
            place: 'Tokyo'
        }
    ]
    return (
        <section className='my-28'>
            <div>
                <h4 className="text-xl text-primary text-center font-bold">Reviews</h4>
                <h3 className="text-3xl text-center mt-4">What Our Customers Say!!</h3>
            </div>
            <div className='flex justify-between'>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;