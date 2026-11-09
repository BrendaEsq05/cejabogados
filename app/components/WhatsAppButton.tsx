'use client';

import { usePathname } from 'next/navigation';
import { SITE } from '../lib/site';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const message =
    pathname === '/contacto'
      ? 'Hola, quiero más información.'
      : pathname === '/cita'
        ? 'Hola, quiero agendar una consulta.'
        : 'Hola, me gustaría asesoría legal.';

  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      💬
    </a>
  );
}
