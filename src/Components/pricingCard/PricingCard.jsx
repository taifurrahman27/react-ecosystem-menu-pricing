
import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {

    const { name, price, description, features } = pricing;

    return (
        <div className='flex flex-col border border-indigo-700 bg-violet-800 rounded-2xl p-5 w-5/6 mx-auto'>

            <div >
                <h1 className='text-6xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>

            </div>
            <div className='bg-amber-700 p-5 rounded-2xl mt-8 flex-1'>
                <p>{description}</p>
                {
                    features.map((features, index) => <PricingFeature key={index} features={features} >
                    </PricingFeature>)
                }

            </div>

            <button className="btn btn-soft btn-success w-full mt-2.5 rounded-2xl">Subscribe</button>
        </div>
    );
};

export default PricingCard;