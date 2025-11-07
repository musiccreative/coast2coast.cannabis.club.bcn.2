import React, { useEffect } from 'react';
import { useLanguage } from '../App';
import { ShieldCheck, UserCheck, FileText } from 'lucide-react';

const icons: { [key: string]: React.ElementType } = {
    id: UserCheck,
    process: FileText,
    check: ShieldCheck
};

const MembershipPage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = `${t('membershipTitle')} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="container mx-auto">
                <h1 className="text-5xl font-serif text-center text-brand-light mb-12">{t('membershipTitle')}</h1>
                
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                         {t('membershipSteps').map((step: {title: string, text: string, icon: string}, index: number) => {
                            const Icon = icons[step.icon];
                            return (
                                <div key={index} className="bg-brand-secondary p-8 rounded-lg flex flex-col items-center">
                                    <Icon className="h-16 w-16 text-brand-primary mb-6"/>
                                    <h3 className="text-2xl font-serif text-brand-primary mb-4">{step.title}</h3>
                                    <p className="text-brand-light/80 flex-grow">{step.text}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-20 text-center bg-brand-secondary p-8 rounded-lg">
                        <h2 className="text-3xl font-serif text-brand-light mb-4">{t('legalityTitle')}</h2>
                        <p className="text-brand-light/80 leading-relaxed max-w-2xl mx-auto mb-6">
                            {t('legalityText')}
                        </p>
                        <a href={t('whatsappLink')} target="_blank" rel="noopener noreferrer" className="bg-brand-whatsapp text-white font-bold py-3 px-8 rounded-full hover:opacity-80 transition-opacity inline-block">
                            {t('heroCta')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipPage;