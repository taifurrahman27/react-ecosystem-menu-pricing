import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navData = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Services", url: "/services" },
    { id: 4, name: "Blog", url: "/blog" },
    { id: 5, name: "Contact", url: "/contact" }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    const links = navData.map(route => (
        <Link key={route.id} route={route} onClick={closeMenu} />
    ));

    return (
        <nav className="relative flex items-center justify-between mx-10 mt-5">

            <span className="flex items-center gap-2">
                <button
                    type="button"
                    className="md:hidden cursor-pointer"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>

                <RouterLink to="/" className="btn btn-ghost text-xl">My Navbar</RouterLink>
            </span>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-6">
                {links}
            </ul>

            {/* Mobile dropdown */}
            <ul
                className={`md:hidden absolute left-0 top-full w-56 mt-2 flex flex-col gap-1 rounded-box bg-amber-100 text-black shadow-lg z-10 p-3 origin-top transition-all duration-300 ${open
                        ? 'opacity-100 scale-y-100'
                        : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
            >
                {links}
            </ul>

            <button className="btn btn-soft">Sign In</button>

        </nav>
    );
};

export default NavBar;
