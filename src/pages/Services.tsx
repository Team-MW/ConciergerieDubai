
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        { title: "Location de Buggy", desc: "Explorez les dunes rouges de Dubaï avec nos buggies Can-Am Maverick X3 surpuissants.", price: "1500 AED", details: "3000 AED" },
        { title: "Yacht Privé", desc: "Naviguez autour de la Palm Jumeirah à bord de nos yachts de luxe.", price: "Sur devis", details: "" },
        { title: "Dîner dans le désert", desc: "Une soirée magique dans un camp privé authentique.", price: "800 AED", details: "1200 AED" },
        { title: "Jet Ski & Activités", desc: "Profitez des eaux chaudes du Golfe Persique.", price: "400 AED", details: "600 AED" },
        { title: "Hélicoptère Tour", desc: "Découvrez la skyline de Dubaï vue du ciel.", price: "900 AED", details: "1200 AED" },
        { title: "Conciergerie VIP", desc: "Réservation de restaurants et clubs exclusifs.", price: "Frais de gestion", details: "" },
    ];

    return (
        <>
            <SEO title="Services" description="Découvrez nos services de conciergerie de luxe à Dubaï." />
            <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary">Prestations <span className="font-bold">Exclusives</span></h1>
                        <p className="text-gray-500 max-w-2xl mx-auto font-light">
                            Une sélection d'expériences uniques pour un séjour inoubliable.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white group rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100"
                            >
                                <div className="mb-6 h-48 bg-gray-100 rounded-lg overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-light tracking-wider">IMAGE</div>
                                </div>

                                <h3 className="text-xl font-medium mb-2 text-primary">{s.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed h-10">{s.desc}</p>

                                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        {s.details && <span className="text-xs text-gray-400 line-through mb-1">{s.details}</span>}
                                        <span className="text-lg font-semibold text-primary">{s.price}</span>
                                    </div>
                                    <Link to="/contact" className="px-4 py-2 rounded-full border border-gray-200 text-xs uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-all">
                                        Réserver
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Services;
