import React, { useEffect } from 'react';
import { useLanguage } from '../App';
import { GalleryImage } from '../data';

const GalleryPage: React.FC = () => {
    const { t, language } = useLanguage();

    useEffect(() => {
        document.title = `${t('galleryTitle')} | ${t('clubName')}`;
    }, [t]);

    return (
        <div className="py-20 px-4">
            <div className="container mx-auto">
                <h1 className="text-5xl font-serif text-center text-brand-light mb-4">{t('galleryTitle')}</h1>
                <p className="text-center text-brand-light/70 mb-12">{t('gallerySubtitle')}</p>

                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                    {/* Fix: Removed unnecessary type assertion as 't' function now returns the correct type. This resolves the error on line 19. */}
                    {t('galleryImages').map((image: GalleryImage, index: number) => (
                        <figure key={index} className="mb-4 break-inside-avoid">
                            <img 
                                src={image.src} 
                                alt={image.alt}
                                title={image.title}
                                width={image.width}
                                height={image.height}
                                loading="lazy" 
                                className="w-full h-auto rounded-lg shadow-lg hover:opacity-80 transition-opacity duration-300"
                            />
                            <figcaption className="text-xs text-center text-brand-light/70 mt-2">
                                {language === 'es' ? image.caption_es : image.caption_en}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;