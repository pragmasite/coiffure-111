export type Language = "fr" | "en" | "de";

export const translations = {
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      gallery: "Galerie",
      hours: "Horaires",
      contact: "Contact",
      call: "Appeler",
      profession: "COIFFEUR",
    },
    hero: {
      badge: "Expertise & Élégance",
      title1: "Votre destination",
      title2: "beauté à Porrentruy",
      description: "Mélanie vous accueille dans un salon moderne et convivial. Découvrez les dernières tendances parisiennes et des services professionnels de qualité.",
      sendEmail: "Envoyer un email",
      location: "Porrentruy, Suisse",
    },
    about: {
      label: "À propos",
      title1: "Bienvenue chez",
      title2: "Coiffure 111",
      p1: "Mélanie's salon est moderne et accueillant, avec une atmosphère chaleureuse qui vous met à l'aise dès l'arrivée. Situé dans la vieille ville de Porrentruy, Coiffure 111 bénéficie d'une localisation idéale.",
      p2: "Notre salon offre des conseils personnalisés pour toutes vos coupes, colorations et bien plus. Respect, qualité et beauté de vos cheveux sont nos priorités.",
      stat1: "Années d'expertise",
      stat2: "Clients satisfaits",
      stat3: "Services différents",
      features: [
        { title: "Formation Revlon", description: "Notre équipe se forme continuellement à Paris, la capitale de la mode" },
        { title: "Technologies modernes", description: "Dernières tendances et équipements pour des résultats professionnels" },
        { title: "Conseils personnalisés", description: "Un diagnostic personnalisé par nos coloristes pour chaque client" },
        { title: "Ambiance chaleureuse", description: "Un salon moderne dans la vieille ville idéalement situé" },
      ],
    },
    services: {
      label: "Nos prestations",
      title: "Services professionnels",
      description: "Découvrez notre gamme complète de services capillaires de haute qualité",
      items: [
        { title: "Coupes", description: "Coupes en ligne avec les dernières tendances parisiennes" },
        { title: "Blow-dry", description: "Mise en forme professionnelle de vos cheveux" },
        { title: "Coloration ammoniaquée", description: "Coloration sans ammoniaque pour un rendu naturel" },
        { title: "Permanentes", description: "Permanentes sans ammoniaque pour une tenue durable" },
        { title: "Extensions Balmain", description: "Extensions cheveu par cheveu ou avec bandes réutilisables" },
        { title: "Traitement restructurant", description: "Traitement intensif pour cheveux abîmés et fins" },
        { title: "Lissage kératine", description: "Lissage professionnel à la kératine" },
        { title: "Coiffures spéciales", description: "Coiffures mariage ou soirée sur rendez-vous" },
      ],
    },
    gallery: {
      label: "Nos réalisations",
      title: "Galerie",
      description: "Découvrez nos dernières créations et réalisations",
      descriptions: {
        1: "Coupe moderne",
        2: "Coloration",
        3: "Styling professionnel",
        4: "Extensions",
        5: "Traitement brillance",
        6: "Coupe courte tendance",
      },
    },
    hours: {
      label: "Disponibilité",
      title: "Horaires d'ouverture",
      header: "Heures d'ouverture",
      today: "Aujourd'hui",
      closed: "Fermé",
      days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    },
    contact: {
      label: "Contact",
      title1: "Prenez rendez-vous",
      title2: "dès maintenant",
      description: "Contactez-nous pour réserver votre place et bénéficier de nos services professionnels.",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      cta: "Appelez-nous",
      callNow: "Appelez maintenant",
      mapTitle: "Notre localisation",
    },
    footer: {
      tagline: "Coiffure & Beauté",
      description: "Coiffure 111 - Votre destination beauté dans la vieille ville de Porrentruy",
      navigation: "Navigation",
      about: "À propos",
      copyright: "Tous droits réservés.",
      benefits: "Avantages clients",
      discounts: "20% de réduction pour les étudiants, jeunes et personnes en situation de handicap",
      extras: "Carte de fidélité, places de parking à proximité",
    },
    disclaimer: {
      title: "Aperçu du site",
      items: [
        "Ce site web est un brouillon de prévisualisation",
        "Il n'est pas référencé sur Google",
        "Il peut contenir des erreurs ou des inexactitudes",
      ],
      button: "J'ai compris",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      hours: "Hours",
      contact: "Contact",
      call: "Call",
      profession: "HAIRDRESSER",
    },
    hero: {
      badge: "Expertise & Elegance",
      title1: "Your beauty",
      title2: "destination in Porrentruy",
      description: "Mélanie welcomes you to a modern and welcoming salon. Discover the latest Parisian trends and professional quality services.",
      sendEmail: "Send email",
      location: "Porrentruy, Switzerland",
    },
    about: {
      label: "About",
      title1: "Welcome to",
      title2: "Coiffure 111",
      p1: "Mélanie's salon is modern and welcoming, with a cozy atmosphere that makes you feel at home right from the start. Located in the old town of Porrentruy, Coiffure 111 is ideally situated.",
      p2: "Our salon offers personalized advice for all your haircuts, coloring, and more. Respect, quality, and the beauty of your hair are our priorities.",
      stat1: "Years of expertise",
      stat2: "Satisfied clients",
      stat3: "Different services",
      features: [
        { title: "Revlon Training", description: "Our team continuously trains in Paris, the fashion capital" },
        { title: "Modern Technologies", description: "Latest trends and equipment for professional results" },
        { title: "Personalized Advice", description: "A personalized diagnosis by our colorists for each client" },
        { title: "Welcoming Atmosphere", description: "A modern salon in the old town perfectly located" },
      ],
    },
    services: {
      label: "Our services",
      title: "Professional services",
      description: "Discover our complete range of high-quality hair services",
      items: [
        { title: "Haircuts", description: "Cuts aligned with the latest Parisian trends" },
        { title: "Blow-dry", description: "Professional hair styling and drying" },
        { title: "Ammonia-free coloring", description: "Ammonia-free coloring for natural results" },
        { title: "Ammonia-free perms", description: "Ammonia-free permanent waves for lasting hold" },
        { title: "Balmain extensions", description: "Strand-by-strand or reusable strip extensions" },
        { title: "Intensive treatment", description: "Intensive restructuring for damaged and fine hair" },
        { title: "Keratin straightening", description: "Professional keratin straightening" },
        { title: "Special occasions", description: "Wedding and evening hairstyles by appointment" },
      ],
    },
    gallery: {
      label: "Our work",
      title: "Gallery",
      description: "Discover our latest creations and realizations",
      descriptions: {
        1: "Modern cut",
        2: "Coloring",
        3: "Professional styling",
        4: "Extensions",
        5: "Shine treatment",
        6: "Trendy short cut",
      },
    },
    hours: {
      label: "Availability",
      title: "Opening hours",
      header: "Opening hours",
      today: "Today",
      closed: "Closed",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
    contact: {
      label: "Contact",
      title1: "Make an appointment",
      title2: "today",
      description: "Contact us to reserve your place and benefit from our professional services.",
      phone: "Phone",
      email: "Email",
      address: "Address",
      cta: "Call us",
      callNow: "Call now",
      mapTitle: "Our location",
    },
    footer: {
      tagline: "Hair & Beauty",
      description: "Coiffure 111 - Your beauty destination in the old town of Porrentruy",
      navigation: "Navigation",
      about: "About",
      copyright: "All rights reserved.",
      benefits: "Client benefits",
      discounts: "20% discount for students, young people, and people with disabilities",
      extras: "Loyalty card, parking spaces nearby",
    },
    disclaimer: {
      title: "Website preview",
      items: [
        "This website is a draft preview",
        "It is not indexed on Google",
        "It may contain errors or inaccuracies",
      ],
      button: "I understand",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      services: "Leistungen",
      gallery: "Galerie",
      hours: "Öffnungszeiten",
      contact: "Kontakt",
      call: "Anrufen",
      profession: "FRISEUR",
    },
    hero: {
      badge: "Expertise & Eleganz",
      title1: "Ihr Beauty",
      title2: "Ziel in Porrentruy",
      description: "Mélanie begrüßt Sie in einem modernen und einladenden Salon. Entdecken Sie die neuesten Pariser Trends und professionelle Qualitätsdienstleistungen.",
      sendEmail: "E-Mail senden",
      location: "Porrentruy, Schweiz",
    },
    about: {
      label: "Über uns",
      title1: "Willkommen bei",
      title2: "Coiffure 111",
      p1: "Mélanies Salon ist modern und einladend mit einer gemütlichen Atmosphäre, in der Sie sich gleich zu Hause fühlen. Im Herzen der Altstadt von Porrentruy gelegen, ist Coiffure 111 ideal situiert.",
      p2: "Unser Salon bietet persönliche Beratung für all Ihre Haarschnitte, Färbungen und mehr. Respekt, Qualität und die Schönheit Ihrer Haare sind unsere Prioritäten.",
      stat1: "Jahre Erfahrung",
      stat2: "Zufriedene Kunden",
      stat3: "Verschiedene Leistungen",
      features: [
        { title: "Revlon-Schulung", description: "Unser Team bildet sich kontinuierlich in Paris, der Modehauptstadt, fort" },
        { title: "Moderne Technologien", description: "Neueste Trends und Ausrüstung für professionelle Ergebnisse" },
        { title: "Persönliche Beratung", description: "Eine persönliche Diagnose durch unsere Coloristen für jeden Kunden" },
        { title: "Einladende Atmosphäre", description: "Ein moderner Salon in der Altstadt, perfekt gelegen" },
      ],
    },
    services: {
      label: "Unsere Leistungen",
      title: "Professionelle Dienstleistungen",
      description: "Entdecken Sie unsere umfangreiche Palette hochwertiger Haarpflegeleistungen",
      items: [
        { title: "Haarschnitte", description: "Schnitte nach den neuesten Pariser Trends" },
        { title: "Blow-dry", description: "Professionelles Styling und Trocknen" },
        { title: "Ammoniak-freie Färbung", description: "Ammoniakfreie Färbung für natürliche Ergebnisse" },
        { title: "Ammoniak-freie Dauerwelle", description: "Ammoniakfreie Dauerwelle für langanhaltende Haltung" },
        { title: "Balmain-Extensions", description: "Strähne um Strähne oder wiederverwendbare Bänder" },
        { title: "Intensivbehandlung", description: "Intensivbehandlung für geschädigte und feine Haare" },
        { title: "Keratin-Glättung", description: "Professionelle Keratin-Glättung" },
        { title: "Spezialanlässe", description: "Hochzeits- und Abendkämmen nach Vereinbarung" },
      ],
    },
    gallery: {
      label: "Unsere Arbeiten",
      title: "Galerie",
      description: "Entdecken Sie unsere neuesten Kreationen und Realisierungen",
      descriptions: {
        1: "Moderner Schnitt",
        2: "Färbung",
        3: "Professionelles Styling",
        4: "Extensions",
        5: "Glanzbehandlung",
        6: "Trendiger kurzer Schnitt",
      },
    },
    hours: {
      label: "Verfügbarkeit",
      title: "Öffnungszeiten",
      header: "Öffnungszeiten",
      today: "Heute",
      closed: "Geschlossen",
      days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    },
    contact: {
      label: "Kontakt",
      title1: "Vereinbaren Sie einen",
      title2: "Termin",
      description: "Kontaktieren Sie uns, um Ihren Platz zu reservieren und von unseren professionellen Dienstleistungen zu profitieren.",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      cta: "Rufen Sie uns an",
      callNow: "Jetzt anrufen",
      mapTitle: "Unser Standort",
    },
    footer: {
      tagline: "Haare & Schönheit",
      description: "Coiffure 111 - Ihr Beauty-Ziel in der Altstadt von Porrentruy",
      navigation: "Navigation",
      about: "Über uns",
      copyright: "Alle Rechte vorbehalten.",
      benefits: "Kundenvorteile",
      discounts: "20% Rabatt für Schüler, Jugendliche und Menschen mit Behinderungen",
      extras: "Treuekarte, Parkplätze in der Nähe",
    },
    disclaimer: {
      title: "Website-Vorschau",
      items: [
        "Diese Website ist eine Entwurfsvorschau",
        "Sie ist nicht bei Google indexiert",
        "Sie kann Fehler oder Ungenauigkeiten enthalten",
      ],
      button: "Ich verstehe",
    },
  },
};

export interface Translations {
  nav: { about: string; services: string; gallery: string; hours: string; contact: string; call: string; profession: string };
  hero: { badge: string; title1: string; title2: string; description: string; sendEmail: string; location: string };
  about: {
    label: string;
    title1: string;
    title2: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
    stat3: string;
    features: Array<{ title: string; description: string }>;
  };
  services: {
    label: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  gallery: {
    label: string;
    title: string;
    description: string;
    descriptions: Record<string, string>;
  };
  hours: {
    label: string;
    title: string;
    header: string;
    today: string;
    closed: string;
    days: string[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    callNow: string;
    mapTitle: string;
  };
  footer: {
    tagline: string;
    description: string;
    navigation: string;
    about: string;
    copyright: string;
    benefits: string;
    discounts: string;
    extras: string;
  };
  disclaimer: {
    title: string;
    items: string[];
    button: string;
  };
}
