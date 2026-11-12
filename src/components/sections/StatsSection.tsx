"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StatsSection({ scrollYProgress, showOnly }: { scrollYProgress?: any, showOnly?: 'top' | 'bottom' }) {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const galleryImages = [
            { src: '/gallery/Foto Utama.webp', alt: 'Foto Utama' },
            { src: '/gallery/FotoSC1.webp', alt: 'Foto SC1' },
            { src: '/gallery/FotoSC2.webp', alt: 'Foto SC2' },
            { src: '/gallery/FotoSC3.webp', alt: 'Foto SC3' },
            { src: '/gallery/FotoSC4.webp', alt: 'Foto SC4' },
            { src: '/gallery/FotoSC5.webp', alt: 'Foto SC5' },
            { src: '/gallery/academicaffairsdivision1.webp', alt: 'Academic Affairs' },
            { src: '/gallery/computernetworkpracticumassistant2.webp', alt: 'Computer Network' },
            { src: '/gallery/dataentryassistant1.webp', alt: 'Data Entry' },
            { src: '/gallery/delegateaiesecfutureleaders20241.webp', alt: 'AIESEC' },
            { src: '/gallery/environmentalhygieneteam1.webp', alt: 'Hygiene Team 1' },
            { src: '/gallery/environmentalhygieneteam2.webp', alt: 'Hygiene Team 2' },
            { src: '/gallery/logisticsoperatorcampusexpo20242.webp', alt: 'Logistics' },
            { src: '/gallery/researchassistant1.webp', alt: 'Research Assistant 1' },
            { src: '/gallery/researchassistant2.webp', alt: 'Research Assistant 2' },
        ];
        // Shuffle images randomly
        const shuffledImages = [...galleryImages].sort(() => 0.5 - Math.random());
        setImages(shuffledImages);
        setLoading(false);
    }, []);

    if (loading || images.length === 0) return (
        <div className="h-[400px] w-full flex items-center justify-center bg-background">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
    );

    if (showOnly === 'bottom') return null;

    return (
        <section className="relative z-20 bg-background overflow-visible flex flex-col items-center transition-colors duration-500">
            {/* Header for the Gallery Section */}
            <div className="max-w-6xl mx-auto px-6 w-full pt-32 pb-16 text-center space-y-4">
                <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight"
                >
                    Moments & Highlights
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-muted-foreground/80 text-lg md:text-xl font-medium max-w-2xl mx-auto"
                >
                    A visual archive of hackathon victories, AI engineering labs, and collaborative milestones.
                </motion.p>
            </div>

            {/* Immersive Zoom Parallax Component */}
            <div className="w-full">
                <ZoomParallax images={images}>
                    <Link 
                        href="/gallery" 
                        className="group flex items-center gap-3 px-6 py-3.5 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl border border-border/10"
                    >
                        View Gallery
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </ZoomParallax>
            </div>
        </section>
    );
}
