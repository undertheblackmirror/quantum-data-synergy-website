import React, { useEffect, useRef, useState } from 'react';
import { Award, Check, Clock, Users } from 'lucide-react';

const statsItems = [
  { icon: <Users className="text-blue-600 dark:text-blue-400" />, value: 50, label: 'Happy Clients', suffix: '+' },
  { icon: <Award className="text-teal-500 dark:text-teal-400" />, value: 95, label: 'Success Rate', suffix: '%' },
  { icon: <Clock className="text-blue-600 dark:text-blue-400" />, value: 5, label: 'Years Experience', suffix: '+' },
];

const AnimatedCounter: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let isMounted = true;
    let frame: number;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTime: number | null = null;
            const duration = 2000; // 2 seconds
            
            const step = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentCount = Math.floor(progress * target);
              
              if (isMounted) {
                setCount(currentCount);
              }
              
              if (progress < 1) {
                frame = requestAnimationFrame(step);
              }
            };
            
            frame = requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      isMounted = false;
      cancelAnimationFrame(frame);
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About <span className="text-blue-600 dark:text-blue-400">Us</span>
              </h2>
              
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Our team of seasoned professionals brings over 5 years of hands-on experience in technology consulting, AI implementation, and data strategy. We've successfully partnered with startups, NGOs, and corporations across Panama and Latin America to modernize operations and unlock the power of data.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Empower organizations in Panama and beyond with reliable, ethical, and impactful technology solutions.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    To be Panama's leading force in AI and data innovation by 2030.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4 mt-8">
                {[
                  'Deep understanding of Panama\'s business landscape',
                  'Cutting-edge technology expertise for Latin American markets',
                  'Data-driven approach with local context',
                  'Committed to regional digital transformation'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mt-1">
                      <Check size={16} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="ml-3 text-gray-600 dark:text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg">
              <div className="relative h-64 mb-8 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/2422294/pexels-photo-2422294.jpeg"
                  alt="Team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-4 font-medium">
                    Our team serving Panama's technology needs
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {statsItems.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      <AnimatedCounter target={item.value} suffix={item.suffix} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;