import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 font-medium text-sm rounded-full transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-700 focus:outline-none flex items-center justify-center w-10 h-10"
      aria-label="Toggle Language"
    >
      {i18n.language === 'en' ? 'VI' : 'EN'}
    </button>
  );
};

export default LanguageToggle;
