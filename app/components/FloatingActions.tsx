'use client';

import { usePathname } from 'next/navigation';
import { SITE } from '../lib/site';

export default function FloatingActions() {
  const pathname = usePathname();
  const message =
    pathname === '/contacto'
      ? 'Hola, quiero más información.'
      : pathname === '/cita'
        ? 'Hola, quiero agendar una consulta.'
        : 'Hola, me gustaría asesoría legal.';

  const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-actions">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="call-float"
        aria-label="Llamar a CEJ Abogados"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.35a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
