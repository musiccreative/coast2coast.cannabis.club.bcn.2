// Fix: Recreated the HomePage.tsx file with a valid React component to resolve module errors.
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../App';
import { Review } from '../data';

const SmokeAnimation: React.FC = () => {
    const particles = Array.from({ length: 15 });

    return (
        <div className="smoke-container" aria-hidden="true">
            {particles.map((_, i) => (
                <span 
                    key={i}
                    style={{
                        width: `${Math.random() * 200 + 100}px`,
                        height: `${Math.random() * 200 + 100}px`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 10 + 15}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
    );
};

const FeatureCard: React.FC<{ title: string, description: string, to: string, linkText: string }> = ({ title, description, to, linkText }) => (
    <div className="bg-brand-secondary p-8 rounded-lg text-center flex flex-col h-full">
        <h3 className="text-2xl font-serif text-brand-primary mb-4">{title}</h3>
        <p className="text-brand-light/80 mb-6 flex-grow">{description}</p>
        <NavLink to={to} className="font-bold text-brand-light hover:text-brand-primary transition-colors underline mt-auto">
            {linkText}
        </NavLink>
    </div>
);

const TestimonialCard: React.FC<{ review: Review }> = ({ review }) => {
    const cardContent = (
        <div className="bg-brand-secondary p-6 rounded-lg h-full flex flex-col">
            <p className="text-brand-light/80 italic mb-4 flex-grow">"{review.text}"</p>
            <p className="text-right font-bold text-brand-primary">- {review.author}</p>
        </div>
    );

    if (review.link) {
        return (
            <a href={review.link} target="_blank" rel="noopener noreferrer" className="block hover:scale-105 transition-transform">
                {cardContent}
            </a>
        );
    }

    return cardContent;
};

const HomePage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        const homeNavLink = t('navLinks').find(link => link.to === '/');
        document.title = `${homeNavLink ? homeNavLink.label : 'Home'} | ${t('clubName')}`;
    }, [t]);

    return (
        <>
            <section 
                className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center"
                style={{backgroundImage: "url('/img/lounge-interior-coast2coast.jpg')"}}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <SmokeAnimation />
                <div className="relative z-10 p-4">
                    <h1 className="text-5xl md:text-7xl font-serif mb-4 drop-shadow-lg">{t('heroTitle')}</h1>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md">{t('heroSubtitle')}</p>
                    <a 
                        href={t('whatsappLink')} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-full hover:opacity-80 transition-opacity text-lg"
                    >
                        {t('heroCta')}
                    </a>
                </div>
            </section>

            <section className="py-20 px-4 bg-brand-dark">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard 
                            title={t('aboutSpaceTitle')} 
                            description={t('aboutSpaceText1')}
                            to="/about"
                            linkText={t('learnMore')}
                        />
                        <FeatureCard 
                            title={t('galleryTitle')}
                            description={t('gallerySubtitle')}
                            to="/gallery"
                            linkText={t('viewGallery')}
                        />
                         <FeatureCard 
                            title={t('membershipTitle')}
                            description={t('legalityText')}
                            to="/membership"
                            linkText={t('joinClub')}
                        />
                    </div>
                </div>
            </section>
            
            <section className="py-20 px-4 bg-black/40">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-serif text-center text-brand-light mb-12">{t('testimonialsTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t('reviews').map((review: Review, index: number) => (
                           <TestimonialCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;