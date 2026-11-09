import Image from 'next/image';
import Link from 'next/link';

export default function Team() {
  return (
    <section className="team">
      <div className="team-inner">
        <div className="team-copy">
          <h2>Nuestro equipo</h2>
          <p>
            En CEJ Abogados trabajamos con cercanía y criterio: escuchamos tu
            caso, te explicamos las opciones con claridad y armamos una
            estrategia jurídica seria desde el primer encuentro.
          </p>
          <Link href="/cita" className="cta-button">
            Conoce cómo te podemos ayudar
          </Link>
        </div>

        <div className="team-image">
          <Image
            src="/equipo.jpg"
            alt="Equipo de CEJ Abogados"
            width={968}
            height={716}
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
