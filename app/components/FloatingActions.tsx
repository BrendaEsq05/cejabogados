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
        📞
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
