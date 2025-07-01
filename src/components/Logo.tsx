import React from 'react';
import { BarChart, Cpu, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Logo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <a href="#home" className="flex items-center group">
      <div className="relative h-12 w-12 mr-3">
        {/* Main CPU icon with glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        <Cpu 
          size={36} 
          className="absolute top-1 left-1 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300 z-10" 
        />
        <BarChart 
          size={20} 
          className="absolute top-3 left-4 text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300 z-20" 
        />
        <Zap 
          size={14} 
          className="absolute bottom-1 right-1 text-yellow-500 dark:text-yellow-400 group-hover:scale-110 transition-transform duration-300 z-30" 
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-gray-900 dark:text-white leading-tight">
          <span className="text-blue-600 dark:text-blue-400">Quantum</span>
          <span className="text-teal-500 dark:text-teal-400">Data</span>
          <span className="text-purple-600 dark:text-purple-400">Synergy</span>
        </span>
        <span className="text-xs text-gray-600 dark:text-gray-400 font-medium tracking-wide uppercase">
          Technology & AI Consulting
        </span>
      </div>
    </a>
  );
};

export default Logo;
