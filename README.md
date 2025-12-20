# Hacked Aging 🧬⚡

**Science-Backed Longevity Platform for High-Performance 40+**  
Professional health optimization platform that translates Medicine 3.0 breakthroughs into daily protocols for biological age reversal and functional strength.

## 🌟 Features

### 🎨 **Professional UX/UI Design**
- **Modern Design System** with Tailwind CSS v4 & Shadcn/ui components
- **Responsive Layout** optimized for all devices (mobile-first approach)
- **Custom Animations** (slide-in, fade-in effects with staggered delays)
- **Professional Micro-interactions** (hover effects, scale transforms)
- **Enhanced Navigation** with mobile hamburger menu
- **Optimized Typography** with improved hierarchy and contrast

### 🖼️ **Rich Media Integration**
- **Pexels API Integration** (200 requests/hour rate limit)
- **High-Quality Health Images** curated for longevity & fitness
- **Automated Image Management** with download script
- **Dynamic Image Sizing** and optimization
- **Fallback Placeholders** for development

### 🧠 **Content Architecture**
- **Science-Based Copy** focused on Medicine 3.0 philosophy
- **4 Longevity Pillars** (Resistance Training, Metabolic Health, Hormonal Balance, Advanced Recovery)
- **Data-Driven Biology** with wearables integration (Oura, WHOOP)
- **YouTube Community** integration (25,000+ health optimizers)
- **SEO-Optimized** structure for maximum visibility

## 🏗️ Tech Stack

- **Framework:** Next.js 16.1.0 with App Router
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS v4 with PostCSS
- **Components:** Shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **Animations:** tw-animate-css + custom CSS keyframes
- **Image API:** Pexels (200 req/hr) + Lorem Picsum fallback

## 📁 Project Structure

```
Hacked-Aging/
├── 📄 download_images.sh      # Automated image download script
├── 📸 public/images/          # Optimized image assets
│   ├── pexels-*.jpg          # High-quality Pexels API images
│   └── *.jpg                 # Fallback placeholder images
├── 📂 src/
│   ├── 🎨 app/
│   │   ├── about/             # About page with mission & methodology  
│   │   ├── tools/             # Recovery Lab (affiliate hub)
│   │   ├── globals.css        # Custom animations & theme variables
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx          # Enhanced homepage layout
│   ├── 🧩 components/
│   │   ├── layout/            # Responsive navbar & footer
│   │   │   ├── navbar.tsx     # Mobile-first navigation
│   │   │   └── footer.tsx     # Site footer component
│   │   ├── sections/         # Homepage sections
│   │   │   ├── hero-section.tsx          # Animated hero with Pexels images
│   │   │   ├── medicine-3-approach.tsx  # Data-driven biology section
│   │   │   ├── four-pillars.tsx          # Longevity pillars showcase
│   │   │   ├── recovery-lab.tsx          # Tools & resources section
│   │   │   ├── latest-from-channel.tsx    # YouTube integration
│   │   │   └── enhanced-trust-signals.tsx # Social proof elements
│   │   └── ui/               # Shadcn/ui component library
│   └── 🔧 lib/               # Utility functions & helpers
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20.9.0 or higher
- npm or yarn package manager

### 1. **Clone the repository:**
```bash
git clone https://github.com/andresmoralesc1/Hacked-Aging.git
cd Hacked-Aging
```

### 2. **Install dependencies:**
```bash
npm install
```

### 3. **Download high-quality images:**
```bash
# Download curated health images from Pexels API
./download_images.sh

# Or manually download specific images
curl -s "https://api.pexels.com/v1/search?query=fitness&orientation=landscape" \
  -H "Authorization: 0hhlMBENb78hKw8qUvr0mkdFSkGXXMyoyKmrG9ighYPLlIvqdr9Ehiaa"
