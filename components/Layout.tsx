import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../App';
import { translations } from '../data';

const Header: React.FC = () => {
  const { language, setLanguage, navLinks, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#18D860',
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 bg-brand-dark/90 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-serif font-bold text-brand-light hover:text-brand-primary transition-colors">
          Coast2Coast
        </NavLink>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              className="text-brand-light hover:text-brand-primary transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
           <div className="flex border border-brand-secondary rounded-full">
            <button
              onClick={() => setLanguage('es')}
              className={`px-3 py-1 text-sm rounded-l-full transition-colors ${language === 'es' ? 'bg-brand-primary text-brand-dark' : 'bg-transparent text-brand-light'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-sm rounded-r-full transition-colors ${language === 'en' ? 'bg-brand-primary text-brand-dark' : 'bg-transparent text-brand-light'}`}
            >
              EN
            </button>
          </div>
          <button className="md:hidden text-brand-light" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h4" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-brand-dark/95 rounded-lg">
          <nav className="flex flex-col items-center space-y-4 p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-light hover:text-brand-primary transition-colors"
                 style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const WhatsAppButton: React.FC = () => (
  <a
    href={translations.en.whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-brand-whatsapp text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
    aria-label="Contact via WhatsApp"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="m16 2-3.14 3.14"></path><path d="M22 8c-1.5-1.5-3-1.5-4.5-1.5-1.5 0-3 .5-4.5 1.5"></path><path d="M18 6c-1-1-2-1-3-1s-2 .5-3 1"></path></svg>
  </a>
);

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black/40 text-center py-8 px-4">
      <div className="container mx-auto">
        <p className="font-serif text-lg mb-2">{t('clubName')}</p>
        <p className="text-sm text-brand-light/70 mb-1">{t('address')}</p>
        <p className="text-sm text-brand-light/70 mb-4">{t('hours')}</p>
        <div className="flex justify-center space-x-4 mb-4">
           <a href={t('whatsappLink')} target="_blank" rel="noopener noreferrer" className="text-brand-light/70 hover:text-brand-whatsapp transition-colors">WhatsApp</a>
           <a href={t('googleMapsLink')} target="_blank" rel="noopener noreferrer" className="text-brand-light/70 hover:text-brand-primary transition-colors">Google Maps</a>
        </div>
        <p className="text-xs text-brand-light/50 mb-2">
            <NavLink to="/legal" className="hover:text-brand-primary transition-colors underline">{t('footerLegalLink')}</NavLink>
        </p>
        <p className="text-xs text-brand-light/50">{t('footerCopyright')}</p>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">{children}</main>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Layout;