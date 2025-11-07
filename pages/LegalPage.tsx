import React, { useEffect } from 'react';
import { useLanguage } from '../App';

const LegalPage: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        document.title = `${t('legalTitle')} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4 bg-brand-dark">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-5xl font-serif text-center text-brand-light mb-12">{t('legalTitle')}</h1>
                
                <div className="legal-content bg-brand-secondary p-8 rounded-lg">
                    <div dangerouslySetInnerHTML={{ __html: t('legalNoticeContent') }} />
                    <hr className="my-8 border-brand-secondary/50"/>
                    <div dangerouslySetInnerHTML={{ __html: t('privacyPolicyContent') }} />
                    <hr className="my-8 border-brand-secondary/50"/>
                    <div dangerouslySetInnerHTML={{ __html: t('cookiesPolicyContent') }} />
                </div>
            </div>
        </div>
    );
};

export default LegalPage;