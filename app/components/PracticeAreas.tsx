'use client';

import { useState } from 'react';
import { AreaKey } from './AreasModal';

const AREAS: Record<
  AreaKey,
  { title: string; summary: string; details: string[] }
> = {
  penal: {
    title: 'Derecho Penal',
    summary:
      'Regula los delitos y sus sanciones, garantizando justicia y protección de los derechos de las personas.',
    details: [
      'Asesoría jurídica a la víctima y acompañamiento ante el Ministerio Público.',
      'Defensa penal estratégica desde la investigación hasta el juicio oral.',
      'Atención en violencia familiar, delitos patrimoniales, homicidio, delitos sexuales, lesiones y secuestro.',
      'Especialidad también en justicia penal para menores y adolescentes.',
    ],
  },
  civil: {
    title: 'Derecho Civil',
    summary:
      'Abarca las relaciones entre particulares, protegiendo el patrimonio, los derechos personales y la seguridad jurídica en la vida cotidiana.',
    details: [
      'Elaboración y revisión de contratos civiles.',
      'Gestión y defensa de derechos reales.',
      'Sucesiones y testamentos.',
      'Resolución de conflictos civiles con enfoque preventivo y estratégico.',
    ],
  },
  familiar: {
    title: 'Derecho Familiar',
    summary:
      'Atiende los vínculos entre los integrantes de la familia, protegiendo sus derechos y priorizando el bienestar y el interés superior de los menores.',
    details: [
      'Divorcios.',
      'Guarda y custodia.',
      'Pensión alimenticia.',
      'Régimen de visitas y mediación familiar.',
      'Atención en violencia familiar con enfoque humano y profesional.',
    ],
  },
  laboral: {
    title: 'Derecho Laboral',
    summary:
      'Protege los derechos y obligaciones entre trabajadores y empleadores, promoviendo relaciones de trabajo justas y seguras.',
    details: [
      'Juicios laborales ante Tribunales Laborales.',
      'Contratos laborales y cumplimiento patronal.',
      'Negociación de acuerdos.',
      'Prevención de conflictos individuales y colectivos.',
    ],
  },
};

const ORDER: AreaKey[] = ['penal', 'civil', 'familiar', 'laboral'];

export default function PracticeAreas() {
  const [openArea, setOpenArea] = useState<AreaKey | null>(null);

  return (
    <section className="practice-areas">
      <h2>Áreas de Experiencia</h2>

      <div className="areas-accordion">
        {ORDER.map((key) => {
          const area = AREAS[key];
          const isOpen = openArea === key;

          return (
            <article
              key={key}
              className={`area-accordion-item${isOpen ? ' is-open' : ''}`}
            >
              <button
                type="button"
                className="area-accordion-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenArea(isOpen ? null : key)}
              >
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.summary}</p>
                </div>
                <span className="area-accordion-icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen ? (
                <div className="area-accordion-panel">
                  <ul>
                    {area.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
