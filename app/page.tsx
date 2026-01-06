import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';

export const metadata = {
  title: 'Despacho Jurídico en Torreón',
  description:
    'CEJ Abogados ofrece asesoría legal profesional en divorcio, manutención, derecho penal y civil en Torreón.',
};

export default function HomePage() {
  return (
    <>
      <section className="fade-in">

        {/* HERO */}
        <section className="hero">
  <div className="hero-image">
    <img src="/despacho.png" alt="Despacho jurídico" />
  </div>
</section>


        {/* ÁREAS */}
        <PracticeAreas />

        {/* CTA */}
        <CallToAction />

        {/* WHY */}
        <WhyChooseUs />

    
      </section>
    </>
  );
}
