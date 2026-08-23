/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Dental Office & Lab — Tegucigalpa, Honduras
 *
 * Edit THIS FILE ONLY when customizing practice content.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see TODO comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // OPTIONAL — overrides auto-generated meta description (used in <meta> + SEO)
  metadata: {
    es: "Dental Office & Lab en Tegucigalpa: odontología 100% digital con el Dr. Wilfredo Ferrari. Implantes, estética dental, prótesis Cad/Cam y laboratorio propio. Agenda tu cita.",
    en: "Dental Office & Lab in Tegucigalpa: 100% digital dentistry with Dr. Wilfredo Ferrari. Implants, cosmetic dentistry, Cad/Cam prosthetics, and in-house lab. Book your appointment.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Dental Office & Lab",

    tagline: {
      en: "100% digital dentistry, aesthetics, and restoration",
      es: "Odontología 100% digital, estética y restauración",
    },

    phone: "+504 8751-5385",
    phoneTel: "50487515385",

    address: {
      street: "Colonia América, Edificio Xcala",
      city: "Tegucigalpa",
      state: "Honduras",
      zip: "",
      // Coordinates from Google Maps — used for embed + directions links
      mapsQuery: "14.0534488,-87.2261341",
    },

    hours: {
      mon: "9:00 AM – 6:00 PM",
      tue: "9:00 AM – 6:00 PM",
      wed: "9:00 AM – 6:00 PM",
      thu: "9:00 AM – 6:00 PM",
      fri: "9:00 AM – 6:00 PM",
      sat: "9:00 AM – 3:00 PM",
      sun: "", // Dom — Cerrado
    },

    email: "labdentaloffice9@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#1A1A1A",
    accentColor: "#9CA3AF",
    primaryDark: "",
    softBg: "",
    logoUrl: "assets/images/logo.jpeg",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet Our Team",
        dentistsLead: "Specialized care with digital technology and a personal touch.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us",
        locationLead: "Colonia América, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "View image",
        close: "Close preview",
        previous: "Previous image",
        next: "Next image",
        preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Nuestro Equipo",
        dentistsLead: "Atención especializada con tecnología digital y trato personalizado.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos",
        locationLead: "Colonia América, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "Ver imagen",
        close: "Cerrar vista previa",
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        preview: "Vista previa de imagen",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dr. Wilfredo Ferrari",
      title: {
        en: "Cosmetic Dentistry Specialist",
        es: "Dentista especialista en estética dental",
      },
      bio: {
        en: "Specialist in 100% digital dentistry with an in-house fixed ceramic prosthetics lab. He combines smile design technology with a close, personalized approach for every patient.",
        es: "Especialista en odontología 100% digital, con laboratorio propio de prótesis fijas cerámicas. Combina tecnología de diseño de sonrisa con un enfoque cercano y personalizado para cada paciente.",
      },
      photoUrl: "assets/images/dentist.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Dental Cleanings", es: "Limpieza Dental" },
      description: {
        en: "Professional cleanings to remove plaque and tartar, keeping your teeth and gums healthy.",
        es: "Limpiezas profesionales para eliminar placa y sarro, manteniendo dientes y encías saludables.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Teeth Whitening", es: "Blanqueamiento Dental" },
      description: {
        en: "Safe, effective whitening treatments for a brighter, naturally radiant smile.",
        es: "Tratamientos de blanqueamiento seguros y efectivos para una sonrisa más luminosa y natural.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Restore missing teeth with durable, natural-looking implants planned with digital precision.",
        es: "Recupera dientes perdidos con implantes duraderos y de aspecto natural, planificados con precisión digital.",
      },
      icon: "implants",
    },
    {
      name: { en: "Cosmetic Dentistry", es: "Odontología Cosmética" },
      description: {
        en: "Veneers, aesthetic restorations, and smile design for a confident, harmonious look.",
        es: "Carillas, restauraciones estéticas y diseño de sonrisa para un aspecto armónico y seguro.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "General Dentistry", es: "Odontología General" },
      description: {
        en: "Preventive exams, fillings, and everyday care to protect your oral health.",
        es: "Exámenes preventivos, resinas y cuidado diario para proteger tu salud bucal.",
      },
      icon: "general",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  gallery: [
    "assets/images/gallery/IMG_0384.jpeg",
    "assets/images/gallery/IMG_0385.jpeg",
    "assets/images/gallery/IMG_0386.jpeg",
    "assets/images/gallery/IMG_0387.jpeg",
    "assets/images/gallery/IMG_0388.jpeg",
    "assets/images/gallery/IMG_0389.jpeg",
    "assets/images/gallery/IMG_0390.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/dentalofficelab",
    facebook: "https://www.facebook.com/Dentalofficelab",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
