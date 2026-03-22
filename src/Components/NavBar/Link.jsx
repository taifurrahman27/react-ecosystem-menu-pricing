import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='px-4 cursor-pointer hover:text-green-600 lg:mr-10'><a href={route.path}></a>{route.name}</li>
    );
};

export default Link;