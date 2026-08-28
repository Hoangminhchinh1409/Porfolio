import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const { t } = useTranslation();

  const experiences = t('experience.items', { returnObjects: true });

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {t('nav.experience')}
          </h2>
          <div className="mt-2 w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <span className="absolute -left-10 md:-left-14 flex items-center justify-center w-8 h-8 bg-accent rounded-full ring-8 ring-slate-50 dark:ring-slate-900">
                <Briefcase className="w-4 h-4 text-white" />
              </span>
              
              <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                  <span className="text-sm font-medium text-accent mt-1 md:mt-0">{exp.date}</span>
                </div>
                <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">{exp.company}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
