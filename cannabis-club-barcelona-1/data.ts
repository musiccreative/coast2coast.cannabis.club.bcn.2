// Fix: Populate data.ts with types and translation data to resolve module errors across the application.
export type Language = 'en' | 'es';

export interface NavLink {
  to: string;
  label: string;
}

export interface Review {
  text: string;
  author: string;
  link?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  caption_en: string;
  caption_es: string;
}

const commonData = {
  clubName: 'Coast2Coast',
  address: 'Carrer de la Costa, 123, Barcelona, Spain',
  hours: 'Open daily: 12:00 - 00:00',
  whatsappLink: 'https://wa.me/34123456789',
  googleMapsLink: 'https://goo.gl/maps/example',
};

const translations = {
  en: {
    ...commonData,
    navLinks: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/membership', label: 'Membership' },
      { to: '/location', label: 'Location' },
      { to: '/contact', label: 'Contact' },
    ],
    // HomePage
    heroTitle: 'Welcome to Coast2Coast',
    heroSubtitle: 'Barcelona\'s premier private social club. Discover a unique space for relaxation, creativity, and connection.',
    heroCta: 'Become a Member',
    aboutSpaceTitle: 'Our Space',
    aboutSpaceText1: 'Designed for comfort and community, our club offers a welcoming atmosphere for all members.',
    learnMore: 'Learn More',
    galleryTitle: 'Gallery',
    gallerySubtitle: 'A glimpse into the Coast2Coast experience.',
    viewGallery: 'View Gallery',
    membershipTitle: 'Membership',
    joinClub: 'Join the Club',
    testimonialsTitle: 'What Our Members Say',
    reviews: [
        { text: "Amazing atmosphere and great people. My favorite spot in Barcelona!", author: "John D.", link: "https://www.google.com/maps/reviews" },
        { text: "The quality is top-notch and the staff is super friendly. Highly recommend.", author: "Maria S." },
        { text: "A truly unique and comfortable space to unwind. Five stars!", author: "Alex P.", link: "https://www.google.com/maps/reviews" }
    ],
    // AboutPage
    aboutPhilosophyTitle: 'Our Philosophy',
    aboutPhilosophyText1: 'We believe in creating a safe, respectful, and inclusive environment where members can connect, relax, and share experiences. Our focus is on quality, community, and responsible enjoyment.',
    aboutPhilosophyText2: 'At Coast2Coast, we are more than just a club; we are a community of like-minded individuals who appreciate the finer things in life.',
    aboutSpaceText2: 'From our cozy lounge areas to our curated art, every detail is crafted to enhance your experience and provide a perfect escape from the everyday hustle.',
    // GalleryPage
    galleryImages: [
        { src: "/img/lounge-interior-coast2coast.jpg", alt: "Comfortable lounge area", title: "Lounge Area", width: 1920, height: 1280, caption_en: "Our cozy lounge.", caption_es: "Nuestra acogedora sala de estar." },
        { src: "/img/art-mural-coast2coast.jpg", alt: "Art mural inside the club", title: "Club Mural", width: 750, height: 1000, caption_en: "Vibrant art mural.", caption_es: "Mural de arte vibrante." },
        { src: "/img/club-exterior-coast2coast.jpg", alt: "Exterior of the club", title: "Club Exterior", width: 800, height: 600, caption_en: "The entrance to our club.", caption_es: "La entrada a nuestro club." },
    ],
    // MembershipPage
    membershipSteps: [
        { title: 'Contact Us', text: 'Reach out via WhatsApp to start the process and get an invitation.', icon: 'process' },
        { title: 'Bring Your ID', text: 'You must be of legal age (18+) and present a valid government-issued ID.', icon: 'id' },
        { title: 'Respect the Rules', text: 'All members must agree to and abide by the club\'s rules and regulations.', icon: 'check' }
    ],
    legalityTitle: 'Legal & Private',
    legalityText: 'Coast2Coast operates as a private, non-profit association, fully compliant with Spanish law. Membership is required for entry.',
    // ContactPage
    contactTitle: 'Get in Touch',
    contactText: 'Have questions or ready to join? The best way to reach us is through WhatsApp. We look forward to hearing from you!',
    contactFindUs: 'Find us on Google Maps',
    // LegalPage
    legalTitle: 'Legal Information',
    footerLegalLink: 'Legal & Privacy',
    footerCopyright: `© ${new Date().getFullYear()} Coast2Coast. All Rights Reserved.`,
    legalNoticeContent: `<h3>Legal Notice</h3><p>Information about the club...</p>`,
    privacyPolicyContent: `<h3>Privacy Policy</h3><p>How we handle your data...</p>`,
    cookiesPolicyContent: `<h3>Cookies Policy</h3><p>Details about cookies...</p>`,
    // CookieBanner
    cookieTitle: 'We Value Your Privacy',
    cookieText: 'We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.',
    cookieAccept: 'Accept',
    cookieDecline: 'Decline',
    // LocationPage
    locationTitle: 'Our Location',
    locationText: 'We are conveniently located in the heart of Barcelona. Find us using the map below or contact us if you need directions.',
  },
  es: {
    ...commonData,
    navLinks: [
      { to: '/', label: 'Inicio' },
      { to: '/about', label: 'Nosotros' },
      { to: '/gallery', label: 'Galería' },
      { to: '/membership', label: 'Membresía' },
      { to: '/location', label: 'Ubicación' },
      { to: '/contact', label: 'Contacto' },
    ],
    // HomePage
    heroTitle: 'Bienvenido a Coast2Coast',
    heroSubtitle: 'El club social privado más exclusivo de Barcelona. Descubre un espacio único para la relajación, la creatividad y la conexión.',
    heroCta: 'Hazte Miembro',
    aboutSpaceTitle: 'Nuestro Espacio',
    aboutSpaceText1: 'Diseñado para la comodidad y la comunidad, nuestro club ofrece un ambiente acogedor para todos los miembros.',
    learnMore: 'Saber Más',
    galleryTitle: 'Galería',
    gallerySubtitle: 'Un vistazo a la experiencia Coast2Coast.',
    viewGallery: 'Ver Galería',
    membershipTitle: 'Membresía',
    joinClub: 'Únete al Club',
    testimonialsTitle: 'Lo Que Dicen Nuestros Miembros',
    reviews: [
        { text: "Ambiente increíble y gente genial. ¡Mi lugar favorito en Barcelona!", author: "John D.", link: "https://www.google.com/maps/reviews" },
        { text: "La calidad es de primera y el personal es súper amable. Lo recomiendo encarecidamente.", author: "Maria S." },
        { text: "Un espacio verdaderamente único y cómodo para relajarse. ¡Cinco estrellas!", author: "Alex P.", link: "https://www.google.com/maps/reviews" }
    ],
    // AboutPage
    aboutPhilosophyTitle: 'Nuestra Filosofía',
    aboutPhilosophyText1: 'Creemos en la creación de un entorno seguro, respetuoso e inclusivo donde los miembros puedan conectar, relajarse y compartir experiencias. Nuestro enfoque es la calidad, la comunidad y el disfrute responsable.',
    aboutPhilosophyText2: 'En Coast2Coast, somos más que un club; somos una comunidad de personas con ideas afines que aprecian las cosas buenas de la vida.',
    aboutSpaceText2: 'Desde nuestras acogedoras zonas de descanso hasta nuestro arte curado, cada detalle está diseñado para mejorar tu experiencia y proporcionar un escape perfecto del ajetreo diario.',
    // GalleryPage
    galleryImages: [
        { src: "/img/lounge-interior-coast2coast.jpg", alt: "Cómoda sala de estar", title: "Sala de Estar", width: 1920, height: 1280, caption_en: "Our cozy lounge.", caption_es: "Nuestra acogedora sala de estar." },
        { src: "/img/art-mural-coast2coast.jpg", alt: "Mural de arte dentro del club", title: "Mural del Club", width: 750, height: 1000, caption_en: "Vibrant art mural.", caption_es: "Mural de arte vibrante." },
        { src: "/img/club-exterior-coast2coast.jpg", alt: "Exterior del club", title: "Exterior del Club", width: 800, height: 600, caption_en: "The entrance to our club.", caption_es: "La entrada a nuestro club." },
    ],
    // MembershipPage
    membershipSteps: [
        { title: 'Contáctanos', text: 'Escríbenos por WhatsApp para iniciar el proceso y obtener una invitación.', icon: 'process' },
        { title: 'Trae tu ID', text: 'Debes ser mayor de edad (18+) y presentar un documento de identidad válido emitido por el gobierno.', icon: 'id' },
        { title: 'Respeta las Normas', text: 'Todos los miembros deben aceptar y cumplir las normas y reglamentos del club.', icon: 'check' }
    ],
    legalityTitle: 'Legal y Privado',
    legalityText: 'Coast2Coast opera como una asociación privada sin ánimo de lucro, cumpliendo plenamente con la legislación española. Se requiere membresía para entrar.',
    // ContactPage
    contactTitle: 'Ponte en Contacto',
    contactText: '¿Tienes preguntas o estás listo para unirte? La mejor manera de contactarnos es a través de WhatsApp. ¡Esperamos saber de ti!',
    contactFindUs: 'Encuéntranos en Google Maps',
    // LegalPage
    legalTitle: 'Información Legal',
    footerLegalLink: 'Aviso Legal y Privacidad',
    footerCopyright: `© ${new Date().getFullYear()} Coast2Coast. Todos los Derechos Reservados.`,
    legalNoticeContent: `<h3>Aviso Legal</h3><p>Información sobre el club...</p>`,
    privacyPolicyContent: `<h3>Política de Privacidad</h3><p>Cómo manejamos tus datos...</p>`,
    cookiesPolicyContent: `<h3>Política de Cookies</h3><p>Detalles sobre las cookies...</p>`,
    // CookieBanner
    cookieTitle: 'Valoramos tu Privacidad',
    cookieText: 'Utilizamos cookies para mejorar tu experiencia de navegación y analizar nuestro tráfico. Al hacer clic en "Aceptar", aceptas nuestro uso de cookies.',
    cookieAccept: 'Aceptar',
    cookieDecline: 'Rechazar',
     // LocationPage
    locationTitle: 'Nuestra Ubicación',
    locationText: 'Estamos convenientemente ubicados en el corazón de Barcelona. Encuéntranos usando el mapa a continuación o contáctanos si necesitas indicaciones.',
  }
};

export { translations };
