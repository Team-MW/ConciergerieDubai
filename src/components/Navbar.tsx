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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Activités Aquatiques', path: '/activites-aquatiques' },
        { name: 'Desert Tour', path: '/desert-tour' },
        { name: 'Activités Diverses', path: '/activites-diverses' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <span className={`text-2xl font-bold tracking-tighter transition-colors ${!scrolled && !isOpen ? 'text-white' : 'text-primary'}`}>
                        DUBAI<span className="text-accent">SERVICES</span>
                    </span>
                    <span className={`font-arabic text-2xl transition-colors ${!scrolled && !isOpen ? 'text-accent/60' : 'text-accent'}`}>دبي</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-bold transition-colors hover:text-accent ${location.pathname === link.path ? 'text-accent' : (!scrolled ? 'text-white' : 'text-primary')}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md ${!scrolled ? 'bg-white text-primary hover:bg-accent hover:text-white' : 'bg-primary text-white hover:bg-black'}`}
                    >
                        Demander un devis
                    </Link>
                </div>

                {/* Mobile Burger */}
                <button
                    className={`md:hidden z-50 transition-colors p-2 ${!scrolled && !isOpen ? 'text-white' : 'text-primary'}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
                                onClick={() => setIsOpen(false)}
                            />
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col md:hidden p-8 pt-20"
                            >
                                {/* Close button inside the menu */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 text-primary p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={28} />
                                </button>

                                <div className="flex flex-col space-y-8 mt-4">
                                    {links.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-2xl font-black transition-colors ${location.pathname === link.path ? 'text-accent' : 'text-primary'} hover:text-accent flex items-center justify-between border-b border-gray-100 pb-4`}
                                        >
                                            {link.name}
                                            <span className="text-accent text-sm">→</span>
                                        </Link>
                                    ))}
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="bg-primary text-white px-8 py-5 rounded-2xl text-center text-xl font-black hover:bg-black transition-colors shadow-xl mt-4"
                                    >
                                        Demander un devis
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};



export default Navbar;
