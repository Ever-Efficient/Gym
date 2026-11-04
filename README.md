# 🏋️‍♂️ TGCPM Fitness Website

A modern, responsive, and high-performance gym and fitness website built with **React 19**, **Vite (Rolldown)**, and **Tailwind CSS 4**. Designed to provide a seamless user experience for fitness enthusiasts to explore training programs, membership packages, professional trainer profiles, fitness blogs, and contact details.

---

## ✨ Features

- **📱 Fully Responsive Design:** Clean, mobile-first design optimized across mobile devices, tablets, and desktops.
- **⚡ Modern Architecture & Performance:** Powered by React 19 and Vite with an optimized bundle size (~282 kB) and rapid build times (~700ms).
- **🎨 Sleek UI/UX:** Styled using modern Tailwind CSS 4 utility classes with custom gradients, smooth transitions, and hover effects.
- **🗺️ Client-Side Routing:** Dynamic navigation across all pages using **React Router DOM v7** with automatic scroll-to-top on route changes.
- **📦 Centralized Data Layer:** Complete separation of concerns with static content and configurations decoupled into dedicated data modules (`src/data/`).
- **🧩 Reusable Component Library:** Modular UI components including `PricingCard`, `PackageCard`, `ProgramCard`, `TrainerCard`, `BlogCard`, `Header`, `Navigation`, and `Footer`.
- **❄️ Smooth Visual Effects:** Persistent, ambient snowfall animation powered by `react-snowfall` configured globally for flicker-free page transitions.
- **📍 Interactive Contact & Location:** Integrated Google Maps embed, direct call/email/WhatsApp links, and gym operating schedule.

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Build Tool** | [Vite (Rolldown)](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/), PostCSS |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Visual Effects** | [React Snowfall](https://github.com/carlop/react-snowfall) |
| **Linting** | ESLint 9 |

---

## 📁 Project Structure

```text
Gym/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Media and photography
│   │   └── images/         # Gym, trainer, program, and gallery images
│   ├── components/         # Reusable UI components
│   │   ├── BlogCard.jsx    # Blog post card component
│   │   ├── FeatureCard.jsx # Feature card component
│   │   ├── Footer.jsx      # Footer with quick links, contacts, and socials
│   │   ├── Header.jsx      # Reusable hero banner component
│   │   ├── Navigation.jsx  # Responsive navigation bar with mobile menu
│   │   ├── PackageCard.jsx # Tiered membership card component
│   │   ├── PlanCard.jsx    # Standalone plan card component
│   │   ├── PricingCard.jsx # Featured pricing card component
│   │   ├── ProgramCard.jsx # Ladies & gents workout program card
│   │   ├── ScrollToTop.jsx # Route change scroll reset listener
│   │   ├── SnowEffect.jsx  # Multi-layered 3D snowfall effect
│   │   ├── TrainerCard.jsx # Trainer profile card with initials fallback
│   │   └── index.js        # Centralized component barrel exports
│   ├── data/               # Centralized data and configuration modules
│   │   ├── blogs.js        # Fitness blog sections and article items
│   │   ├── contact.js      # Direct contact channels, hours, and map URL
│   │   ├── features.js     # "Why Choose Us" feature points
│   │   ├── footer.js       # Social links and footer contact info
│   │   ├── gallery.js      # Facility gallery images
│   │   ├── navigation.js   # Navigation routes and menu links
│   │   ├── packages.js     # Membership plans and comparison matrix
│   │   ├── pricing.js      # Featured pricing tiers for the home page
│   │   ├── programs.js     # Ladies and gents training program offerings
│   │   ├── snowflakes.js   # 6-fold symmetrical ice crystal SVG vectors
│   │   └── trainers.js     # Trainer profiles and specialty categories
│   ├── pages/              # Route views
│   │   ├── Home.jsx        # Landing page with hero, pricing, and features
│   │   ├── About.jsx       # Vision, mission, gallery, and trainers
│   │   ├── Programs.jsx    # Gender-specific training programs
│   │   ├── Packages.jsx    # Membership plans and full feature comparison
│   │   ├── Trainers.jsx    # Trainer directory with category filtering
│   │   ├── Contact.jsx     # Contact form, direct links, map, and hours
│   │   └── Blog.jsx        # Curated workouts, nutrition, and transformations
│   ├── App.jsx             # App layout, global snowfall, and route config
│   ├── index.css           # Tailwind CSS imports and global styles
│   └── main.jsx            # Application root entry point
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── vercel.json             # Deployment rewrite rules for SPA routing
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/supunyasanthaofficial/Gym.git
   cd Gym
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173` to view the website.

---

## 📜 Available Scripts

- **`npm run dev`**: Launches Vite's fast HMR development server.
- **`npm run build`**: Builds and optimizes the app for production in the `dist/` directory.
- **`npm run preview`**: Locally previews the production build output.
- **`npm run lint`**: Runs ESLint across the codebase to ensure code quality.

---

## 🌐 Deployment

The application includes a `vercel.json` configuration for seamless deployment on [Vercel](https://vercel.com/) with SPA route rewriting:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Can also be deployed to [Netlify](https://www.netlify.com/), [GitHub Pages](https://pages.github.com/), or any static hosting service.

---

## 📄 License

This project is private and maintained for **TGCPM Fitness**. Designed & Developed in collaboration with **EVER EFFICIENT Business Management (Pvt) Ltd**.
