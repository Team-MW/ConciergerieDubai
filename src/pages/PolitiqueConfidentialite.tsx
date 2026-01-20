import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PolitiqueConfidentialite = () => {
    return (
        <>
            <SEO
                title="Politique de Confidentialité"
                description="Politique de confidentialité de DubaiServices - Protection de vos données personnelles."
            />

            <div className="min-h-screen bg-gray-50 py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Politique de Confidentialité</h1>

                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    DubaiServices s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité
                                    explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles
                                    lorsque vous utilisez notre site web et nos services.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">2. Données collectées</h2>
                                <p className="text-gray-700 mb-3">Nous collectons les types de données suivants :</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Informations d'identification : nom, prénom, adresse email</li>
                                    <li>Informations de contact : numéro de téléphone, adresse</li>
                                    <li>Données de navigation : adresse IP, type de navigateur, pages visitées</li>
                                    <li>Informations de réservation : dates, services demandés, préférences</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">3. Utilisation des données</h2>
                                <p className="text-gray-700 mb-3">Vos données personnelles sont utilisées pour :</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li>Traiter vos réservations et demandes de services</li>
                                    <li>Vous contacter concernant vos réservations</li>
                                    <li>Améliorer nos services et votre expérience utilisateur</li>
                                    <li>Vous envoyer des informations promotionnelles (avec votre consentement)</li>
                                    <li>Respecter nos obligations légales et réglementaires</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">4. Partage des données</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager vos informations
                                    uniquement avec nos partenaires de confiance nécessaires à la fourniture de nos services (prestataires de
                                    paiement, fournisseurs d'activités) et dans le strict respect de la confidentialité.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">5. Sécurité des données</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger
                                    vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                                    Cependant, aucune méthode de transmission sur Internet n'est totalement sécurisée.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits
                                    fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les cookies,
                                    mais cela peut affecter certaines fonctionnalités du site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">7. Vos droits</h2>
                                <p className="text-gray-700 mb-3">Conformément à la réglementation applicable, vous disposez des droits suivants :</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                                    <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                                    <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                                    <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                                    <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                                    <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                                </ul>
                                <p className="text-gray-700 mt-4">
                                    Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@dubaiservices.com" className="text-accent hover:underline">contact@dubaiservices.com</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">8. Conservation des données</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles
                                    elles ont été collectées, ou conformément aux obligations légales applicables.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">9. Modifications</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                                    Les modifications seront publiées sur cette page avec une date de mise à jour.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-primary mb-4">10. Contact</h2>
                                <p className="text-gray-700">
                                    Pour toute question concernant cette politique de confidentialité, contactez-nous :
                                </p>
                                <div className="mt-3 space-y-1 text-gray-700">
                                    <p><strong>Email :</strong> contact@dubaiservices.com</p>
                                    <p><strong>Téléphone :</strong> +971 50 123 4567</p>
                                    <p><strong>Adresse :</strong> Downtown Dubai, UAE</p>
                                </div>
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

export default PolitiqueConfidentialite;
