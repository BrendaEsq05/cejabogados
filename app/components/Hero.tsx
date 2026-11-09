import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/despacho.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-media-image"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="hero-brand">CEJ Abogados</p>
        <h1>Defensa legal con ética, estrategia y resultados</h1>
        <p className="hero-lead">
          Despacho jurídico en Torreón especializado en derecho familiar,
          penal, civil y laboral.
        </p>
        <div className="hero-actions">
          <Link href="/cita" className="hero-button">
            Agenda tu consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
