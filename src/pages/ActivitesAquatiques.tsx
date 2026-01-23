import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import jetskiBg from '../assets/man-drive-jetski.jpg';
import jetskiCard from '../assets/fergeg.webp';
import jetCarCard from '../assets/jetcar-barcelona-portada.jpg';
import jetskiFlyboardCard from '../assets/Jet_Ski_Flyboard_Dubai.jpg';
import divingCard from '../assets/iStock-1360323358.webp';
import boueeCard from '../assets/image.jpg';
import burjKhalifaImg from '../assets/explore_the_burj_khalifa_the_world_s_tallest_building_7ea0a0ca6d.jpg';
import aquariumImg from '../assets/dubai-aquarium-underwater.jpg';
import FAQ from '../components/FAQ';

interface ActivityOption {
    duration: string;
    price: string;
    oldPrice?: string;
    discount?: string;
}

interface Activity {
    title: string;
    desc: string;
    image: string | string[];
    options: ActivityOption[];
    features: string[];
    highlight?: boolean;
}

const waterFaqs = [
    {
        question: "Pourquoi réserver un pack Burj Khalifa + Aquarium avec Conciergerie Dubaï ?",
        answer: "Le pack combo Burj Khalifa et Dubaï Aquarium est l'une de nos meilleures ventes. En réservant via notre conciergerie, vous bénéficiez d'un tarif préférentiel de 312 AED couvrant l'accès aux niveaux 124 & 125 de la tour et la visite de l'aquarium géant du Dubai Mall. C'est le moyen idéal de combiner les deux attractions iconiques de Downtown Dubai en une seule journée."
    },
    {
        question: "Quelles sont les meilleures activités nautiques à Dubai Marina ?",
        answer: "Pour les amateurs de sensations fortes, le Jet Ski à Dubai Marina est un incontournable avec des vues incroyables sur la JBR et Palm Jumeirah. Si vous cherchez une expérience insolite, la Jet Car (voiture amphibie) vous permet de 'conduire' sur l'eau. Pour une immersion totale, nos sessions de plongée sous-marine vous font découvrir la biodiversité du Golfe Persique."
    },
    {
        question: "Les enfants peuvent-ils participer aux activités aquatiques ?",
        answer: "Absolument ! Le pack Burj Khalifa + Aquarium est gratuit pour les enfants de moins de 3 ans. Pour la bouée tractée ou le Jet Ski (en tant que passager), les enfants sont les bienvenus dès 5-7 ans (selon l'activité) sous la surveillance d'un adulte. Toutes nos activités respectent les normes de sécurité les plus strictes avec gilets de sauvetage inclus."
    },
    {
        question: "Faut-il un permis pour conduire un Jet Ski ou une Jet Car à Dubaï ?",
        answer: "Aucun permis spécial n'est requis pour la location de Jet Ski ou de Jet Car à Dubaï pour les touristes. Un instructeur professionnel vous donnera une formation rapide avant le départ pour que vous puissiez piloter en toute confiance dans les zones autorisées de Dubai Marina."
    },
    {
        question: "Quelle est la meilleure heure pour monter au Burj Khalifa ?",
        answer: "Le coucher du soleil est le moment le plus prisé, mais nous conseillons également les créneaux de mi-journée pour profiter de la clarté sur l'océan avant d'enchaîner avec la visite du Dubai Aquarium & Underwater Zoo situé juste à côté."
    }
];

