import AOS from 'aos';
import { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import { SectionWave } from './components/SectionWave';
import { Skills } from './components/Skills';

function MainContent() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      delay: 0,
    });
  }, []);

  return (
    <>
      <div className="mesh-bg" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <SectionWave variant="to-muted" />
        <About />
        <SectionWave variant="to-base" />
        <Skills />
        <SectionWave variant="to-muted" />
        <Projects />
        <SectionWave variant="to-base" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const onLoaded = useCallback(() => setReady(true), []);

  return (
    <ThemeProvider>
      {!ready && <LoadingScreen onDone={onLoaded} />}
      {ready ? (
        <div className="app-shell app-shell--visible">
          <MainContent />
        </div>
      ) : null}
    </ThemeProvider>
  );
}
