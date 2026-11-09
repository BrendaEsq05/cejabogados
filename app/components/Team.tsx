import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '../lib/site';

const MEMBERS = [
  {
    name: 'Luis Heriberto Morales Ruiz',
    role: 'Abogado',
    focus: 'Estrategia jurídica y atención integral de casos',
    href: SITE.social.linkedin,
  },
  {
    name: 'Equipo CEJ',
    role: 'Derecho Familiar',
    focus: 'Divorcio, pensión alimenticia y custodia',
  },
  {
    name: 'Equipo CEJ',
    role: 'Derecho Penal',
    focus: 'Defensa y acompañamiento procesal',
  },
  {
    name: 'Equipo CEJ',
    role: 'Derecho Civil y Laboral',
    focus: 'Contratos, patrimonio y relaciones de trabajo',
  },
];

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

      <div className="team-members">
        {MEMBERS.map((member) => (
          <article key={`${member.name}-${member.role}`} className="team-card">
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p>{member.focus}</p>
            {member.href ? (
              <a
                href={member.href}
                target="_blank"
                rel="noopener noreferrer"
                className="team-link"
              >
                Ver perfil
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
