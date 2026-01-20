import React, { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import PromoPopup from './PromoPopup';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-0">
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <PromoPopup />
        </div>
    );
};

export default Layout;
