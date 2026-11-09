import { SITE, mapsEmbedUrl, mapsSearchUrl } from '../lib/site';

export const metadata = {
  title: 'Contacto',
  description:
    'Agenda una consulta con CEJ Abogados en Torreón. Atención personalizada y profesional.',
};

export default function ContactPage() {
  return (
    <section className="fade-in">
      <main className="contact">
        <h1>Contacto</h1>
        <p>
          Agenda una consulta y recibe asesoría legal profesional y
          personalizada.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <strong>📍 Dirección:</strong> {SITE.address.full}
            </p>
            <p>
              <strong>📞 Teléfono:</strong>{' '}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              <strong>✉️ Email:</strong>{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <strong>💬 WhatsApp:</strong>{' '}
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hola, quiero más información.')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje
              </a>
            </p>

            <div className="contact-hours">
              <strong>🕒 Horario de atención</strong>
              <ul>
                {SITE.hours.map((item) => (
                  <li key={item.days}>
                    <span>{item.days}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="/cita" className="cta-button">
              Agenda tu consulta
            </a>
          </div>

          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map"
          >
            <iframe
              src={mapsEmbedUrl}
              loading="lazy"
              title="Ubicación de CEJ Abogados"
            />
          </a>
        </div>
      </main>
    </section>
  );
}
