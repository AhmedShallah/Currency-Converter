'use client';

import React from 'react';
import { useLanguage } from '../providers';

export default function AboutPage() {
  const { language } = useLanguage();

  return (
    <div className="gradient-bg min-h-full flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {language === 'ar' ? 'من نحن' : 'About Us'}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
          {language === 'ar' 
            ? 'مرحباً بكم في محول العملات! مهمتنا هي توفير أسعار صرف دقيقة ومباشرة لمساعدتكم في تحويل العملات بسهولة وثقة.'
            : 'Welcome to Currency Converter! Our mission is to provide accurate and real-time exchange rates to help you convert currencies easily and confidently.'
          }
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
          {language === 'ar'
            ? 'سواء كنتم تسافرون أو تتسوقون عبر الإنترنت أو تراقبون السوق، منصتنا تقدم نتائج سريعة وموثوقة.'
            : "Whether you're traveling, shopping online, or just keeping an eye on the market, our platform delivers fast, reliable results."
          }
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          {language === 'ar'
            ? 'نعمل باستمرار على تحسين تجربة ودقة خدماتنا. شكراً لاستخدام أداتنا!'
            : "We're continuously working to improve the experience and accuracy of our services. Thank you for using our tool!"
          }
        </p>
      </div>
    </div>
  );
}
