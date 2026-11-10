'use client';

import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type AreaKey = 'penal' | 'civil' | 'familiar' | 'laboral';

interface Props {
  open: AreaKey | null;
  onClose: () => void;
}

type AreaContent = {
  title: string;
  body: ReactNode;
};

const content: Record<AreaKey, AreaContent> = {
  penal: {
    title: 'Derecho Penal',
    body: (
      <>
        <p>
          En Consultores en Estrategia Jurídica contamos con amplia experiencia
          en el sistema penal mexicano, bajo el modelo acusatorio oral
          adversarial, brindando una defensa y asesoría estratégica desde la
          investigación inicial hasta el juicio oral y los recursos
          correspondientes.
        </p>

        <p>
          Nuestro equipo está altamente capacitado y certificado, incluyendo
          la atención especializada en justicia penal para menores y
          adolescentes, actuando siempre bajo los principios de legalidad,
          ética y protección del interés superior del menor.
        </p>

        <p>
          Ofrecemos un enfoque integral y personalizado en cada asunto,
          respaldado por diversas especialidades en derecho penal y procesal.
        </p>

        <h4>Nuestros servicios penales incluyen:</h4>

        <ul>
          <li>
            Asesoría jurídica a la víctima, colaborando con el Ministerio
            Público para la integración de la carpeta de investigación,
            búsqueda de una sentencia condenatoria y reparación del daño.
          </li>
          <li>
            Defensa penal, protegiendo los derechos del imputado mediante una
            defensa técnica sólida, estratégica y, cuando es viable, la
            gestión de acuerdos procesales favorables.
          </li>
        </ul>

        <p>
          <strong>Tenemos experiencia en casos relacionados con:</strong>
        </p>

        <p>
          Violencia familiar, delitos patrimoniales, homicidio, delitos
          sexuales, lesiones, secuestro y desaparición forzada.
        </p>
      </>
    ),
  },

  civil: {
    title: 'Derecho Civil',
    body: (
      <>
        <p>
          El Derecho Civil es la base del derecho privado en México y regula
          las relaciones entre particulares, estableciendo las normas que
          rigen aspectos fundamentales como la propiedad, los contratos, las
          obligaciones y las sucesiones, con el objetivo de brindar seguridad
          y certeza jurídica en la vida cotidiana.
        </p>

        <p>
          En Consultores en Estrategia Jurídica entendemos que el patrimonio
          representa mucho más que bienes materiales: es el resultado del
          esfuerzo, la estabilidad presente y la seguridad futura de nuestros
          clientes y sus familias. Protegerlo significa preservar ese legado y
          evitar riesgos legales, conflictos familiares y pérdidas
          irreparables.
        </p>

        <p>
          Por ello, diseñamos estrategias legales sólidas, preventivas y
          personalizadas, enfocadas en la correcta administración y
          protección del patrimonio, atendiendo las circunstancias
          particulares de cada caso.
        </p>

        <h4>Nuestros servicios incluyen:</h4>

        <ul>
          <li>Elaboración y revisión de contratos civiles</li>
          <li>Gestión y defensa de derechos reales</li>
          <li>Sucesiones y testamentos</li>
          <li>Resolución de conflictos civiles</li>
        </ul>
      </>
    ),
  },

  familiar: {
    title: 'Derecho Familiar',
    body: (
      <>
        <p>
          El Derecho Familiar regula las relaciones jurídicas entre los
          miembros de la familia, protegiendo sus derechos y obligaciones, con
          especial énfasis en el interés superior de los menores, la
          estabilidad familiar y el bienestar de todos sus integrantes.
        </p>

        <p>
          En Consultores en Estrategia Jurídica entendemos que cada situación
          familiar es única y requiere un trato sensible, humano y
          profesional. Por ello, ofrecemos una asesoría integral orientada a
          encontrar soluciones justas y equilibradas que promuevan la armonía
          y la seguridad jurídica de las familias.
        </p>

        <h4>Atendemos asuntos como:</h4>

        <ul>
          <li>Divorcios</li>
          <li>Guarda y custodia</li>
          <li>Pensión alimenticia</li>
          <li>Régimen de visitas</li>
          <li>Mediación familiar</li>
          <li>Violencia familiar</li>
        </ul>
      </>
    ),
  },

  laboral: {
    title: 'Derecho Laboral',
    body: (
      <>
        <p>
          El Derecho Laboral regula las relaciones entre trabajadores y
          empleadores, estableciendo derechos y obligaciones con el fin de
          garantizar condiciones justas de trabajo, seguridad jurídica y una
          adecuada resolución de conflictos laborales.
        </p>

        <p>
          Derivado de la reforma laboral en México, los procedimientos ahora
          se desarrollan ante Tribunales Laborales, bajo principios de
          oralidad y técnica procesal especializada, lo que exige una
          actuación estratégica y altamente capacitada.
        </p>

        <p>
          En Consultores en Estrategia Jurídica contamos con amplia
          experiencia en la asesoría y representación tanto de trabajadores
          como de empleadores, atendiendo desde conflictos individuales hasta
          litigios colectivos, con una visión integral de las relaciones
          laborales.
        </p>

        <h4>Servicios laborales:</h4>

        <ul>
          <li>Juicios laborales</li>
          <li>Contratos laborales</li>
          <li>Negociación de acuerdos</li>
          <li>Cumplimiento patronal</li>
          <li>Prevención de conflictos</li>
        </ul>
      </>
    ),
  },
};

export default function AreasModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-content"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="area-modal-title"
      >
        <button type="button" className="close" onClick={onClose}>
          ✕
        </button>

        <h2 id="area-modal-title">{content[open].title}</h2>
        <div className="modal-body">{content[open].body}</div>
      </div>
    </div>,
    document.body,
  );
}
