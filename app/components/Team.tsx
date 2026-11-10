'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '../lib/site';

type Member = {
  name: string;
  areas: string[];
  services?: string[];
  highlight?: string;
  image?: string;
  href?: string;
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
    areas: ['Familiar', 'Civil', 'Laboral', 'Penal'],
    services: [
      'Representación en controversias familiares, convenios y procedimientos judiciales o extrajudiciales',
      'Asesoría civil y mercantil, incluyendo reclamaciones y juicios ejecutivos u orales',
      'Representación de trabajadores y patrones en conflictos, prestaciones y conciliación laboral',
      'Defensa y acompañamiento penal de víctimas e imputados, denuncias e investigaciones',
    ],
    image: '/karina.jpg',
    href: 'https://www.linkedin.com/in/karina-fernandez-775987251',
  },
  {
    name: 'Diana Jáquez',
    areas: ['Penal', 'Familiar', 'Documentos jurídicos'],
    highlight: 'Miembro activo de Rotary International',
    services: [
      'Asesoría y acompañamiento en asuntos penales',
      'Atención de asuntos familiares',
      'Elaboración y revisión de documentos jurídicos',
      'Gestión, integración y seguimiento de documentación',
      'Acompañamiento en trámites notariales y administrativos',
    ],
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
              {featured.highlight ? (
                <em className="team-highlight-inline">{featured.highlight}</em>
              ) : null}
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
            className={`team-card${
              featured?.name === member.name ? ' is-featured' : ''
            }${member.services ? ' has-services' : ''}`}
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
              {member.highlight ? (
                <p className="team-highlight">{member.highlight}</p>
              ) : null}
              <div className="team-tags">
                {member.areas.map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
              {member.services ? (
                <ul className="team-services">
                  {member.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              ) : null}
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
