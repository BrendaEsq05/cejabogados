import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '../lib/site';

type Member = {
  name: string;
  areas: string[];
  image?: string;
  href?: string;
  pending?: boolean;
};

const MEMBERS: Member[] = [
  {
    name: 'Heriberto Morales',
    areas: ['Amparo', 'Penal'],
    image: '/heriberto.jpg',
    href: SITE.social.linkedin,
  },
  {
    name: 'Noé Naranjo',
    areas: ['Periciales', 'Penal', 'Contables'],
  },
  {
    name: 'José García',
    areas: ['Penal'],
  },
  {
    name: 'Silvia Montejano',
    areas: ['Laboral', 'Civil'],
  },
  {
    name: 'Karina Fernández',
    areas: ['Guarda y custodia', 'Divorcios'],
  },
  {
    name: 'Diana Jáquez',
    areas: ['Pendiente'],
    pending: true,
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Team() {
  return (
    <section className="team">
      <div className="team-header">
        <div className="team-copy">
          <h2>Nuestro equipo</h2>
          <p>
            Abogados y especialistas que acompañan cada caso con criterio,
            cercanía y una estrategia clara desde el primer encuentro.
          </p>
          <Link href="/cita" className="cta-button">
            Agenda tu consulta
          </Link>
        </div>

        <div className="team-featured">
          <Image
            src="/heriberto.jpg"
            alt="Heriberto Morales — CEJ Abogados"
            width={900}
            height={900}
            sizes="(max-width: 900px) 100vw, 420px"
            className="team-featured-image"
          />
          <div className="team-featured-caption">
            <strong>Heriberto Morales</strong>
            <span>Amparo y Penal</span>
          </div>
        </div>
      </div>

      <div className="team-members">
        {MEMBERS.map((member) => (
          <article
            key={member.name}
            className={`team-card${member.pending ? ' is-pending' : ''}`}
          >
            <div className="team-avatar">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                />
              ) : (
                <span aria-hidden="true">{initials(member.name)}</span>
              )}
            </div>

            <div className="team-card-body">
              <h3>{member.name}</h3>
              <div className="team-tags">
                {member.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
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
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
