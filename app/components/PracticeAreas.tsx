'use client';

import { useState } from 'react';
import AreasModal, { AreaKey } from './AreasModal';


export default function PracticeAreas() {
  const [openArea, setOpenArea] = useState<AreaKey | null>(null);

  return (
    <section className="practice-areas">
      <h2>Áreas de Experiencia</h2>

      <div className="areas-grid">
        <div
          className="area-card"
          onClick={() => setOpenArea('penal')}
        >
          <h3>Derecho Penal</h3>
          <p>Regula los delitos y sus sanciones, garantizando justicia y protección de los derechos de las personas.</p>
        </div>

        <div
          className="area-card"
          onClick={() => setOpenArea('civil')}
        >
          <h3>Derecho Civil</h3>
          <p>Abarca las relaciones entre particulares, protegiendo el patrimonio, los derechos personales y la seguridad jurídica en la vida cotidiana.</p>
        </div>

        <div
          className="area-card"
          onClick={() => setOpenArea('familiar')}
        >
          <h3>Derecho Familiar</h3>
          <p>Atiende los vínculos entre los integrantes de la familia, protegiendo sus derechos y priorizando el bienestar y el interés superior de los menores.</p>
        </div>

        <div
          className="area-card"
          onClick={() => setOpenArea('laboral')}
        >
          <h3>Derecho Laboral</h3>
          <p>Protege los derechos y obligaciones entre trabajadores y empleadores, promoviendo relaciones de trabajo justas y seguras.</p>
        </div>
      </div>

      {/* MODAL */}
      <AreasModal
        open={openArea}
        onClose={() => setOpenArea(null)}
      />
    </section>
  );
}
