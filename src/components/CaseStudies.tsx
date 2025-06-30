import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Customer Insights",
    industry: "Retail",
    description: "Implemented a machine learning solution that analyzed customer behavior patterns, enabling personalized recommendations and improved customer retention.",
    results: [
      "32% increase in customer engagement",
      "18% boost in repeat purchases",
      "2.5x ROI on technology investment"
    ],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
  },
  {
    title: "Predictive Maintenance System",
    industry: "Manufacturing",
    description: "Developed a predictive maintenance system using IoT sensors and advanced analytics to forecast equipment failures before they occurred.",
    results: [
      "47% reduction in unplanned downtime",
      "28% decrease in maintenance costs",
      "Improved equipment lifespan by 35%"
    ],
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg"
  },
  {
    title: "Data Warehouse Optimization",
    industry: "Finance",
    description: "Redesigned a financial institution's data infrastructure, implementing modern data warehousing techniques and real-time analytics capabilities.",
    results: [
      "85% faster reporting process",
      "60% reduction in data processing costs",
      "Enhanced regulatory compliance reporting"
    ],
    image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg"
  },
  {
    title: "Supply Chain Analytics Platform",
    industry: "Logistics",
    description: "Created a comprehensive supply chain analytics platform that provided end-to-end visibility and optimization recommendations.",
    results: [
      "22% reduction in inventory costs",
      "30% improvement in delivery time accuracy",
      "12% overall logistics cost savings"
    ],
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
  }
];

const CaseStudies: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section 
      id="case-studies" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Case <span className="text-blue-600 dark:text-blue-400">Studies</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Real-world examples of how our data and technology solutions have driven measurable business results for our clients.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              ref={slidesRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${caseStudies.length * 100}%` }}
            >
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="relative w-full" 
                  style={{ width: `${100 / caseStudies.length}%` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-medium rounded">
                        {study.industry}
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{study.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">{study.description}</p>
                      
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Results:</h4>
                      <ul className="space-y-2 mb-6">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mt-1">
                              <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
                            </div>
                            <p className="ml-3 text-gray-600 dark:text-gray-400">{result}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <a 
                        href="#contact" 
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        Discuss your project
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex 
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 h-10 w-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Previous case study"
          >
            <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 h-10 w-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
            aria-label="Next case study"
          >
            <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;