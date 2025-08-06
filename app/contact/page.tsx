'use client';

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaUserTie,
} from 'react-icons/fa';

import { useLanguage } from '../providers';

export default function ContactPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="gradient-bg min-h-full flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {isArabic ? 'اتصل بي' : 'Contact Me'}
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-center">
          {isArabic
            ? 'يسعدني تواصلك معي لأي استفسار، اقتراح، أو تعاون مهني.'
            : 'I’m happy to connect with you for any questions, suggestions, or professional collaboration.'}
        </p>

        {/* معلومات التواصل المباشر */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {isArabic ? 'معلومات التواصل المباشر' : 'Direct Contact Information'}
          </h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/970595207102"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                +970 595 207 102
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaLinkedin className="text-blue-700 dark:text-blue-400" />
              <a
                href="https://www.linkedin.com/in/ahmed-shallah-1b10ba16b/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                linkedin.com/in/ahmed-shallah
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaGithub className="text-black dark:text-gray-300" />
              <a
                href="https://github.com/AhmedShallah"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                github.com/AhmedShallah
              </a>
            </li>
          </ul>
        </section>

        {/* منصات العمل الحر */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {isArabic ? 'منصات العمل الحر' : 'Freelancing Platforms'}
          </h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3">
              <FaUserTie className="text-orange-600" />
              <a
                href="https://mostaql.com/u/shallah99"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                mostaql.com/u/shallah99
              </a>
            </li>
          </ul>
        </section>

        {/* وسائل التواصل الاجتماعي */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            {isArabic ? 'وسائل التواصل الاجتماعي' : 'Social Media'}
          </h2>
          <ul className="space-y-3 text-base">
            <li className="flex items-center gap-3">
              <FaFacebook className="text-blue-800 dark:text-blue-500" />
              <a
                href="https://www.facebook.com/ahmed.t.shallah"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                facebook.com/ahmed.t.shallah
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-pink-500" />
              <a
                href="https://www.instagram.com/ahmed._.shallah1/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
              >
                instagram.com/ahmed._.shallah1
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
