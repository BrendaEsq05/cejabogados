'use client';

import { useState, useEffect } from 'react';
import PrivacyModal from './PrivacyModal';


import { usePathname } from 'next/navigation';
import { Instagram, Linkedin } from 'lucide-react';



const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=CEJ+Abogados+México';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contacto';
  const [openPrivacy, setOpenPrivacy] = useState(false);

useEffect(() => {
  const accepted = localStorage.getItem('privacyAccepted');
  if (!accepted) {
    setOpenPrivacy(true);
  }
}, []);


  return (
    <footer className="footer">

      {/* MAPA SOLO CUANDO NO ES CONTACTO */}
      {!isContactPage && (
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-map"
          aria-label="Ver ubicación en Google Maps"
        >
          <iframe
            src="https://www.google.com/maps?q=25.5364054,-103.4477564&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      )}

      {/* CONTENIDO */}
      <div className="footer-container">

        {/* MARCA */}
        <div className="footer-brand">
          <strong>CEJ Abogados</strong>
          <p>Defensa legal con ética, estrategia y resultados.</p>
        </div>

        {/* CONTACTO */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Av. Pdte. Carranza 68, Segundo piso, Oficina 2</p>
          <p>Torreón, Coahuila</p>
          <p>📞 +52 871 977 7977</p>
          <p>✉️ contacto@cejabogados.com</p>
        </div>

        {/* REDES */}
        <div className="footer-socials">
  <h4>Síguenos</h4>

  <a
    href="https://www.instagram.com/consultores_estrategajuridico?igsh=MXh1OXByZXh2NzRnaQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <Instagram size={22} />
    Instagram
  </a>

  <a
    href="http://linkedin.com/in/luis-heriberto-morales-ruiz-750483170"
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <Linkedin size={22} />
    LinkedIn
  </a>
</div>



      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CEJ Abogados. Todos los derechos reservados.
      </div>

      {/* AVISO DE PRIVACIDAD */}
      <button
  className="privacy-link"
  onClick={() => setOpenPrivacy(true)}
>
  Aviso de privacidad
</button>

<PrivacyModal
  open={openPrivacy}
  onClose={() => setOpenPrivacy(false)}
/>



    </footer>
    
  );
}
