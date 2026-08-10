import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const TypingEffect = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink(!blink), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (index >= words.length) return;
    
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }
    
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, parseInt(Math.random() * 150)));
    
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-accent font-semibold">
      {words[index].substring(0, subIndex)}
      <span className={`opacity-${blink ? '100' : '0'} transition-opacity`}>|</span>
    </span>
  );
};

const Hero = () => {
  const { t } = useTranslation();
  const roles = t('hero.roles', { returnObjects: true });

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight mb-6">
              <span className="block text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-2">
                {t('hero.greeting')}
              </span>
              <span className="block mb-2">{t('hero.name')}</span>
              <span className="block text-2xl md:text-3xl mt-4">
                <TypingEffect words={roles} />
              </span>
            </h1>
            
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 mb-8">
              {t('hero.tagline')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-accent hover:bg-violet-600 dark:hover:bg-violet-400 transition-colors shadow-lg shadow-accent/30"
              >
                {t('hero.viewWork')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="/resume.pdf"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                download
              >
                {t('nav.resume')}
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-linear-to-tr from-accent via-neon to-accent-light animate-spin-slow">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 flex items-center justify-center border-4 border-white dark:border-slate-900">
                <img src="/photos/1785978574209_5059120639947113726_5059120639947113726_1a8957d68b85b850b122e325150052db.jpg" alt="Hoang Minh Chinh" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
