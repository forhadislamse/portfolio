
import { useEffect, useState } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import './header.css';
import { FaCode } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { to: 'home', label: 'Home', icon: 'uil-estate' },
    { to: 'about', label: 'About', icon: 'uil-user' },
    { to: 'skills', label: 'Skills', icon: 'uil-file-alt' },
    { to: 'projects', label: 'Projects', icon: 'uil-scenery' },
    // { to: 'contact', label: 'Contact', icon: 'uil-message' },
];

const Header = () => {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register('begin', () => { });
        Events.scrollEvent.register('end', () => { });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');

        };
    }, []);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const navItems = navLinks.map(({ to, label, icon }) => (
        <li key={to}>
            <ScrollLink
                activeClass="text-yellow-400 font-semibold"
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onSetActive={() => setActive(to)}
                onClick={closeMenu}
                className={`nav__link cursor-pointer flex items-center gap-2 ${active === to ? 'text-yellow-400' : ''}`}
            >
                <i className={`uil ${icon} nav__icon`} />
                {label}
            </ScrollLink>
        </li>
    ));

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-500 via-cyan-700 to-slate-800 bg-opacity-90 backdrop-blur-lg shadow-lg text-white"
            role="navigation"
            aria-label="Main Navigation"
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between" data-aos="fade-down">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <FaCode className="text-2xl text-yellow-400" />
                    <a href="/" className="text-2xl font-bold tracking-wide">
                        Forhad
                    </a>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-6 text-sm font-medium items-center">
                    {navItems}
                </ul>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        className="text-2xl p-2 focus:outline-none"
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="lg:hidden w-40 rounded-xl border-2 border-white  space-y-3 px-6 py-4 shadow-md z-50">
                    {navItems}
                </ul>
            )}
        </header>
    );
};

export default Header;
