import Link from 'next/link';
import styles from './portfolio-story.module.css';
import Image from 'next/image';
import coverImage from '@/public/images/nextjs.webp';

export default function PortfolioStory() {
  return (
    <main className={styles.main}>

      <header className={styles.header}>
        <h1 className={styles.title}>
          مشواري مع تطوير الويب
        </h1>
        <p className={styles.description}>
           في بدايات ممارستي، كنت أبني المواقع باستخدام HTML والفلاش، واليوم أكتب الكود اللي يعمل على سيرفرات موزّعة حول العالم بنفس الوقت. المسافة بين النقطتين مو سنوات، ولكن قرارات وأدوات وأخطاء دفعت ثمنها من وقتي وأعصابي.
        </p>
      </header>

      <div className={styles.coverImageWrapper}>
        <Image
          src={coverImage}
          alt="Timeline Evolution"
          className={styles.coverImage}
        />
      </div>

      <section className={styles.techCard}>
        <h2 className={styles.sectionTitleWhite}>
          ⚛️ ما هي التقنية التي تشغّل هالموقع؟
        </h2>
        <div className={styles.techContent}>
          <p className={styles.techDescription}>
             الموقع يشتغل على <strong>Next.js</strong>، فريمورك مبني فوق  <strong>React</strong> أُطلق عام <strong>2016</strong>. ما اخترته لأنه موضة، بل لأنه جاوب على أسئلة كنت أبحث عن إجاباتها.
          </p>
          <ul className={styles.techList}>
            <li className={styles.techItem}>
              <strong>اللغة:</strong> TypeScript
            </li>
            <li className={styles.techItem}>
              <strong>الأساس:</strong> React Library
            </li>
            <li className={styles.techItem}>
              <strong>النوع:</strong> SSR Frontend Framework
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.journeySection}>
        <h2 className={styles.journeyTitle}>📈 كيف تطوّرت أدواتي</h2>
        <p className={styles.journeyIntro}>
          أقسّم مشواري بحسب الأدوات وما بنيتُه بها، لا بحسب السنين.
        </p>

        <div className={styles.journeyContainer}>
          <div className={styles.station}>
            <h3 className={styles.stationTool}>HTML &amp; Flash</h3>
            <p className={styles.stationDesc}>مواقع تعريفيّة وصفحات ثابتة، بداياتي الأولى.</p>
          </div>

          <div className={styles.station}>
            <h3 className={styles.stationTool}>WordPress والمنتديات (vBulletin)</h3>
            <p className={styles.stationDesc}>تخصيصات وإضافات وتعديلات لمواقع عدد من العملاء.</p>
          </div>

          <div className={styles.station}>
            <h3 className={styles.stationTool}>React (SPA)</h3>
            <p className={styles.stationDesc}>تطبيقات صفحة واحدة تفاعليّة.</p>
          </div>

          <div className={styles.station}>
            <h3 className={styles.stationTool}>Next.js</h3>
            <p className={styles.stationDesc}>بناءٌ أكمل: أداء، أرشفة.</p>
          </div>

          <div className={`${styles.station} ${styles.stationActive}`}>
            <h3 className={styles.stationTool}>Next.js + TypeScript  مستقرّي الحالي</h3>
            <p className={styles.stationDesc}>
              وبها شغلي الحالي: khitab (منشورة على npm) ومنصّة زميلي.
            </p>
          </div>
        </div>

        <div className={styles.foundationBar}>
          <span className={styles.foundationTs} />
          <span className={styles.foundationTsLabel}>TypeScript · منذ 2022</span>
          <span className={styles.foundationLabel}>JavaScript · الأساس المشترك</span>
        </div>

        <p className={styles.journeyFoot}>
          كان <strong>JavaScript</strong> الخيطَ الجامع عبر المراحل jQuery، React، Next.js.
          ومن 2022 صارت <strong>TypeScript</strong> خياري الافتراضي فوقه، دون أن أتركه؛
          ما زلت أكتب JavaScript حيث يلزم.
        </p>
      </section>

      <section className={styles.benefitsSection}>
        <h2 className={styles.sectionTitleBlue}>
          📱 لماذا هذه التقنية هي الأقوى حالياً؟
        </h2>
        <p className={styles.benefitsDescription}>
           استقريت على Next.js مو عن عاطفة، لكن لأن الموقع ما يحمّل كل شيء دفعة وحدة على المتصفّح مثل أيام الـ SPA، بل يحمّل اللي يحتاجه الزائر بس. وعلى عكس مرحلة React، قوقل اليوم يقرأ الموقع بوضوح ويفهرسه، وهذا بروحه يسوى لأي مشروع تجاري.
        </p>
      </section>

      <section className={styles.debugSection}>
        <h2 className={styles.sectionTitleRed}>
          🐛 سجل المشاكل (Debugging Log)
        </h2>
        <p className={styles.debugIntro}>
          المطوّر الحقيقي مو اللي ما يواجه مشاكل، بل اللي يعرف شلون يحلّها. هذي بعض التحديات اللي صادفتني وأنا أبني، وكيف تجاوزتها.
        </p>

        <div className={`${styles.debugCard} ${styles.borderRed}`}>
          <h3 className={styles.debugTitle}>الأولى مشكلة Hydration Error</h3>
          <p className={styles.debugText}>
            العناصر اللي تعتمد على التاريخ أو أي قيمة عشوائية تختلف بين ما يولّده السيرفر وما يعرضه المتصفح، Next.js يرمي خطأ Hydration Error ويترتب عليه كسر الصفحة.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام <code>useEffect</code> عشان هذي العناصر تُحمَّل على جهة العميل فقط.
          </p>
        </div>

        <div className={`${styles.debugCard} ${styles.borderYellow}`}>
          <h3 className={styles.debugTitle}>اللي واجتها الثانية هي اهتزاز الصفحة CLS</h3>
          <p className={styles.debugText}>
            الصور الكبيرة كانت تسبب مشكلة، الصفحة تتحمل والمحتوى يبدأ يطلع، وفجأة الصورة تنزل وتسوي إزاحة لكل شيء تحتها، وهذا اللي يسمونه CLS أو اهتزاز الصفحة.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام مكوّن <code>next/image</code> اللي يحجز مساحة للصورة في الصفحة من البداية قبل ما تتحمل.
          </p>
        </div>

        <div className={`${styles.debugCard} ${styles.borderGreen}`}>
          <h3 className={styles.debugTitle}>وكانت الثالثة هي اللي مؤرقة فشل النشر التلقائي</h3>
          <p className={styles.debugText}>
            مرة من المرات الربط وقف بين GitHub وVercel بشكل مفاجئ، كل تحديث أرفعه على GitHub ما يوصل للموقع.
          </p>
          <p className={styles.debugText}>
            وحليتها من خلال استخدام <strong>Vercel CLI</strong> مباشرة ونفذت أمر <code>npx vercel --prod</code> من الجهاز وتم تجاوز المشكلة بسلام.
          </p>
        </div>

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

      <section className={styles.adviceSection}>
        <h2 className={styles.adviceTitle}>
          💡 الخلاصة لعملائي
        </h2>
        <p className={styles.adviceText}>
          إذا طلبت مني أبني لك موقع، أنت ما تشتري كود، أنت تشتري خبرةً عمليّة: قرارات صحيحة وخاطئة، ومشاكل عشتها وعرفت من وين أمسكها. أبني على Next.js لأنها تعطيني أساسًا أركّز فيه على ثلاثة أشياء يحتاجها أي مشروع جادّ: الاستقرار، الأداء، والظهور في محركات البحث والأكيد مع ممارسات أمان سليمة في التعامل مع البيانات.
        </p>
      </section>

      <div className={styles.backButtonWrapper}>
        <Link href="/" className={styles.backButton} prefetch={false}>
          العودة للصفحة الرئيسية
        </Link>
      </div>

    </main>
  );
}