export const SITE = {
  name: 'CEJ Abogados',
  phoneDisplay: '+52 871 977 7977',
  phoneTel: '+528719777977',
  /** WhatsApp de contacto (número original del sitio) */
  whatsapp: '5214921953554',
  email: 'contacto@cejabogados.com',
  address: {
    line1: 'Escobedo 46',
    line2: 'Segundo de Cobián Centro, 27000 Torreón, Coah.',
    full: 'Escobedo 46, Segundo de Cobián Centro, 27000 Torreón, Coah.',
    lat: 25.543971,
    lng: -103.448055,
  },
  hours: [
    { days: 'Lunes a jueves', time: '10:00 – 18:30' },
    { days: 'Viernes', time: '10:00 – 14:30' },
    { days: 'Sábado y domingo', time: 'Cerrado' },
  ],
  mapsQuery: 'Escobedo+46,+Segundo+de+Cobián+Centro,+Torreón,+Coahuila',
  social: {
    instagram:
      'https://www.instagram.com/consultores_estrategajuridico?igsh=MXh1OXByZXh2NzRnaQ==',
    linkedin:
      'https://www.linkedin.com/in/luis-heriberto-morales-ruiz-750483170',
  },
} as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${SITE.address.lat},${SITE.address.lng}&output=embed`;
