import PracticeAreas from '../components/PracticeAreas';

export const metadata = {
  title: 'Áreas de Experiencia',
  description:
    'Divorcio, pensión alimenticia, derecho penal y derecho civil. Servicios jurídicos en Torreón.',
};

export default function AreasPage() {
  return (
    <section className="fade-in">
    <main>
      <PracticeAreas />
    </main>
    </section>
  );
}
