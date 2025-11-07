import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { translations, Language, NavLink } from './data';
import Layout from './components/Layout';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import MembershipPage from './pages/MembershipPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';
import LocationPage from './pages/LocationPage';

// Fix: Define a type for the translation set to correctly type the 't' function.
type TranslationSet = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  // Fix: Update 't' function signature to return the correct type for each key.
  t: <K extends keyof TranslationSet>(key: K) => TranslationSet[K];
  navLinks: NavLink[];
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


const App: React.FC = () => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang.startsWith('es')) {
      setLanguageState('es');
    } else {
      setLanguageState('en');
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
  }, []);

  // Fix: Update 't' function implementation to use generics and return the correct type. This resolves the error on line 59.
  const t = useCallback(<K extends keyof TranslationSet>(key: K): TranslationSet[K] => {
    return (translations[language][key] || translations['en'][key]) as TranslationSet[K];
  }, [language]);
  
  // Fix: Simplify navLinks derivation using the corrected 't' function.
  const navLinks = t('navLinks');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, navLinks }}>
      <div className="bg-brand-dark text-brand-light font-sans">
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout><Outlet /></Layout>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              {/* Fix: Removed invalid 'as' prop from Route component. This resolves the error on line 73. */}
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/legal" element={<LegalPage />} />
            </Route>
          </Routes>
          <CookieBanner />
        </HashRouter>
      </div>
    </LanguageContext.Provider>
  );
};

export default App;