'use client';

import { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import PrivacyModal from './PrivacyModal';

export default function Footer() {
  const [openPrivacy, setOpenPrivacy] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <strong>CEJ Abogados</strong>
          <p>Defensa legal con ética, estrategia y resultados.</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Av. Pdte. Carranza 68, Segundo piso, Oficina 2</p>
          <p>Torreón, Coahuila</p>
          <p>📞 +52 871 977 7977</p>
          <p>✉️ contacto@cejabogados.com</p>
        </div>

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
            href="https://www.linkedin.com/in/luis-heriberto-morales-ruiz-750483170"
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
        © {new Date().getFullYear()} CEJ Abogados. Todos los derechos
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
