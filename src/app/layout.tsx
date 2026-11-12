import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Playfair_Display, Alex_Brush } from 'next/font/google';
import { getMessages, getLocale } from 'next-intl/server';
import { ThemeProvider, I18nProvider, SmoothScrollProvider } from '@/providers';

import '@/styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetbrains',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const signature = Alex_Brush({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-signature',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Kritagya Jaiswal | AI Engineer & Web Developer',
        template: '%s | Kritagya Jaiswal',
    },
    description: 'Portfolio of Kritagya Jaiswal — AI Engineer, Web Developer, and 4th-year student. Experience across 4 internships, full-time AI engineering, and winner of 4 hackathons.',
    keywords: ['Kritagya Jaiswal', 'AI Engineer', 'Web Developer', 'portfolio', 'machine learning', 'react', 'nextjs', 'full stack'],
    authors: [{ name: 'Kritagya Jaiswal' }],
    creator: 'Kritagya Jaiswal',
    metadataBase: new URL('https://kritagyajaiswal.dev'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://kritagyajaiswal.dev',
        title: 'Kritagya Jaiswal | AI Engineer & Web Developer',
        description: 'AI Engineer & Web Developer | 4th Year College Student | Full-time AI Engineer & 4x Hackathon Winner',
        siteName: 'Kritagya Jaiswal Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kritagya Jaiswal | AI Engineer & Web Developer',
        description: 'AI Engineer & Web Developer | 4th Year College Student | Full-time AI Engineer & 4x Hackathon Winner',
        creator: '@kritagyajaiswal',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/Arfazrll_light.svg', media: '(prefers-color-scheme: light)' },
            { url: '/Arfazrll_dark.svg', media: '(prefers-color-scheme: dark)' },
        ],
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
    ],
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
};

import { ThemeAwareClickSpark } from '@/components/ui/ThemeAwareClickSpark';
import { ConditionalNavigation } from '@/components/layout/ConditionalNavigation';
import { ArcPreloaderWrapper } from '@/components/layout/ArcPreloaderWrapper';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} ${signature.variable} font-sans relative`}>
                <ThemeProvider>
                    <I18nProvider locale={locale} messages={messages}>
                        <SmoothScrollProvider>
                            <ThemeAwareClickSpark>
                                <ArcPreloaderWrapper>
                                    <ConditionalNavigation>
                                        {children}
                                    </ConditionalNavigation>
                                </ArcPreloaderWrapper>
                            </ThemeAwareClickSpark>
                        </SmoothScrollProvider>
                    </I18nProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
