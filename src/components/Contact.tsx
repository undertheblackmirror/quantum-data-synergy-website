import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Phone, Globe, Send, Check, Building2, Clock, Star, Users, Award } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more details about your inquiry';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const API_URL = 'https://quantum-data-synergy-backend-24u4.vercel.app/api/contact';
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 10000);
      
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitError(
        'We apologize, but there was an issue sending your message. Please contact us directly at contact@quantumdatasynergy.com or call +507 6897-6654'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex justify-center items-center space-x-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 text-yellow-500 mr-2" />
              <span>Professional Service</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm">
              <Users className="w-4 h-4 text-blue-500 mr-2" />
              <span>Experienced Team</span>
            </div>
            <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm">
              <Award className="w-4 h-4 text-teal-500 mr-2" />
              <span>Proven Results</span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let's discuss your project
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Contact us to learn how our technology solutions can help your business grow. 
            <span className="font-medium text-blue-600 dark:text-blue-400"> We're here to help you succeed.</span>
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact information */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-blue-100 mb-8">Ready to transform your business with technology</p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <a href="mailto:contact@quantumdatasynergy.com" className="text-blue-100 hover:text-white transition-colors text-lg break-all">
                        contact@quantumdatasynergy.com
                      </a>
                      <p className="text-blue-100 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <a href="tel:+5076897-6654" className="text-blue-100 hover:text-white transition-colors text-lg">
                        +507 6897-6654
                      </a>
                      <p className="text-blue-100 text-sm mt-1">Monday - Friday, 9 AM - 6 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <address className="text-blue-100 not-italic text-lg">
                        Panama City, Panama
                      </address>
                      <p className="text-blue-100 text-sm mt-1">Serving all of Latin America</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="text-lg font-semibold mb-1">Website</h4>
                      <a href="https://quantumdatasynergy.com" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors text-lg break-all">
                        quantumdatasynergy.com
                      </a>
                      <p className="text-blue-100 text-sm mt-1">Virtual consultations available</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Business Hours
                  </h4>
                  <div className="space-y-2 text-blue-100">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>By appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-blue-100 text-sm mt-3 flex items-center">
                    <Building2 className="h-4 w-4 mr-2" />
                    Remote consultations available worldwide
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Send us a message</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Tell us about your project and we'll get back to you with a detailed proposal.
                </p>
                
                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                      <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message sent successfully!</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                      Thank you for contacting us. We'll review your inquiry and respond within 24 hours.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      You should receive a confirmation email shortly.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                        <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                        placeholder="How can we help your business?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors`}
                        placeholder="Please describe your project, business needs, or any specific challenges you'd like us to help with..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending your message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="ml-2" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
