import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <>
            <div className='text-blue'>
                <h1>Asean Youth Ability</h1>
            </div>
        </>
    );
};

export default NavBar;
