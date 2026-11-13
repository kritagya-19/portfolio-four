'use client';

import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from "@/hooks/useIsMobile";

import { Sparkles, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import { LoadingScreen } from '@/components/layout';
import { TextPressure } from '@/components/ui/TextPressure';
import { portfolioData } from '@/data/portfolio';
import { cn } from "@/lib/utils";
import { SocialCorner } from '@/components/layout/SocialCorner';
import { DeferredMount } from '@/components/ui/DeferredMount';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Hyperspeed = dynamic(() => import('@/components/ui/Hyperspeed'), { ssr: false });
const { hyperspeedPresets } = require('@/components/ui/Hyperspeed');

const Scene3D = dynamic(() => import('@/components/three/Scene3D').then(mod => ({ default: mod.Scene3D })), {
    ssr: false,
    loading: () => null
});

import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import { HeroVisual } from "@/components/sections/HeroVisual";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import { usePreloadState } from "@/components/ui/arc-preloader-hero";


// ─── Helpers (Keeping Original Design) ───────────────────────────────────────

const MetricCTAHijack = () => {
    return (
        <>
            <StatsSection showOnly="top" />
            <section className="relative z-20 bg-background dark:bg-black">
                <div className="h-[10vh]" />
                <CTASection />
                <div className="h-20" />
            </section>
        </>
    );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function HomePage() {
    const { phase } = usePreloadState();
    const [isLoading, setIsLoading] = useState(true);
    const [isInitialLoadingExit, setIsInitialLoadingExit] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !('ResizeObserver' in window)) return;
        const refreshLayout = () => {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
        };
        const resizeObserver = new ResizeObserver(() => { refreshLayout(); });
        resizeObserver.observe(document.body);
        window.addEventListener('load', refreshLayout);
        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('load', refreshLayout);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    // Animate content when LoadingScreen exits (every reload/visit)
    // or when route preloader completes
    const isReadyToAnimate = isLoading ? isInitialLoadingExit : (phase === "reveal" || phase === "done");

    useEffect(() => {
        if (isReadyToAnimate) {
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1500); // Once, after transition is likely done
            return () => clearTimeout(timer);
        }
    }, [isReadyToAnimate]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setTimeout(() => { ScrollTrigger.refresh(); }, 100);
    };

    const handleExitStart = () => {
        setIsInitialLoadingExit(true);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} onExitStart={handleExitStart} duration={2500} />}
            <motion.main
                initial={{ opacity: 0, y: 40 }}
                animate={isReadyToAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1], // Expo out for snappy yet smooth feel
                    opacity: { duration: 0.8 }
                }}
                className="relative overflow-x-clip will-change-transform will-change-opacity"
            >
                <HeroVisual isExiting={isReadyToAnimate} />

                <DeferredMount>
                    <ExpertiseSection />
                    <AboutSection />
                    <MetricCTAHijack />
                    <SocialCorner className="fixed bottom-12 right-12 z-[30]" />
                </DeferredMount>
            </motion.main>
        </>
    );
}
