import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import ktmImage from '../assets/KTM.jpg';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Home = () => {
    return (
        <>
            <SEO
                title="Accueil"
                description="Conciergerie de luxe à Dubaï. Location de buggy, expériences exclusives et services sur mesure. Réservez votre aventure dès maintenant."
            />

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
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

                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                            L'EXCELLENCE À <span className="text-accent">DUBAI</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-10 font-light text-gray-200 max-w-2xl mx-auto">
                            Vivez des expériences inoubliables. Location de buggy premium, conciergerie VIP et aventures sur mesure.
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all transform hover:scale-105">
                            Réserver maintenant <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-white text-primary">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={sectionVariants}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Nos Services Exclusifs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Nous sélectionnons pour vous les meilleures offres pour garantir une expérience sans pareil.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Buggy Safari", icon: <Star className="w-8 h-8 text-accent" />, desc: "Des virées palpitantes dans le désert avec nos véhicules haut de gamme." },
                            { title: "Conciergerie VIP", icon: <Shield className="w-8 h-8 text-accent" />, desc: "Service 24/7 pour répondre à toutes vos demandes, même les plus folles." },
                            { title: "Location Yacht", icon: <Clock className="w-8 h-8 text-accent" />, desc: "Croisières privées autour de la Palm et de la Marina." }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-transparent hover:border-gray-100"
                            >
                                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                                <p className="text-gray-500 text-center leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature / Offer Section (Dark) */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Image */}
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

                    <motion.div
                        className="max-w-2xl"
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col items-start mb-6">
                            <span className="text-accent tracking-widest uppercase text-xs font-bold mb-2">Offre Signature</span>
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

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
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
