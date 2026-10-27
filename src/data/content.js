export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#planes', label: 'Planes' },
  { href: '#contacto', label: 'Contacto' },
];

export const SLIDES = [
  {
    kicker: 'TRANSMISIÓN_01 // DISPONIBILIDAD',
    title: 'Infraestructura que nunca duerme',
    text: 'Nuestros nodos mantienen un 99.9% de uptime real, auditado y verificable. Tu sitio queda orbitando en servidores redundantes: si un nodo cae, otro toma el control en milisegundos. Dormí tranquilo, la señal nunca se corta.',
  },
  {
    kicker: 'TRANSMISIÓN_02 // VELOCIDAD',
    title: 'Velocidad de otra dimensión',
    text: 'Discos NVMe, caché a nivel servidor y una red optimizada para latencia mínima. Tus páginas cargan antes de que el visitante parpadee, y cada milisegundo ahorrado se traduce en más conversiones y mejor posicionamiento.',
  },
  {
    kicker: 'TRANSMISIÓN_03 // SOPORTE',
    title: 'Humanos reales, 24/7',
    text: 'Detrás del panel hay ingenieros de verdad, no bots con respuestas enlatadas. Soporte técnico disponible todos los días del año, en tu idioma, con tiempos de respuesta medidos en minutos y migraciones asistidas sin costo.',
  },
];

export const FEATURES = [
  {
    icon: 'gauge',
    title: '99.9% Uptime garantizado',
    text: 'Monitoreo continuo y SLA real: si el servicio cae, te compensamos. Tu sitio siempre en línea.',
  },
  {
    icon: 'hard-drive',
    title: 'Almacenamiento NVMe',
    text: 'Discos de estado sólido de última generación para lecturas y escrituras a máxima velocidad.',
  },
  {
    icon: 'shield-check',
    title: 'SSL + protección DDoS',
    text: 'Certificado SSL gratuito en todos los planes y filtrado automático de tráfico malicioso.',
  },
  {
    icon: 'database',
    title: 'Backups diarios',
    text: 'Copias de seguridad automáticas con retención de 30 días y restauración en un clic.',
  },
  {
    icon: 'headphones',
    title: 'Soporte 24/7',
    text: 'Equipo técnico disponible por chat y ticket todos los días del año, sin excepciones.',
  },
  {
    icon: 'rocket',
    title: 'Escalado instantáneo',
    text: 'Subí de plan sin downtime ni migraciones manuales. Tu hosting crece a la par de tu proyecto.',
  },
];

export const PLANS = [
  {
    id: 'orbita',
    name: 'ÓRBITA',
    desc: 'Para proyectos que despegan',
    price: '4.99',
    currency: 'USD',
    period: '/mes',
    featured: false,
    cta: 'Elegir Órbita',
    features: [
      '1 sitio web',
      '10 GB almacenamiento NVMe',
      'Ancho de banda ilimitado',
      'SSL gratuito',
      '5 cuentas de email',
      'Backups semanales',
    ],
  },
  {
    id: 'estacion',
    name: 'ESTACIÓN',
    desc: 'El favorito de la tripulación',
    price: '9.99',
    currency: 'USD',
    period: '/mes',
    featured: true,
    cta: 'Elegir Estación',
    features: [
      'Sitios web ilimitados',
      '50 GB almacenamiento NVMe',
      'Ancho de banda ilimitado',
      'SSL gratuito + dominio 1er año',
      'Email ilimitado',
      'Backups diarios',
      'CDN incluido',
    ],
  },
  {
    id: 'nexo',
    name: 'NEXO',
    desc: 'Potencia de clase flagship',
    price: '19.99',
    currency: 'USD',
    period: '/mes',
    featured: false,
    cta: 'Elegir Nexo',
    features: [
      'Todo lo de Estación',
      '150 GB almacenamiento NVMe',
      'CPU y RAM dedicados',
      'IP dedicada',
      'Staging en un clic',
      'Soporte prioritario',
    ],
  },
];
