import React, { useState } from 'react';
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

    const links = navData.map(route => <Link key={route.id} route={route}>
    </Link>)

    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between mx-10'>

            <span className='flex items-center'>
                <div className='cursor-pointer' onClick={() => setOpen(!open)}>
                    {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'>
                    </Menu>}
                    <ul className={`md:hidden absolute duration-500 ${open ? 'top-8' : '-top-30'} bg-amber-100 z-10 text-black`}>{links}</ul>
                </div>
                <a className="btn btn-ghost text-xl">My Navbar</a>

            </span>

            <ul className='hidden md:flex'>
                {
                    links
                }
            </ul>


            {/* <ul className='flex'>
                {
                    navData.map(route => <li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}


            {/* <ul className='flex'>
                <li className='mr-10'><a href='/home'>Home</a></li>
                <li className='mr-10'><a href='/about'>About</a></li>
                <li className='mr-10'><a href='/blog'>Blog</a></li>
            </ul> */}

            <button className='btn btn-soft'>Sign In</button>

        </nav >
    );
};

export default NavBar;