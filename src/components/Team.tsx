import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Martinez",
    position: "Founder & CEO",
    bio: "Ph.D. in Computer Science with 15+ years in data science and AI. Previously led data teams at Fortune 500 companies.",
    image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@datasynergy.com"
    }
  },
  {
    name: "David Kim",
    position: "CTO",
    bio: "Expert in cloud architecture and advanced analytics systems. Led technology transformations for enterprise clients.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@datasynergy.com"
    }
  },
  {
    name: "Amara Okafor",
    position: "Head of AI Solutions",
    bio: "Specialized in machine learning and natural language processing. Published researcher in the field of ethical AI.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    social: {
      linkedin: "#",
      email: "amara@datasynergy.com"
    }
  },
  {
    name: "Robert Chen",
    position: "Lead Data Architect",
    bio: "Data infrastructure expert with experience designing enterprise-scale systems for Fortune 100 companies.",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "robert@datasynergy.com"
    }
  }
];

const TeamMemberCard: React.FC<TeamMember & { index: number }> = ({ name, position, bio, image, social, index }) => {
  const [isHovered, setIsHovered] = useState(false);
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
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden opacity-0 translate-y-4 transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transform transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-20'}`}>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-teal-300 font-medium">{position}</p>
          <p className={`text-gray-300 text-sm mt-2 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}>
            {bio}
          </p>
          <div className={`flex space-x-3 mt-4 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`}>
            {social.linkedin && (
              <a 
                href={social.linkedin} 
                className="text-white hover:text-blue-400 transition-colors"
                aria-label={`${name}'s LinkedIn profile`}
              >
                <Linkedin size={20} />
              </a>
            )}
            {social.twitter && (
              <a 
                href={social.twitter} 
                className="text-white hover:text-blue-400 transition-colors"
                aria-label={`${name}'s Twitter profile`}
              >
                <Twitter size={20} />
              </a>
            )}
            {social.email && (
              <a 
                href={`mailto:${social.email}`} 
                className="text-white hover:text-blue-400 transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium">{position}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
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
      id="team" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 transition-opacity duration-1000">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="text-blue-600 dark:text-blue-400">Team</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Meet our team of data scientists, technologists, and business consultants who make the magic happen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              {...member}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;