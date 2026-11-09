'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Instagram, Linkedin } from 'lucide-react';
import PrivacyModal from './PrivacyModal';
import { SITE, mapsEmbedUrl, mapsSearchUrl } from '../lib/site';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contacto';
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <footer className="footer">
      {!isContactPage && (
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-map"
          aria-label="Ver ubicación en Google Maps"
        >
          <iframe
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de CEJ Abogados"
          />
        </a>
      )}

      <div className="footer-container">
        <div className="footer-brand">
          <strong>{SITE.name}</strong>
          <p>Defensa legal con ética, estrategia y resultados.</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 {SITE.address.line1}</p>
          <p>{SITE.address.line2}</p>
          <p>📞 {SITE.phoneDisplay}</p>
          <p>✉️ {SITE.email}</p>
        </div>

        <div className="footer-socials">
          <h4>Síguenos</h4>

          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Instagram size={22} />
            Instagram
          </a>

          <a
            href={SITE.social.linkedin}
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
        © {new Date().getFullYear()} {SITE.name}. Todos los derechos
        reservados.
        <button
          type="button"
          className="privacy-link"
          onClick={() => setOpenPrivacy(true)}
        >
          Aviso de privacidad
        </button>
      </div>

      <PrivacyModal open={openPrivacy} onClose={() => setOpenPrivacy(false)} />
    </footer>
  );
}
