# 🧠 محرّك الذكاء — Intelligence Engine

منصّة تقييم تفاعلية للمعززات التسعة للنجاح، مستوحاة من منهجية الأستاذ محمد النحيت.
بناء وتطوير وتصميم: م. عادل الزهراني.

---

## 📋 المتطلّبات

- **Node.js 20+** (تحقّق بالأمر `node -v`)
- حساب **Netlify** (مجاني — [netlify.com](https://netlify.com))
- مفتاح **Anthropic API** ([console.anthropic.com](https://console.anthropic.com))
- حساب **GitHub/GitLab/Bitbucket** (للنشر التلقائي — اختياري)

---

## 🚀 خطوات النشر على Netlify

### الطريقة الأولى: عبر Git (مُوصى بها — نشر تلقائي)

#### ١. ارفع المشروع إلى GitHub

```bash
cd /path/to/this-folder

git init
git add .
git commit -m "Initial commit"
git branch -M main

# على GitHub: أنشئ repository جديد فارغ، ثم:
git remote add origin https://github.com/USERNAME/intelligence-engine.git
git push -u origin main
```

#### ٢. اربط Netlify بالـ Repository

1. ادخل على [app.netlify.com](https://app.netlify.com) وسجّل دخول
2. اضغط **Add new site** → **Import an existing project**
3. اختر **GitHub** ثم اختر الـrepository
4. الإعدادات (Netlify ستقرؤها تلقائياً من `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Functions directory:** `netlify/functions`

#### ٣. أضف مفتاح Anthropic كمتغيّر بيئة 🔑

**هذه الخطوة مهمة جداً — بدونها لن يعمل الذكاء الاصطناعي.**

1. في صفحة الموقع داخل Netlify: **Site settings** → **Environment variables**
2. اضغط **Add a variable**
3. الاسم: `ANTHROPIC_API_KEY`
4. القيمة: مفتاحك (يبدأ بـ `sk-ant-api03-...`)
5. **Scopes:** اختر "Functions" فقط (مهم للأمان)
6. احفظ

#### ٤. أعد النشر

- ارجع لـ **Deploys** → **Trigger deploy** → **Deploy site**
- بعد ١-٢ دقيقة سيكون الموقع جاهزاً على رابط مثل `https://your-site.netlify.app`

---

### الطريقة الثانية: نشر مباشر بدون Git (سريع للتجربة)

#### ١. ابنِ المشروع محلياً

```bash
cd /path/to/this-folder
npm install
npm run build
```

سيتولّد مجلد `dist/` يحوي الموقع جاهزاً.

#### ٢. اسحب وأفلت في Netlify

1. ادخل على [app.netlify.com](https://app.netlify.com)
2. اسحب مجلد `dist/` إلى منطقة "Drag & drop"
3. **مهم:** Functions لن تُرفع بهذه الطريقة — استخدم Netlify CLI بدلاً:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

ثم أضف متغيّر `ANTHROPIC_API_KEY` كما في الخطوة ٣ أعلاه.

---

## 💻 تشغيل محلي للتطوير

```bash
# ١. ثبّت الاعتماديات
npm install

# ٢. أنشئ ملف .env
cp .env.example .env
# عدّل القيمة وضع مفتاحك

# ٣. ثبّت Netlify CLI لتشغيل Functions محلياً
npm install -g netlify-cli

# ٤. شغّل dev server (يشغّل React + Functions معاً)
netlify dev
```

سيفتح الموقع على `http://localhost:8888`. أي تعديل في `src/App.jsx` ينعكس فوراً.

---

## 📁 بنية المشروع

```
.
├── index.html              # نقطة الدخول HTML (RTL + خط Tajawal)
├── package.json            # الاعتماديات
├── vite.config.js          # إعدادات Vite
├── tailwind.config.js      # إعدادات Tailwind
├── postcss.config.js       # إعدادات PostCSS
├── netlify.toml            # إعدادات Netlify
├── .env.example            # نموذج للمتغيّرات
├── src/
│   ├── main.jsx            # نقطة الدخول لـ React
│   ├── App.jsx             # التطبيق الكامل (٢٣٠٠+ سطر)
│   └── index.css           # Tailwind + إعدادات CSS
└── netlify/
    └── functions/
        └── claude.js       # Proxy آمن لـ Claude API
```

---

## 🔐 الأمان

- **مفتاح API لا يظهر أبداً في المتصفح** — كل الطلبات تمرّ عبر Netlify Function سيرفر-سايد
- المتغيّر `ANTHROPIC_API_KEY` مخفي عن الـclient bundle بالكامل
- الـ Function تتحقّق من الـmethod (POST فقط) ومن صحة البيانات

> ⚠️ **مهم:** لا ترفع ملف `.env` على Git أبداً. الـ`.gitignore` يحميك من ذلك.

---

## 🌐 النطاق المخصّص (اختياري)

1. في Netlify: **Domain management** → **Add custom domain**
2. اشترِ نطاقاً (أو اربط نطاقاً موجوداً) — مثلاً `intelligence-engine.sa`
3. Netlify يُصدر شهادة SSL مجانية تلقائياً

---

## 💰 التكاليف المتوقّعة

- **Netlify:** مجاني للمشاريع الصغيرة (100 GB bandwidth شهرياً + 125k function invocations)
- **Anthropic API:** الدفع حسب الاستخدام — كل تقييم/خطة يكلّف تقريباً $0.01-$0.05
- **النطاق:** ~$10-15 سنوياً (اختياري)

---

## 🆘 مشاكل شائعة

| المشكلة | الحل |
|---|---|
| `Build failed` | تأكّد من Node 20+ في إعدادات Netlify |
| `AI calls fail` | تحقّق من إضافة `ANTHROPIC_API_KEY` في Environment variables |
| `404 on refresh` | تأكّد من وجود قاعدة الـredirect في `netlify.toml` |
| `Functions timeout` | الـ free plan يحدّ بـ10 ثوانٍ — أكثر التحاليل أقل من ذلك |

---

## 📜 الترخيص والأسناد

- **الفكرة والمحتوى المعرفي:** الأستاذ محمد النحيت
- **التصميم والتطوير:** م. عادل الزهراني (@AdelAlzahraniSA)
- **التقنية:** React + Vite + Tailwind + Recharts + Anthropic Claude
