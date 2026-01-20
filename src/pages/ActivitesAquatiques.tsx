import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import jetskiBg from '../assets/man-drive-jetski.jpg';
import jetskiCard from '../assets/fergeg.webp';

const ActivitesAquatiques = () => {
    const activities = [
        {
            title: "Jet Ski",
            desc: "Sensations fortes sur les eaux du Golfe Persique",
            options: [
                { duration: "30 min", oldPrice: "500 AED", price: "350 AED", discount: "-30%" },
                { duration: "1h", oldPrice: "800 AED", price: "600 AED", discount: "-25%" }
            ],
            features: ["Équipement inclus", "Guide professionnel", "Zone sécurisée"]
        },
        {
            title: "Jet Car",
            desc: "Voiture amphibie unique à Dubaï",
            options: [
                { duration: "20 min", oldPrice: "1000 AED", price: "800 AED", discount: "-20%" },
                { duration: "30 min", oldPrice: "1200 AED", price: "1000 AED", discount: "-17%" }
            ],
            features: ["Expérience unique", "Photos incluses", "Instructeur dédié"]
        },
        {
            title: "Fly Board",
            desc: "Volez au-dessus de l'eau comme Iron Man",
            options: [
                { duration: "30 min", oldPrice: "450 AED", price: "350 AED", discount: "-22%" }
            ],
            features: ["Formation incluse", "Équipement complet", "Sensations garanties"]
        },
        {
            title: "Plongée Sous-Marine",
            desc: "Découvrez les fonds marins de Dubaï",
            options: [
                { duration: "45 min", oldPrice: "650 AED", price: "500 AED", discount: "-23%" }
            ],
            features: ["Équipement complet", "Instructeur certifié", "Transport inclus"]
        },
        {
            title: "Bouée Tractée",
            desc: "Amusement garanti en famille ou entre amis",
            options: [
                { duration: "30 min", oldPrice: "450 AED", price: "350 AED", discount: "-22%" }
            ],
            features: ["Jusqu'à 4 personnes", "Gilets de sauvetage", "Photos souvenir"]
        }
    ];

    return (
        <>
            <SEO title="Activités Aquatiques" description="Découvrez nos activités aquatiques à Dubaï : Jet Ski, Yacht, Plongée et plus." />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${jetskiBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Activités Aquatiques</h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                            Vivez l'aventure sur les eaux cristallines de Dubaï
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative"
                            >
                                {activity.options[0]?.discount && (
                                    <div className="absolute top-4 right-4 z-10 bg-sale text-white font-black text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3 group-hover:scale-110 transition-transform animate-pulse">
                                        {activity.options[0].discount}
                                    </div>
                                )}

                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={jetskiCard}
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-primary">{activity.title}</h3>
                                    <p className="text-gray-500 mb-4">{activity.desc}</p>

                                    <ul className="space-y-2 mb-6">
                                        {activity.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-t pt-4 space-y-3">
                                        {activity.options.map((option, idx) => (
                                            <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-sm font-semibold text-gray-700">{option.duration}</span>
                                                    {option.discount && (
                                                        <span className="text-xs bg-sale text-white px-2 py-1 rounded-full font-bold">
                                                            {option.discount}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        {option.oldPrice && (
                                                            <span className="text-gray-400 line-through text-sm">{option.oldPrice}</span>
                                                        )}
                                                        <span className="text-xl font-black text-sale">{option.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <Link
                                            to="/contact"
                                            className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-sale transition-colors mt-4"
                                        >
                                            Réserver maintenant
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ActivitesAquatiques;
