import React, { useEffect, useRef, useState } from 'react';
import { Award, Check, Clock, Users, Target, MapPin, Briefcase } from 'lucide-react';

const statsItems = [
  { icon: <Users className="text-blue-600 dark:text-blue-400" />, value: 50, label: 'Successful Projects', suffix: '+' },
  { icon: <Award className="text-teal-500 dark:text-teal-400" />, value: 95, label: 'Client Satisfaction', suffix: '%' },
  { icon: <Clock className="text-purple-600 dark:text-purple-400" />, value: 5, label: 'Years of Experience', suffix: '+' },
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
            const duration = 2000;
            
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                About <span className="text-blue-600 dark:text-blue-400">Quantum Data Synergy</span>
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Target className="w-6 h-6 text-blue-500 mr-3" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    Empower businesses with reliable technology solutions that drive real results.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 rounded-xl border-l-4 border-teal-500">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <Briefcase className="w-6 h-6 text-teal-500 mr-3" />
                    Our Approach
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    We understand your business first, then design solutions that fit your needs.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  'Professional service',
                  'Clear communication',
                  'Transparent pricing',
                  'Local presence in Panama'
                ].map((item, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                      <Check size={14} className="text-green-600 dark:text-green-400" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 rounded-2xl p-8 shadow-lg">
              <div className="relative h-64 mb-8 overflow-hidden rounded-xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                  alt="Professional team collaboration" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <p className="text-white p-4 font-medium">
                    Our professional team in Panama City
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

              <div className="mt-8 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Proudly serving Panama and Latin America</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
