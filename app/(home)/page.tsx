import Header from '@/components/layouts/header';

import HeroSection from './(component)/hero-section';

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Header />
      <HeroSection />
    </main>
  );
}
