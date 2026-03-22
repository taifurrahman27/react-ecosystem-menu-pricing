import React, { use } from 'react';
import PricingCard from '../pricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);


    return (
        <div>
            <h2 className='my-10 text-7xl w-11/12 mx-auto text-amber-400'>Get Our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}>

                    </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;