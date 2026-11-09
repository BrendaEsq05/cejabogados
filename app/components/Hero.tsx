import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
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
            <Link href="/contacto" className="hero-button-secondary">
              Contacto
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/despacho.jpg"
            alt="Despacho jurídico CEJ Abogados en Torreón"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 56vw"
          />
        </div>
      </div>
    </section>
  );
}
