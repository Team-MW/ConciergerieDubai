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
                    {/* Backdrop - Only on mobile to ensure focus, or remove for non-intrusive */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[60] md:hidden"
                        onClick={handleClose}
                    />

                    {/* Popup - Top Right Positioning */}
                    <motion.div
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20, x: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-4 right-4 z-[70] w-[calc(100%-32px)] sm:w-[280px]"
                    >
                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-2xl overflow-hidden relative border border-white/20">
                            {/* Close button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
                            >
                                <X className="w-3 h-3 text-white" />
                            </button>

                            {/* Content */}
                            <div className="p-4 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <motion.span
                                        animate={{ rotate: [0, 15, -15, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-xl"
                                    >
                                        🎉
                                    </motion.span>
                                    <h2 className="text-sm font-black uppercase tracking-tight">
                                        OFFRE FLASH !
                                    </h2>
                                </div>

                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mb-3 flex items-center justify-around">
                                    <p className="text-2xl font-black">-30%</p>
                                    <p className="text-[10px] font-bold uppercase leading-tight">
                                        Activités<br />Aquatiques
                                    </p>
                                </div>

                                <a
                                    href="/activites-aquatiques"
                                    className="block w-full bg-white text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-all text-center text-xs shadow-md"
                                >
                                    EN PROFITER MAINTENANT
                                </a>

                                <p className="text-[9px] mt-2 text-center opacity-60 italic">
                                    Offre limitée jusqu'au 31/01
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
