// Fix: Create LocationPage.tsx with a valid React component to resolve module not found error.
import React, { useEffect } from 'react';
import { useLanguage } from '../App';

const LocationPage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        const locationNavLink = t('navLinks').find(link => link.to === '/location');
        document.title = `${locationNavLink ? locationNavLink.label : 'Location'} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="container mx-auto">
                <h1 className="text-5xl font-serif text-center text-brand-light mb-4">{t('locationTitle')}</h1>
                <p className="text-center text-brand-light/70 mb-12 max-w-2xl mx-auto">{t('locationText')}</p>

                <div className="bg-brand-secondary rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.686523957267!2d2.174032815428456!3d41.3850639792644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fdd2b4b3b1%3A0x6b14f6b2f6b3e6e!2sPla%C3%A7a%20de%20Catalunya!5e0!3m2!1sen!2ses!4v1678886400000"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Club Location Map"
                    ></iframe>
                </div>
                
                <div className="text-center mt-12">
                    <h2 className="text-3xl font-serif text-brand-primary mb-2">{t('address')}</h2>
                    <p className="text-lg text-brand-light/80">{t('hours')}</p>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;