```

### 4. **Run the development server:**
```bash
npm run dev
```

### 5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000) and experience the enhanced design!

## 📱 Enhanced Sections

### 🏠 **Homepage (Redesigned)**
- **Animated Hero Section** with Pexels health imagery
- **Data-Driven Biology** explaining Medicine 3.0 philosophy
- **4 Longevity Pillars** with interactive showcases
- **Recovery Lab** for tools & optimization resources
- **YouTube Integration** featuring 25,000+ community
- **Enhanced Trust Signals** with social proof

### 📖 **About Page**
- **Mission & Methodology** with scientific backing
- **Medicine 3.0 Approach** explanation
- **Community Statistics** and transparency policy
- **Professional Credentials** and expertise

### 🔬 **Recovery Lab (Tools Hub)**
- **Curated Health Tools** with detailed reviews
- **Affiliate Recommendations** with ethical disclosure
- **Performance Metrics** and tracking integration
- **Transparent Ratings** from real user testing

## 🎨 Customization Guide

### **Visual Design**
- **Colors & Theme:** Modify CSS variables in `globals.css`
- **Animations:** Update keyframes and utility classes
- **Typography:** Adjust font sizes and line heights
- **Responsive Breakpoints:** Tailwind config for mobile/desktop

### **Image Management**
- **Pexels API:** Update search queries in `download_images.sh`
- **API Keys:** Configure in `~/.claude/CLAUDE.md`
- **Image Optimization:** Adjust sizes and quality settings
- **Fallback System:** Lorem Picsum placeholders for development

### **Content Updates**
- **Hero Copy:** Professional messaging in `hero-section.tsx`
- **Section Content:** Update component copy and descriptions
- **Affiliate Links:** Product recommendations in respective sections
- **YouTube Integration:** Channel ID and content settings

## 🚀 Deployment

### **Vercel (Recommended)**
1. **Push to GitHub:** `git push origin main`
2. **Connect:** [Vercel](https://vercel.com) → Import Repository
3. **Deploy:** Automatic deployment with Vercel Token

### **Manual Build**
```bash
# Production build
npm run build

# Start production server  
npm run start

# Environment variables needed:
# NEXT_PUBLIC_VERCEL_TOKEN
# NEXT_PUBLIC_UNSPLASH_API_KEY
# NEXT_PUBLIC_PEXELS_API_KEY
```

## 🔮 Upcoming Features

### **Phase 1: Enhanced Content**
- [ ] Blog system with Markdown support
- [ ] YouTube API connectivity for automatic video pulls
- [ ] Personalized user dashboards

### **Phase 2: Automation**
- [ ] n8n workflow automation
- [ ] Email newsletter integration
- [ ] Social media auto-posting

### **Phase 3: Monetization**
- [ ] Affiliate link tracking system
- [ ] Premium subscription tiers
- [ ] Analytics dashboard integration

### **Phase 4: Advanced Features**
- [ ] AI-powered health recommendations
- [ ] Wearables integration (Oura, WHOOP)
- [ ] Telehealth consultation booking

## 🤝 Contributing

### **Development Workflow**
1. **Fork** the repository
2. **Create feature branch:** `git checkout -b feature/amazing-feature`
3. **Commit with emoji:** `git commit -m '✨ Add amazing feature'`
4. **Push:** `git push origin feature/amazing-feature`
5. **Open Pull Request** with detailed description

### **Code Standards**
- **TypeScript:** Strict mode enabled
- **ESLint:** Follow configured rules
- **Component Structure:** Consistent with existing patterns
- **Responsive Design:** Mobile-first approach
- **Performance:** Optimized images and animations

### **Image Guidelines**
- **High-Quality Only:** Minimum 800px width
- **Relevant Content:** Health, fitness, longevity focused
- **Optimized:** Compressed for web performance
- **Attribution:** Pexels licensing compliance

## 📄 License

This project is **open source** and available under [MIT License](LICENSE).

## 🙏 Acknowledgments & Credits

### **Core Technologies**
- **[Next.js](https://nextjs.org/)** - React framework with App Router
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Component library with Radix UI
- **[Lucide](https://lucide.dev/)** - Beautiful icon library

### **Design Resources**
- **[Pexels API](https://www.pexels.com/api/)** - High-quality stock images
- **[Lorem Picsum](https://picsum.photos/)** - Fallback image service
- **[tw-animate-css](https://github.com/crswll/tw-animate-css)** - Tailwind animations

### **Inspiration**
- **Medicine 3.0 Philosophy** - Peter Attia, MD
- **Longevity Science** - Latest research and protocols
- **Health Optimization Community** - 25,000+ members

---

## 🔗 Quick Links

- **🌐 Live Demo:** [Hacked Aging Live](https://hacked-aging.vercel.app)
- **📧 Contact:** For collaborations and partnerships
- **📊 Analytics:** Track performance and user engagement
- **🎯 Roadmap:** View upcoming features and releases

---

**Hacked Aging** 🧬⚡ *Science-Backed Longevity for High-Performance 40+*
