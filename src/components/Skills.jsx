import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiFigma } from 'react-icons/si';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", icon: FaReact, color: "text-blue-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", icon: FaNodeJs, color: "text-green-500" },
        { name: "Java", icon: FaJava, color: "text-orange-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600" }
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "Docker", icon: FaDocker, color: "text-blue-500" },
        { name: "GitHub / GitLab", icon: SiFigma, color: "text-orange-600" },
      ]
    }
  ];

  const floatingAnimation = {
    y: ["-10%", "10%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {t('nav.skills')}
          </h2>
          <div className="mt-2 w-20 h-1 bg-neon mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-8 text-center text-slate-800 dark:text-slate-200">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-6">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      animate={floatingAnimation}
                      // Introduce slight variations in animation timing
                      transition={{...floatingAnimation.transition, delay: sIdx * 0.3 }}
                      className="flex flex-col items-center gap-2 group cursor-pointer"
                    >
                      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-md group-hover:shadow-xl transition-all duration-300">
                        <Icon className={`w-10 h-10 ${skill.color} group-hover:scale-110 transition-transform`} />
                      </div>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
