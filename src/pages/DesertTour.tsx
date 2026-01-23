import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';
import desertBg from '../assets/bacgroundsection.jpg';
import ktmImg from '../assets/KTM.jpg';
import quadImg from '../assets/QUAD.jpg';
import buggyImg from '../assets/buggy.jpg';
import FAQ from '../components/FAQ';

const desertFaqs = [
    {
        question: "Quel est le meilleur moment pour faire un Desert Tour ?",
        answer: "Nous recommandons les sorties en fin d'après-midi (vers 15h30-16h00) pour profiter du coucher de soleil sur les dunes et de températures plus clémentes."
    },
    {
        question: "Faut-il un permis de conduire pour le buggy ou le quad ?",
        answer: "Non, aucun permis de conduire n'est requis pour piloter nos quads et buggies en plein désert. Nos guides vous donneront toutes les instructions nécessaires avant le départ."
    },
    {
        question: "Comment se déroule le transfert ?",
        answer: "Un chauffeur vient vous chercher directement à votre hôtel dans un véhicule climatisé et vous conduit sur le lieu de l'activité. Le transfert retour est également inclus dans la plupart de nos packs."
    },
    {
        question: "Quelle tenue est conseillée ?",
        answer: "Privilégiez des vêtements confortables et légers. Prévoyez une paire de lunettes de soleil, de la crème solaire et éventuellement un petit gilet pour la fin de journée car le désert peut se rafraîchir rapidement."
    }
];

