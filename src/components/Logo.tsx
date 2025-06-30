import React from 'react';
import { BarChart, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <a href="#home" className="flex items-center group">
      <div className="relative h-10 w-10">
        <Cpu 
          size={32} 
          className="absolute top-0 left-0 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" 
        />
        <BarChart 
          size={24} 
          className="absolute top-2 left-3 text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <div className="ml-2">
        <span className="font-bold text-lg text-gray-900 dark:text-white">
          Quantum<span className="text-blue-600 dark:text-blue-400">Data</span>Synergy
        </span>
        <span className="block text-xs text-gray-600 dark:text-gray-400 font-medium">
          Tech & Data Consulting
        </span>
      </div>
    </a>
  );
};

export default Logo;