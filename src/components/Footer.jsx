import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Hoang Minh Chinh. All rights reserved.
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center">
          Built with React & <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> using Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
