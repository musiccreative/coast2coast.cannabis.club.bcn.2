import React, { useEffect } from 'react';
import { useLanguage } from '../App';

const AboutPage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = `${t('navLinks').find(l => l.to === '/about')?.label} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="container mx-auto">
                <h1 className="text-5xl font-serif text-center text-brand-light mb-12">{t('navLinks').find(l => l.to === '/about')?.label}</h1>
                
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        {/* Fix: Replaced hardcoded text with t() function for internationalization. */}
                        <h2 className="text-3xl font-serif text-brand-primary mb-4">{t('aboutPhilosophyTitle')}</h2>
                        <p className="text-brand-light/80 leading-relaxed mb-4">
                            {t('aboutPhilosophyText1')}
                        </p>
                        <p className="text-brand-light/80 leading-relaxed">
                            {t('aboutPhilosophyText2')}
                        </p>
                    </div>
                    <img 
                        src="/img/art-mural-coast2coast.jpg" 
                        alt="Mural art defining the philosophy of Coast2Coast club"
                        title="Art and Philosophy at Coast2Coast"
                        width="750"
                        height="1000"
                        loading="lazy"
                        className="rounded-lg shadow-xl w-full h-full object-cover"
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <img 
                        src="/img/lounge-interior-coast2coast.jpg" 
                        alt="Comfortable lounge space and atmosphere at Coast2Coast Barcelona"
                        title="Lounge Atmosphere at Coast2Coast"
                        width="1920"
                        height="1280"
                        loading="lazy"
                        className="rounded-lg shadow-xl order-last md:order-first w-full h-auto"
                    />
                    <div>
                        {/* Fix: Replaced hardcoded text with t() function for internationalization. */}
                        <h2 className="text-3xl font-serif text-brand-primary mb-4">{t('aboutSpaceTitle')}</h2>
                        <p className="text-brand-light/80 leading-relaxed mb-4">
                            {t('aboutSpaceText1')}
                        </p>
                        <p className="text-brand-light/80 leading-relaxed">
                            {t('aboutSpaceText2')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;