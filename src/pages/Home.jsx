import React, { useState } from 'react';
import { Clock, MapPin, Dumbbell, Flame } from 'lucide-react';

const classData = {
    Strength: [
        { name: 'Barbell Fundamentals', desc: 'Squat, bench, deadlift technique with a coach on the platform', duration: '60 min', level: 'All levels', signature: true },
        { name: 'Powerbuilding', desc: 'Heavy compound lifts followed by accessory volume work', duration: '75 min', level: 'Intermediate' },
        { name: 'Olympic Lifting', desc: 'Snatch and clean & jerk technique on dedicated platforms', duration: '60 min', level: 'Advanced' },
    ],
    Conditioning: [
        { name: 'HIIT Circuit', desc: 'Kettlebells, sleds, and rowers in timed rotating stations', duration: '45 min', level: 'All levels', signature: true },
        { name: 'Metcon', desc: 'Mixed functional movements scored against the clock', duration: '50 min', level: 'Intermediate' },
        { name: 'Sled & Ropes', desc: 'Pure output work \u2014 pushes, pulls, battle ropes, sprints', duration: '40 min', level: 'All levels' },
    ],
    Boxing: [
        { name: 'Bag Fundamentals', desc: 'Stance, footwork, and combinations on heavy bags', duration: '50 min', level: 'Beginner', signature: true },
        { name: 'Pad Work', desc: 'Partner-based mitt rounds focused on timing and power', duration: '50 min', level: 'Intermediate' },
        { name: 'Sparring Prep', desc: 'Controlled rounds for members training toward competition', duration: '60 min', level: 'Advanced' },
    ],
    Mobility: [
        { name: 'Deep Stretch', desc: 'Guided long-hold stretching to restore range of motion', duration: '45 min', level: 'All levels' },
        { name: 'Foundations Yoga', desc: 'Breath-led flow built for lifters and runners', duration: '50 min', level: 'All levels', signature: true },
        { name: 'Recovery Flow', desc: 'Light movement and mobility work for rest days', duration: '30 min', level: 'All levels' },
    ],
};

const categories = Object.keys(classData);

const HomePage = () => {
    const [active, setActive] = useState(categories[0]);

    return (
        <div className="bg-white text-[#1C1D1F]">

            {/* Hero */}
            <section className="bg-[#1C1D1F] text-white">
                <div className="mx-10 py-24 md:py-32 max-w-2xl">
                    <p className="text-[#2F6FED] font-medium mb-4">Open since 2016 in the Iron District</p>
                    <h1 className="font-extrabold text-5xl md:text-6xl leading-tight mb-6 tracking-tight">
                        Strength is built here, not found.
                    </h1>
                    <p className="text-lg text-[#B7B8BB] mb-8 max-w-md">
                        Barbell rooms, conditioning circuits, and a boxing floor &mdash;
                        coached classes for every level, seven days a week.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#classes" className="btn rounded-sm bg-[#2F6FED] hover:bg-[#2559C7] text-white border-none">
                            View classes
                        </a>
                        <a href="#join" className="btn rounded-sm btn-outline border-[#4A4B4F] text-white hover:bg-[#2A2B2E]">
                            Join now
                        </a>
                    </div>
                </div>
            </section>

            {/* Info strip */}
            <section className="border-b border-[#E4E5E7]">
                <div className="mx-10 py-6 flex flex-wrap gap-8 text-sm">
                    <span className="flex items-center gap-2">
                        <Clock size={18} className="text-[#2F6FED]" />
                        Mon&ndash;Fri 5am&ndash;10pm, Sat&ndash;Sun 7am&ndash;8pm
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={18} className="text-[#2F6FED]" />
                        88 Foundry Road, Iron District
                    </span>
                    <span className="flex items-center gap-2">
                        <Dumbbell size={18} className="text-[#2F6FED]" />
                        24/7 access for full members
                    </span>
                </div>
            </section>

            {/* Classes */}
            <section id="classes" className="mx-10 py-20">
                <h2 className="font-extrabold text-4xl mb-2 tracking-tight">This week's classes</h2>
                <p className="text-[#5C5D60] mb-10 max-w-lg">
                    Every class is capped and coached. Reserve a spot through the app up
                    to 24 hours ahead.
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`btn btn-sm rounded-sm ${active === cat
                                ? 'bg-[#1C1D1F] text-white border-none'
                                : 'btn-ghost border border-[#E4E5E7]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {classData[active].map((item) => (
                        <div key={item.name} className="flex justify-between gap-4 border-b border-[#E4E5E7] pb-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-xl">{item.name}</h3>
                                    {item.signature && (
                                        <Flame size={15} className="text-[#F5A623]" />
                                    )}
                                </div>
                                <p className="text-sm text-[#5C5D60] mt-1">{item.desc}</p>
                                <p className="text-xs text-[#8C8D90] mt-1">{item.level}</p>
                            </div>
                            <span className="font-bold text-lg whitespace-nowrap">{item.duration}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="bg-[#F2F3F5]">
                <div className="mx-10 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-extrabold text-4xl mb-4 tracking-tight">Built for real progress</h2>
                        <p className="text-[#5C5D60] max-w-md">
                            No mirrors for the sake of mirrors. Every rack, platform, and
                            circuit is here because a coach asked for it &mdash; this gym is
                            built around programming, not decoration.
                        </p>
                    </div>
                    <div className="aspect-4/3 rounded-sm bg-[#1C1D1F]" />
                </div>
            </section>

            {/* Join CTA */}
            <section id="join" className="mx-10 py-20 text-center">
                <h2 className="font-extrabold text-3xl mb-4 tracking-tight">Your first class is free</h2>
                <p className="text-[#5C5D60] mb-8">No contract required. Bring your own shoes and a water bottle.</p>
                <a href="tel:+10000000000" className="btn rounded-sm bg-[#1C1D1F] text-white hover:bg-[#2A2B2E] border-none">
                    (000) 000-0000
                </a>
            </section>

        </div>
    );
};

export default HomePage;
