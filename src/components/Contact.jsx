import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (_data) => {
    setStatus('sending');
    
    // NOTE: Replace these with your actual EmailJS IDs
    // You should never expose raw email passwords. You need to create an EmailJS account
    // (https://www.emailjs.com/), connect your Gmail, and paste the IDs here.
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // Check if placeholders are still used
    if (serviceID === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        console.warn("EmailJS is not configured yet. Simulating success.");
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 3000);
      }, 1000);
      return;
    }

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(() => {
        setStatus('success');
        reset();
        setTimeout(() => setStatus('idle'), 3000);
      }, (error) => {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
            {t('nav.contact')}
          </h2>
          <div className="mt-2 w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
              {t('contact.title')}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <a href="mailto:Hchi50258@gmail.com" className="text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-accent transition-colors">
                    Hchi50258@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/minhchinh-hoang-undefined-a63a45353/?skipRedirect=true" className="text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-accent transition-colors">
                    Hoang Minh Chinh
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full flex items-center justify-center">
                  <FaGithub className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">GitHub</p>
                  <a href="https://github.com/Hoangminhchinh1409" className="text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-accent transition-colors">
                    Hoangminhchinh1409
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('contact.labels.name')}</label>
                  <input
                    type="text"
                    name="user_name"
                    {...register('user_name', { required: true })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${errors.user_name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all`}
                    placeholder={t('contact.placeholders.name')}
                  />
                  {errors.user_name && <span className="text-red-500 text-xs mt-1">{t('contact.errors.name')}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('contact.labels.email')}</label>
                  <input
                    type="email"
                    name="user_email"
                    {...register('user_email', { required: true, pattern: /^\S+@\S+$/i })}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${errors.user_email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all`}
                    placeholder={t('contact.placeholders.email')}
                  />
                  {errors.user_email && <span className="text-red-500 text-xs mt-1">{t('contact.errors.email')}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{t('contact.labels.message')}</label>
                  <textarea
                    name="message"
                    {...register('message', { required: true })}
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none`}
                    placeholder={t('contact.placeholders.message')}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-xs mt-1">{t('contact.errors.message')}</span>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-accent hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors disabled:opacity-70"
                >
                  {status === 'idle' && <><Send className="w-4 h-4 mr-2" /> {t('contact.status.send')}</>}
                  {status === 'sending' && <span className="animate-pulse">{t('contact.status.sending')}</span>}
                  {status === 'success' && <><CheckCircle className="w-4 h-4 mr-2 text-green-300" /> {t('contact.status.success')}</>}
                  {status === 'error' && <><AlertCircle className="w-4 h-4 mr-2 text-red-300" /> {t('contact.status.error')}</>}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
