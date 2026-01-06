'use client';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  if (!open) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div
        className="privacy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="privacy-close" onClick={onClose}>
          ✕
        </button>

        <h2>Aviso de Privacidad</h2>

        <p>
          CEJ Abogados, con domicilio en Torreón, Coahuila, es responsable
          del tratamiento de sus datos personales conforme a la Ley Federal
          de Protección de Datos Personales en Posesión de los Particulares.
        </p>

        <p>
          Los datos personales que recabamos serán utilizados para:
        </p>

        <ul>
          <li>Agendar consultas jurídicas</li>
          <li>Brindar asesoría legal</li>
          <li>Contacto y seguimiento profesional</li>
        </ul>

        <p>
          Sus datos no serán compartidos con terceros sin su consentimiento,
          salvo disposición legal.
        </p>

        <p>
          Usted puede ejercer sus derechos ARCO enviando un correo a:
          <strong> contacto@cejabogados.com</strong>
        </p>

        <p className="privacy-date">
          Última actualización: Enero 2025
        </p>
      </div>
    </div>
  );
}
