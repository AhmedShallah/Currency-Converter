'use client';

import React from 'react';
import { useLanguage } from '../providers';

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  return (
    <div className="gradient-bg min-h-full flex items-center justify-center px-4 py-8">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
          {language === 'ar'
            ? 'في محول العملات، خصوصيتكم هي أولويتنا. نحن لا نجمع البيانات الشخصية أو نتتبع المستخدمين.'
            : 'At Currency Converter, your privacy is our priority. We do not collect personal data or track users.'
          }
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          {language === 'ar' ? '1. جمع المعلومات' : '1. Information Collection'}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {language === 'ar'
            ? 'نحن لا نجمع المعلومات الشخصية. التطبيق يسترد فقط بيانات أسعار الصرف العامة من واجهات برمجة التطبيقات الخارجية.'
            : "We don't collect personal information. The app only retrieves public exchange rate data from external APIs."
          }
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          {language === 'ar' ? '2. استخدام البيانات' : '2. Data Usage'}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {language === 'ar'
            ? 'تُستخدم البيانات حصرياً لإظهار تحويلات العملات في الوقت الفعلي. نحن لا نتتبع أو نخزن أي شيء عن المستخدمين.'
            : "Data is used exclusively for showing real-time currency conversions. We don't track or store anything about users."
          }
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-6 mb-2">
          {language === 'ar' ? '3. خدمات الطرف الثالث' : '3. Third-Party Services'}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {language === 'ar'
            ? 'نستخدم واجهات برمجة تطبيقات الطرف الثالث لأسعار الصرف. قد تحتوي هذه الخدمات على سياسات خصوصية خاصة بها.'
            : 'We use third-party APIs for exchange rates. These services may have their own privacy policies.'
          }
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center mt-6">
          {language === 'ar'
            ? 'باستخدام خدمتنا، فإنكم توافقون على سياسة الخصوصية هذه.'
            : 'By using our service, you agree to this privacy policy.'
          }
        </p>
      </div>
    </div>
  );
}
