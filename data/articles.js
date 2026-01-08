// data/articles.js

export const articlesData = [
  {
    id: 1,
    title: "هندسة نظام تداول الذهب (Gold-AI) ما وراء الكواليس",
    excerpt: "نظرة حصرية على البنية التحتية لنظام تداول هجين، التكلفة التشغيلية العالية، وكيف تم دمج أقوى نماذج الذكاء الاصطناعي في 'مجلس استشاري' رقمي.",
    category: "case-study",
    categoryLabel: "دراسات حالة 📊",
    date: "29 نوفمبر 2025",
    image: "/images/gold-ai.webp",
    content: `
      <p>
        على مدار <strong>11 شهراً</strong> من العمل الدؤوب في "المختبر التقني"، كان الهدف بناء نظام تداول يتجاوز حدود البوتات التقليدية. لم أبحث عن حلول جاهزة، بل أردت بناء <strong>"عقل رقمي"</strong> مستقل يحلل سوق الذهب (XAUUSD).
      </p>
      
      <div style="background: rgba(245, 101, 101, 0.1); border-right: 4px solid #F56565; padding: 15px; margin: 20px 0; color: #E2E8F0;">
        <strong>⚠️ تنويه:</strong> هذا المقال يناقش الهيكلية العامة للنظام (Architecture). التفاصيل الدقيقة للخوارزميات ومعادلات اتخاذ القرار هي <strong>أسرار تجارية (Trade Secrets)</strong> محفوظة ولا يمكن الكشف عنها للعموم.
      </div>

      <h3>1. فلسفة "الكشافة والقناصة"</h3>
      <p>
        السر الأول في نجاح النظام هو فصل المهام. النظام لا يعمل ككتلة واحدة، بل كفريق عسكري:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li style="margin-bottom: 10px;">
          <strong>الكشافة (The Scouts):</strong> خوارزميات برمجية سريعة جداً تمسح السوق كل دقيقة.
        </li>
        <li>
          <strong>القناص (The Sniper):</strong> هو "الدماغ" الذي لا يستيقظ إلا عند وجود فرصة حقيقية، ليقوم باستدعاء "المجلس" ودفع تكلفة التحليل الباهظة.
        </li>
      </ul>

      <h3>2. مجلس المستشارين (The AI Council) 🧠</h3>
      <p>
        لضمان عدم المخاطرة بأي <strong>دينار</strong>، لا يتخذ النظام قراراً فردياً. قمت برمجياً بإنشاء "مجلس إدارة" يضم 4 من أقوى العقول الاصطناعية في العالم، ولكل منهم دور وظيفي صارم:
      </p>
      <div style="background: #1A202C; padding: 20px; border-radius: 8px; border: 1px solid #4A5568; margin-bottom: 20px;">
        <ul style="list-style: none; padding: 0;">
          <li style="margin-bottom: 15px;">👑 <strong>GPT (القائد):</strong> يمتلك حق القرار النهائي (شراء/بيع) بناءً على تقارير البقية.</li>
          <li style="margin-bottom: 15px;">📈 <strong>Gemini (المحلل الفني):</strong> يقرأ الشارت والمؤشرات المعقدة ويعطي توصية فنية بحتة.</li>
          <li style="margin-bottom: 15px;">🛡️ <strong>Claude (مدير المخاطر):</strong> مهمته الوحيدة هي "الرفض" (Veto). هو النموذج الأكثر حذراً، ومهمته حماية رأس المال.</li>
          <li>🔍 <strong>DeepSeek (محلل الأنماط):</strong> يبحث في التاريخ عن سيناريوهات مشابهة للحظة الحالية.</li>
        </ul>
      </div>

      <h3>3. ضريبة الدقة: التكلفة والتعقيد 💸</h3>
      <p>
        ما يميز هذا النظام هو "التكلفة التشغيلية". كل "استشارة" يعقدها المجلس تستهلك موارد ضخمة من الـ APIs المدفوعة (Enterprise Tier).
      </p>
      <p>
        نحن نتحدث عن تكلفة عالية لكل دقيقة تحليل، ولكن هذه هي ضريبة الدقة. النظام مصمم ليتجاهل الفرص المتوسطة ويركز فقط على الفرص الذهبية التي تغطي تكاليف تشغيله وتحقق أرباحاً.
      </p>

      <h3>4. البنية التحتية (Infrastructure)</h3>
      <p>
        بدلاً من الاعتماد على حلول جاهزة، قمت بتصميم <strong>قاعدة بيانات خاصة (Custom Database Architecture)</strong> مهيأة للتعامل مع البيانات المالية فائقة السرعة، مدعومة بمحرك خلفي (Backend) هجين يجمع بين <strong>Python</strong> لقوة المعالجة و <strong>Node.js</strong> للسرعة.
      </p>

      <h3>الخلاصة</h3>
      <p>
        النسخة الحالية المستقرة (Stable Release) هي نتاج آلاف الساعات من الاختبارات والمحاكاة على بيانات تمتد لـ 16 عاماً. 
        ما زال هناك الكثير خلف الكواليس، ولكن ما يمكن قوله هو أن دمج الذكاء الاصطناعي في التداول لم يعد خيالاً علمياً، بل واقعاً مكلفاً ومعقداً.. ولكنه يستحق.
      </p>
    `
  },

  {
    id: 2,
    title: "تجربة مباشرة: كيف قلصت زمن استجابة الـ API بنسبة 70% باستخدام GraphQL؟",
    excerpt: "فيديو توضيحي (Live Coding) أشرح فيه بصوتي الفرق بين تعقيد REST API وسهولة GraphQL، وكيف نكتب استعلاماً معقداً في سطر واحد.",
    category: "backend",
    categoryLabel: "تطبيق عملي 🎥",
    date: "10 أكتوبر 2025",
    image: "/images/graphql-rest.webp",
    videoId: "tibUUXJ3Nqg", 
    videoTitle: "GraphQL vs REST API Live Coding",
    content: `
      <div style="background: rgba(49, 130, 206, 0.1); border-right: 4px solid #3182CE; padding: 15px; margin-bottom: 25px; color: #E2E8F0;">
        <strong>🔗 سياق تاريخي:</strong><br>
        قبل 6 سنوات، وتحديداً في <a href="/articles/19" style="color: #63B3ED; text-decoration: underline;">مقال أرشيفي من عام 2019</a>، تحدثت عن قراري الجريء باستبدال REST بـ GraphQL في مشروع عقاري.
        <br>
        اليوم، لا أريد أن أحدثكم عن "النظرية"، بل أريد أن أريكم "التطبيق العملي" ولماذا ما زلت متمسكاً بهذا الخيار حتى في 2025.
      </div>

      <p>
        <strong>سؤال يتكرر دائماً في النقاشات التقنية:</strong> "لماذا تصر على استخدام GraphQL في المشاريع الكبيرة رغم أنه يتطلب إعداداً إضافياً؟".
      </p>
      <p>
        بدلاً من كتابة مقال نظري طويل، قررت أن أسجل لكم هذه الجلسة البرمجية القصيرة (دقيقة واحدة) من داخل بيئة العمل الخاصة بي.
      </p>

      [[VIDEO_PLACEHOLDER]]

      <h3>التحليل الفني للفيديو 💡</h3>
      <p>
        كما شاهدتم، المشكلة في <strong>REST API</strong> هي "الثرثرة الزائدة" (Chattiness). السيرفر يرسل بيانات لا نحتاجها، ونحن نضطر لعمل طلبات كثيرة.
      </p>
      <p>
        في <strong>GraphQL</strong>، نحن ننتقل من نموذج "القائمة الكاملة" إلى نموذج "البوفيه المفتوح" (تأخذ بالضبط ما تريد).
      </p>
      
      <div style="background: rgba(72, 187, 120, 0.1); border-right: 4px solid #48BB78; padding: 15px; margin-top: 20px;">
        <strong>النتيجة بالأرقام:</strong><br>
        في هذا المشروع، انخفض حجم الـ Payload من <strong>45KB</strong> إلى <strong>3.2KB</strong> فقط. هذا ليس مجرد توفير، هذه سرعة يشعر بها المستخدم فوراً.
      </div>
    `
  },
  
  {
    id: 3,
    title: "تشريح خطأ (Hydration Mismatch): عندما يختلف السيرفر مع العميل",
    excerpt: "قصة خطأ برمجي كاد أن يوقف نظام التوقيت في منصة الذهب، وكيف قمنا بتتبع المشكلة من السيرفر إلى المتصفح وحلها بنمط برمجي نظيف.",
    category: "troubleshooting",
    categoryLabel: "حلول تقنية 🛠️",
    date: "15 أغسطس 2025", 
    image: "/images/code-snippet.webp", 
    content: `
      <p>
        في مشاريع <strong>Next.js</strong> الحديثة، يعتبر خطأ <em>"Hydration failed because the initial UI does not match what was rendered on the server"</em> هو الكابوس الذي يطارد المطورين.
      </p>
      <p>
        واجهنا هذا التحدي أثناء تطوير <strong>"ساعة توقيت السوق"</strong> في لوحة تحكم الذهب. كان الهدف بسيطاً: عرض الوقت الحالي بالثواني. ولكن النتيجة كانت شاشة حمراء وانهياراً في واجهة المستخدم.
      </p>

      <h3>1. الكود المسبب للمشكلة (The Bug) 🐛</h3>
      <p>
        في البداية، كتبنا الكود بطريقة React التقليدية. المشكلة هنا أن Next.js يقوم ببناء الصفحة أولاً على السيرفر (Server-Side).
      </p>
      <p>
        السيرفر (الموجود في توقيت UTC) قام بإنشاء HTML يحتوي على الساعة <strong>12:00</strong>، ولكن عندما وصل الملف لمتصفح العميل (في توقيت الكويت)، حاول المتصفح تغييرها لـ <strong>03:00</strong> فوراً. هذا التضارب دفع React لإعلان حالة الطوارئ.
      </p>
      
      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/hydration-bug.webp" alt="Bad Code Example" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الشكل 1: الكود الذي سبب المشكلة (لاحظ استخدام Date مباشرة)
        </div>
      </div>

      <h3>2. التحليل الجذري (Root Cause Analysis)</h3>
      <p>
        قاعدة ذهبية في Next.js: <strong>"ما يخرج من السيرفر يجب أن يطابق تماماً ما يراه العميل في اللحظة الأولى"</strong>.
        أي دالة تعتمد على الوقت، أو حجم الشاشة (Window)، أو العشوائية (Math.random) ستكسر هذه القاعدة إذا تم استخدامها مباشرة في جسم المكون (Component Body).
      </p>

      <h3>3. الحل الهندسي (The Fix) ✅</h3>
      <p>
        لحل المشكلة، يجب أن نؤجل عملية قراءة الوقت حتى نتأكد أن الصفحة قد "استقرت" داخل متصفح العميل.
        استخدمنا <code>useEffect</code> لهذا الغرض، حيث أن ما بداخلها لا يتم تنفيذه على السيرفر أبداً.
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/hydration-fix.webp" alt="Fixed Code Example" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الشكل 2: الحل باستخدام useEffect وحالة الانتظار
        </div>
      </div>

      <h3>النتيجة</h3>
      <p>
        بعد تطبيق هذا النمط (Pattern)، اختفى الخطأ تماماً. الآن السيرفر يرسل الصفحة بحالة "تحميل"، وفي اللحظة التي يصل فيها للمتصفح، يتم حقن التوقيت المحلي الصحيح بدقة المللي ثانية.
      </p>
      <p>
        هذا الدرس البسيط وفر علينا ساعات من التصحيح في مكونات أكثر تعقيداً لاحقاً.
      </p>
    `
  },

  {
    id: 4,
    title: "وداعاً Redux: لماذا انتقلت إلى Zustand ووفرت 40% من الكود؟",
    excerpt: "مقارنة جريئة في إدارة الحالة (State Management). كيف تخلصت من تعقيدات الـ Boilerplate وحصلت على أداء أفضل بكود أقل.",
    category: "best-practices",
    categoryLabel: "أفضل الممارسات 💡",
    date: "10 أبريل 2025",
    image: "/images/zustand.webp",    
    content: `
      <p>
        لفترة طويلة، كان <strong>Redux</strong> هو الملك غير المتوج لإدارة الحالة (Global State) في تطبيقات React. لقد استخدمته في عشرات المشاريع، ولكن مع كل مشروع جديد، كنت أشعر بـ "إرهاق الإعداد" (Setup Fatigue).
      </p>
      <p>
        هل يعقل أن أحتاج لإنشاء 3 ملفات (Actions, Reducers, Types) وتغليف التطبيق بـ Provider.. فقط لأقوم بتغيير "لون الثيم" أو "حالة القائمة الجانبية"؟
      </p>

      <h3>1. المشكلة: تضخم الكود (Boilerplate Bloat) 📉</h3>
      <p>
        في مشروعي الأخير (نظام إدارة المدارس ERP)، لاحظت أن مجلد <code>redux</code> أصبح يحتوي على مئات الأسطر التي لا تفعل شيئاً سوى نقل البيانات من مكان لآخر. هذا التعقيد يجعل الصيانة كابوساً، ويزيد من حجم التطبيق (Bundle Size) دون داعٍ.
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/redux-bloat.webp" alt="Redux Boilerplate" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          Redux: كود كثير جداً لمهمة بسيطة
        </div>
      </div>

      <h3>2. الحل: البساطة مع Zustand 🐻</h3>
      <p>
        قررت تجربة مكتبة <strong>Zustand</strong> (وتعني "الحالة" بالألمانية). الفلسفة هنا مختلفة تماماً: 
        <strong>"أقل كود ممكن لتحقيق الهدف"</strong>.
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li>لا حاجة لـ Context Provider (تخلصنا من Wrapper Hell).</li>
        <li>الـ Store هو مجرد Hook عادي.</li>
        <li>يعمل بسلاسة مع Next.js و Server Components.</li>
      </ul>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/zustand-clean.webp" alt="Zustand Simplicity" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          Zustand: تعريف واستخدام مباشر في سطرين
        </div>
      </div>

      <h3>3. النتائج بالأرقام 📊</h3>
      <p>
        بعد إعادة كتابة جزء من المشروع باستخدام Zustand:
      </p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">✅ <strong>حجم الكود:</strong> انخفض بنسبة 40%.</li>
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">✅ <strong>الأداء:</strong> تحسن ملحوظ في إعادة الرسم (Re-renders) لأن Zustand لا يعيد رسم المكون إلا إذا تغيرت البيانات التي يراقبها تحديداً.</li>
      </ul>

      <h3>الخلاصة</h3>
      <p>
        Redux لا يزال أداة قوية للمشاريع العملاقة جداً، ولكن بالنسبة لـ 95% من التطبيقات الحديثة، <strong>Zustand</strong> هو الخيار الذكي. إنه يحترم وقت المطور وموارد المتصفح.
      </p>
    `
  },

  {
    id: 5,
    title: "تشريح كارثة: كيف أنقذ نمط Singleton متجر عميل من الانهيار؟",
    excerpt: "دراسة حالة واقعية لعميل واجه توقفاً مفاجئاً في قاعدة البيانات أثناء حملة إعلانية، وكيف قمت بتشخيص مشكلة 'تسرب الاتصالات' وحلها في 15 دقيقة.",
    category: "design-patterns",
    categoryLabel: "أنماط التصميم 🏗️",
    date: "20 فبراير 2025",
    image: "/images/database.webp",
    content: `
      <p>
        في الساعة الثانية فجراً، تلقيت اتصالاً طارئاً من أحد العملاء (منصة تجارة إلكترونية). المشكلة كانت مرعبة: الموقع يعمل ببطء شديد، ثم تظهر رسالة الخطأ القاتلة: 
        <em>"MongoError: too many open connections"</em>.
      </p>
      <p>
        كانت الشركة تضخ مئات الدنانير في حملة إعلانية، وكل دقيقة توقف تعني خسارة فادحة.
      </p>

      <h3>1. التشخيص: السيرفرات "بلا خادم" (Serverless Trap) 🕵️‍♂️</h3>
      <p>
        بعد مراجعة السجلات (Logs)، اكتشفت أن المطورين السابقين تعاملوا مع Next.js وكأنه سيرفر تقليدي (Node.js Server).
      </p>
      <p>
        في بيئة <strong>Serverless</strong> (مثل Vercel)، الدوال تعمل وتموت خلال ثوانٍ. الكود القديم كان يفتح اتصالاً بقاعدة البيانات مع كل طلب HTTP جديد، ولا يغلقه أبداً. مع دخول 500 زائر في نفس اللحظة، تم استنفاذ الـ Connection Pool بالكامل.
      </p>
      
      <p style="margin-bottom: 10px; color: #E2E8F0;">
          وكعادتي في التوثيق الفني لضمان الشفافية مع العميل، قمت بالتقاط صورة للكود المسبب للكارثة قبل إصلاحه:
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/db-crash.webp" alt="Bad Database Connection" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الكود الكارثي: اتصال جديد لكل زائر = انهيار السيرفر
        </div>
      </div>

      <h3>2. الحل السريع: نمط Singleton 🛡️</h3>
      <p>
        الحل لم يكن زيادة سعة السيرفر (Scale Up)، بل إصلاح الكود. استخدمت نمط تصميم برمجي يسمى <strong>Singleton Pattern</strong>.
      </p>
      <p>
        الفكرة ببساطة: "تحقق أولاً هل يوجد اتصال مفتوح؟ إذا نعم، استخدمه. إذا لا، افتح واحداً جديداً واحفظه في الذاكرة العامة (Global Scope)".
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/db-singleton.webp" alt="Singleton Pattern Solution" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الحل الهندسي: كود ذكي يعيد استخدام الاتصال
        </div>
      </div>

      <h3>النتيجة</h3>
      <p>
        بمجرد رفع التحديث (Hotfix):
      </p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">📉 انخفض عدد الاتصالات المفتوحة من <strong>1500+</strong> إلى <strong>5</strong> فقط.</li>
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">⚡ عاد الموقع للعمل بسرعة فائقة واستكملت الحملة الإعلانية بنجاح.</li>
      </ul>

      <p>
        <strong>الدرس المستفاد للعملاء:</strong> الاستثمار في "مطوّر برمجيات" يفهم البنية التحتية، أوفر بكثير من توظيف "مبرمج" يكتب كوداً يعمل فقط على جهازه.
      </p>
    `
  },
  {
    id: 6,
    title: "بداية الرحلة: هل يمكن لـ LLMs أن تتداول الذهب؟ (Project Genesis)",
    excerpt: "تدوينة البداية لمشروع بحثي جديد (R&D). الفرضية: دمج النماذج اللغوية مع التحليل الفني للخروج من عباءة البوتات التقليدية.",
    category: "case-study",
    categoryLabel: "بحث وتطوير 🧪",   
    date: "10 يناير 2025",
    image: "/images/gold-ai-1.webp",
    content: `
      <p>
        اليوم أبدأ رحلة برمجية جديدة قد تستغرق عاماً كاملاً، أو قد تفشل في الشهر الأول. 
        الهدف هو الإجابة على سؤال واحد يدور في ذهني: <strong>هل يمكن لنماذج اللغة (مثل GPT-4) أن تكون "محللاً مالياً" حقيقياً؟</strong>
      </p>

      <h3>الفرضية (The Hypothesis) 💡</h3>
      <p>
        بوتات التداول الحالية "غبية". هي تنفذ أوامر ثابتة (<code>IF RSI > 70 THEN SELL</code>). 
        لكن السوق ليس رياضيات فقط، السوق "سلوك بشري" وخوف وطمع.
      </p>
      <p>
        <strong>فكرتي هي:</strong> ماذا لو استخدمنا القدرات الاستنتاجية للذكاء الاصطناعي لدمج الأخبار الاقتصادية مع التحليل الفني؟ هل يمكننا بناء نظام "يفهم" السياق ولا يتبع الأرقام فقط؟
      </p>

      <h3>التحديات المتوقعة 🚧</h3>
      <p>
        قبل كتابة السطر الأول من الكود، حددت 3 عقبات رئيسة يجب حلها في الأشهر القادمة:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>الهلوسة (Hallucination):</strong> كيف أمنع الذكاء الاصطناعي من اختراع تحليلات وهمية؟</li>
        <li><strong>التكلفة (Cost):</strong> استدعاء الـ API كل دقيقة سيكلف ثروة. أحتاج لهيكلية ذكية (ربما نظام كشافة وقناصة؟).</li>
        <li><strong>السرعة (Latency):</strong> السوق يتحرك بالمللي ثانية، والـ LLMs بطيئة.</li>
      </ul>

      <div style="margin: 30px 0; border: 2px solid #63B3ED; border-radius: 10px; overflow: hidden;">
        <img src="/images/gold-ai-genesis.webp" alt="First Code Experiment" style="width: 100%; display: block;" />
        <div style="background: #63B3ED; color: #1A202C; padding: 5px 10px; font-size: 0.8rem; text-align: center; font-weight: bold;">
          التجربة رقم 1: أول محاولة للتحدث مع الـ API (يناير 2025)
        </div>
      </div>

      <h3>خارطة الطريق (Roadmap) 🗺️</h3>
      <p>
        سأبدأ ببناء نموذج أولي (Prototype) باستخدام <strong>Node.js</strong> و <strong>Python</strong>. 
        لن أقوم بالتداول بأموال حقيقية قبل 6 أشهر من الاختبار (Backtesting) الصارم.
      </p>
      <p>
        سأقوم بتوثيق هذه الرحلة هنا في "المعمل"، سواء انتهت بنجاح باهر أو بفشل ذريع. لننطلق! 🚀
      </p>
    `
  },
  
  // =================================================================
  // 🟡 عام 2024: الأداء والتحسين (Performance Era)
  // =================================================================

  {
    id: 7,
    title: "تحسين أداء React: كيف رفعت تقييم Lighthouse من 60 إلى 98؟",
    excerpt: "دراسة تفصيلية حول تقنيات الـ Lazy Loading، تحسين الصور (Next/Image)، وتقليل حجم الحزمة (Bundle Size) في التطبيقات الكبيرة.",
    category: "performance",
    categoryLabel: "تحسين الأداء ⚡",
    date: "أرشيف 2024",
    image: "/images/performance-speed.webp",
    content: `
      <p>
        في عالم الويب، <strong>السرعة هي المال</strong>. إحصائيات Google تقول أن تأخير ثانية واحدة في التحميل قد يخسرك 20% من الزوار.
      </p>
      <p>
        استلمت مشروعاً (Dashboard ضخمة) كان يعاني من بطء شديد. تقييم Google Lighthouse كان كارثياً (60/100)، وكان العميل يشتكي من أن "الشاشة تبيض" لعدة ثوانٍ قبل الظهور.
      </p>

      <h3>1. التشخيص: تضخم الحزمة (Bundle Bloat) 📉</h3>
      <p>
        بعد تحليل الشبكة (Network Tab)، اكتشفت الكارثة: الصفحة الرئيسية كانت تقوم بتحميل مكتبات ضخمة (Charts, Maps, Text Editors) دفعة واحدة، رغم أن المستخدم قد لا يستخدمها أصلاً!
      </p>
      <p>
        هذا ما يسمى بـ <strong>Blocking the Main Thread</strong>. المتصفح كان مشغولاً بتحميل أكواد غير ضرورية بدلاً من عرض المحتوى.
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/heavy-import.webp" alt="Bad Import Practice" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          المشكلة: استيراد كل شيء دفعة واحدة (Initial Load ثقيل جداً)
        </div>
      </div>

      <h3>2. الحل: استراتيجية "التحميل الكسول" (Lazy Loading) 🚀</h3>
      <p>
        الحل السحري في Next.js هو استخدام <code>next/dynamic</code>.
        هذه التقنية تقوم بـ "تقطيع الكود" (Code Splitting) أوتوماتيكياً. بدلاً من ملف JS واحد حجمه 5MB، قمنا بتقسيمه لملفات صغيرة (Chunks).
      </p>
      <p>
        الآن، عندما يدخل المستخدم، يحمل فقط 200KB (الهيدر والنصوص الأساسية). أما الرسوم البيانية؟ لا يتم تحميلها إلا عندما يقرر المستخدم التمرير لأسفل لرؤيتها.
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/lazy-load.webp" alt="Dynamic Import Solution" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الحل: استخدام dynamic import لتأجيل تحميل المكونات الثقيلة
        </div>
      </div>

      <h3>3. تحسينات إضافية (Quick Wins) ✨</h3>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>صور الجيل الجديد:</strong> استبدال كل وسوم <code>img</code> بمكون <code>next/image</code> الذي يحول الصور تلقائياً إلى صيغة WebP الخفيفة.</li>
        <li><strong>الخطوط:</strong> استخدام <code>next/font</code> لمنع وميض النصوص (FOIT) وتحميل الخطوط من السيرفر مباشرة بدلاً من Google Fonts.</li>
      </ul>

      <h3>النتيجة النهائية 🏆</h3>
      <p>
        بعد أسبوع من العمل ("Refactoring")، قمنا بتشغيل Lighthouse مرة أخرى:
      </p>
      <ul style="list-style: none; padding: 0;">
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">🟢 <strong>الأداء:</strong> قفز إلى <strong>98/100</strong>.</li>
        <li style="margin-bottom: 10px; background: #2D3748; padding: 10px; border-radius: 5px;">📉 <strong>وقت التحميل الأولي (LCP):</strong> انخفض من 4.2 ثانية إلى 0.8 ثانية.</li>
      </ul>
      <p>
        الدرس المستفاد: لا تكتب كوداً يعمل فقط، اكتب كوداً "يحترم" المستخدم ووقت انتظاره.
      </p>
    `
  },
  {
    id: 8,
    title: "بداية عصر الـ AI: تجربتي الأولى في دمج OpenAI API مع Node.js",
    excerpt: "كيف قمت ببناء أول Chatbot ذكي لخدمة العملاء، وما هي التحديات التي واجهتها في ضبط الـ Context Window لتوفير التكلفة.",
    category: "ai-integration",
    categoryLabel: "الذكاء الاصطناعي 🤖",
    date: "أرشيف 2024",
    image: "/images/ai-brain.webp",
    content: `
      <p>
        مع بداية عام 2024، لم يعد الذكاء الاصطناعي مجرد "تريند" نتحدث عنه، بل أصبح مطلباً أساسياً للشركات. وبصفتي مطوراً، لم أرغب في استخدامه كمستخدم عادي، بل أردت <strong>دمجه برمجياً داخل أنظمتي</strong>.
      </p>
      <p>
        طلب مني أحد العملاء بناء "موظف خدمة عملاء آلي" لموقعه. التحدي؟ البوتات القديمة (If/Else) كانت غبية جداً، والعميل يريد ذكاء GPT-4 ولكن داخل موقعه الخاص.
      </p>

      <h3>1. الصدمة الأولى: هذا ليس سحراً، هذه "هندسة أوامر" (Prompt Engineering) 🧠</h3>
      <p>
        عندما بدأت التعامل مع OpenAI API، اكتشفت أن الحصول على إجابة جيدة لا يعتمد على الكود بقدر ما يعتمد على "السياق" (Context) الذي ترسله.
      </p>
      <p>
        واجهت مشكلة <strong>"فقدان الذاكرة"</strong>. النموذج لا يتذكر ما قاله المستخدم قبل دقيقة!
        الحل البرمجي كان بناء <strong>(Conversation Buffer)</strong> بسيط في Node.js يقوم بتخزين آخر 5 رسائل وإرسالها مع كل طلب جديد.
      </p>

      <div style="margin: 30px 0; border: 2px solid #63B3ED; border-radius: 10px; overflow: hidden;">
        <img src="/images/ai-console-log.webp" alt="First AI Response" style="width: 100%; display: block;" />
        <div style="background: #63B3ED; color: #1A202C; padding: 5px 10px; font-size: 0.8rem; text-align: center; font-weight: bold;">
          اللحظة التاريخية: أول رد ناجح وسريع من البوت في التيرمينال
        </div>
      </div>

      <h3>2. مشكلة التكلفة والسرعة 💸</h3>
      <p>
        في البداية، كنت أستخدم نموذج GPT-4 لكل شيء، مما جعل الرد يستغرق 5 ثوانٍ ويكلف الكثير.
      </p>
      <p>
        <strong>الدرس المستفاد:</strong> ليس كل سؤال يحتاج إلى عبقري! قمت بتوجيه الأسئلة البسيطة (مثل "كيف أغير كلمة المرور؟") إلى نموذج GPT-3.5 Turbo السريع والرخيص، واحتفظت بـ GPT-4 للأسئلة المعقدة فقط.
      </p>

    <h3>الخلاصة</h3>
      <p>
        دمج الذكاء الاصطناعي في التطبيقات ليس مجرد <code>API Call</code>. إنه يتطلب تفكيراً جديداً في إدارة الحالة (State) والذاكرة.
        <br>
        هذه التجربة البسيطة فتحت شهيتي لاستكشاف ما هو أبعد من مجرد "الدردشة"، وبدأت أفكر جدياً: <strong>هل يمكننا بناء أنظمة تتخذ قرارات معقدة بدلاً من البشر؟</strong>
      </p>
    `
  },

  // =================================================================
  // 🟠 عام 2023: البنية التحتية (Infrastructure Era)
  // =================================================================

  {
    id: 9,
    title: "لماذا تخليت عن الـ VPS وانتقلت كلياً إلى Serverless؟",
    excerpt: "مقارنة التكلفة والأداء بين إدارة سيرفرات DigitalOcean وبين الانتقال إلى بيئة Vercel & AWS Lambda.",
    category: "devops",
    categoryLabel: "البنية التحتية ☁️",
    date: "أرشيف 2023", 
    image: "/images/serverless-cloud.webp",
    content: `
      <p>
        لسنوات طويلة، كنت أعيش في "الترمينال". شراء Droplet من DigitalOcean، إعداد Nginx، تثبيت شهادات SSL يدوياً، ومراقبة الذاكرة بخوف. كان هذا يشعرني أنني "مُطوّر حقيقي".
      </p>
      <p>
        ولكن **مع مرور أشهر هذا العام**، أدركت الحقيقة المرة: أنا أقضي 30% من وقتي في "إدارة السيرفر" (DevOps) بدلاً من "كتابة الكود" (Development).
      </p>

      <h3>1. القشة التي قصمت ظهر البعير 🐪</h3>
      <p>
        في أحد المشاريع، حدثت قفزة مفاجئة في الزيارات (Traffic Spike). السيرفر ذو الـ 5 دولارات توقف عن العمل.
        اضطررت للدخول يدوياً، عمل Resize، وإعادة التشغيل. في تلك اللحظة قررت: <em>"توقف يا أحمد! أريد كوداً يعمل وحسب."</em>
      </p>

      <h3>2. الانتقال إلى المجهول: Serverless Architecture</h3>
      <p>
        نقلت المشروع إلى بيئة <strong>Vercel (Next.js)</strong>. الفكرة كانت مرعبة في البداية: "أين السيرفر؟ أين قاعدة البيانات؟".
        لكن النتيجة كانت سحرية:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>توسع تلقائي (Auto-scaling):</strong> سواء دخل 10 زوار أو 10 آلاف، البنية التحتية تتوسع وتنكمش وحدها.</li>
        <li><strong>الأمان:</strong> لا حاجة لتحديث Ubuntu أو القلق من ثغرات SSH.</li>
        <li><strong>النشر (Deploy):</strong> مجرد <code>git push</code> والموقع يعمل خلال دقيقة.</li>
      </ul>

      <div style="background: #2D3748; padding: 20px; border-radius: 8px; border-right: 4px solid #48BB78; margin: 20px 0;">
        <strong>معادلة التكلفة:</strong>
        <br/>
        صحيح أن الـ VPS أرخص "كموارد خام"، لكن الـ Serverless أرخص بكثير إذا حسبت "ساعة عملك" كمُطوّر.
      </div>

      <h3>3. العيوب؟ نعم، الـ Cold Start ❄️</h3>
      <p>
        لا يوجد حل كامل. المشكلة الوحيدة في الـ Serverless هي "البداية الباردة". إذا لم يزر أحد موقعك لفترة، الدالة "تنام". الزائر الأول قد ينتظر ثانية إضافية.
        الحل كان بسيطاً: استخدام <strong>Edge Functions</strong> للأجزاء التي تتطلب سرعة قصوى.
      </p>

    <h3>الخلاصة</h3>
    <p>
      بفضل تقنية Serverless، لم تعد هناك حاجة للقلق بشأن صيانة الخوادم أو الوصول عبر SSH، مما سمح لنا بالتركيز على جوهر العمل: بناء منتجات رقمية فعالة وقابلة للتوسع.
    </p>
    `
  },
  {
    id: 10,
    title: "صراع التنسيق: CSS Modules مقابل Tailwind.. من الفائز؟",
    excerpt: "بعد سنوات من كتابة SASS، قررت تجربة Tailwind CSS في مشروع ضخم. الأسباب التي جعلتني لا أعود للوراء أبداً.",
    category: "frontend",
    categoryLabel: "الواجهات الأمامية 🎨",
    date: "أرشيف 2023",
    image: "/images/tailwind-css.webp",
    content: `
      <p>
        لو سألتني قبل عامين (في 2021) عن Tailwind CSS، لقلت لك: <em>"مستحيل! لماذا أجعل كودي قبيحاً ومليئاً بأسماء الكلاسات؟ أنا أفضل النظام والنظافة التي توفرها CSS Modules."</em>
      </p>
      <p>
        كنت من مدرسة <strong>Separation of Concerns</strong> (فصل الهيكل عن التنسيق). ولكن في مشروع ضخم بدأت العمل عليه <strong>مطلع هذا العام</strong>، بدأت أواجه "إرهاق التسمية" (Naming Fatigue).
      </p>

      <h3>1. المشكلة: أصعب شيئين في البرمجة... التسمية! 🏷️</h3>
      <p>
        مع CSS Modules، كنت أقضي وقتاً طويلاً في اختراع أسماء للكلاسات: 
        <code>.wrapper-inner-container-left</code>؟ أم <code>.sidebar-item-active</code>؟
      </p>
      <p>
        بالإضافة إلى ذلك، التنقل المستمر بين ملف <code>Component.js</code> وملف <code>Component.module.css</code> كان يكسر تركيزي (Context Switching).
      </p>

      <h3>2. التجربة: الغوص في فوضى Tailwind 🌊</h3>
      <p>
        قررت إعطاء Tailwind فرصة في مشروع لوحة تحكم (Dashboard). الصدمة الأولى كانت "قبح الكود".
        <br>
        <code>&lt;div class="p-4 bg-white rounded-lg shadow-md flex items-center"&gt;</code>
      </p>
      <p>
        لكن بعد ساعتين فقط، حدث السحر. أدركت أنني بنيت واجهة كاملة دون أن أغادر ملف HTML/JSX ودون أن أكتب سطراً واحداً من CSS المخصص.
      </p>

      <div style="background: #2D3748; padding: 20px; border-radius: 8px; border-right: 4px solid #38B2AC; margin: 20px 0;">
        <strong>ميزة غير متوقعة:</strong>
        <br/>
        مع Tailwind، أنت لا تخرج عن "نظام التصميم" (Design System). لا مزيد من <code>margin: 13px</code> العشوائية. أنت مجبر على استخدام المسافات القياسية (m-4, m-5)، مما جعل التصميم متناسقاً بشكل هندسي دقيق.
      </div>

      <h3>3. الخرافة: "الكود سيصبح فوضوياً"</h3>
      <p>
        الحقيقة هي أننا في عصر <strong>React Components</strong>. أنت تكتب هذا الكود الطويل مرة واحدة فقط داخل المكون، ثم تعيد استخدامه في كل مكان.
        الصيانة أصبحت أسهل: إذا أردت تعديل زر، أنا أعدل الزر نفسه، ولا أبحث عن ملف CSS ضائع قد يؤثر على عناصر أخرى بالخطأ.
      </p>

      <h3>الخلاصة</h3>
      <p>
        <strong>CSS Modules</strong> رائعة للمشاريع الصغيرة جداً، ولكن <strong>Tailwind</strong> هو خيار الإنتاجية الأول. إنه ليس مجرد أداة تنسيق، بل هو "لغة تواصل" موحدة بين المطورين.
      </p>
    `
  },

  // =================================================================
  // 🔴 عام 2022: جودة الكود (Code Quality Era)
  // =================================================================

  {
    id: 11,
    title: "لا تثق بالكود أبداً: لماذا بدأت أكتب Unit Tests لكل دالة؟",
    excerpt: "كيف أنقذتني اختبارات Jest من كارثة محققة في نظام مدفوعات، ولماذا يجب أن يكون الـ Testing جزءاً من ثقافتك البرمجية.",
    category: "testing",
    categoryLabel: "جودة البرمجيات ✅",
    date: "أرشيف 2022",
    image: "/images/testing-check.webp",
    content: `
      <p>
        هل جربت شعور "الرعب" عند رفع تحديث جديد للموقع يوم الخميس مساءً؟ الخوف من أن تكسر ميزة قديمة (Regression) وأنت لا تدري؟
      </p>
      <p>
        كنت أعيش هذا الرعب لسنوات طويلة، ولكن **عام 2022 كان نقطة التحول**. في بداية هذا العام، قررت تبني ثقافة <strong>Testing Culture</strong>. البداية كانت صعبة، كنت أشعر أنني أكتب كوداً مضاعفاً، لكن النتائج التي أحصدها الآن في نهاية العام مذهلة.
      </p>

      <h3>1. الكارثة التي غيرت كل شيء 💥</h3>
      <p>
       في أحد مشاريع التجارة الإلكترونية لعميل خارج البلاد، قمت بتعديل بسيط في دالة "حساب الضريبة". جربتها يدوياً وبدت صحيحة.
       بعد أسبوع، اكتشفنا أن الدالة كانت تعطي نتائج خاطئة للمنتجات المعفاة من الضريبة (حسب قوانين بلدهم). الخسارة كانت مالية، والثقة اهتزت.
      </p>

      <h3>2. الحل: Jest & Unit Tests 🛡️</h3>
      <p>
        قررت استخدام مكتبة <strong>Jest</strong>. الفكرة ليست أن تجرب الكود بيدك، بل أن تكتب "روبوتاً صغيراً" (Script) يهاجم الكود بكل السيناريوهات الممكنة (أرقام سالبة، صفر، نصوص فارغة) ويتأكد من النتيجة.
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/testing-success.webp" alt="All Tests Passed" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الراحة النفسية: عندما ترى العلامات الخضراء، تعلم أن الكود سليم 100%
        </div>
      </div>

      <h3>3. الفائدة: إعادة الهيكلة بثقة (Refactoring with Confidence)</h3>
      <p>
        أعظم فائدة للاختبارات ليست اكتشاف الأخطاء فقط، بل القدرة على تطوير الكود وتحسينه دون خوف.
        أستطيع اليوم تغيير هيكلية الدالة بالكامل، وبضغطة زر واحدة (Run Tests)، يخبرني النظام: "لا تقلق، كل شيء لا يزال يعمل كما يجب".
      </p>

      <h3>الخلاصة</h3>
      <p>
        كتابة الاختبارات تبدو "مضيعة للوقت" في البداية، لكنها "استثمار" يوفر عليك ليالي طويلة من إصلاح الكوارث.
      </p>
    `
  },
  {
    id: 12,
    title: "وداعاً JavaScript: لماذا تعتبر TypeScript استثماراً إجبارياً؟",
    excerpt: "التحول من JS إلى TS كان مؤلماً في البداية، ولكنه وفر علينا آلاف الساعات من تصحيح الأخطاء لاحقاً.",
    category: "languages",
    categoryLabel: "لغات البرمجة 💻",
    date: "أرشيف 2022",
    image: "/images/typescript-logo.webp",
    content: `
      <p>
        "لماذا أعقد حياتي؟ JavaScript تعمل بشكل ممتاز!"
        هذا ما كنت أقوله لنفسي لسنوات. كنت أرى <strong>TypeScript</strong> مجرد "بهارات" إضافية لا داعي لها.
      </p>
      <p>
        ولكن في مشروع كبير لفريق مكون من 5 مطورين، تحولت الـ JavaScript إلى كابوس. كنا نضيع ساعات يومياً في تتبع أخطاء سخيفة مثل:
        <br><code>Cannot read property 'x' of undefined</code>.
      </p>

      <h3>1. الثقة العمياء (The Blind Trust) 🙈</h3>
      <p>
        مشكلة JS أنها "متسامحة" أكثر من اللازم. يمكنك تمرير "نص" إلى دالة تنتظر "رقماً"، ولن تعترض JS إلا عندما ينهار التطبيق في وجه العميل.
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/js-chaos.webp" alt="JavaScript Silent Error" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          المشكلة: JS تسمح لك بارتكاب الأخطاء بصمت
        </div>
      </div>

      <h3>2. التحول إلى TypeScript: عقد قانوني مع الكود 📝</h3>
      <p>
        قررت الانتقال إلى TypeScript. في الأسبوع الأول، انخفضت إنتاجيتي بنسبة 50%. كنت أقضي الوقت في "إرضاء المترجم" (Compiler) وكتابة الـ Interfaces.
      </p>
      <p>
        ولكن في الأسبوع الثاني، حدث شيء غريب: <strong>توقفت الأخطاء عن الظهور في المتصفح!</strong>
        لأن TypeScript تمنعك من تشغيل الكود أصلاً إذا كان فيه خطأ منطقي.
      </p>

      <div style="margin: 30px 0; border: 2px solid #3182CE; border-radius: 10px; overflow: hidden;">
        <img src="/images/ts-order.webp" alt="TypeScript Interface" style="width: 100%; display: block;" />
        <div style="background: #3182CE; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الحل: الواجهات (Interfaces) تضمن سلامة البيانات
        </div>
      </div>

      <h3>الخلاصة</h3>
      <p>
        اليوم، أنا لا أكتب سطراً برمجياً واحداً بدون TypeScript. إنها ليست مجرد لغة، بل هي <strong>"شبكة أمان"</strong> تمنعك من السقوط.
      </p>
    `
  },
  {
    id: 13,
    title: "هندسة المجلدات في المشاريع الكبيرة (Folder Structure)",
    excerpt: "كيف تنظم مشروعاً يحتوي على 500+ ملف؟ استراتيجيات التقسيم (Features vs Types) للحفاظ على نظافة المشروع وقابلية التوسع.",
    category: "architecture",
    categoryLabel: "هندسة البرمجيات 🏗️",
    date: "أرشيف 2022",
    image: "/images/folder-structure.webp",
    content: `
      <p>
        "أين وضعت ملف الـ API الخاص بتسجيل الدخول؟" 
        سؤال يتكرر يومياً في الفرق البرمجية التي تفتقر لهيكلية واضحة.
      </p>
      <p>
        في بداية مسيرتي، كنت أتبع الطريقة التقليدية: مجلد للمكونات (Components)، ومجلد للصفحات (Pages)، ومجلد للخدمات (Services). 
        هذا يعمل جيداً لمشروع صغير، ولكن عندما وصل عدد الملفات إلى 500، تحول المشروع إلى متاهة.
      </p>

      <h3>1. طريقة "الفرز حسب النوع" (The Old Way) ❌</h3>
      <p>
        المشكلة في هذه الطريقة هي <strong>تشتت السياق (Context Switching)</strong>.
        إذا أردت تعديل ميزة "سلة المشتريات"، أضطر لفتح 4 مجلدات مختلفة (API, Component, Style, Test) والبحث بداخلها.
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/folder-mess.webp" alt="Messy Folder Structure" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الشكل القديم: الملفات مرتبة تقنياً، لكنها مبعثرة وظيفياً
        </div>
      </div>

      <h3>2. الحل: "الفرز حسب الميزة" (Feature-First Architecture) ✅</h3>
      <p>
        قررت إعادة هيكلة المشروع بناءً على <strong>"الميزات" (Features)</strong>.
        أنشأت مجلداً اسمه <code>features</code>، وداخله مجلد لكل جزء من المشروع (Auth, Cart, UserProfile).
      </p>
      <p>
        القاعدة بسيطة: <strong>"الأشياء التي تتغير معاً، يجب أن تبقى معاً" (Colocation).</strong>
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/folder-clean.webp" alt="Clean Feature Architecture" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          الحل الهندسي: كل ميزة هي "عالم مستقل" بذاته
        </div>
      </div>

      <h3>النتيجة</h3>
      <p>
        أصبحت عملية التطوير أسرع بنسبة 30%. عندما يطلب مني العميل تعديلاً في "المنتجات"، أعرف بالضبط أين أذهب: <code>src/features/products</code>. لا بحث، لا تشتت.
      </p>
      <p>
        هذا الأسلوب يجعل حذف ميزة (Feature) أمراً سهلاً جداً: فقط احذف المجلد الخاص بها، ولن يتأثر باقي المشروع.
      </p>
    `
  },

  // =================================================================
  // ⚫ عام 2021: الدروس القاسية (Legacy Era)
  // =================================================================

  {
    id: 14,
    title: "درس قاسٍ تعلمته بعد انهيار قاعدة بيانات في مشروع Legacy",
    excerpt: "قصة فشل النسخ الاحتياطي (Backup) وكيف استعدنا البيانات في اللحظات الأخيرة. دروس في إدارة المخاطر.",
    category: "database",
    categoryLabel: "قواعد البيانات 🗄️",
    date: "أرشيف 2021",
    image: "/images/db-error.webp",
    content: `
      <p>
        في عالم البرمجة، هناك مقولة شهيرة: <strong>"هناك نوعان من المبرمجين: من فقدوا بياناتهم، ومن سيفقدونها قريباً."</strong>
      </p>
      <p>
        أكتب هذه الكلمات اليوم (في نهاية الأسبوع) وأنا ألتقط أنفاسي بعد أيام عصيبة جداً. أدير حالياً نظاماً قديماً (Legacy System) لعميل في قطاع التجزئة، وكنا نعتمد -بكل سذاجة- على سكريبت بسيط يقوم بأخذ نسخة احتياطية (Backup) كل ليلة.
      </p>

      <h3>1. يوم الانهيار (الأربعاء الأسود) 🌑</h3>
      <p>
        الكارثة بدأت <strong>صباح الأربعاء الماضي</strong>. حدث خطأ بشري أثناء تحديث السيرفر، وتم حذف جدول المستخدمين بالخطأ.
        الجميع كان هادئاً في الدقائق الأولى: "لا تقلقوا، لدينا Backup من الليلة الماضية".
      </p>
      <p>
        ولكن عندما حاولنا استعادة النسخة... حلت الصاعقة. اكتشفنا أن ملف النسخة الاحتياطية <strong>فارغ (0 bytes)</strong> منذ 3 أشهر بسبب امتلاء مساحة القرص، ولم ينتبه أحد!
      </p>

      <div style="margin: 30px 0; border: 2px solid #F56565; border-radius: 10px; overflow: hidden;">
        <img src="/images/db-error-1.webp" alt="Database Critical Error" style="width: 100%; display: block;" />
        <div style="background: #F56565; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          اللحظة المرعبة: السيرفر لا يستجيب والبيانات مفقودة
        </div>
      </div>

      <h3>2. عملية الإنقاذ (Disaster Recovery) 🚑</h3>
      <p>
        لحسن الحظ، تذكرت أننا قمنا بأخذ نسخة احتياطية "باردة" (Cold Storage) على سيرفر Amazon S3 يدوياً قبل 4 أشهر.
        صحيح أن العميل خسر بيانات الربع الأخير، لكننا أنقذنا المشروع من الإغلاق التام والملاحقة القانونية.
      </p>

      <div style="margin: 30px 0; border: 2px solid #48BB78; border-radius: 10px; overflow: hidden;">
        <img src="/images/db-restore.webp" alt="Data Restore Process" style="width: 100%; display: block;" />
        <div style="background: #48BB78; color: white; padding: 5px 10px; font-size: 0.8rem; text-align: center;">
          بداية الأمل: استعادة البيانات من التخزين السحابي
        </div>
      </div>

      <h3>3.الدرس الذي تعلمته اليوم</h3>
      <p>
        خرجت من هذه الأزمة بقانون جديد لن أحيد عنه: <strong>النسخة الاحتياطية التي لم تقم بتجربة استعادتها (Restore Test) هي نسخة غير موجودة.</strong>
      </p>
      <p>
        بدأت فوراً في كتابة سكربت جديد يقوم بأخذ نسخة، ومحاولة استعادتها في سيرفر وهمي، وإرسال تقرير نجاح لي عبر الإيميل، لكي لا يتكرر هذا الرعب مرة أخرى.
      </p>
    `
  },

  // =================================================================
  // تابعة لعام 2021
  // =================================================================
  {
    id: 15,
    title: "تحدي الموارد المحدودة: كيف جهزنا متجراً لاستقبال 20 ألف زائر باستخدام Docker",
    excerpt: "العميل يمتلك سيرفراً بمواصفات متواضعة، وموسم العروض يقترب. تحليلات جوجل تتوقع قفزة في الزيارات، والترقية المكلفة ليست خياراً الآن. كيف استخدمنا الحاويات (Containers) لتعظيم الأداء.",
    category: "devops",
    categoryLabel: "البنية التحتية 🐳",
    date: "أرشيف 2021",
    image: "/images/docker-container.webp",
    content: `
      <p>
        "الموقع يعمل بامتياز على جهازي، لماذا ينهار عند العميل؟"
        هذه الجملة هي هاجسي الحالي ونحن نستعد لموسم العروض القادم.
      </p>
      <p>
        لدينا عميل يمتلك متجراً إلكترونياً نشطاً. بعد مراجعة دقيقة لأرقام <strong>Google Analytics</strong>، وجدنا أن متوسط الزوار اليومي حوالي <strong>15,000 زائر</strong>، وتشير التوقعات إلى أن هذا الرقم سيقفز إلى <strong>20,000</strong> مع انطلاق الحملة الإعلانية نهاية الشهر.
      </p>

      <h3>المعضلة: طموح عالٍ وموارد متواضعة 📉</h3>
      <p>
        البنية التحتية الحالية للعميل "متواضعة جداً" (VPS صغير بمواصفات محدودة).
        عندما اختبرنا الحمل (Load Testing) لمحاكاة الـ 20 ألف زائر، بدأ السيرفر بالاختناق. المعالج وصل 100% والذاكرة امتلأت.
      </p>
      <p>
        الحل الأسهل هو أن أقول للعميل: "ادفع وضاعف مواصفات السيرفر". لكن دوري كمُطوّر ليس صرف أموال العميل، بل إيجاد حلول ذكية. المشكلة لم تكن في ضعف السيرفر فقط، بل في <strong>هدر الموارد</strong> بسبب تضارب المكتبات وسوء إدارة البيئة التشغيلية.
      </p>

      <h3>الحل: التغليف الذكي (Dockerize) 📦</h3>
      <p>
        قررت نقل التطبيق بالكامل إلى بيئة <strong>Docker</strong>.
        الفكرة هنا ليست مجرد "موضة"، بل حاجة ماسة:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>التوحيد:</strong> بيئة Docker خفيفة جداً، وتضمن أن التطبيق يعمل بنفس الكفاءة التي يعمل بها على جهازي القوي، دون أن يثقله نظام التشغيل الخاص بالسيرفر.</li>
        <li><strong>العزل (Isolation):</strong> كل خدمة (قاعدة البيانات، الكاش، التطبيق) تعمل في حاوية معزولة، مما يمنع تضارب الموارد الذي كان يقتل السيرفر سابقاً.</li>
      </ul>

      <h3>النتيجة والمصارحة</h3>
      <p>
        بعد تطبيق Docker، لاحظنا انخفاضاً في استهلاك الذاكرة بنسبة 40% في وضع السكون. السيرفر أصبح قادراً على التنفس واستيعاب الزيادة المتوقعة.
      </p>
      <div style="background: rgba(236, 201, 75, 0.1); border-right: 4px solid #D69E2E; padding: 15px; margin-top: 20px; color: #E2E8F0;">
        <strong>💡 نصيحتي للعميل:</strong><br>
        كنت صريحاً جداً معه: "تقنية Docker هي حل لرفع الكفاءة، لكنها ليست سحراً. لقد اشترينا الوقت والاستقرار لهذا الموسم، ولكن إذا استمر النمو وتجاوزنا حاجز الـ 25 ألف زائر، فالترقية (Server Upgrade) ستكون أمراً حتمياً لا مفر منه لاحقاً".
      </div>
    `
  },
  {
    id: 16,
    title: "التحول من WordPress التقليدي إلى Headless CMS: قصة نجاح",
    excerpt: "كيف تعاملنا مع صحيفة إخبارية بطيئة، وقرارنا بفصل المحتوى (Backend) عن العرض (Frontend) لنحصل على سرعة خيالية.",
    category: "architecture",
    categoryLabel: "هندسة البرمجيات 🏗️",
    date: "أرشيف 2021",
    image: "/images/headless-cms.webp",
    content: `
      <p>
        دعوني أكون صريحاً: <strong>أنا أحب WordPress</strong>. إنه النظام الذي يشغل 40% من الإنترنت، وهو أسهل أداة يمكن أن تعطيها لعميل ليدير موقعه بنفسه دون أن يتصل بك كل خمس دقائق.
      </p>
      <p>
        ولكن، لدي <strong>تحفظ كبير</strong> عليه عندما يتعلق الأمر بالمواقع الضخمة أو عالية الزيارات (High Traffic).
      </p>

      <h3>المشكلة: عندما يصبح "الفيل" ثقيلاً 🐘</h3>
      <p>
        جاءنا عميل يملك <strong>صحيفة إخبارية إلكترونية</strong>. المحررون يعشقون لوحة تحكم ووردبريس، ولن يقبلوا بتغييرها. لكن الموقع كان يعاني:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>البطء:</strong> تحميل الصفحة يستغرق 4-6 ثوانٍ بسبب كثرة الإضافات (Plugins) والاستعلامات الثقيلة.</li>
        <li><strong>الأمان:</strong> واجهة الموقع مربوطة بقاعدة البيانات مباشرة، مما يجعله هدفاً سهلاً للهجمات.</li>
      </ul>
      <p>
        هنا واجهت صراعاً: هل أجبر العميل على ترك ووردبريس لنحصل على السرعة؟ أم نبقى عليه ونضحي بالأداء؟
      </p>

      <h3>الحل الذكي: قطع الرأس (Headless Approach) 🔪</h3>
      <p>
        قررنا تطبيق مفهوم <strong>Headless CMS</strong>. الفكرة بسيطة وعبقرية:
        <br>
        <em>"لنأخذ من ووردبريس أفضل ما فيه (لوحة التحكم)، ونرمي أسوأ ما فيه (نظام العرض/القوالب)."</em>
      </p>
      <p>
        أبقينا ووردبريس كما هو في الخلفية (Backend) ليكتب المحررون مقالاتهم. لكننا بنينا واجهة أمامية (Frontend) جديدة تماماً ومفصولة باستخدام <strong>React/Next.js</strong>.
      </p>

      <h3>النتيجة: سرعة صاروخية 🚀</h3>
      <p>
        الموقع الجديد يتحدث مع ووردبريس عبر API فقط.
        <br>
        الزائر لا يتصل بقاعدة بيانات ووردبريس الثقيلة، بل يتصفح ملفات HTML خفيفة جداً تم توليدها مسبقاً.
      </p>
      <p>
        انخفض وقت التحميل إلى <strong>0.8 ثانية</strong>. المحررون سعداء لأنهم ما زالوا يستخدمون ووردبريس، والزوار سعداء بسرعة التصفح. لقد جمعنا الحسنيين.
      </p>
    `
  },

  // =================================================================
  // 😷 عام 2020: التحول الرقمي والتعليم عن بعد
  // =================================================================
  {
    id: 17,
    title: "التعليم عن بعد: دمج Zoom API في منصة تعليمية خلال 7 أيام",
    excerpt: "عندما أغلقت المدارس، طلب العميل حلاً فورياً. كيف بنينا قاعات افتراضية داخل الموقع لإنقاذ العام الدراسي.",
    category: "integrations",
    categoryLabel: "ربط الخدمات 🔌",
    date: "أرشيف 2020",
    image: "/images/video-stream.webp",
    content: `
      <p>
        أبريل 2020. العالم يتوقف، والمدارس والجامعات تغلق أبوابها.
        تلقيت اتصالاً هاتفياً من مالك مركز تدريب عريق في <strong>الرياض، المملكة العربية السعودية</strong>. صوت الرجل كان يحمل قلقاً مشروعاً: "لدينا 500 طالب، ودورات مدفوعة، وإذا لم نجد حلاً خلال أسبوع، سنضطر لإعادة الرسوم وإغلاق المركز".
      </p>

      <h3>التحدي: هل نبني نظام فيديو خاص؟ 🤔</h3>
      <p>
        المطلب كان واضحاً: "نريد قاعات افتراضية داخل موقعنا".
        تقنياً، بناء نظام بث مباشر (Streaming Server) من الصفر يحتاج لأشهر وسيرفرات مكلفة جداً. الوقت ليس في صالحنا.
      </p>

      <h3>خطوة الحكمة: استشارة أهل الاختصاص 📞</h3>
      <p>
        لأنني أؤمن بأن "من استشار ما خاب"، وقبل أن أتورط في حل تقني قد يفشل، قمت فوراً بالاتصال بزميل لي أثق برأيه جداً، وهو <strong>مختص في هندسة البنية التحتية (DevOps)</strong>.
      </p>
      <p>
        سألته: <em>"هل نغامر ببناء سيرفر WebRTC خاص لـ 500 طالب؟"</em>.
        كانت نصيحته ذهبية وحاسمة: <strong>"لا تغامر بوقت العميل. السيرفرات ستنهار تحت الضغط المفاجئ. اذهب لحل جاهز وادمج الـ API الخاص به."</strong>
      </p>

      <h3>نقطة الأمان: النسخة الاحتياطية أولاً 💾</h3>
      <p>
        اتفقنا على دمج <strong>Zoom API</strong>. ولكن، التعديل سيمس قاعدة بيانات الطلاب والدورات الحية. أي خطأ يعني كارثة.
        لذلك، قبل كتابة سطر كود واحد، قمت بأخذ <strong>نسخة احتياطية كاملة (Full Snapshot)</strong> للموقع وقاعدة البيانات، وحفظتها في سيرفر خارجي منفصل. هذه عادتي: لا ثقة في التكنولوجيا وقت الأزمات.
      </p>

      <h3>الحل: الفصول الافتراضية 🎓</h3>
      <p>
        قمنا ببرمجة نظام يولد "رابط Zoom" تلقائياً لكل حصة، ويخفيه خلف زر "دخول الفصل" في حساب الطالب.
        في غضون 6 أيام، كان النظام يعمل. الطلاب يدخلون الموقع، يضغطون الزر، ويجدون أنفسهم أمام المعلم.
      </p>
      <p>
        تم إنقاذ الموسم الدراسي، واكتشف العميل أن التعليم عن بعد فتح له باباً لقبول طلاب من خارج الرياض أيضاً!
      </p>
    `
  },

  // =================================================================
  // 📱 عام 2019: ثورة الويب (PWA & GraphQL)
  // =================================================================
  {
    id: 18,
    title: "عميل أراد تطبيقاً بميزانية موقع.. الحل كان PWA",
    excerpt: "كيف وفرنا 70% من ميزانية العميل وبنينا تطبيق ويب تقدمي (PWA) يعمل أوفلاين ويرسل إشعارات مثل التطبيقات الأصلية.",
    category: "mobile-web",
    categoryLabel: "ويب الموبايل 📱",
    date: "أرشيف 2019",
    image: "/images/mobile-pwa.webp",
    content: `
      <p>
        جاءني عميل متحمس جداً (رائد أعمال شاب) بفكرة ممتازة: <strong>منصة لطلب خدمات الصيانة المنزلية</strong>.
        وضع هاتفه أمامي وقال لي بوضوح: "أريد أيقونة هنا.. تطبيقاً يفتحه الناس لطلب سباك أو كهربائي بضغطة زر".
      </p>
      <p>
        عندما قمت بحساب التكلفة لبرمجة تطبيقين (Native iOS & Android) بالإضافة إلى لوحة التحكم والموقع التعريفي، تغيرت ملامح وجهه. الرقم كان يفوق ميزانيته التأسيسية بثلاثة أضعاف.
      </p>

      <h3>لحظة الصراحة: هل نلغي المشروع؟ 🛑</h3>
      <p>
        الخيار التقليدي كان أن أقول له: "ابدأ بموقع ويب عادي". لكن لمشروع خدمي كهذا، "الموقع العادي" يعني الفشل. العميل يحتاج شيئاً سريعاً يشعره أنه تطبيق.
      </p>
      <p>
        هنا اقترحت عليه حلاً يبدو سحرياً: <strong>Progressive Web App (PWA)</strong>.
      </p>

      <h3>الشكوك والمخاطرة 🤨</h3>
      <p>
        سألني بشك: <em>"هل تحاول بيعي موقعاً وتسميه تطبيقاً؟"</em>.
        كان تحدياً صعباً لإقناعه بأن التكنولوجيا تطورت، وأن المتصفح أصبح قادراً على العمل "أوفلاين" وإرسال إشعارات (Notifications) وتثبيت أيقونة على الشاشة الرئيسية تماماً كالتطبيقات الأصلية.
      </p>

      <h3>الحل التقني: Service Workers 🛠️</h3>
      <p>
        توكلنا على الله وبدأنا العمل. السر كان في ملف صغير يسمى <code>Service Worker</code>. هذا الملف يعمل في الخلفية، ويقوم بتخزين ملفات الموقع في ذاكرة الهاتف.
      </p>
      <p>
        النتيجة كانت مذهلة. المستخدم يدخل الموقع، يظهر له زر "تثبيت التطبيق"، وفجأة يصبح لديه تطبيق يعمل بسرعة خيالية حتى لو انقطع الإنترنت.
      </p>

      <h3>النتيجة</h3>
      <p>
        أطلقنا المشروع بـ <strong>30% فقط</strong> من التكلفة المتوقعة للتطبيقات الأصلية. وفرنا المال للتسويق، وحصلنا على منتج يعمل على كل الأجهزة (آيفون، أندرويد، ديسكتوب) بكود واحد فقط.
        كان درساً في أن "الهدف التجاري" أهم من "الغرور التقني".
      </p>
    `
  },
  {
    id: 19,
    title: "لماذا قتلنا الـ REST API واستخدمنا GraphQL في لوحة تحكم المتجر؟",
    excerpt: "مشكلة الـ Over-fetching كانت تبطئ تقارير المبيعات. GraphQL سمح لنا بطلب البيانات التي نحتاجها فقط.",
    category: "backend",
    categoryLabel: "الواجهة الخلفية ⚙️",
    date: "أرشيف 2019",
    image: "/images/graphql-nodes.webp",
    content: `
      <p>
        استلمت مؤخراً مشروعاً لتطوير لوحة تحكم خاصة بـ <strong>مكتب عقاري متوسط الحجم</strong>. النظام يعمل، والموظفون يستخدمونه يومياً، لكن الشكوى الدائمة كانت: "النظام يصبح بطيئاً جداً عندما نحاول فتح تفاصيل أي عقار".
      </p>
      <p>
        للأمانة، الشركة البرمجية التي بنت النظام سابقاً قامت بعمل نظيف جداً ومحترم وفق معايير وقتها. الكود مرتب، ومبني بـ REST API تقليدي. لا يوجد خطأ "برمجي"، ولكن هناك خطأ "معماري" بدأ يظهر مع تضخم البيانات.
      </p>

      <h3>المشكلة: تخمة البيانات (Over-fetching) 🍔</h3>
      <p>
        عندما يفتح الموظف قائمة العقارات، يحتاج فقط لرؤية (الصورة المصغرة، السعر، والمنطقة).
        لكن الـ API القديم كان كريماً أكثر من اللازم! كان يرسل مع كل عقار: تاريخ البناء، اسم المالك، رقم الهاتف، وحتى سجل الصيانة... لكل عقار في القائمة!
      </p>
      <p>
        هذا يعني تحميل ميغابايتات من البيانات لا يراها أحد، مما يخنق المتصفح.
      </p>

      <h3>لحظة الحيرة: الأمان أم الحداثة؟ 🤷‍♂️</h3>
      <p>
        كنت أمام خيارين، وكلاهما صعب:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>الخيار الآمن:</strong> إنشاء نقاط وصول جديدة (Endpoints) مخصصة، مثل <code>/api/lite-properties</code>. حل سريع ولكنه "ترقيعي" وسيزيد الفوضى مستقبلاً.</li>
        <li><strong>الخيار الجريء:</strong> الانتقال إلى <strong>GraphQL</strong>. تقنية حديثة، تعد بحل المشكلة جذرياً، لكنني لم أستخدمها في مشروع حقيقي من قبل.</li>
      </ul>
      <p>
        بصراحة، كنت أخشى المفاجآت. ماذا لو واجهت مشاكل في "الكاش" (Caching)؟ ماذا لو لم أستطع التعامل مع الأخطاء؟ الدراما التي تصاحب التقنيات الجديدة مخيفة دائماً.
      </p>

      <h3>القرار والنتيجة ✅</h3>
      <p>
        بعد استخارة وتفكير، قررت المخاطرة مع GraphQL. المنطق كان بسيطاً: "اطلب ما تحتاجه فقط".
        بدلاً من استلام 50 حقلاً، أصبحنا نرسل طلباً يقول: <code>{ property { price, image, area } }</code>.
      </p>
      <p>
        النتيجة كانت صادمة. حجم البيانات المنقولة انخفض بنسبة 90%. لوحة التحكم التي كانت تستغرق 4 ثوانٍ، أصبحت تفتح في لمح البصر. كانت مخاطرة تستحق العناء.
      </p>
    `
  },

  // =================================================================
  // 🛡️ عام 2018: الأمان وتحديث الأنظمة (GDPR Era)
  // =================================================================
  {
    id: 20,
    title: "رعب الـ GDPR: كيف قمنا بتأمين بيانات أكثر من 10,000 مستخدم؟",
    excerpt: "عميل أوروبي كان مهدداً بغرامات ضخمة قبل الموعد النهائي. رحلة تشفير البيانات وتعديل سياسات الكوكيز للامتثال للقوانين.",
    category: "security",
    categoryLabel: "أمن المعلومات 🔒",
    date: "أرشيف 2018",
    image: "/images/security-lock.webp",
    content: `
      <p>
        نحن اليوم في <strong>20 مايو</strong>، ولم يتبق سوى 5 أيام فقط على دخول قانون حماية البيانات الأوروبي الجديد (GDPR) حيز التنفيذ.
      </p>
      <p>
        تلقيت اتصالاً مساء أمس من أحد أصدقائي المقربين، يخبرني عن صديق له يملك <strong>شركة استثمار عقاري كويتية</strong>. الشركة في مأزق حقيقي؛ لديهم قاعدة بيانات تضم <strong>10,000 عميل</strong>، وجزء كبير منهم مستثمرون في عقارات في <strong>فرنسا</strong>.
      </p>
      <p>
        صاحب الشركة كان قلقاً جداً، وعرض عليّ استلام المشروع فوراً لتقديم استشارة تقنية عاجلة وإنقاذ الموقف قبل التاريخ المحدد، لأن الغرامات قد تكون كارثية.
      </p>

      <h3>المشكلة: البيانات "مكشوفة" 🔓</h3>
      <p>
        بعد استلام بيانات الدخول وفحص النظام، وجدت أن أرقام هواتف العملاء وصور جوازات سفرهم مخزنة بصيغة نصية عادية (Plain Text). سابقاً كان هذا مقبولاً، لكن ابتداءً من 25 مايو، هذا يعتبر مخالفة صريحة للقانون الأوروبي.
      </p>

      <h3>خطة العمل: تقسيم المهام 🤝</h3>
      <p>
        الوقت ضيق جداً. قمت فوراً بتقسيم المهام بيني وبين زميلي في العمل لنعمل بالتوازي:
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>مهمتي (Backend Security):</strong> بدأت العمل على تشفير كافة الحقول الحساسة في قاعدة البيانات (Encryption at Rest). حتى لو تم اختراق السيرفر، لن يرى المخترق سوى رموز مشفرة.</li>
        <li><strong>مهمة زميلي (Frontend Compliance):</strong> عمل على برمجة زر جديد يسمح للمستخدم بطلب "حذف بياناته بالكامل" (الحق في النسيان)، بالإضافة لتعديل نماذج التسجيل لتشمل موافقة صريحة.</li>
      </ul>

      <h3>الوضع الآن</h3>
      <p>
        نعمل حالياً بتركيز عالٍ لإنهاء الاختبارات النهائية. الضغط كبير، لكننا ملتزمون بحماية أصول العميل و<strong>سمعة شركته</strong> أمام المستثمرين الأجانب.
      </p>
    `
  },
  {
    id: 21,
    title: "تحديث الإرث: إعادة كتابة نظام حجوزات من jQuery إلى Vue.js",
    excerpt: "نظام قديم (Spaghetti Code) كان يصعب صيانته. قمنا بتحويله إلى Components حديثة مما سهل إضافة ميزات جديدة لاحقاً.",
    category: "refactoring",
    categoryLabel: "إعادة الهيكلة ♻️",
    date: "أرشيف 2018",
    image: "/images/refactoring-code.webp",
    content: `
      <div style="background: rgba(66, 153, 225, 0.1); border-right: 4px solid #3182CE; padding: 20px; margin-bottom: 30px; border-radius: 4px; color: #E2E8F0; font-style: italic;">
        <strong>📝 افتتاحية المدونة (يناير 2018):</strong><br>
        بعد 10 سنوات من العمل الصامت وتنفيذ المشاريع البرمجية خلف الكواليس، قررت اليوم أن أبدأ مرحلة جديدة: <strong>"التوثيق"</strong>. 
        لن أكتب عن الأساسيات، بل سأشارك التحديات المعقدة التي أواجهها يومياً مع العملاء والشركات، لتكون مرجعاً لي ولغيري. وهذه هي القصة الأولى...
      </div>

      <p>
        أكتب هذه السطور وأنا أشعر بمزيج من الإرهاق والانتصار. لقد مررنا بأسبوع عصيب جداً مع أحد عملائنا الكرام (وكالة سفريات ضخمة في دولة عربية شقيقة).
      </p>
      <p>
        المشكلة بدأت باتصال غاضب: "النظام بطيء، وموظفونا لا يستطيعون حجز التذاكر للعملاء في الوقت الفعلي!".
      </p>

      <h3>الواقع المرير: كود "السباغيتي" 🍝</h3>
      <p>
        عندما فتحت الكود المصدري للنظام، صُدمت. النظام مبني بتقنيات تعود لعام 2010. ملف <code>script.js</code> واحد يحتوي على أكثر من <strong>5000 سطر</strong> من أوامر jQuery المتداخلة!
      </p>
      <p>
        أي محاولة لإصلاح "زر الحجز" كانت تؤدي لتعطل "فلاتر البحث" في مكان آخر. كنا نسير في حقل ألغام.
      </p>

      <h3>الصراع: الترقيع أم البناء؟ ⚔️</h3>
      <p>
        اقترحت على العميل هدم النظام وبناءه من الصفر. كان رده حاسماً: <strong>"مستحيل! الموسم السياحي بدأ، لا نملك رفاهية الوقت. أريد حلاً الآن!"</strong>.
      </p>
      <p>
        كنت في مأزق. كيف أضيف ميزات حديثة (مثل معرفة المقاعد المتاحة لحظياً) على نظام ميت؟
      </p>

      <h3>الحل الهجين: Vue.js + Firebase 🔥</h3>
      <p>
        قررت القيام بمغامرة محسوبة. لن نعيد بناء الموقع بالكامل، بل سنقوم "بحقن" تقنيات حديثة في الأجزاء الميتة فقط.
      </p>
      <ul style="list-style: disc; padding-right: 20px; margin-bottom: 20px;">
        <li><strong>الواجهة:</strong> اخترت إطار عمل صاعد بقوة اسمه <strong>Vue.js</strong>. ميزته أنه يمكنني استخدامه في "جزء صغير" من الصفحة دون التأثير على باقي الموقع القديم.</li>
        <li><strong>البيانات اللحظية:</strong> لكي يرى الموظفون المقاعد المحجوزة فوراً دون تحديث الصفحة، قمت بربط قاعدة البيانات القديمة بـ <strong>Firebase Realtime Database</strong>.</li>
      </ul>

      <h3>النتيجة اليوم</h3>
      <p>
        أطلقنا التحديث فجر اليوم. لأول مرة، يرى موظف الحجز في "دبي" المقعد الذي حجزه زميله في "الرياض" في نفس الثانية، وبدون تعليق للنظام.
      </p>
      <p>
        العميل سعيد بالسرعة، وأنا سعيد لأنني بدأت أتخلص من كابوس jQuery تدريجياً.
      </p>
    `
  }
];