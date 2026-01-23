import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import activiteBg from '../assets/dubai-sensations-fortes.png';
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

interface ActivityOption {
    duration: string;
    price: string;
    oldPrice?: string;
    discount?: string;
}

interface Activity {
    title: string;
    desc: string;
    category: string;
    image: string;
    options: ActivityOption[];
    features: string[];
    highlight?: boolean;
}

const ActivitesDiverses = () => {
    const activities: Activity[] = [
        // Ski Dubai
        {
            title: "Snow Classique",
            desc: "Accès au Snow Park et manèges",
            category: "Ski Dubai",
            image: activiteBg,
            options: [
                { duration: "Journée", price: "220 AED" }
            ],
            features: ["Accès Snow Park", "Manèges illimités", "Gants polaire", "Chocolat chaud"]
        },
        {
            title: "Snow Plus",
            desc: "L'expérience complète avec remontées",
            category: "Ski Dubai",
            image: activiteBg,
            options: [
                { duration: "Journée", oldPrice: "350 AED", price: "295 AED", discount: "-16%" }
            ],
            features: ["Remontées illimitées", "Casier inclus", "Option cours ou pingouins", "Paire de gants"]
        },
        {
            title: "Snow Premium",
            desc: "Le summum de l'expérience Ski Dubai",
            category: "Ski Dubai",
            image: activiteBg,
            options: [
                { duration: "Journée", oldPrice: "550 AED", price: "450 AED", discount: "-18%" }
            ],
            features: ["Rencontre pingouins 40min", "Cours découverte 60min", "Photo incluse", "Chauffe main + gants"],
            highlight: true
        },
        // Attractions
        {
            title: "IMG World",
            desc: "Le plus grand parc d'attractions couvert",
            category: "Attractions",
            image: activiteBg,
            options: [
                { duration: "Adulte", price: "365 AED" }
            ],
            features: ["Accès illimité", "Gratuit -3 ans", "Zones Marvel & CN"]
        },
        {
            title: "Ferrari World",
            desc: "La passion automobile à Abu Dhabi",
            category: "Attractions",
            image: activiteBg,
            options: [
                { duration: "Adulte", price: "380 AED" },
                { duration: "Enfant", price: "295 AED" }
            ],
            features: ["Montagnes russes", "Enfants -1m30", "Gratuit -3 ans"]
        },
        {
            title: "Musée du Futur",
            desc: "Un voyage en 2071",
            category: "Attractions",
            image: activiteBg,
            options: [
                { duration: "Par personne", price: "149 AED" }
            ],
            features: ["Billets datés", "Expérience immersive", "Symbole de Dubaï"]
        },
        {
            title: "Burj Khalifa + Aquarium",
            desc: "Le sommet du monde et l'océan",
            category: "Attractions",
            image: activiteBg,
            options: [
                { duration: "Combo", price: "312 AED" }
            ],
            features: ["Niveaux 124 & 125", "Accès Aquarium", "Gratuit -3 ans"]
        },
        // Expériences Spéciales
        {
            title: "Dolphinarium",
            desc: "Spectacle et rencontre avec les dauphins",
            category: "Expériences",
            image: activiteBg,
            options: [
                { duration: "Session", oldPrice: "900 AED", price: "760 AED", discount: "-15%" }
            ],
            features: ["Spectacle inclus", "Interaction dauphins", "Photos souvenir"]
        },
        {
            title: "Refuge Animalier",
            desc: "Approchez les animaux exotiques",
            category: "Expériences",
            image: activiteBg,
            options: [
                { duration: "Adulte", price: "1000 AED" },
                { duration: "Enfant", price: "500 AED" }
            ],
            features: ["Matin ou après-midi", "Gratuit -2 ans", "Transfert +500 AED"]
        },
        // Excursions
        {
            title: "Oman (Musandam)",
            desc: "Croisière dans les fjords d'Arabie",
            category: "Excursions",
            image: activiteBg,
            options: [
                { duration: "Adulte", price: "500 AED" },
                { duration: "Enfant", price: "350 AED" }
            ],
            features: ["Visa inclus", "Déjeuner buffet", "Snorkeling & Pêche", "Transfert hôtel"]
        },
        {
            title: "Abu Dhabi Tour",
            desc: "Découvrez la capitale des UAE",
            category: "Excursions",
            image: activiteBg,
            options: [
                { duration: "Par véhicule", price: "600 AED" }
            ],
            features: ["Grande Mosquée", "Louvre Abu Dhabi", "Visite guidée", "Transfert inclus"]
        }
    ];

    return (
        <>
            <SEO
                title="Activités & Attractions Dubaï | Burj Khalifa, Ski Dubai & Musées"
                description="Réservez vos billets pour les meilleures attractions de Dubaï : Burj Khalifa, Musée du Futur, Ferrari World et Ski Dubai. Billets coupe-file et packs exclusifs pour toute la famille."
                keywords="ski dubaï, burj khalifa billets, ferrari world dubaï, img world dubaï, attractions dubaï, excursions dubaï, activités famille dubaï, musée du futur dubai, louvre abu dhabi, tickets attractions dubai"
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
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

                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none z-0">
                    <span className="font-arabic text-[15rem] md:text-[25rem] leading-none text-white whitespace-nowrap">دبي</span>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Activités Diverses</h1>
                        <motion.div
                            className="font-arabic text-3xl md:text-4xl text-accent mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            أنشطة متنوعة
                        </motion.div>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                            Des expériences uniques pour tous les goûts
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute top-20 -left-20 opacity-[0.12] pointer-events-none select-none z-0 rotate-90 hidden lg:block">
                    <span className="font-arabic text-[22rem] leading-none text-primary whitespace-nowrap">فخامة</span>
                </div>

                <div className="absolute top-1/2 right-0 opacity-[0.04] pointer-events-none select-none z-0 rotate-[30deg] hidden lg:block">
                    <span className="font-arabic text-[25rem] leading-none text-primary whitespace-nowrap">ترفيه</span>
                </div>

                <div className="absolute bottom-40 -right-20 opacity-[0.08] pointer-events-none select-none z-0 -rotate-45 hidden lg:block">
                    <span className="font-arabic text-[15rem] leading-none text-primary whitespace-nowrap">جودة</span>
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
                                    ? 'bg-gradient-to-br from-primary to-black text-white'
                                    : 'bg-white'
                                    }`}
                            >
                                {activity.options[0]?.discount && (
                                    <div className="absolute top-4 right-4 z-10 bg-sale text-white font-black text-xs px-3 py-1 rounded-full shadow-lg transform rotate-3 animate-pulse">
                                        OFFRE {activity.options[0].discount}
                                    </div>
                                )}

                                <div className="h-48 relative overflow-hidden">
                                    <img
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                        <span className="text-xs font-semibold text-white">
                                            {activity.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${activity.highlight ? 'text-white' : 'text-primary'}`}>
                                        {activity.title}
                                    </h3>
                                    <p className={`mb-4 text-sm ${activity.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                                        {activity.desc}
                                    </p>

                                    <ul className="space-y-2 mb-6">
                                        {activity.features.map((feature, idx) => (
                                            <li key={idx} className={`flex items-center text-sm ${activity.highlight ? 'text-white/80' : 'text-gray-600'}`}>
                                                <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activity.highlight ? 'bg-accent' : 'bg-primary'}`} />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-t pt-4 space-y-3" style={{ borderColor: activity.highlight ? 'rgba(255,255,255,0.2)' : undefined }}>
                                        {activity.options.map((option, idx) => (
                                            <div key={idx} className={`p-3 rounded-xl ${activity.highlight ? 'bg-white/10' : 'bg-gray-50'}`}>
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className={`text-xs font-bold uppercase tracking-wider ${activity.highlight ? 'text-white/60' : 'text-gray-400'}`}>
                                                        {option.duration}
                                                    </span>
                                                    {option.discount && (
                                                        <span className="text-[10px] bg-sale text-white px-2 py-0.5 rounded-full font-black">
                                                            {option.discount}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {option.oldPrice && (
                                                        <span className={`text-sm line-through ${activity.highlight ? 'text-white/40' : 'text-gray-400'}`}>
                                                            {option.oldPrice}
                                                        </span>
                                                    )}
                                                    <span className={`text-xl font-black ${activity.highlight ? 'text-accent' : 'text-sale'}`}>
                                                        {option.price}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                        <Link
                                            to="/contact"
                                            className={`w-full block text-center font-bold py-3 rounded-xl transition-all mt-4 ${activity.highlight
                                                ? 'bg-accent text-white hover:bg-white hover:text-primary shadow-lg shadow-accent/20'
                                                : 'bg-primary text-white hover:bg-sale shadow-md'
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

            <FAQ items={diversesFaqs} />
        </>
    );
};

export default ActivitesDiverses;
