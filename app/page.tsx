import Hero from '@/components/Hero';
import Feature from '@/components/Features';
import Architecture from '@/components/Architecture';
import Securtiy from '@/components/Security';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Feature/>
    <Architecture />
    <Securtiy />
    <Footer />
    </>
  );
}
