import Hero from '@/components/Hero';
import Feature from '@/components/Features';
import Architecture from '@/components/Architecture';
import Securtiy from '@/components/Security';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PreRegister from '@/components/Pre-Register';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Securtiy />
      <Architecture />
      <Download />
      <Footer />
    </>
  );
}
