import React, { ReactNode, useRef } from 'react';
import logo from './logo.svg';
import type { Section } from '../components/scrollingpage';
import ScrollingPage from '../components/scrollingpage';
import NavbarLayout from './NavbarLayout';
import './styles/LayoutStyles.scss';
import Footer from './footer';
import '../styles/intro-animation.scss';

interface LayoutProps {
    sections: Section[];
    className?: string;
}

function Layout({ sections, className }: LayoutProps) {

    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const scrollToSection = (index: number) => {
        const element = sectionRefs.current[index];
        if (!element) return;

        const navHeight = 80; // adjust this to your fixed nav height
        const y = element.getBoundingClientRect().top + window.scrollY - navHeight;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };


    return (
        <div>
        <div id="intro"></div>
            <NavbarLayout onNavigate={scrollToSection}/>
        <div className={className} id="content">
            <ScrollingPage sections={sections} sectionRefs={sectionRefs}/>
            <Footer />
        </div>
        </div>
    );
}

export default Layout;
