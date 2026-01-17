# Netflix Redesign - FUTURE_FS_03

A modern Netflix-inspired streaming platform redesign built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Firebase**. Features a cinematic UI with trending carousels, smart discovery, subscription plans, and a functional checkout system.

## 🎬 Live Demo

**Deployed on Vercel**: [future-fs-03.vercel.app]([https://future-fs-03.vercel.app](https://future-fs-03-indol.vercel.app))

---

## ✨ Features

### Core Pages & Sections
- **Home Page**: Hero section with CTA buttons, trending carousel, categories grid, FAQ, and subscription plans
- **Movies Page**: Grid view of all trending movies with hover effects
- **Checkout Page**: Dynamic plan selection with payment form UI
- **Plans Page**: Dedicated page showing all subscription tiers

### Key Functionality
- 🎯 **Smart Navigation**: Intelligent routing between pages with smooth scrolling
- 🎨 **Responsive Design**: Mobile-first approach with Tailwind CSS
- 🎭 **Hover Animations**: Smooth scale effects on movie posters and plan cards
- 📱 **Mobile Optimized**: Fully responsive layout for all screen sizes
- 🔥 **Firebase Integration**: Real-time data from Firestore
- 💳 **Subscription Plans**: Three-tier pricing system with plan details

### Navigation
- Logo & Name → Navigate to home or scroll to top
- Home Link → Scroll to top on home page, navigate to home from other pages
- Plans Link → Scroll to plans section on home, navigate to plans from other pages
- Join Now Button → Smart navigation to plans section
- View Plans Button → Smart navigation to plans section
- Start Watching Button → Navigate to movies page

---

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Hosting**: Vercel
- **Image Optimization**: Next.js Image Component

---

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Firebase project with Firestore database
- GitHub account (for pushing code)
- Vercel account (for deployment)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/vatsavayilikhitha/FUTURE_FS_03.git
cd FUTURE_FS_03/frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBVEYF_h1kI-j2DX1_j8dt6pJ57MqdpgMg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=future-fs-03.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=future-fs-03
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=future-fs-03.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=595192495091
NEXT_PUBLIC_FIREBASE_APP_ID=1:595192495091:web:203e8706fbff18aefab086
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-4HFG60YRKK
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 📁 Project Structure

```
FUTURE_FS_03/
├── frontend/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Navbar
│   │   ├── page.tsx            # Home page
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   ├── globals.css
│   │   ├── checkout/
│   │   │   └── [planId]/
│   │   │       └── page.tsx    # Checkout page (dynamic route)
│   │   ├── movies/
│   │   │   └── page.tsx        # Movies grid page
│   │   └── plans/
│   │       └── page.tsx        # Plans listing page
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── TrendingRow.tsx      # Trending movies carousel
│   │   ├── CategoriesGrid.tsx   # Categories section
│   │   ├── PlansSection.tsx     # Subscription plans
│   │   ├── FaqSection.tsx       # FAQ accordion
│   │   └── Footer.tsx           # Footer
│   ├── lib/
│   │   ├── firebase.ts          # Firebase config
│   │   ├── firestore.ts         # Firestore queries
│   │   └── site.ts              # Site utilities
│   ├── public/
│   │   ├── brand/               # Brand assets
│   │   └── screenshots/         # Demo screenshots
│   ├── .env.local               # Environment variables
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── package.json
├── docs/                        # Documentation
└── backend/                     # Backend (if any)
```

---

## 📄 Environment Variables

All Firebase configuration is stored in `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Project ID |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Auth Domain |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage Bucket |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Messaging ID |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | App ID |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Google Analytics ID |

---

## 🔄 Git Workflow

### Initial Setup (Already Done)
```bash
git init
git add .
git commit -m "Initial commit: Netflix redesign"
git remote add origin https://github.com/vatsavayilikhitha/FUTURE_FS_03.git
git branch -M main
git push -u origin main
```

### Making Updates
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically deploy on every push to `main`.

---

## 🚀 Deployment

### On Vercel (Automatic)
Every push to the `main` branch on GitHub will automatically trigger a deployment on Vercel.

**Manual Deployment:**
```bash
vercel
```

**View Deployment Logs:**
- Visit your [Vercel Dashboard](https://vercel.com/dashboard)
- Select `future-fs-03` project
- View deployments and logs

---

## 📱 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, trending, categories, plans |
| Movies | `/movies` | Grid view of all trending movies |
| Checkout | `/checkout/[planId]` | Dynamic checkout page for selected plan |
| Plans | `/plans` | Dedicated plans listing page |

---

## 🎨 UI Components

### Key Components
- **Navbar**: Sticky header with smart navigation
- **Hero**: Large banner with CTAs
- **TrendingRow**: Horizontal scrolling carousel with hover effects
- **CategoriesGrid**: Interactive category cards
- **PlansSection**: Subscription tiers with features
- **FaqSection**: Accordion-style FAQ
- **Footer**: Site footer

### Design System
- **Primary Color**: Defined via CSS variables (`--primary`)
- **Accent Color**: For highlights (`--accent`)
- **Responsive Breakpoints**: sm, md, lg (Tailwind default)

---

## 🔐 Firebase Setup

### Firestore Collections Required:
1. **movies** - Movie documents with:
   - `title` (string)
   - `genre` (string)
   - `posterUrl` (string)
   - `trending` (boolean)
   - `createdAt` (timestamp)

2. **categories** - Category documents with:
   - `name` (string)
   - `countText` (string)
   - `order` (number)

3. **plans** - Plan documents with:
   - `name` (string)
   - `price` (string)
   - `desc` (string)
   - `highlight` (boolean)
   - `features` (array)
   - `order` (number)

---

## 🐛 Troubleshooting

### "Plan not found" on Checkout
- Verify plan IDs exist in Firestore
- Check Firebase permissions allow reads
- Verify document structure matches expected type

### Navigation not working on other pages
- Ensure Navbar component is included in layout
- Check that section IDs match in anchor links
- Browser console may show helpful errors

### Build fails on Vercel
- Verify all environment variables are set in Vercel dashboard
- Check that TypeScript has no errors: `npm run build`
- Review build logs in Vercel dashboard

---

## 📈 Performance Optimizations

- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ Optimized font loading
- ✅ CSS minification with Tailwind
- ✅ Server-side data fetching where possible

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "Add feature description"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👤 Author

**Likitha** (vatsavayilikhitha@gmail.com)

GitHub: [vatsavayilikhitha](https://github.com/vatsavayilikhitha)

---

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🔗 Links

- **Live Site**: [https://future-fs-03.vercel.app](https://future-fs-03-indol.vercel.app)
- **GitHub Repository**: https://github.com/vatsavayilikhitha/FUTURE_FS_03
- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/vatsavayi-likhithas-projects/future-fs-03)

---

**Last Updated**: January 17, 2026
