import Image from 'next/image';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        <div className="cta-image">
          <Image
            src="/reunion.jpg"
            alt="Asesoría legal profesional en CEJ Abogados"
            width={900}
            height={700}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="cta-content">
          <h2>Asesoría legal clara y estratégica</h2>
          <p>
            Cada caso es único. En CEJ Abogados analizamos tu situación con
            seriedad, confidencialidad y enfoque en resultados.
          </p>

          <Link href="/cita" className="cta-button">
            Agenda tu consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
