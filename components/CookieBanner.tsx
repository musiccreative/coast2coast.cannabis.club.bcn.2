import React, { useState, useEffect } from 'react';
import { useLanguage } from '../App';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-sm p-4 z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <h3 className="font-bold text-brand-light">{t('cookieTitle')}</h3>
          <p className="text-sm text-brand-light/80">{t('cookieText')}</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAccept}
            className="bg-brand-primary text-brand-dark px-4 py-2 rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
          >
            {t('cookieAccept')}
          </button>
          <button
            onClick={handleDecline}
            className="bg-brand-secondary text-brand-light px-4 py-2 rounded-full text-sm font-bold hover:opacity-80 transition-opacity"
          >
            {t('cookieDecline')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;