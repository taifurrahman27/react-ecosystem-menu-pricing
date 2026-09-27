import React from 'react';
import { Check } from 'lucide-react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {

    const { name, price, description, features } = pricing;

    return (
        <div className="flex flex-col w-5/6 mx-auto rounded-2xl border border-[#E5DCC8] bg-[#FAF6EE] p-8 shadow-sm">

            <div className="mb-6">
                <h3 className="font-serif text-2xl text-[#2B241C]">{name}</h3>
                <p className="text-sm text-[#6B6152] mt-1">{description}</p>
            </div>

            <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-5xl text-[#1F1B16]">{price}</span>
                <span className="text-sm text-[#6B6152]">/ month</span>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[#2B241C]">
                        <Check size={16} className="text-[#B8862B] mt-0.5 shrink-0" />
                        <PricingFeature features={feature} />
                    </li>
                ))}
            </ul>

            <button className="btn w-full rounded-xl bg-[#1F1B16] text-[#FAF6EE] border-none hover:bg-[#2B241C]">
                Subscribe
            </button>
        </div>
    );
};

export default PricingCard;
