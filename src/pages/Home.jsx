import React, { useState } from 'react';
import { Clock, MapPin, Flame } from 'lucide-react';

const menuData = {
    Starters: [
        { name: 'Charred Octopus', desc: 'Smoked paprika, fingerling potato, salsa verde', price: 16, signature: true },
        { name: 'Burrata & Fig', desc: 'Aged balsamic, toasted walnut, sourdough crisp', price: 14 },
        { name: 'Roasted Beet Salad', desc: 'Whipped goat cheese, candied pecan, citrus vinaigrette', price: 12 },
        { name: 'Wild Mushroom Soup', desc: 'Truffle oil, chive crème fraîche', price: 11 },
    ],
    Mains: [
        { name: 'Braised Short Rib', desc: 'Root vegetable mash, red wine jus', price: 32, signature: true },
        { name: 'Pan-Seared Halibut', desc: 'Saffron risotto, charred lemon, herb oil', price: 29 },
        { name: 'Wood-Fired Chicken', desc: 'Preserved lemon, olives, roasted fingerlings', price: 24 },
        { name: 'Wild Mushroom Risotto', desc: 'Parmesan, black truffle, crispy sage', price: 22 },
    ],
    Desserts: [
        { name: 'Basque Cheesecake', desc: 'Burnt caramel, sea salt', price: 10, signature: true },
        { name: 'Dark Chocolate Torte', desc: 'Espresso cream, candied hazelnut', price: 10 },
        { name: 'Citrus Panna Cotta', desc: 'Blood orange, mint, pistachio crumble', price: 9 },
    ],
    Drinks: [
        { name: 'House Old Fashioned', desc: 'Bourbon, smoked cherry, orange oil', price: 14 },
        { name: 'Cellar Reserve Red', desc: 'Glass / bottle — ask your server for tonight\u2019s pour', price: 15 },
        { name: 'Rosemary Spritz', desc: 'Gin, elderflower, soda, rosemary smoke', price: 13 },
    ],
};

const categories = Object.keys(menuData);

const HomePage = () => {
    const [active, setActive] = useState(categories[0]);

    return (
        <div className="bg-[#FAF6EE] text-[#2B241C]">

            {/* Hero */}
            <section className="bg-[#1F1B16] text-[#FAF6EE]">
                <div className="mx-10 py-24 md:py-32 max-w-2xl">
                    <p className="text-[#C9A44D] font-medium mb-4">Est. 2014, downtown kitchen</p>
                    <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
                        Slow food, cooked over open flame.
                    </h1>
                    <p className="text-lg text-[#D8D0C3] mb-8 max-w-md">
                        A seasonal menu built around the wood-fired hearth — shared plates,
                        honest ingredients, and a wine list that changes with the harvest.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#menu" className="btn bg-[#C9A44D] hover:bg-[#B8862B] text-[#1F1B16] border-none">
                            View the menu
                        </a>
                        <a href="#reserve" className="btn btn-outline border-[#D8D0C3] text-[#FAF6EE] hover:bg-[#2B241C]">
                            Reserve a table
                        </a>
                    </div>
                </div>
            </section>

            {/* Info strip */}
            <section className="border-b border-[#E5DCC8]">
                <div className="mx-10 py-6 flex flex-wrap gap-8 text-sm">
                    <span className="flex items-center gap-2">
                        <Clock size={18} className="text-[#B8862B]" />
                        Tue&ndash;Sun, 5:30pm&ndash;11pm
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={18} className="text-[#B8862B]" />
                        214 Elm Street, Downtown
                    </span>
                </div>
            </section>

            {/* Menu */}
            <section id="menu" className="mx-10 py-20">
                <h2 className="font-serif text-4xl mb-2">Tonight's menu</h2>
                <p className="text-[#6B6152] mb-10 max-w-lg">
                    Everything is made to share. Ask your server about pairing with
                    something from the cellar list.
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`btn btn-sm ${active === cat
                                ? 'bg-[#1F1B16] text-[#FAF6EE] border-none'
                                : 'btn-ghost border border-[#E5DCC8]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {menuData[active].map((item) => (
                        <div key={item.name} className="flex justify-between gap-4 border-b border-[#E5DCC8] pb-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-serif text-xl">{item.name}</h3>
                                    {item.signature && (
                                        <Flame size={15} className="text-[#B8862B]" />
                                    )}
                                </div>
                                <p className="text-sm text-[#6B6152] mt-1">{item.desc}</p>
                            </div>
                            <span className="font-serif text-lg whitespace-nowrap">${item.price}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* About */}
            <section className="bg-[#F1EADA]">
                <div className="mx-10 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="font-serif text-4xl mb-4">Cooked the slow way</h2>
                        <p className="text-[#6B6152] max-w-md">
                            Our hearth runs on oak and fruitwood from local orchards. Nothing
                            leaves the kitchen that hasn't spent time over the fire &mdash; it's
                            slower, but it's the only way we know how to cook.
                        </p>
                    </div>
                    <div className="aspect-[4/3] rounded-lg bg-[#1F1B16]" />
                </div>
            </section>

            {/* Reserve CTA */}
            <section id="reserve" className="mx-10 py-20 text-center">
                <h2 className="font-serif text-3xl mb-4">Join us tonight</h2>
                <p className="text-[#6B6152] mb-8">Walk-ins welcome. Groups of 6+, please call ahead.</p>
                <a href="tel:+10000000000" className="btn bg-[#1F1B16] text-[#FAF6EE] hover:bg-[#2B241C] border-none">
                    (000) 000-0000
                </a>
            </section>

        </div>
    );
};

export default HomePage;
