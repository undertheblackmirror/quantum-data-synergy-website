import React, { useEffect, useRef } from 'react';
import { ArrowRight, BarChart2, PieChart, TrendingUp, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateFloatingElements = () => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.children;
      
      Array.from(elements).forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const delay = index * 0.2;
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        
        htmlEl.style.transition = 'transform 3s ease-in-out';
        htmlEl.style.transitionDelay = `${delay}s`;
        htmlEl.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        setTimeout(() => {
          htmlEl.style.transform = 'translate(0, 0)';
        }, 3000 + delay * 1000);
      });
    };

    const interval = setInterval(animateFloatingElements, 6000);
    animateFloatingElements();
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-blue-900 z-0" />
      
      <div 
        ref={floatingElementsRef}
        className="absolute inset-0 z-0 opacity-10 dark:opacity-20 overflow-hidden"
      >
        <BarChart2 size={120} className="absolute top-1/4 left-1/4 text-blue-600" />
        <PieChart size={80} className="absolute top-1/3 right-1/4 text-teal-500" />
        <TrendingUp size={100} className="absolute bottom-1/4 left-1/3 text-blue-400" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-teal-400" />
        <div className="absolute top-1/2 left-2/3 w-16 h-16 rounded-full bg-blue-500" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Empowering <span className="text-blue-600 dark:text-blue-400">Panama</span> with 
            <span className="text-teal-500 dark:text-teal-400"> Innovative Tech & AI</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Our team of professionals brings 5 years of expertise in technology, artificial intelligence, and data analysis to drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Get a Consultation
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mb-4">
                <Cpu size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technology Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400">Strategic technology solutions tailored for Panama's business landscape.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <div className="rounded-full bg-teal-100 dark:bg-teal-900 p-3 mb-4">
                <BarChart2 size={24} className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">Transform your data into actionable insights for the Latin American market.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 mb-4">
                <TrendingUp size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400">Cutting-edge AI solutions designed for Panama's unique business needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;