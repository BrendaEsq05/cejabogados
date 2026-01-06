'use client';
import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const phone = '5214921953554'; // <-- CAMBIA por el número real
  const message =
  pathname === '/contacto'
    ? 'Hola, quiero más información.'
    : pathname === '/cita'
    ? 'Hola, quiero agendar una consulta.'
    : 'Hola, me gustaría asesoría legal.';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

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
