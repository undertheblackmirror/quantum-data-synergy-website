import React, { useEffect, useRef } from 'react';
import { Cpu, BrainCircuit, BarChart2, Database, Bot, Workflow, Building2, Store, Zap, Network, Shield, Cloud } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
  }, []);

  return (
    <div
      ref={cardRef}
      className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 opacity-0 translate-y-4 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/50 dark:to-teal-900/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const coreServices = [
    {
      icon: <Cpu size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Technology Consulting",
      description: "Strategic technology planning and implementation to improve your business operations."
    },
    {
      icon: <BrainCircuit size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Artificial Intelligence",
      description: "Custom AI applications that solve real business problems and automate processes."
    },
    {
      icon: <BarChart2 size={24} className="text-teal-600 dark:text-teal-400" />,
      title: "Data Analysis",
      description: "Transform your business data into clear insights for better decision-making."
    },
    {
      icon: <Database size={24} className="text-green-600 dark:text-green-400" />,
      title: "Data Strategy",
      description: "Organize and structure your data for maximum business value and growth."
    }
  ];

  const smallBusinessServices = [
    {
      icon: <Bot size={24} className="text-blue-600" />,
      title: "Customer Service Automation",
      description: "24/7 automated customer support that improves response times and satisfaction."
    },
    {
      icon: <Workflow size={24} className="text-green-600" />,
      title: "Process Automation",
      description: "Streamline repetitive tasks and reduce errors with smart automation."
    },
    {
      icon: <Zap size={24} className="text-yellow-600" />,
      title: "Quick Solutions",
      description: "Fast implementations that deliver immediate results for your business."
    }
  ];

  const enterpriseServices = [
    {
      icon: <Network size={24} className="text-purple-600" />,
      title: "Enterprise AI Platforms",
      description: "Comprehensive AI systems designed for large-scale operations."
    },
    {
      icon: <Cloud size={24} className="text-blue-600" />,
      title: "Scalable Infrastructure",
      description: "Robust data systems that handle millions of records efficiently."
    },
    {
      icon: <Shield size={24} className="text-red-600" />,
      title: "Security & Compliance",
      description: "Protect your data and ensure regulatory compliance."
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technology solutions that help your business grow and operate efficiently.
          </p>
        </div>
        
        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {coreServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Small Business Solutions */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-2xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              Small Business Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Affordable technology solutions for growing businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallBusinessServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 mb-12 border border-purple-200 dark:border-purple-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-400 mb-3">
              Enterprise Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Advanced systems for large organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enterpriseServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Let's discuss how our solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                <Store size={18} className="mr-2" />
                Small Business
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300 transform hover:scale-105"
              >
                <Building2 size={18} className="mr-2" />
                Enterprise
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
