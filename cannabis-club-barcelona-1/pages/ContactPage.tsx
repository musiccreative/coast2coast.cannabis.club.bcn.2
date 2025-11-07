// Fix: Create the ContactPage component to resolve module not found error.
import React, { useEffect } from 'react';
import { useLanguage } from '../App';
import { MapPin, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        const contactNavLink = t('navLinks').find(link => link.to === '/contact');
        document.title = `${contactNavLink ? contactNavLink.label : 'Contact'} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="container mx-auto max-w-4xl text-center">
                <h1 className="text-5xl font-serif text-brand-light mb-12">{t('contactTitle')}</h1>
                
                <div className="bg-brand-secondary p-8 md:p-12 rounded-lg shadow-xl">
                    <p className="text-brand-light/80 leading-relaxed max-w-2xl mx-auto mb-8 text-lg">
                        {t('contactText')}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a 
                            href={t('whatsappLink')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-brand-whatsapp text-white font-bold py-3 px-8 rounded-full hover:opacity-80 transition-colors text-lg"
                        >
                            <MessageCircle size={24} />
                            <span>WhatsApp</span>
                        </a>
                         <a 
                            href={t('googleMapsLink')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 bg-brand-secondary text-brand-light font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-colors text-lg"
                        >
                            <MapPin size={24} />
                            <span>{t('contactFindUs')}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;