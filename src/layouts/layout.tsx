import React, { ReactNode, useRef } from 'react';
import logo from './logo.svg';
import type { Section } from '../components/scrollingpage';
import ScrollingPage from '../components/scrollingpage';
import NavbarLayout from './NavbarLayout';

interface LayoutProps {
    sections: Section[];
}

function Layout({ sections }: LayoutProps) {

    const sectionRefs = useRef<HTMLDivElement[]>([]);

    const scrollToSection = (index: number) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <NavbarLayout onNavigate={scrollToSection}/>
            <ScrollingPage sections={sections} sectionRefs={sectionRefs}/>
        </div>
    );
}

export default Layout;
