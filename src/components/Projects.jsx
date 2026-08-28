import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('All');

  const categoryKeys = ['All', 'Fullstack', 'Frontend', 'AI'];

  const projectTranslations = t('projects.items', { returnObjects: true });

  const projects = [
    {
      id: 1,
      title: projectTranslations[0].title,
      category: "Fullstack",
      description: projectTranslations[0].description,
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Vite", "CSS"],
      demo: "https://fitflow-e1x19kbgs-hchi50258-1895s-projects.vercel.app/",
      github: "https://github.com/Hoangminhchinh1409/fitflow"
    },
    // Add dummy projects to show off filtering
    {
      id: 2,
      title: projectTranslations[1].title,
      category: "AI",
      description: projectTranslations[1].description,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Python", "Flask", "OpenAI API"],
      demo: "#",
      github: "#"
    },
    {
      id: 3,
      title: projectTranslations[2].title,
      category: "Frontend",
      description: projectTranslations[2].description,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tech: ["React", "TypeScript", "TailwindCSS", "Recharts"],
      demo: "#",
      github: "#"
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {t('nav.projects')}
          </h2>
          <div className="mt-2 w-20 h-1 bg-neon mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categoryKeys.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat 
                    ? 'bg-accent text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {t(`projects.categories.${cat}`)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6 flex flex-col grow">
                    <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a href={project.github} className="text-slate-400 hover:text-accent transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                      <a href={project.demo} className="text-slate-400 hover:text-accent transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white dark:bg-slate-900 text-xs font-medium text-slate-500 dark:text-slate-400 rounded-md border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
