import React from 'react';

export default function PortfolioStory() {
  return (
    <main style={{ 
      padding: '4rem 2rem', 
      direction: 'rtl', 
      maxWidth: '900px', 
      margin: '0 auto', 
      color: '#E2E8F0', 
      fontFamily: "'Tajawal', sans-serif" 
    }}>
      
      {/* 1. مقدمة الصفحة */}
      <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#63B3ED' }}>
          أكثر من 15 عاماً من الخبرة: رحلة التطور
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#A0AEC0', lineHeight: '1.6' }}>
          الخبرة ليست مجرد سنوات، بل هي القدرة على اختيار الأداة المناسبة. رحلتي من المواقع الثابتة إلى هندسة البرمجيات الحديثة.
        </p>
      </header>

      {/* صورة الغلاف */}
      <div style={{ marginBottom: '4rem', borderRadius: '15px', overflow: 'hidden', border: '1px solid #2D3748' }}>
         <img 
          src="/images/nextjs.webp" 
          alt="Timeline Evolution" 
          style={{ width: '100%', display: 'block' }}
        />
      </div>

      {/* 2. البطاقة التعريفية: ما هي Next.js؟ */}
      <section style={{ marginBottom: '4rem', padding: '30px', backgroundColor: '#2D3748', borderRadius: '15px', borderRight: '5px solid #63B3ED' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>
          ⚛️ ما هي التقنية التي تشغل هذا الموقع؟
        </h2>
        <div style={{ display: 'grid', gap: '15px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          <p style={{ color: '#CBD5E0' }}>
            <strong>Next.js</strong> هو إطار عمل (Framework) مبني على مكتبة <strong>React</strong> الشهيرة.
            انطلق عام <strong>2016</strong> بواسطة شركة <em>Vercel</em> لحل مشاكل الأداء في الويب الحديث.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '10px' }}>
            <li style={{ background: '#1A202C', padding: '15px', borderRadius: '8px' }}>
              🛠️ <strong>اللغة:</strong> JavaScript / TypeScript
            </li>
            <li style={{ background: '#1A202C', padding: '15px', borderRadius: '8px' }}>
              🏗️ <strong>الأساس:</strong> React Library
            </li>
            <li style={{ background: '#1A202C', padding: '15px', borderRadius: '8px' }}>
              🚀 <strong>النوع:</strong> Full-Stack Web Framework
            </li>
          </ul>
        </div>
      </section>

      {/* 3. الرسم البياني للمقارنة (4 مراحل تاريخية) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center', color: '#fff' }}>
          📈 التطور التقني والزمني لمشاريعي
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', backgroundColor: '#1A202C', padding: '30px', borderRadius: '15px', border: '1px solid #4A5568' }}>
          
          {/* المرحلة 1 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#A0AEC0' }}>
              <span>📅 2008 - 2012: HTML Tables & Flash</span>
              <span>25%</span>
            </div>
            <div style={{ width: '100%', height: '24px', backgroundColor: '#4A5568', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ width: '25%', height: '100%', backgroundColor: '#E53E3E' }}></div>
            </div>
          </div>
          {/* المرحلة 2 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#A0AEC0' }}>
              <span>📅 2013 - 2018: jQuery & Bootstrap</span>
              <span>55%</span>
            </div>
            <div style={{ width: '100%', height: '24px', backgroundColor: '#4A5568', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ width: '55%', height: '100%', backgroundColor: '#D69E2E' }}></div>
            </div>
          </div>
          {/* المرحلة 3 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#A0AEC0' }}>
              <span>📅 2019 - 2022: React.js (SPA)</span>
              <span>80%</span>
            </div>
            <div style={{ width: '100%', height: '24px', backgroundColor: '#4A5568', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ width: '80%', height: '100%', backgroundColor: '#38B2AC' }}></div>
            </div>
          </div>
          {/* المرحلة 4 */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '1rem', color: '#fff', fontWeight: 'bold' }}>
              <span>🚀 2023 - الآن: Next.js 14 Ecosystem</span>
              <span>100%</span>
            </div>
            <div style={{ width: '100%', height: '24px', backgroundColor: '#4A5568', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 10px #4299E1' }}>
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #3182CE 0%, #63B3ED 100%)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. (تمت الاستعادة) لماذا هي الأفضل للهواتف؟ */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#63B3ED' }}>
          📱 لماذا هذه التقنية هي الأقوى حالياً؟
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#CBD5E0' }}>
          بعد كل هذه السنوات من التجربة، استقريت على Next.js لأنها تحل المشاكل التي عانينا منها لعقد من الزمان.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', display: 'grid', gap: '15px' }}>
          <li style={{ background: '#1A202C', padding: '15px', borderRadius: '8px', borderRight: '4px solid #4299E1' }}>
            ⚡ <strong>السرعة الذكية:</strong> الموقع لا يحمل كل شيء دفعة واحدة كما كان في 2015، بل يحمل ما يحتاجه الزائر فقط.
          </li>
          <li style={{ background: '#1A202C', padding: '15px', borderRadius: '8px', borderRight: '4px solid #4299E1' }}>
            🔍 <strong>صديق لجوجل:</strong> على عكس مرحلة React الأولى، الآن جوجل يقرأ موقعك بوضوح تام مما يرفع ترتيبك.
          </li>
        </ul>
      </section>

      {/* 5. سجل المشاكل والحلول (4 مشاكل) */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#F56565' }}>
          🐛 سجل المشاكل الهندسية (Debugging Log)
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#CBD5E0', marginBottom: '20px' }}>
          المبرمج الحقيقي ليس من يكتب كوداً، بل من يحل المشاكل المعقدة. هذه بعض التحديات الواقعية التي واجهتها وحللتها:
        </p>

        {/* المشكلة 1: Hydration */}
        <div style={{ marginBottom: '20px', background: '#2D3748', padding: '20px', borderRadius: '10px', borderRight: '4px solid #F56565' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>1. مشكلة عدم التطابق (Hydration Error)</h3>
          <p style={{ color: '#A0AEC0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>السيناريو:</strong> ظهور خطأ عند استخدام تواريخ أو عناصر عشوائية تختلف بين السيرفر والمتصفح.
            <br />
            <strong>الحل:</strong> استخدام <code>useEffect</code> لضمان تحميل العناصر الديناميكية فقط في جهة العميل (Client-Side).
          </p>
        </div>

        {/* المشكلة 2: Image Layout Shift */}
        <div style={{ marginBottom: '20px', background: '#2D3748', padding: '20px', borderRadius: '10px', borderRight: '4px solid #ECC94B' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>2. مشكلة اهتزاز الصفحة (CLS)</h3>
          <p style={{ color: '#A0AEC0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>السيناريو:</strong> حركة العناصر المزعجة عند تحميل الصور الكبيرة ببطء.
            <br />
            <strong>الحل:</strong> استخدام مكون <code>next/image</code> الذي يحجز مكان الصورة مسبقاً ويمنع اهتزاز التصميم.
          </p>
        </div>

        {/* المشكلة 3: Deployment Issue (طلبك الخاص) */}
        <div style={{ marginBottom: '20px', background: '#2D3748', padding: '20px', borderRadius: '10px', borderRight: '4px solid #48BB78' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>3. مشكلة فشل النشر التلقائي (Webhook Failure)</h3>
          <p style={{ color: '#A0AEC0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>السيناريو:</strong> في إحدى المرات، توقف الربط بين GitHub و Vercel ولم تظهر التحديثات.
            <br />
            <strong>الحل:</strong> بدلاً من الانتظار، قمت باستخدام <strong>Vercel CLI</strong> ونفذت أمر <code>npx vercel --prod</code> لتجاوز المشكلة ورفع الموقع يدوياً ومباشرة للخادم. هذا يضمن استمرارية العمل في أصعب الظروف.
          </p>
        </div>

        {/* المشكلة 4: Dynamic SEO (اقتراحي) */}
        <div style={{ marginBottom: '20px', background: '#2D3748', padding: '20px', borderRadius: '10px', borderRight: '4px solid #4299E1' }}>
          <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '10px' }}>4. مشكلة عناوين الصفحات (Dynamic SEO)</h3>
          <p style={{ color: '#A0AEC0', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <strong>السيناريو:</strong> كيف نجعل عنوان الصفحة في المتصفح يتغير تلقائياً حسب اسم المشروع لضمان أرشفة صحيحة؟
            <br />
            <strong>الحل:</strong> استخدام دالة <code>generateMetadata</code> في Next.js لإنشاء عناوين ووصف (Meta Tags) ديناميكية لكل صفحة على حدة، مما رفع ترتيب الموقع في البحث.
          </p>
        </div>
      </section>

      {/* 6. نصيحة للعملاء */}
      <section style={{ 
        marginBottom: '4rem', 
        padding: '30px', 
        border: '1px solid #B794F4', 
        borderRadius: '15px',
        background: 'linear-gradient(180deg, rgba(183, 148, 244, 0.05) 0%, rgba(183, 148, 244, 0.1) 100%)'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#D6BCFA' }}>
          💡 الخلاصة لعملائي
        </h2>
        <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#E9D8FD' }}>
          عندما تطلب مني بناء موقع، أنت لا تشتري "كوداً" فقط، بل تشتري خلاصة 15 عاماً من التجارب وحل المشاكل. 
          أنا أستخدم Next.js لأنها تضمن لمشروعك الاستقرار، الأمان، والظهور الأول في محركات البحث.
        </p>
      </section>

      {/* زر العودة */}
      <div style={{ marginTop: '5rem', textAlign: 'center' }}>
        <a 
          href="/" 
          style={{ 
            padding: '15px 50px', 
            background: 'linear-gradient(90deg, #3182CE 0%, #63B3ED 100%)', 
            color: 'white', 
            borderRadius: '30px', 
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            boxShadow: '0 4px 20px rgba(49, 130, 206, 0.5)',
            transition: 'all 0.3s ease'
          }}
        >
          العودة للصفحة الرئيسية
        </a>
      </div>

    </main>
  );
}