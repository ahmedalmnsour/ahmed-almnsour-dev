import React from 'react';
import Link from 'next/link';
import styles from './portfolioStory.module.css';

export default function PortfolioStory() {
  return (
    <main className={styles.main}>
      
      {/* 1. مقدمة الصفحة */}
      <header className={styles.header}>
        <h1 className={styles.title}>
          أكثر من 15 عاماً من الخبرة: رحلة التطور
        </h1>
        <p className={styles.description}>
          الخبرة ليست مجرد سنوات، بل هي القدرة على اختيار الأداة المناسبة. رحلتي من المواقع الثابتة إلى هندسة البرمجيات الحديثة.
        </p>
      </header>

      {/* صورة الغلاف */}
      <div className={styles.coverImageWrapper}>
         <img 
          src="/images/nextjs.webp" 
          alt="Timeline Evolution" 
          className={styles.coverImage}
        />
      </div>

      {/* 2. البطاقة التعريفية: ما هي Next.js؟ */}
      <section className={styles.techCard}>
        <h2 className={styles.sectionTitleWhite}>
          ⚛️ ما هي التقنية التي تشغل هذا الموقع؟
        </h2>
        <div className={styles.techContent}>
          <p className={styles.techDescription}>
            <strong>Next.js</strong> هو إطار عمل (Framework) مبني على مكتبة <strong>React</strong> الشهيرة.
            انطلق عام <strong>2016</strong> بواسطة شركة <em>Vercel</em> لحل مشاكل الأداء في الويب الحديث.
          </p>
          <ul className={styles.techList}>
            <li className={styles.techItem}>
              🛠️ <strong>اللغة:</strong> JavaScript / TypeScript
            </li>
            <li className={styles.techItem}>
              🏗️ <strong>الأساس:</strong> React Library
            </li>
            <li className={styles.techItem}>
              🚀 <strong>النوع:</strong> Full-Stack Web Framework
            </li>
          </ul>
        </div>
      </section>

      {/* 3. الرسم البياني للمقارنة (4 مراحل تاريخية) */}
      <section className={styles.timelineSection}>
        <h2 className={styles.timelineTitle}>
          📈 التطور التقني والزمني لمشاريعي
        </h2>
        <div className={styles.timelineContainer}>
          
          {/* المرحلة 1 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <span>📅 2008 - 2012: HTML Tables & Flash</span>
              <span>25%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={`${styles.progressBarFill} ${styles.fillRed}`}></div>
            </div>
          </div>
          {/* المرحلة 2 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <span>📅 2013 - 2018: jQuery & Bootstrap</span>
              <span>55%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={`${styles.progressBarFill} ${styles.fillYellow}`}></div>
            </div>
          </div>
          {/* المرحلة 3 */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineHeader}>
              <span>📅 2019 - 2022: React.js (SPA)</span>
              <span>80%</span>
            </div>
            <div className={styles.progressBarBg}>
              <div className={`${styles.progressBarFill} ${styles.fillTeal}`}></div>
            </div>
          </div>
          {/* المرحلة 4 */}
          <div className={styles.timelineItem}>
            <div className={`${styles.timelineHeader} ${styles.activeHeader}`}>
              <span>🚀 2023 - الآن: Next.js 14 Ecosystem</span>
              <span>100%</span>
            </div>
            <div className={`${styles.progressBarBg} ${styles.activeBg}`}>
              <div className={`${styles.progressBarFill} ${styles.fillBlueGradient}`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. لماذا هي الأفضل للهواتف؟ */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitleBlue}>
          📱 لماذا هذه التقنية هي الأقوى حالياً؟
        </h2>
        <p className={styles.benefitsDescription}>
          بعد كل هذه السنوات من التجربة، استقريت على Next.js لأنها تحل المشاكل التي عانينا منها لعقد من الزمان.
        </p>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            ⚡ <strong>السرعة الذكية:</strong> الموقع لا يحمل كل شيء دفعة واحدة كما كان في 2015، بل يحمل ما يحتاجه الزائر فقط.
          </li>
          <li className={styles.benefitItem}>
            🔍 <strong>صديق لجوجل:</strong> على عكس مرحلة React الأولى، الآن جوجل يقرأ موقعك بوضوح تام مما يرفع ترتيبك.
          </li>
        </ul>
      </section>

      {/* 5. سجل المشاكل والحلول (4 مشاكل) */}
      <section className={styles.debugSection}>
        <h2 className={styles.sectionTitleRed}>
          🐛 سجل المشاكل الهندسية (Debugging Log)
        </h2>
        <p className={styles.debugIntro}>
          المبرمج الحقيقي ليس من يكتب كوداً، بل من يحل المشاكل المعقدة. هذه بعض التحديات الواقعية التي واجهتها وحللتها:
        </p>

        {/* المشكلة 1: Hydration */}
        <div className={`${styles.debugCard} ${styles.borderRed}`}>
          <h3 className={styles.debugTitle}>1. مشكلة عدم التطابق (Hydration Error)</h3>
          <p className={styles.debugText}>
            <strong>السيناريو:</strong> ظهور خطأ عند استخدام تواريخ أو عناصر عشوائية تختلف بين السيرفر والمتصفح.
            <br />
            <strong>الحل:</strong> استخدام <code>useEffect</code> لضمان تحميل العناصر الديناميكية فقط في جهة العميل (Client-Side).
          </p>
        </div>

        {/* المشكلة 2: Image Layout Shift */}
        <div className={`${styles.debugCard} ${styles.borderYellow}`}>
          <h3 className={styles.debugTitle}>2. مشكلة اهتزاز الصفحة (CLS)</h3>
          <p className={styles.debugText}>
            <strong>السيناريو:</strong> حركة العناصر المزعجة عند تحميل الصور الكبيرة ببطء.
            <br />
            <strong>الحل:</strong> استخدام مكون <code>next/image</code> الذي يحجز مكان الصورة مسبقاً ويمنع اهتزاز التصميم.
          </p>
        </div>

        {/* المشكلة 3: Deployment Issue */}
        <div className={`${styles.debugCard} ${styles.borderGreen}`}>
          <h3 className={styles.debugTitle}>3. مشكلة فشل النشر التلقائي (Webhook Failure)</h3>
          <p className={styles.debugText}>
            <strong>السيناريو:</strong> في إحدى المرات، توقف الربط بين GitHub و Vercel ولم تظهر التحديثات.
            <br />
            <strong>الحل:</strong> بدلاً من الانتظار، قمت باستخدام <strong>Vercel CLI</strong> ونفذت أمر <code>npx vercel --prod</code> لتجاوز المشكلة ورفع الموقع يدوياً ومباشرة للخادم. هذا يضمن استمرارية العمل في أصعب الظروف.
          </p>
        </div>

        {/* المشكلة 4: Dynamic SEO */}
        <div className={`${styles.debugCard} ${styles.borderBlue}`}>
          <h3 className={styles.debugTitle}>4. مشكلة عناوين الصفحات (Dynamic SEO)</h3>
          <p className={styles.debugText}>
            <strong>السيناريو:</strong> كيف نجعل عنوان الصفحة في المتصفح يتغير تلقائياً حسب اسم المشروع لضمان أرشفة صحيحة؟
            <br />
            <strong>الحل:</strong> استخدام دالة <code>generateMetadata</code> في Next.js لإنشاء عناوين ووصف (Meta Tags) ديناميكية لكل صفحة على حدة، مما رفع ترتيب الموقع في البحث.
          </p>
        </div>
      </section>

      {/* 6. نصيحة للعملاء */}
      <section className={styles.adviceSection}>
        <h2 className={styles.adviceTitle}>
          💡 الخلاصة لعملائي
        </h2>
        <p className={styles.adviceText}>
          عندما تطلب مني بناء موقع، أنت لا تشتري "كوداً" فقط، بل تشتري خلاصة 15 عاماً من التجارب وحل المشاكل. 
          أنا أستخدم Next.js لأنها تضمن لمشروعك الاستقرار، الأمان، والظهور الأول في محركات البحث.
        </p>
      </section>

      {/* زر العودة */}
      <div className={styles.backButtonWrapper}>
        {/* 👇 التعديل هنا: إضافة prefetch={false} */}
        <Link href="/" className={styles.backButton} prefetch={false}>
          العودة للصفحة الرئيسية
        </Link>
      </div>

    </main>
  );
}