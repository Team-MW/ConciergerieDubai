import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Marc Antoine",
        rating: 5,
        text: "Une expérience incroyable ! Le pack Desert Tour était parfaitement organisé. Guide francophone au top et émotions garanties.",
        date: "Il y a 2 semaines",
        initials: "MA",
        color: "bg-blue-500"
    },
    {
        name: "Sophie Laurent",
        rating: 5,
        text: "Le Jet Ski à Dubai Marina est un must. Les photos prises par l'équipe sont magnifiques. Service client très réactif via WhatsApp.",
        date: "Il y a 1 mois",
        initials: "SL",
        color: "bg-purple-500"
    },
    {
        name: "Thomas Dubois",
        rating: 5,
        text: "Réservation super simple. On a fait le Buggy et le dîner buffet, tout était luxe et bien géré. Je recommande vivement !",
        date: "Il y a 3 jours",
        initials: "TD",
        color: "bg-orange-500"
    },
    {
        name: "Léa Martin",
        rating: 5,
        text: "DubaiServices nous a aidé à organiser tout notre séjour. Les activités aquatiques étaient le clou du spectacle. Merci !",
        date: "Il y a 1 semaine",
        initials: "LM",
        color: "bg-green-500"
    }
];

const GoogleReviews = () => {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="font-bold text-lg">4.9/5</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-primary mb-4"
                    >
                        Avis de nos clients
                    </motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Découvrez pourquoi nos clients nous font confiance pour leurs aventures à Dubaï.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold`}>
                                    {review.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">{review.name}</h4>
                                    <p className="text-xs text-gray-400">{review.date}</p>
                                </div>
                                <div className="ml-auto">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors"
                    >
                        Voir tous les avis sur Google
                        <Star className="w-4 h-4 fill-current" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
