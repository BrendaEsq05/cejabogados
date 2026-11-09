'use client';

import { useState } from 'react';

const QUESTIONS = [
  {
    q: '¿Cómo agendo mi primera consulta?',
    a: 'Puedes agendar desde la sección “Agenda tu consulta”, escribirnos por WhatsApp o llamar al despacho. Te confirmamos horario presencial o virtual.',
  },
  {
    q: '¿La primera consulta tiene costo?',
    a: 'Te explicamos el alcance y el costo de la consulta al agendar. Cada caso es distinto, por eso revisamos tu situación antes de proponer honorarios.',
  },
  {
    q: '¿Qué documentos debo llevar?',
    a: 'Lleva identificación y todo lo relacionado con tu asunto: contratos, demandas, acuerdos, actas o mensajes relevantes. Si no estás seguro, te orientamos antes de la cita.',
  },
  {
    q: '¿Atienden divorcio y pensión alimenticia?',
    a: 'Sí. En derecho familiar acompañamos divorcios, pensiones, custodia y temas relacionados, siempre con enfoque en claridad y en el interés de los menores.',
  },
  {
    q: '¿Puedo tener asesoría virtual?',
    a: 'Sí. Ofrecemos atención presencial en Torreón y también virtual por Google Meet, según tu disponibilidad.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <h2>Preguntas frecuentes</h2>
          <p>
            Resolvemos las dudas más comunes antes de tu primera consulta.
          </p>
        </div>

        <div className="faq-list">
          {QUESTIONS.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={item.q}
                className={`faq-item${open ? ' is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenIndex(open ? null : index)
                  }
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {open ? '−' : '+'}
                  </span>
                </button>
                {open && <div className="faq-answer">{item.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