const DesertTour = () => {
    const activities = [
        {
            title: "Yamaha Raptor 700cc",
            desc: "Quad puissant pour sensations fortes",
            category: "Quad & Moto",
            image: quadImg,
            options: [
                { duration: "1 heure", oldPrice: "650 AED", price: "500 AED", discount: "-23%" }
            ],
            features: ["700cc", "Équipement inclus", "Guide disponible"]
        },
        {
            title: "Polaris 570cc",
            desc: "Quad polyvalent et maniable",
            category: "Quad & Moto",
            image: quadImg,
            options: [
                { duration: "1 heure", oldPrice: "600 AED", price: "450 AED", discount: "-25%" }
            ],
            features: ["570cc", "Parfait débutants", "Zone sécurisée"]
        },
        {
            title: "KTM 450cc",
            desc: "Moto cross haute performance",
            category: "Quad & Moto",
            image: ktmImg,
            options: [
                { duration: "1 heure", oldPrice: "750 AED", price: "600 AED", discount: "-20%" }
            ],
            features: ["450cc", "Expérience requise", "Sensations extrêmes"]
        },
        {
            title: "Polaris 1000cc",
            desc: "Buggy 2 places confortable",
            category: "Buggy",
            image: buggyImg,
            options: [
                { duration: "1 heure", oldPrice: "1100 AED", price: "850 AED", discount: "-23%" }
            ],
            features: ["2 places", "1000cc", "Tout terrain"]
        },
        {
            title: "Can-Am X3 1000cc (2 places)",
            desc: "Buggy sportif haute performance",
            category: "Buggy",
            image: buggyImg,
            options: [
                { duration: "1 heure", oldPrice: "1600 AED", price: "1300 AED", discount: "-19%" }
            ],
            features: ["2 places", "1000cc", "Performance maximale"]
        },
        {
            title: "Can-Am X3 1000cc (4 places)",
            desc: "Buggy familial spacieux",
            category: "Buggy",
            image: buggyImg,
            options: [
                { duration: "1 heure", oldPrice: "1750 AED", price: "1400 AED", discount: "-20%" }
            ],
            features: ["4 places", "1000cc", "Idéal famille"]
        },
        {
            title: "Can-Am Maverick R 2024",
            desc: "Le dernier né de Can-Am",
            category: "Buggy",
            image: buggyImg,
            options: [
                { duration: "1 heure", oldPrice: "3000 AED", price: "2500 AED", discount: "-17%" }
            ],
            features: ["2 places", "Modèle 2024", "Top performance"],
            highlight: true
        },
        {
            title: "Dunes Bashing",
            desc: "Balade dans les dunes en 4x4",
            category: "Expériences",
            options: [
                { duration: "20 min", oldPrice: "250 AED", price: "200 AED", discount: "-20%" }
            ],
            features: ["6 pers. max", "4x4 professionnel", "Sensations garanties"]
        },
        {
            title: "Balade en Chameau",
            desc: "Expérience traditionnelle du désert",
            category: "Expériences",
            options: [
                { duration: "20 min", oldPrice: "200 AED", price: "150 AED", discount: "-25%" }
            ],
            features: ["Authentique", "Photos incluses", "Guide local"]
        },
        {
            title: "Dîner au Camp",
            desc: "Repas traditionnel sous les étoiles",
            category: "Expériences",
            options: [
                { duration: "Par personne", oldPrice: "350 AED", price: "250 AED", discount: "-29%" }
            ],
            features: ["Buffet complet", "Spectacle", "Ambiance bédouine"]
        },
        {
            title: "Transfert Hôtel-Désert",
            desc: "Aller-retour confortable",
            category: "Expériences",
            options: [
                { duration: "Par voiture", oldPrice: "500 AED", price: "400 AED", discount: "-20%" }
            ],
            features: ["6 pers. max", "Aller-retour", "Véhicule climatisé"]
        }
    ];

    return (
        <>
            <SEO
                title="Safari Désert Dubaï | Quad, Buggy Can-Am & Expériences Nomades"
                description="Réservez votre safari dans le désert à Dubaï. Location de Buggy Can-Am Maverick 2024, Quad Yamaha Raptor 700cc, Dunes Bashing en 4x4 et dîners traditionnels sous les étoiles. Meilleur prix garanti."
                keywords="safari désert dubaï, buggy dubaï, quad dubaï, dunes bashing, can-am maverick dubaï, excursion désert dubaï, quad yamaha raptor dubai, desert safari dubai francophone"
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${desertBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none z-0">
                    <span className="font-arabic text-[15rem] md:text-[25rem] leading-none text-white whitespace-nowrap">دبي</span>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Desert Tour</h1>
                        <motion.div
                            className="font-arabic text-3xl md:text-4xl text-accent mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            جولة في الصحراء
                        </motion.div>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                            L'aventure commence dans les dunes dorées
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-20 -left-20 opacity-[0.12] pointer-events-none select-none z-0 rotate-90 hidden lg:block">
                    <span className="font-arabic text-[22rem] leading-none text-primary whitespace-nowrap">مغامرة</span>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0 rotate-45 hidden lg:block">
                    <span className="font-arabic text-[30rem] leading-none text-primary whitespace-nowrap">كثبان</span>
                </div>

                <div className="absolute bottom-40 -right-20 opacity-[0.08] pointer-events-none select-none z-0 -rotate-12 hidden lg:block">
                    <span className="font-arabic text-[18rem] leading-none text-primary whitespace-nowrap">رمال</span>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activities.map((activity, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group relative ${activity.highlight
                                    ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white'
                                    : 'bg-white'
                                    }`}
                            >
                                {activity.highlight && (
                                    <div className="absolute top-4 right-4 z-10 bg-sale text-white font-black text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
                                        NOUVEAU 2024
                                    </div>
                                )}

                                <div className="h-48 relative overflow-hidden">
                                    {activity.image ? (
                                        <img
                                            src={activity.image}
                                            alt={activity.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className={`h-full ${activity.highlight
                                            ? 'bg-gradient-to-br from-orange-500 to-amber-600'
                                            : 'bg-gradient-to-br from-orange-400 to-amber-500'
                                            } flex items-center justify-center`}>
                                            <Car className="w-20 h-20 text-white/30" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-white">
                                            {activity.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${activity.highlight ? 'text-white' : 'text-primary'}`}>
                                        {activity.title}
                                    </h3>
                                    <p className={`mb-4 ${activity.highlight ? 'text-white/90' : 'text-gray-500'}`}>
                                        {activity.desc}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {activity.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center text-sm ${activity.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activity.highlight ? 'bg-white' : 'bg-accent'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-t pt-4 space-y-3" style={{ borderColor: activity.highlight ? 'rgba(255,255,255,0.3)' : undefined }}>
                                        {activity.options.map((option, idx) => (
                                            <div key={idx} className={`p-3 rounded-lg ${activity.highlight ? 'bg-white/20' : 'bg-gray-50'
                                                }`}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`text-sm font-semibold ${activity.highlight ? 'text-white' : 'text-gray-700'}`}>
                                                        {option.duration}
                                                    </span>
                                                    {option.discount && (
                                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${activity.highlight ? 'bg-white text-orange-600' : 'bg-sale text-white'
                                                            }`}>
                                                            {option.discount}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {option.oldPrice && (
                                                        <span className={`text-sm line-through ${activity.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                                                            {option.oldPrice}
                                                        </span>
                                                    )}
                                                    <span className={`text-xl font-black ${activity.highlight ? 'text-white' : 'text-sale'}`}>
                                                        {option.price}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        <Link
                                            to="/contact"
                                            className={`w-full block text-center font-bold py-3 rounded-lg transition-colors mt-4 ${activity.highlight
                                                ? 'bg-white text-orange-600 hover:bg-gray-100'
                                                : 'bg-primary text-white hover:bg-sale'
                                                }`}
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

            <FAQ items={desertFaqs} />
        </>
    );
};

export default DesertTour;
