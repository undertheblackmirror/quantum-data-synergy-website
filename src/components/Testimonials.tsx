import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "DataSynergy transformed how we understand our customer data. Their AI solution provided insights we never thought possible, directly impacting our bottom line.",
    author: "Sarah Johnson",
    position: "Chief Marketing Officer",
    company: "GlobalRetail Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    quote: "The predictive maintenance system DataSynergy implemented has revolutionized our manufacturing process. Downtime is significantly reduced, and we've seen substantial cost savings.",
    author: "Michael Chen",
    position: "VP of Operations",
    company: "IndustrialTech",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    quote: "Working with DataSynergy to overhaul our data infrastructure was seamless. Their team's expertise and clear communication made a complex project manageable and successful.",
    author: "Alicia Rodriguez",
    position: "CTO",
    company: "FinanceWorks",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    quote: "The supply chain analytics platform DataSynergy built has given us unprecedented visibility into our operations. We've optimized inventory and improved delivery times significantly.",
    author: "James Wilson",
    position: "Supply Chain Director",
    company: "LogisticsPro",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  }
];

const TestimonialCard: React.FC<Testimonial & { index: number }> = ({ quote, author, position, company, image, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 150); // Stagger the animations
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 opacity-0 translate-y-4 transition-all duration-700"
    >
      <div className="flex justify-center mb-6">
        <div className="relative">
          <img 
            src={image} 
            alt={author}
            className="h-16 w-16 rounded-full object-cover border-2 border-blue-100 dark:border-blue-900"
          />
          <div className="absolute -bottom-2 -right-2 bg-blue-600 dark:bg-blue-500 rounded-full p-1">
            <Quote size={16} className="text-white" />
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">{quote}</p>
      
      <div className="text-center">
        <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{position}</p>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">{company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white dark:bg-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="text-blue-600 dark:text-blue-400">Clients</span> Say
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hear from businesses that have transformed their operations with our data and technology solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;