import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image
          src="/logo1.png"
          alt="CEJ Abogados"
          width={480}
          height={266}
          priority
          className="hero-logo"
        />
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