const ActivitesAquatiques = () => {
    const activities: Activity[] = [
        {
            title: "Jet Ski",
            desc: "Sensations fortes sur les eaux du Golfe Persique",
            image: jetskiCard,
            options: [
                { duration: "30 min", oldPrice: "500 AED", price: "350 AED", discount: "-30%" },
                { duration: "1h", oldPrice: "800 AED", price: "600 AED", discount: "-25%" }
            ],
            features: ["Équipement inclus", "Guide professionnel", "Zone sécurisée"]
        },
        {
            title: "Jet Car",
            desc: "Voiture amphibie unique à Dubaï",
            image: jetCarCard,
            options: [
                { duration: "20 min", oldPrice: "1000 AED", price: "800 AED", discount: "-20%" },
                { duration: "30 min", oldPrice: "1200 AED", price: "1000 AED", discount: "-17%" }
            ],
            features: ["Expérience unique", "Photos incluses", "Instructeur dédié"]
        },
        {
            title: "Burj Khalifa + Aquarium",
            desc: "Le sommet du monde et l'océan",
            image: [burjKhalifaImg, aquariumImg],
            options: [
                { duration: "Adulte / Enfant", price: "312 AED" },
                { duration: "Moins de 3 ans", price: "Gratuit" }
            ],
            features: ["Niveaux 124 & 125", "Accès Aquarium", "Offre Combo exclusive"],
            highlight: true
        },
        {
            title: "Fly Board",
            desc: "Volez au-dessus de l'eau comme Iron Man",
            image: jetskiFlyboardCard,
            options: [
                { duration: "30 min", oldPrice: "450 AED", price: "350 AED", discount: "-22%" }
            ],
            features: ["Formation incluse", "Équipement complet", "Sensations garanties"]
        },
        {
            title: "Plongée Sous-Marine",
            desc: "Découvrez les fonds marins de Dubaï",
            image: divingCard,
            options: [
                { duration: "45 min", oldPrice: "650 AED", price: "500 AED", discount: "-23%" }
            ],
            features: ["Équipement complet", "Instructeur certifié", "Transport inclus"]
        },
        {
            title: "Bouée Tractée",
            desc: "Amusement garanti en famille ou entre amis",
            image: boueeCard,
            options: [
                { duration: "30 min", oldPrice: "450 AED", price: "350 AED", discount: "-22%" }
            ],
            features: ["Jusqu'à 4 personnes", "Gilets de sauvetage", "Photos souvenir"]
        }
    ];

    return (
        <>
            <SEO
                title="Activités Nautiques Dubaï | Jet Ski, Jet Car & Flyboard"
                description="Vivez l'adrénaline sur l'eau à Dubaï. Location de Jet Ski, Jet Car (voiture amphibie), Flyboard et plongée. Réservez vos activités nautiques à Dubai Marina au meilleur prix."
                keywords="jet ski dubaï, jet car dubaï, flyboard dubaï, plongée dubaï, activités nautiques dubaï, loisirs aquatiques dubaï, location jet ski dubai marina, jet ski tour burj al arab"
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
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

                <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none z-0">
                    <span className="font-arabic text-[15rem] md:text-[25rem] leading-none text-white whitespace-nowrap">دبي</span>
                </div>

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Activités Aquatiques</h1>
                        <motion.div
                            className="font-arabic text-3xl md:text-4xl text-accent mb-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            الأنشطة المائية
                        </motion.div>
                        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
                            Vivez l'aventure sur les eaux cristallines de Dubaï
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities Grid */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                {/* Massive Arabic Background Pattern */}
                <div className="absolute top-20 -right-20 opacity-[0.08] pointer-events-none select-none z-0 rotate-90 hidden lg:block">
                    <span className="font-arabic text-[22rem] leading-none text-primary whitespace-nowrap">بحر</span>
                </div>
                <div className="absolute top-1/2 left-0 opacity-[0.03] pointer-events-none select-none z-0 -rotate-45 hidden lg:block">
                    <span className="font-arabic text-[25rem] leading-none text-primary whitespace-nowrap">محيط</span>
                </div>
                <div className="absolute top-1/4 right-0 opacity-[0.02] pointer-events-none select-none z-0 rotate-12 hidden lg:block">
                    <span className="font-arabic text-[18rem] leading-none text-primary whitespace-nowrap">موج</span>
                </div>
                <div className="absolute bottom-20 right-10 opacity-[0.04] pointer-events-none select-none z-0 -rotate-12 hidden lg:block">
                    <span className="font-arabic text-[12rem] leading-none text-primary whitespace-nowrap">استرخاء</span>
                </div>
                <div className="absolute bottom-40 left-0 opacity-[0.06] pointer-events-none select-none z-0 rotate-12 hidden lg:block">
                    <span className="font-arabic text-[15rem] leading-none text-primary whitespace-nowrap">ماء</span>
                </div>
                <div className="absolute top-10 left-1/3 opacity-[0.02] pointer-events-none select-none z-0 rotate-[30deg] hidden lg:block">
                    <span className="font-arabic text-[10rem] leading-none text-primary whitespace-nowrap">زرقاء</span>
                </div>
                <div className="absolute top-2/3 right-1/4 opacity-[0.03] pointer-events-none select-none z-0 -rotate-[20deg] hidden lg:block">
                    <span className="font-arabic text-[14rem] leading-none text-primary whitespace-nowrap">عمق</span>
                </div>
                <div className="absolute bottom-1/3 left-1/2 opacity-[0.02] pointer-events-none select-none z-0 rotate-[60deg] hidden lg:block">
                    <span className="font-arabic text-[11rem] leading-none text-primary whitespace-nowrap">انتعاش</span>
                </div>
                <div className="absolute top-[15%] left-[10%] opacity-[0.02] pointer-events-none select-none z-0 -rotate-12 hidden lg:block">
                    <span className="font-arabic text-[13rem] leading-none text-primary whitespace-nowrap">لؤلؤ</span>
                </div>
                <div className="absolute bottom-[10%] left-[40%] opacity-[0.03] pointer-events-none select-none z-0 rotate-[15deg] hidden lg:block">
                    <span className="font-arabic text-[16rem] leading-none text-primary whitespace-nowrap">مرجان</span>
                </div>
                <div className="absolute top-[40%] right-[10%] opacity-[0.02] pointer-events-none select-none z-0 -rotate-[35deg] hidden lg:block">
                    <span className="font-arabic text-[14rem] leading-none text-primary whitespace-nowrap">هدوء</span>
                </div>
                <div className="absolute top-[80%] right-[30%] opacity-[0.01] pointer-events-none select-none z-0 rotate-[45deg] hidden lg:block">
                    <span className="font-arabic text-[20rem] leading-none text-primary whitespace-nowrap">نقاء</span>
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
                                    <div className="absolute top-4 right-4 z-10 bg-sale text-white font-black text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3 group-hover:scale-110 transition-transform animate-pulse">
                                        {activity.options[0].discount}
                                    </div>
                                )}

                                <div className="h-48 relative overflow-hidden flex">
                                    {Array.isArray(activity.image) ? (
                                        activity.image.map((img, idx) => (
                                            <div key={idx} className="relative flex-1 h-full overflow-hidden">
                                                <img
                                                    src={img}
                                                    alt={`${activity.title} ${idx}`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {idx === 0 && <div className="absolute inset-y-0 right-0 w-[2px] bg-white/30 z-10" />}
                                            </div>
                                        ))
                                    ) : (
                                        <img
                                            src={activity.image}
                                            alt={activity.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className={`text-2xl font-bold mb-2 ${activity.highlight ? 'text-white' : 'text-primary'}`}>{activity.title}</h3>
                                    <p className={`mb-4 ${activity.highlight ? 'text-white/80' : 'text-gray-500'}`}>{activity.desc}</p>

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
                                            <div key={idx} className={`p-3 rounded-lg ${activity.highlight ? 'bg-white/10' : 'bg-gray-50'}`}>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`text-sm font-semibold ${activity.highlight ? 'text-white/80' : 'text-gray-700'}`}>{option.duration}</span>
                                                    {option.discount && (
                                                        <span className="text-xs bg-sale text-white px-2 py-1 rounded-full font-bold">
                                                            {option.discount}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        {option.oldPrice && (
                                                            <span className={`line-through text-sm ${activity.highlight ? 'text-white/40' : 'text-gray-400'}`}>{option.oldPrice}</span>
                                                        )}
                                                        <span className={`text-xl font-black ${activity.highlight ? 'text-accent' : 'text-sale'}`}>{option.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <Link
                                            to="/contact"
                                            className={`w-full block text-center font-bold py-3 rounded-lg transition-all mt-4 ${activity.highlight
                                                ? 'bg-accent text-white hover:bg-white hover:text-primary'
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

            <FAQ items={waterFaqs} />
        </>
    );
};

export default ActivitesAquatiques;
