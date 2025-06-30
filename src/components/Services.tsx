import React, { useEffect, useRef } from 'react';
import { Cpu, BrainCircuit, BarChart2, Database, Bot, Workflow, Building2, Store, Zap, Network, Shield, Cloud } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string[];
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
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 opacity-0 translate-y-4"
    >
      <div className="rounded-full bg-blue-100 dark:bg-blue-900/50 p-3 inline-flex mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600 dark:text-gray-400">
            <div className="h-2 w-2 rounded-full bg-blue-500 dark:bg-blue-400 mt-2 mr-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const BusinessSizeSection: React.FC<{ 
  title: string; 
  subtitle: string; 
  services: Array<{ icon: React.ReactNode; title: string; description: string[]; }>; 
  bgColor: string;
  titleColor: string;
}> = ({ title, subtitle, services, bgColor, titleColor }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <div 
      ref={sectionRef}
      className={`${bgColor} rounded-2xl p-8 mb-12 opacity-0 translate-y-4 transition-all duration-700`}
    >
      <div className="text-center mb-8">
        <h3 className={`text-2xl sm:text-3xl font-bold ${titleColor} mb-3`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {subtitle}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const coreServices = [
    {
      icon: <Cpu size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "Technology Consulting",
      description: [
        "IT strategy & infrastructure optimization",
        "Cloud migration & systems integration",
        "Cybersecurity audits & compliance"
      ]
    },
    {
      icon: <BrainCircuit size={24} className="text-blue-600 dark:text-blue-400" />,
      title: "AI Consulting",
      description: [
        "Custom AI model development",
        "Machine learning deployment",
        "Automation & NLP solutions"
      ]
    },
    {
      icon: <BarChart2 size={24} className="text-teal-600 dark:text-teal-400" />,
      title: "Data Analysis",
      description: [
        "Business intelligence dashboards",
        "Predictive analytics",
        "Data cleaning, structuring & visualization"
      ]
    },
    {
      icon: <Database size={24} className="text-teal-600 dark:text-teal-400" />,
      title: "Data Strategy Consulting",
      description: [
        "Data governance frameworks",
        "Architecture & tool selection",
        "KPI alignment & reporting strategies"
      ]
    }
  ];

  const smallBusinessServices = [
    {
      icon: <Bot size={24} className="text-green-600 dark:text-green-400" />,
      title: "AI Chatbots & Virtual Assistants",
      description: [
        "24/7 customer support automation",
        "Lead qualification & booking systems",
        "WhatsApp & social media integration"
      ]
    },
    {
      icon: <Workflow size={24} className="text-green-600 dark:text-green-400" />,
      title: "N8N Workflow Automation",
      description: [
        "Email marketing automation",
        "Social media posting & management",
        "Invoice & payment processing"
      ]
    },
    {
      icon: <Zap size={24} className="text-green-600 dark:text-green-400" />,
      title: "Quick AI Solutions",
      description: [
        "Document processing & data entry",
        "Inventory management systems",
        "Customer feedback analysis"
      ]
    }
  ];

  const enterpriseServices = [
    {
      icon: <Network size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Enterprise AI Platforms",
      description: [
        "Multi-agent AI systems",
        "Advanced process automation",
        "Custom LLM implementations"
      ]
    },
    {
      icon: <Cloud size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Scalable Data Infrastructure",
      description: [
        "Data lakes & warehouses",
        "Real-time analytics pipelines",
        "Multi-cloud architecture"
      ]
    },
    {
      icon: <Shield size={24} className="text-purple-600 dark:text-purple-400" />,
      title: "Enterprise Security & Compliance",
      description: [
        "AI governance frameworks",
        "Data privacy & GDPR compliance",
        "Advanced threat detection"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive technology and data solutions designed to transform businesses across Panama and Latin America.
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
        <BusinessSizeSection
          title="Small Business Solutions"
          subtitle="Affordable AI and automation tools to help small businesses compete and grow"
          services={smallBusinessServices}
          bgColor="bg-green-50 dark:bg-green-900/20"
          titleColor="text-green-700 dark:text-green-400"
        />

        {/* Enterprise Solutions */}
        <BusinessSizeSection
          title="Enterprise Solutions"
          subtitle="Advanced AI systems and data infrastructure for large-scale operations"
          services={enterpriseServices}
          bgColor="bg-purple-50 dark:bg-purple-900/20"
          titleColor="text-purple-700 dark:text-purple-400"
        />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you're a small business looking to automate processes or an enterprise seeking advanced AI solutions, 
              we have the expertise to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                <Store size={18} className="mr-2" />
                Small Business Solutions
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors duration-300"
              >
                <Building2 size={18} className="mr-2" />
                Enterprise Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;