import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = React.useState(false);

  React.useEffect(() => {
    const handleHashChange = () => {
      setShowPrivacyPolicy(window.location.hash === '#privacy-policy');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
        <Header />
        {showPrivacyPolicy ? (
          <PrivacyPolicy />
        ) : (
          <main>
            <Hero />
            <Services />
            <About />
            <Contact />
          </main>
        )}
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;