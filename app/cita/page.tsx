'use client';


export default function CitaPage() {
  const calendarUrl =
    'https://calendar.app.google/fETnyH5cEFaHbFcX6';

  return (
    <section className="fade-in">
    <main className="agenda-page">
      <h1 className="agenda-title">Agenda tu consulta</h1>

      <p className="agenda-subtitle">
        Selecciona un horario disponible para tu consulta jurídica.
        <br />
        Atención presencial o virtual.
      </p>

      {/* Tarjeta tipo calendario */}
      <div className="agenda-card">
        <div className="agenda-header">
          <strong>Días de atención</strong>
        </div>

        <div className="agenda-grid">
          <div className="agenda-slot">Lunes</div>
          <div className="agenda-slot">Martes</div>
          <div className="agenda-slot">Miércoles</div>
          <div className="agenda-slot">Jueves</div>
          <div className="agenda-slot">Viernes</div>
        </div>

        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="agenda-button"
        >
          Ver horarios y agendar
        </a>
      </div>

      <p className="agenda-note">
        ✔ Confirmación automática <br />
        ✔ Google Meet o presencial <br />
        ✔ Atención profesional CEJ Abogados
      </p>
    </main>
    </section>
  );
}
