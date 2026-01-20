import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const MentionsLegales = () => {
    return (
        <>
            <SEO
                title="Mentions Légales"
                description="Mentions légales de DubaiServices - Informations juridiques et légales."
            />

            <div className="min-h-screen bg-gray-50 py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Mentions Légales</h1>

                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Informations légales</h2>
                                <div className="space-y-2 text-gray-700">
                                    <p><strong>Nom de l'entreprise :</strong> DubaiServices</p>
                                    <p><strong>Forme juridique :</strong> Société à responsabilité limitée</p>
                                    <p><strong>Adresse :</strong> Downtown Dubai, UAE</p>
                                    <p><strong>Email :</strong> contact@dubaiservices.com</p>
                                    <p><strong>Téléphone :</strong> +971 50 123 4567</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Directeur de publication</h2>
                                <p className="text-gray-700">
                                    Le directeur de la publication du site est le représentant légal de DubaiServices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Hébergement</h2>
                                <div className="space-y-2 text-gray-700">
                                    <p>Le site est hébergé par :</p>
                                    <p><strong>Nom de l'hébergeur :</strong> [À compléter]</p>
                                    <p><strong>Adresse :</strong> [À compléter]</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Propriété intellectuelle</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est la propriété exclusive de DubaiServices,
                                    sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication,
                                    même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de DubaiServices.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation de responsabilité</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    DubaiServices ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur,
                                    lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées,
                                    soit de l'apparition d'un bug ou d'une incompatibilité.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Droit applicable</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Les présentes mentions légales sont régies par le droit des Émirats Arabes Unis.
                                    En cas de litige, et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Dubaï.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Crédits</h2>
                                <p className="text-gray-700">
                                    Site réalisé par <a href="https://microdidact.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Microdidact</a>
                                </p>
                            </section>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-sm">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default MentionsLegales;
