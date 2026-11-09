const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av+Pdte+Carranza+68+Torreon';

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
              <strong>📍 Dirección:</strong> Av. Pdte. Carranza 68, Segundo
              piso, oficina 2, Segundo de Cobián Centro, 27000 Torreón, Coah.
            </p>
            <p>
              <strong>📞 Teléfono:</strong>{' '}
              <a href="tel:+528719777977">+52 871 977 7977</a>
            </p>
            <p>
              <strong>✉️ Email:</strong>{' '}
              <a href="mailto:contacto@cejabogados.com">
                contacto@cejabogados.com
              </a>
            </p>
            <p>
              <strong>💬 WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/528719777977?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje
              </a>
            </p>
            <a href="/cita" className="cta-button">
              Agenda tu consulta
            </a>
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map"
          >
            <iframe
              src="https://www.google.com/maps?q=25.5364054,-103.4477564&output=embed"
              loading="lazy"
              title="Ubicación de CEJ Abogados"
            />
          </a>
        </div>
      </main>
    </section>
  );
}
