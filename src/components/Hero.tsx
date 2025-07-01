import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, Users, Award, Target, Lightbulb, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateFloatingElements = () => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.children;
      
      Array.from(elements).forEach((el, index) => {
        const htmlEl = el as HTMLElement;
        const delay = index * 0.3;
        const randomX = Math.random() * 15 - 7;
        const randomY = Math.random() * 15 - 7;
        
        htmlEl.style.transition = 'transform 4s ease-in-out';
        htmlEl.style.transitionDelay = `${delay}s`;
        htmlEl.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`;
        
        setTimeout(() => {
          htmlEl.style.transform = 'translate(0, 0) rotate(0deg)';
        }, 4000 + delay * 1000);
      });
    };

    const interval = setInterval(animateFloatingElements, 8000);
    animateFloatingElements();
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 z-0" />
      
      {/* Floating elements */}
      <div 
        ref={floatingElementsRef}
        className="absolute inset-0 z-0 opacity-15 dark:opacity-25 overflow-hidden"
      >
        <Target size={60} className="absolute top-1/4 left-1/4 text-blue-500" />
        <Lightbulb size={50} className="absolute top-1/3 right-1/4 text-teal-500" />
        <Zap size={70} className="absolute bottom-1/4 left-1/3 text-purple-500" />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-teal-500" />
        <div className="absolute top-1/2 left-2/3 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500" />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-blue-500" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="font-medium">5+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <Users className="w-4 h-4 text-blue-500 mr-2" />
              <span className="font-medium">50+ Projects</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700">
              <Award className="w-4 h-4 text-teal-500 mr-2" />
              <span className="font-medium">Panama Based</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <div className="mb-3">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                Quantum Data Synergy
              </span>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 font-normal">
              Technology that <span className="text-blue-600 dark:text-blue-400 font-semibold">works</span> for 
              <span className="text-teal-500 dark:text-teal-400 font-semibold"> your business</span>
            </div>
          </h1>
          
          {/* Value proposition */}
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            We help businesses in Panama grow with smart technology. 
            <span className="font-medium text-blue-600 dark:text-blue-400"> Clear results, no complexity.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-xl border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>
        
        {/* Service preview cards */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Why choose us?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Clear Communication</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We explain technology in simple terms.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Proven Results</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our solutions deliver real improvements.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Local Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Based in Panama, we understand your market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
