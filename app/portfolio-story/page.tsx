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
          في بدايات ممارستي لبناء المواقع، أتحدث عن أواخر العام 2008، كنت أبني المواقع باستخدام HTML والفلاش، واليوم أكتب الكود اللي يعمل على سيرفرات موزعة حول العالم بنفس الوقت، المسافة بين النقطتين مو سنوات ولكن قرارات، أدوات وأخطاء دفعت ثمناها بلا شك من وقتي وأعصابي.
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
          ⚛️ ما هي التقنية التي تشغّل هالموقع؟
        </h2>
        <div className={styles.techContent}>
          <p className={styles.techDescription}>
            موقعي هذا الي تشوفه يشتغل على <strong>Next.js</strong>، وهو فريمورك مبني فوق <strong>React</strong> أطلق عام <strong>2016</strong> عشان يحل مشاكل كانت تسبب أزمات لكل مطور ويب بذيك الفترة، مو بس اخترته لأنه موضة، ولكن لأنه جاوب على أسئلة كنت أبحث عن إجاباتها.
          </p>
          <ul className={styles.techList}>
            <li className={styles.techItem}>
              🛠️ <strong>اللغة:</strong> JavaScript
            </li>
            <li className={styles.techItem}>
              🏗️ <strong>الأساس:</strong> React Library
            </li>
            <li className={styles.techItem}>
              🚀 <strong>النوع:</strong> SSR Frontend Framework
            </li>
          </ul>
        </div>
      </section>

      {/* 3. الرسم البياني للمقارنة (4 مراحل تاريخية) */}
      <section className={styles.timelineSection}>
        <h2 className={styles.timelineTitle}>
          📈 التطور التقني والزمني لمشاريعي
        </h2>
        <p className={styles.timelineDescription}>
          بهالمقالة بحاول أقسّم مشواري لأربع مراحل، البداية كانت HTML Tables والفلاش، ما كنت أتخيل إن هالأدوات راح تتغير بهالسرعة، وبعدها جاء jQuery وBootstrap وكانت طفرة بالنسبة لي، ثم React اللي بطّلت عيوني على عالم ثاني، وأخيراً استقريت على Next.js. ما انتقلت من مرحلة للثانية لأنها موضة، ولكن لأن المرحلة السابقة كانت تأكلني.
        </p>
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
              <span>🚀 2023 - الآن: Next.js Ecosystem</span>
              <span>100%</span>
            </div>
            <div className={`${styles.progressBarBg} ${styles.activeBg}`}>
              <div className={`${styles.progressBarFill} ${styles.fillBlueGradient}`}></div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. لماذا هي الأقوى؟ */}
      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitleBlue}>
          📱 لماذا هذه التقنية هي الأقوى حالياً؟
        </h2>
        <p className={styles.benefitsDescription}>
          بعد كل هالسنوات، استقريت على Next.js مو عن عاطفة أكيد، لكن الموقع ما يحمّل كل شيء دفعة وحدة على المتصفح مثل ما كان يصير في 2015، ولكن يحمّل اللي يحتاجه الزائر بس. وعلى عكس مرحلة React، قوقل اليوم يقرأ الموقع بوضوح وهم بعد يرتّبه في نتائج البحث، هذا بروحه يسوى لأي مشروع تجاري.
        </p>
      </section>

      {/* 5. سجل المشاكل والحلول */}
      <section className={styles.debugSection}>
        <h2 className={styles.sectionTitleRed}>
          🐛 سجل المشاكل (Debugging Log)
        </h2>
        <p className={styles.debugIntro}>
          المطور الحقيقي مو الشخص اللي ما يواجه مشاكل، بالعكس هو اللي يواجهها ويعرف شلون يحلها، وهذي بعض التحديات الفعلية الي صادفتني وأنا أبني وأطور، مو مجرد أمثلة عامة من المدوّنات، ولكن حقيقة عشت لحظاتها.
        </p>

        {/* المشكلة 1: Hydration */}
        <div className={`${styles.debugCard} ${styles.borderRed}`}>
          <h3 className={styles.debugTitle}>واجهت الأولى مشكلة Hydration Error</h3>
          <p className={styles.debugText}>
            العناصر اللي تعتمد على التاريخ أو أي قيمة عشوائية تختلف بين ما يولّده السيرفر وما يعرضه المتصفح، Next.js يرمي خطأ Hydration Error ويترتب عليه كسر الصفحة.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام <code>useEffect</code> عشان هذي العناصر تُحمَّل على جهة العميل فقط.
          </p>
        </div>

        {/* المشكلة 2: CLS */}
        <div className={`${styles.debugCard} ${styles.borderYellow}`}>
          <h3 className={styles.debugTitle}>الي واجتها الثانية هي اهتزاز الصفحة CLS</h3>
          <p className={styles.debugText}>
            الصور الكبيرة كانت تسبب مشكلة، الصفحة تتحمل والمحتوى يبدأ يطلع، وفجأة الصورة تنزل وتسوي إزاحة لكل شيء تحتها، وهذا اللي يسمونه CLS أو اهتزاز الصفحة.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام مكوّن <code>next/image</code> اللي يحجز مساحة للصورة في الصفحة من البداية قبل ما تتحمل.
          </p>
        </div>

        {/* المشكلة 3: Webhook Failure */}
        <div className={`${styles.debugCard} ${styles.borderGreen}`}>
          <h3 className={styles.debugTitle}>وكانت الثالثة هي الي مؤرقة فشل النشر التلقائي</h3>
          <p className={styles.debugText}>
            مرة من المرات الربط وقف بين GitHub وVercel بشكل مفاجئ، كل تحديث أرفعه على GitHub ما يوصل للموقع.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام <strong>Vercel CLI</strong> مباشرة ونفذت أمر <code>npx vercel --prod</code> من الجهاز وتم تجاوز المشكلة بسلام.
          </p>
        </div>

        {/* المشكلة 4: Dynamic SEO */}
        <div className={`${styles.debugCard} ${styles.borderBlue}`}>
          <h3 className={styles.debugTitle}>ورابع وحدة مشكلة Dynamic SEO</h3>
          <p className={styles.debugText}>
            كانت صفحات الموقع الداخلية كلها تاخذ نفس العنوان في المتصفح وهالشيء يضر بالأرشفة لأن قوقل يشوف صفحات تشبه بعض وما يعرف وين الي يرفعها في نتائج البحث.
          </p>
          <p className={styles.debugText}>
            ماكو حل إلا استخدام دالة <code>generateMetadata</code> في Next.js، الي تسويه إنها تسحب اسم الصفحة من الرابط أوتوماتيكي وتولّد لك عنوان مع وصف مختلف لكل صفحة، من غير لا تعوّر راسك وتفكر لكل صفحة.
          </p>
        </div>

      </section>

      {/* 6. الخلاصة للعملاء */}
      <section className={styles.adviceSection}>
        <h2 className={styles.adviceTitle}>
          💡 الخلاصة لعملائي
        </h2>
        <p className={styles.adviceText}>
          إذا طلبت مني أبني لك موقع، أنت لا تشتري مني كود، أنت تشتري خبرة تجاوزت 15 عام من القرارات الصحيحة والخاطئة، ومشاكل قمت عليها وأنا ما أعرف من وين أبدأ. <br />
         أستخدم Next.js وأضمن من خلالها ثلاثة أشياء ماكو أحد يستغني عنها: <br /> الاستقرار، الأمان، الظهور في محركات البحث.
        </p>
      </section>

      {/* زر العودة */}
      <div className={styles.backButtonWrapper}>
        <Link href="/" className={styles.backButton} prefetch={false}>
          العودة للصفحة الرئيسية
        </Link>
      </div>

    </main>
  );
}