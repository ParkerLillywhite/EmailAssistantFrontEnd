import React, { ReactNode, useRef } from 'react';
import logo from './logo.svg';
import type { Section } from '../components/scrollingpage';
import ScrollingPage from '../components/scrollingpage';
import NavbarLayout from './NavbarLayout';
import './styles/LayoutStyles.scss';

interface LayoutProps {
    sections: Section[];
    className?: string;
}

function Layout({ sections, className }: LayoutProps) {

    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={className}>
            <NavbarLayout onNavigate={scrollToSection}/>
            <ScrollingPage sections={sections} sectionRefs={sectionRefs}/>
        </div>
    );
}

export default Layout;
