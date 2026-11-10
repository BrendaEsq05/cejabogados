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
          width="26"
          height="26"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="#000000"
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z"
          />
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
