import CallToAction from './components/CallToAction';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';

export const metadata = {
  title: 'Despacho Jurídico en Torreón',
  description:
    'CEJ Abogados ofrece asesoría legal profesional en divorcio, manutención, derecho penal y civil en Torreón.',
};

export default function HomePage() {
  return (
    <section className="fade-in">
      <Hero />
      <PracticeAreas />
      <CallToAction />
      <WhyChooseUs />
    </section>
  );
}
