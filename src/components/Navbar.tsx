import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Activités Aquatiques', path: '/activites-aquatiques' },
        { name: 'Desert Tour', path: '/desert-tour' },
        { name: 'Activités Diverses', path: '/activites-diverses' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
                    DUBAI<span className="text-accent">SERVICES</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : 'text-primary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-black transition-transform hover:scale-105">
                        Demander un devis
                    </Link>
                </div>

                {/* Mobile Burger */}
                <button className="md:hidden z-50 text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 md:hidden overflow-y-auto py-20"
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-light text-primary hover:text-accent"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-black transition-colors"
                            >
                                Demander un devis
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
