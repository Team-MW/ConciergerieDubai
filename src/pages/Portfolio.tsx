
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Portfolio = () => {
    // Generate an array of items for the grid
    const items = Array.from({ length: 9 }).map((_, i) => ({
        id: i,
        title: `Expérience ${i + 1}`,
        category: i % 2 === 0 ? 'Aventure' : 'Luxe'
    }));

    return (
        <>
            <SEO title="Portfolio" description="Galerie photo de nos aventures et événements à Dubaï." />
            <div className="pt-32 pb-20 bg-primary min-h-screen text-white">
                <div className="container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-center mb-16"
                    >
                        Galerie <span className="text-accent">Moments</span>
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="aspect-square bg-gray-800 rounded-xl overflow-hidden relative group cursor-pointer"
                            >
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gray-700 hover:bg-gray-600 transition-colors duration-500" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-accent text-sm">{item.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default Portfolio;
