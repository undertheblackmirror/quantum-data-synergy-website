import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, ArrowRight, Check, AlertCircle } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');
  
  const services = [
    { name: 'Technology Consulting', href: '#services' },
    { name: 'Data Analysis', href: '#services' },
    { name: 'AI Consulting', href: '#services' },
    { name: 'Data Strategy', href: '#services' },
  ];
  
  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy-policy' },
  ];
  
  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Use the same backend API as contact form
      const API_URL = 'https://quantum-data-synergy-backend-24u4.vercel.app/api/newsletter';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: email.trim(),
          source: 'footer_newsletter'
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe to newsletter');
      }
      
      setIsSubscribed(true);
      setEmail('');
      
      // Reset success message after 10 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 10000);
      
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setError(
        error instanceof Error 
          ? error.message 
          : 'Failed to subscribe. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              We transform businesses across Panama with innovative technology solutions, artificial intelligence, and data analysis to drive growth and transformation.
            </p>
            
            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Subscribe to our newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest insights on AI, data analytics, and technology trends in Panama.
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-900/50 border border-green-700 rounded-lg p-4 flex items-center">
                  <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-green-400 font-medium">Successfully subscribed!</p>
                    <p className="text-green-300 text-sm">Check your email for confirmation.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError('');
                      }}
                      placeholder="Your email address"
                      className="px-4 py-2 w-full rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isSubmitting}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed rounded-r-lg px-4 flex items-center justify-center transition-colors duration-300"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <ArrowRight size={20} />
                      )}
                    </button>
                  </div>
                  
                  {error && (
                    <div className="flex items-center text-red-400 text-sm">
                      <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                      {error}
                    </div>
                  )}
                </form>
              )}
            </div>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#privacy-policy" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <span className="mx-2">•</span>
            <a href="#privacy-policy" className="hover:text-blue-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
