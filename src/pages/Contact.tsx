
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Conciergerie Dubaï | Réservation & Informations"
                description="Besoin d'aide pour organiser votre voyage à Dubaï ? Contactez notre équipe de conciergerie 24/7 pour toute réservation d'activité ou demande d'information."
                keywords="contact conciergerie dubaï, réservation activités dubaï, aide voyage dubaï, info séjour dubaï"
            />
            <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
                        <motion.div
                            className="font-arabic text-3xl text-accent mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            اتصل بنا
                        </motion.div>
                        <p className="text-gray-600">Notre équipe est à votre disposition 24/7 pour répondre à vos demandes.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-8 rounded-2xl shadow-sm">
                                <h3 className="text-2xl font-bold mb-6">Nos Coordonnées</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-accent/10 rounded-full text-accent"><MapPin size={24} /></div>
                                        <div>
                                            <h4 className="font-semibold">Adresse</h4>
                                            <p className="text-gray-500">Downtown Dubai, Boulevard Plaza, UAE</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-accent/10 rounded-full text-accent"><Phone size={24} /></div>
                                        <div>
                                            <h4 className="font-semibold">Téléphone</h4>
                                            <p className="text-gray-500">+971 50 123 4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-accent/10 rounded-full text-accent"><Mail size={24} /></div>
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <p className="text-gray-500">contact@dubaiservices.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent"
                        >
                            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors" placeholder="Je souhaite réserver un buggy..." />
                                </div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2">
                                    Envoyer le message <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
