import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import activiteBg from '../assets/activite.jpg';
import FAQ from '../components/FAQ';

const diversesFaqs = [
    {
        question: "Les billets pour les attractions sont-ils coupe-file ?",
        answer: "La plupart de nos billets pour les attractions majeures (Burj Khalifa, Musée du Futur) sont des billets datés avec créneau horaire, ce qui limite considérablement l'attente."
    },
    {
        question: "Est-ce que l'équipement est inclus pour Ski Dubai ?",
        answer: "Oui, tous les packs Ski Dubai incluent la location de l'équipement complet (veste, pantalon, skis/snowboard, chaussures, chaussettes jetables). Seuls les gants sont en supplément ou inclus selon le pack."
    },
    {
        question: "Combien de temps à l'avance faut-il réserver ?",
        answer: "Nous conseillons de réserver au moins 48h à l'avance, surtout pour les attractions très prisées comme le Musée du Futur qui est souvent complet plusieurs jours à l'avance."
    },
    {
        question: "Comment recevoir mes billets ?",
        answer: "Une fois la réservation confirmée et le paiement effectué, nous vous envoyons vos e-billets directement sur WhatsApp ou par email. Il vous suffira de les présenter sur votre téléphone à l'entrée."
    }
];

const ActivitesDiverses = () => {
    const skiDubai = [
        {
            title: "Snow Classique",
            price: "220 AED",
            features: [
                "Accès unique au Snow Park",
                "Accès illimité aux manèges",
                "Gants polaire",
                "Chocolat chaud"
            ]
        },
        {
            title: "Snow Plus",
            oldPrice: "350 AED",
            price: "295 AED",
            discount: "-16%",
            features: [
                "Accès illimité aux manèges",
                "Accès illimité aux remontées mécaniques",
                "Un casier standard",
                "Une paire de gants",
                "1 option: Cours 60min, 2 tours tyrolienne OU Rencontre pingouins 40min"
            ]
        },
        {
            title: "Snow Premium",
            oldPrice: "550 AED",
            price: "450 AED",
            discount: "-18%",
            features: [
                "Rencontre pingouins 40min",
                "Cours découverte 60min",
                "Accès illimité remontées & manèges",
                "Casier standard",
                "Chauffe main + gants",
                "Une photo dans le Snow Park"
            ]
        }
    ];

    const attractions = [
        {
            title: "IMG World",
            adultPrice: "365 AED",
            note: "Gratuit -3 ans",
            icon: "🎢"
        },
        {
            title: "Ferrari World",
            adultPrice: "380 AED",
            childPrice: "295 AED",
            note: "Enfant -1m30 / Gratuit -3 ans",
            icon: "🏎️"
        },
        {
            title: "Global Village",
            price: "30 AED",
            icon: "🌍"
        },
        {
            title: "Musée du Futur",
            adultPrice: "149 AED",
            icon: "🚀"
        },
        {
            title: "Burj Khalifa + Aquarium",
            price: "312 AED",
            note: "Enfant et Adulte / Gratuit -3 ans",
            icon: "🏙️"
        }
    ];

    const special = [
        {
            title: "Dolphinarium",
            subtitle: "Rencontres avec les dauphins",
            oldPrice: "900 AED",
            price: "760 AED",
            discount: "-16%"
        },
        {
            title: "Refuge Animalier",
            adultPrice: "1000 AED",
            childPrice: "500 AED",
            transfert: "500 AED",
            note: "Gratuit -2ans / Session matin ou après-midi"
        }
    ];

    const excursions = [
        {
            title: "Oman",
            adultPrice: "500 AED",
            childPrice: "350 AED",
            features: [
                "Transfert hôtel",
                "5h de croisière",
                "Repas, nage, snorkeling",
                "Bateau banane et pêche",
                "Visa touriste omanais inclus"
            ]
        },
        {
            title: "Abu Dhabi",
            price: "600 AED/véhicule",
            features: [
                "Visite guidée",
                "Grande Mosquée",
                "Louvre Abu Dhabi",
                "Transfert inclus"
            ]
        }
    ];

    return (
        <>
            <SEO title="Activités Diverses" description="Ski Dubai, parcs d'attractions, excursions et bien plus à Dubaï." />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${activiteBg})`,
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
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Activités Diverses</h1>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                            Des expériences uniques pour tous les goûts
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Ski Dubai Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">❄️ Ski Dubai</h2>
                        <p className="text-gray-600">Le ski au cœur du désert !</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {skiDubai.map((pack, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all relative group"
                            >
                                {pack.discount && (
                                    <div className="absolute -top-3 -right-3 bg-sale text-white font-black text-sm px-4 py-2 rounded-full shadow-lg animate-pulse">
                                        {pack.discount}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-4 text-primary">{pack.title}</h3>

                                <div className="mb-6">
                                    {pack.oldPrice && (
                                        <span className="text-gray-400 line-through text-sm block mb-1">{pack.oldPrice}</span>
                                    )}
                                    <span className="text-3xl font-black text-sale">{pack.price}</span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {pack.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-gray-700">
                                            <span className="text-accent mr-2">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-sale transition-colors"
                                >
                                    Réserver
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attractions Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">🎡 Attractions</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {attractions.map((attr, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                            >
                                <div className="text-4xl mb-3">{attr.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-primary">{attr.title}</h3>

                                {attr.price && (
                                    <p className="text-2xl font-black text-sale mb-2">{attr.price}</p>
                                )}
                                {attr.adultPrice && (
                                    <div className="mb-2">
                                        <p className="text-lg font-bold text-sale">Adulte: {attr.adultPrice}</p>
                                        {attr.childPrice && (
                                            <p className="text-sm text-gray-600">Enfant: {attr.childPrice}</p>
                                        )}
                                    </div>
                                )}
                                {attr.note && (
                                    <p className="text-xs text-gray-500 mb-4">{attr.note}</p>
                                )}

                                <Link
                                    to="/contact"
                                    className="w-full block text-center bg-primary text-white font-semibold py-2 rounded-lg hover:bg-sale transition-colors text-sm"
                                >
                                    Réserver
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Special Activities */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">🐬 Expériences Spéciales</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {special.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg relative"
                            >
                                {item.discount && (
                                    <div className="absolute -top-3 -right-3 bg-sale text-white font-black text-sm px-4 py-2 rounded-full shadow-lg animate-pulse">
                                        {item.discount}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                                {item.subtitle && (
                                    <p className="text-sm text-gray-600 mb-4">{item.subtitle}</p>
                                )}

                                {item.oldPrice && (
                                    <div className="mb-4">
                                        <span className="text-gray-400 line-through text-sm block">{item.oldPrice}</span>
                                        <span className="text-3xl font-black text-sale">{item.price}</span>
                                    </div>
                                )}

                                {item.adultPrice && (
                                    <div className="mb-4">
                                        <p className="text-lg font-bold text-sale">Adulte: {item.adultPrice}</p>
                                        <p className="text-sm text-gray-600">Enfant: {item.childPrice}</p>
                                        {item.transfert && (
                                            <p className="text-sm text-gray-600 mt-2">Transfert A/R: {item.transfert}</p>
                                        )}
                                    </div>
                                )}

                                {item.note && (
                                    <p className="text-xs text-gray-500 mb-4">{item.note}</p>
                                )}

                                <Link
                                    to="/contact"
                                    className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-sale transition-colors"
                                >
                                    Réserver
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Excursions Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">🌏 Excursions</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {excursions.map((exc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <h3 className="text-3xl font-bold mb-4 text-primary">{exc.title}</h3>

                                {exc.adultPrice && (
                                    <div className="mb-4">
                                        <p className="text-xl font-bold text-sale">Adulte: {exc.adultPrice}</p>
                                        <p className="text-sm text-gray-600">Enfant: {exc.childPrice}</p>
                                    </div>
                                )}
                                {exc.price && (
                                    <p className="text-2xl font-black text-sale mb-4">{exc.price}</p>
                                )}

                                <ul className="space-y-2 mb-6">
                                    {exc.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <span className="text-accent mr-2">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/contact"
                                    className="w-full block text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-sale transition-colors"
                                >
                                    Réserver cette excursion
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ items={diversesFaqs} />
        </>
    );
};

export default ActivitesDiverses;
