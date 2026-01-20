
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tighter">DUBAI<span className="text-accent">SERVICES</span></h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre partenaire de confiance pour une expérience inoubliable à Dubaï. Location de buggy, conciergerie de luxe et plus encore.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
                            <li><Link to="/activites-aquatiques" className="hover:text-accent transition-colors">Activités Aquatiques</Link></li>
                            <li><Link to="/desert-tour" className="hover:text-accent transition-colors">Desert Tour</Link></li>
                            <li><Link to="/activites-diverses" className="hover:text-accent transition-colors">Activités Diverses</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center space-x-3">
                                <MapPin size={18} className="text-accent" />
                                <span>Downtown Dubai, UAE</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-accent" />
                                <span>+971 50 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-accent" />
                                <span>contact@dubaiservices.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Inscrivez-vous pour recevoir nos meilleures offres.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-accent text-white"
                            />
                            <button className="w-full bg-accent text-primary font-semibold py-2 rounded-lg hover:bg-white transition-colors text-sm">
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>&copy; {new Date().getFullYear()} DubaiServices. Tous droits réservés.</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/mentions-legales" className="hover:text-accent transition-colors">
                                Mentions Légales
                            </Link>
                            <Link to="/politique-confidentialite" className="hover:text-accent transition-colors">
                                Politique de Confidentialité
                            </Link>
                        </div>
                        <a
                            href="https://microdidact.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors"
                        >
                            Réalisé par <span className="font-semibold">Microdidact</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
