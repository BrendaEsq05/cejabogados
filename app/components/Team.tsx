'use client';

import { useEffect, useMemo, useState } from 'react';
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
    image: '/karina.jpg',
  },
  {
    name: 'Diana Jáquez',
    areas: ['Pendiente'],
    pending: true,
    image: '/diana.jpg',
    href: 'https://www.linkedin.com/in/ma-diana-jacquez-47558719a/',
  },
];

const ROTATE_MS = 5000;

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
  const featuredMembers = useMemo(
    () => MEMBERS.filter((member) => Boolean(member.image)),
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = featuredMembers[activeIndex] ?? featuredMembers[0];

  useEffect(() => {
    if (featuredMembers.length < 2) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featuredMembers.length);
    }, ROTATE_MS);

    return () => window.clearInterval(id);
  }, [featuredMembers.length]);

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

        {featured ? (
          <div className="team-featured" key={featured.name}>
            <Image
              src={featured.image!}
              alt={`${featured.name} — CEJ Abogados`}
              width={900}
              height={900}
              sizes="(max-width: 900px) 100vw, 420px"
              className="team-featured-image"
            />
            <div className="team-featured-caption">
              <strong>{featured.name}</strong>
              <span>{featured.areas.join(' · ')}</span>
            </div>

            {featuredMembers.length > 1 ? (
              <div className="team-featured-dots" aria-hidden="true">
                {featuredMembers.map((member, index) => (
                  <button
                    key={member.name}
                    type="button"
                    className={`team-dot${index === activeIndex ? ' is-active' : ''}`}
                    aria-label={`Ver a ${member.name}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="team-members">
        {MEMBERS.map((member) => (
          <article
            key={member.name}
            className={`team-card${member.pending ? ' is-pending' : ''}${
              featured?.name === member.name ? ' is-featured' : ''
            }`}
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
