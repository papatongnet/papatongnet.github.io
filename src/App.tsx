import { useEffect } from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import TopTalents from './components/TopTalents';
import Features from './components/Features';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('shadow-lg');
        } else {
          navbar.classList.remove('shadow-lg');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary-900">
      <Navbar />
      <main>
        <section id="home" className="pt-16">
          <ImageSlider />
        </section>
        <TopTalents />
        <Features />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;