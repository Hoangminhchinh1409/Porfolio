import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {t('nav.about')}
          </h2>
          <div className="mt-2 w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-slate-100">
              Who I am
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
              Highly motivated and detail-oriented IT fresh graduate with a strong focus on Frontend development. Skilled in building responsive, user-centric web applications using ReactJS and NodeJS. Possesses hands-on experience in studying and training AI models.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Known for strong analytical thinking, fast learning capabilities, and a passion for solving complex technical problems.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-accent/50 dark:hover:border-accent/50 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-lg text-accent group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">FPT University</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Bachelor of Information Technology (Fall 2021 - Expected Fall 2025)</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:border-neon/50 dark:hover:border-neon/50 transition-colors group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neon/10 dark:bg-neon/20 rounded-lg text-neon group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Certifications</h4>
                  <p className="text-slate-500 dark:text-slate-400 mt-1">Microsoft Office Specialist (MOS) Certification</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
