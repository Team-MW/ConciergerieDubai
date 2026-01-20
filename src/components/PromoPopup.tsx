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
                    {/* Popup - Top Right Positioning, smaller on mobile */}
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 300 }}
                        onDragEnd={(_, info) => {
                            if (info.offset.x > 100) handleClose();
                        }}
                        initial={{ opacity: 0, y: -20, x: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -20, x: 600, transition: { duration: 0.2 } }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-20 right-4 z-[60] w-[260px] sm:w-[280px] pointer-events-auto cursor-grab active:cursor-grabbing"
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
                            <div className="p-3 text-white">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <motion.span
                                        animate={{ rotate: [0, 15, -15, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-lg"
                                    >
                                        🎉
                                    </motion.span>
                                    <h2 className="text-[10px] font-black uppercase tracking-tight">
                                        OFFRE FLASH !
                                    </h2>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 mb-2.5 flex items-center justify-around border border-white/10">
                                    <p className="text-xl font-black">-30%</p>
                                    <p className="text-[8px] font-bold uppercase leading-tight">
                                        Activités<br />Aquatiques
                                    </p>
                                </div>

                                <a
                                    href="/activites-aquatiques"
                                    className="block w-full bg-white text-orange-600 font-bold py-1.5 px-3 rounded-lg hover:bg-gray-100 transition-all text-center text-[9px] shadow-md uppercase"
                                >
                                    EN PROFITER
                                </a>

                                <p className="text-[8px] mt-1.5 text-center opacity-60 italic leading-none">
                                    Offre limitée au 31/01
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
