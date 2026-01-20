import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const [isAtFooter, setIsAtFooter] = useState(false);

    const phoneNumber = "+971501234567"; // Remplacez par votre numéro WhatsApp
    const message = "Bonjour, je souhaite obtenir plus d'informations sur vos services.";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Hide button when footer is visible
                if (footerRect.top < windowHeight) {
                    setIsAtFooter(true);
                } else {
                    setIsAtFooter(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isAtFooter) return null;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group relative"
            >
                <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />

                {/* Pulse animation */}
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />

                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Contactez-nous sur WhatsApp
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                </div>
            </a>
        </motion.div>
    );
};

export default WhatsAppButton;
