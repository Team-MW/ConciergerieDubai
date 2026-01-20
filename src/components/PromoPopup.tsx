import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        onClick={handleClose}
                    />

                    {/* Popup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
                    >
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl overflow-hidden relative">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                            >
                                <X className="w-4 h-4 text-white" />
                            </button>

                            {/* Content */}
                            <div className="p-6 text-white text-center">
                                <motion.div
                                    initial={{ rotate: -10 }}
                                    animate={{ rotate: 10 }}
                                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.5 }}
                                    className="inline-block mb-3"
                                >
                                    <span className="text-4xl">🎉</span>
                                </motion.div>

                                <h2 className="text-2xl font-black mb-3 drop-shadow-lg">
                                    OFFRE SPÉCIALE !
                                </h2>

                                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                                    <p className="text-4xl font-black mb-1">-30%</p>
                                    <p className="text-sm font-semibold">
                                        Sur toutes les activités aquatiques
                                    </p>
                                </div>

                                <p className="text-sm mb-4 font-medium">
                                    Réservez maintenant et profitez de prix exceptionnels !
                                </p>

                                <div className="flex gap-2">
                                    <a
                                        href="/activites-aquatiques"
                                        className="flex-1 bg-white text-orange-600 font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-sm"
                                    >
                                        Voir les offres
                                    </a>
                                    <button
                                        onClick={handleClose}
                                        className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-4 rounded-full hover:bg-white/30 transition-colors border-2 border-white text-sm"
                                    >
                                        Plus tard
                                    </button>
                                </div>

                                <p className="text-xs mt-3 opacity-80">
                                    Offre valable jusqu'au 31 janvier 2026
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PromoPopup;
