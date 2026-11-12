<div align="center">

# Kritagya Jaiswal — Technical Portfolio

### AI Engineer & Web Developer | 4th-Year B.Tech CSE Student (India) | 4x Hackathon Winner

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-0.170-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[![Instagram](https://img.shields.io/badge/Instagram-@boostandelevate__-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/boostandelevate_)
[![GitHub](https://img.shields.io/badge/GitHub-boostandelevate__-181717?style=for-the-badge&logo=github)](https://instagram.com/boostandelevate_)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://instagram.com/boostandelevate_)

---

![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## About Me

I am **Kritagya Jaiswal**, a 4th-year B.Tech Computer Science & Engineering student from **India**, working full-time as an **AI Engineer** and **Web Developer**.

- **Current Role:** AI Engineer (Full-Time)
- **Experience:** Completed **4 Industry Internships** across AI Research, Machine Learning, Full-Stack Web Development, and Software Engineering
- **Achievements:** **4x Hackathon Winner** across Agentic AI, Computer Vision, RAG Systems, and Full-Stack Development
- **Location:** India (`IST`)
- **Connect:** [@boostandelevate_](https://instagram.com/boostandelevate_)

---

## Executive Summary

A production-grade, highly interactive portfolio application engineered to showcase technical expertise across Artificial Intelligence, Machine Learning, and Modern Full-Stack Web Development. Powered by WebGL 3D physics simulations, responsive scroll choreography, and real-time developer telemetry.

---

## System Architecture & Technologies

### Core Framework
- **Next.js 16 (App Router):** Server-side rendering (SSR), static optimization, and modular route architecture.
- **React 19 & TypeScript:** Strict type safety and reactive UI across custom components.

### 3D Graphics & Physics Simulation
- **Three.js & React Three Fiber (R3F):** Powers the interactive 3D hero lanyard and WebGL scenes.
- **Rapier Physics:** Real-time physics simulation for the interactive 3D ID badge.
- **Custom GLSL Shaders:** Bespoke background effects including Hyperspeed and GLSL Hills.

### UI/UX Choreography
- **Framer Motion & GSAP:** Scroll-triggered timelines, micro-interactions, and fluid page transitions.
- **Tailwind CSS & Shadcn UI:** Utility-first design system with Radix UI primitives and light/dark themes.
- **Lenis:** Smooth scrolling dynamics.

### System Integrations & APIs
- **GitHub & WakaTime Telemetry:** Consumes GitHub and WakaTime APIs for real-time engineering metrics.

---

## Project Structure

```text
Portfolio/
├── src/
│   ├── app/                          # Next.js 16 App Router Entry Points
│   │   ├── api/                      # Backend API Routes (GitHub, WakaTime, Contact)
│   │   ├── experience/               # Career Timeline, Internships & Education (India)
│   │   ├── skills/                   # Technical Skill Matrix & Tools
│   │   ├── gallery/                  # Visual Archive & Film Grid
│   │   └── contact/                  # Contact Form & Direct Links
│   ├── components/
│   │   ├── three/                    # WebGL & R3F Components (3D Lanyard, Scene3D)
│   │   ├── sections/                 # Page Sections & Interactive Layouts
│   │   └── ui/                       # Custom Animated & Shadcn Primitives
│   ├── data/
│   │   └── portfolio.ts              # Centralized Portfolio Data Store
│   ├── hooks/                        # Custom React Hooks (Performance, Mobile)
│   └── styles/                       # Global CSS & Tailwind Directives
├── public/                           # Static Assets (Images, 3D Models)
├── next.config.ts                    # Next.js Optimization Configuration
└── tailwind.config.ts                # Design System Configurations
```

---

## Key Features

### 1. Interactive 3D Environments
Hardware-accelerated 3D identification badge using `@react-three/drei`, `@react-three/fiber`, and Rapier physics that responds to cursor drag and window constraints in real time.

### 2. Experience & Career Archive
Interactive timeline and category explorer detailing full-time AI Engineering work, 4 completed internships across Bengaluru, Hyderabad, Gurugram, and Pune, 4 hackathon victories, and B.Tech CSE education in India.

### 3. Real-Time Telemetry
Developer dashboards displaying activity heatmaps, language breakdowns, and coding metrics.

### 4. Performance Diagnostics
Real-time `usePerformance` hook that adapts intensive WebGL shaders and complex animations on low-power or mobile devices to keep framerates smooth.

---

## Local Development Setup

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory as needed:

   ```env
   NEXT_PUBLIC_GITHUB_USERNAME=your_username
   GITHUB_TOKEN=your_personal_access_token
   WAKATIME_API_KEY=your_wakatime_key
   ```

3. **Initialize Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to `http://localhost:3000` to view the application.

### Production Build
```bash
npm run build
npm start
```

---

## License

This project is licensed under the [MIT License](LICENSE).

<div align="center">
  <p>Engineered by Kritagya Jaiswal</p>
</div>
