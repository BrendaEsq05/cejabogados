const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=CEJ+Abogados+México";

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
          <p><strong>📍 Dirección:</strong> Av Pdte Carranza 68-Segundo piso, oficina 2, Segundo de Cobián Centro, 27000 Torreón, Coah.</p>
          <p><strong>📞 Teléfono:</strong> +52 8719777977</p>
          <p><strong>✉️ Email:</strong> contacto@cejabogados.com</p>
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
          />
        </a>
      </div>
    </main>
    </section>
  );
}
