import { motion, type Variants } from 'framer-motion';
import { Star, Shield, Clock } from 'lucide-react';
import heroImage from '../assets/bacgroundacceuik.jpg';
import ktmImage from '../assets/KTM.jpg';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import GoogleReviews from '../components/GoogleReviews';
import FAQ from '../components/FAQ';

const homeFaqs = [
    {
        question: "Comment réserver une activité ?",
        answer: "La réservation est simple ! Vous pouvez nous contacter directement via WhatsApp ou via notre formulaire de contact. Nous confirmons ensuite la disponibilité et les détails avec vous."
    },
    {
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les paiements en espèces (AED, EUR, USD), par virement bancaire ou via lien de paiement sécurisé."
    },
    {
        question: "Le transfert depuis l'hôtel est-il inclus ?",
        answer: "Oui, la plupart de nos packs d'activités incluent le transfert privé aller-retour depuis votre hôtel à Dubaï."
    },
    {
        question: "Les activités sont-elles accessibles aux enfants ?",
        answer: "Dubaï est une destination très familiale. La majorité de nos activités sont accessibles aux enfants, avec des équipements de sécurité adaptés. Certaines activités comme le Jet Ski ont un âge minimum requis."
    }
];

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const services = [
    {
        title: "Activités & Loisirs",
        desc: "Du désert aux parcs d'attractions, nous organisons vos sorties.",
        icon: Star
    },
    {
        title: "Sécurité & Confort",
        desc: "Véhicules récents et accompagnement professionnel garanti.",
        icon: Shield
    },
    {
        title: "Disponibilité 24/7",
        desc: "Une équipe à votre écoute pour toutes vos demandes.",
        icon: Clock
    }
];

const Home = () => {
    return (
        <>
            <SEO
                title="Conciergerie Dubaï | Activités, Loisirs & Expériences de Luxe"
                description="Vivez le meilleur de Dubaï avec notre conciergerie de luxe. Safari désert, Jet Ski à la Marina, Buggy, Yacht privé et sorties exclusives. Réservez vos souvenirs au meilleur prix avec un service francophone 24h/7."
                keywords="conciergerie dubaï, activités dubaï, luxe dubaï, desert tour dubaï, jet ski dubaï marina, réservation activités dubaï, dubaï services, safari desert dubai, buggy dubai, yacht dubai, guide francophone dubai"
            />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="container mx-auto px-4 z-10 text-center text-white relative">
                    <motion.div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-full flex justify-center opacity-10 pointer-events-none select-none z-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <span className="font-arabic text-[12rem] md:text-[20rem] leading-none text-white whitespace-nowrap">دبي</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter leading-tight">
                            Vivez Dubaï <br />
                            <span className="text-accent italic">Sans Limites</span>
                        </h1>
                        <motion.div
                            className="font-arabic text-3xl md:text-5xl text-accent mb-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            عش دبي بلا حدود
                        </motion.div>
                        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light">Votre conciergerie haut de gamme pour des expériences inoubliables et un service sur mesure.</p>
                        <Link to="/services" className="bg-white text-primary px-10 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all transform hover:scale-105 inline-block shadow-xl">
                            Découvrir nos services
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Quick Services */}
            <section className="py-20 bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.08] pointer-events-none select-none z-0 -ml-20">
                    <span className="font-arabic text-[18rem] leading-none text-primary whitespace-nowrap rotate-12">سياحة</span>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="absolute top-0 left-0 opacity-[0.05] pointer-events-none select-none z-0 -ml-10">
                        <span className="font-arabic text-[12rem] leading-none text-primary whitespace-nowrap -rotate-90">كرم</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                className="p-8 rounded-3xl bg-gray-50 hover:shadow-xl transition-shadow border border-gray-100 backdrop-blur-sm bg-white/50"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={sectionVariants}
                            >
                                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature / Offer Section (Dark) */}
            <section className="py-24 relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${ktmImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="absolute top-0 right-0 opacity-20 pointer-events-none select-none z-0 hidden lg:block">
                        <span className="font-arabic text-[15rem] leading-none text-white whitespace-nowrap -mr-20">صحراء</span>
                    </div>
                    <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none select-none z-0 hidden lg:block">
                        <span className="font-arabic text-[12rem] leading-none text-white whitespace-nowrap rotate-45">سرعة</span>
                    </div>

                    <motion.div
                        className="max-w-2xl relative z-10"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-start mb-6">
                            <span className="text-accent tracking-widest uppercase text-xs font-bold mb-2 text-white">Offre Signature</span>
                            <h3 className="text-4xl font-bold mb-4 text-white">Pack Aventure Désert</h3>
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-light text-white">840 AED</span>
                                <span className="text-sm text-gray-400 line-through">1200 AED</span>
                            </div>
                        </div>
                        <p className="text-gray-300 mb-8 leading-relaxed font-light">
                            Une expérience complète alliant l'adrénaline du buggy au luxe d'un dîner privé. Profitez d'un tarif privilégié pour cette immersion totale.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Transfert privé inclus', 'Guide expert francophone', 'Photos professionnelles'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-accent" />
                                    <span className="text-gray-200">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/contact" className="bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-block">
                            En savoir plus
                        </Link>
                    </motion.div>
                </div>
            </section>

            <GoogleReviews />

            <FAQ items={homeFaqs} />

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 opacity-[0.08] pointer-events-none select-none z-0 translate-y-1/4">
                    <span className="font-arabic text-[20rem] leading-none text-primary whitespace-nowrap">فخامة</span>
                </div>
                <div className="absolute top-0 left-0 opacity-[0.05] pointer-events-none select-none z-0">
                    <span className="font-arabic text-[15rem] leading-none text-primary whitespace-nowrap -rotate-12">أناقة</span>
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Prêt pour l'aventure ?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Contactez-nous pour organiser votre séjour sur mesure à Dubaï.</p>
                        <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-black shadow-lg hover:shadow-xl transition-all inline-block">
                            Demander un devis
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
