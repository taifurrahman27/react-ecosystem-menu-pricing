
import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {

    const { name, price, description, features } = pricing;

    return (
        <div className='border bg-fuchsia-700 rounded-2xl p-5'>

            <div >
                <h1 className='text-6xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>

            </div>
            <div className='bg-amber-500 p-5 rounded-2xl mt-8'>
                <p>{description}</p>
                {
                    features.map((features, index) => <PricingFeature key={index} features={features} >
                    </PricingFeature>)
                }

            </div>
        </div>
    );
};

export default PricingCard;