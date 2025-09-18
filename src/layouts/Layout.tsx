import React, { ReactNode, useRef } from 'react';
import logo from './logo.svg';
import type { Section } from '../components/scrollingpage';
import { Helmet } from "react-helmet-async";
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
            <Helmet>
                <title>Rekol.me</title>
                <meta
                name="ECHO by Rekol.me – Free AI Email Assistant | Never Miss a Follow-Up Again"
                content="ECHO is your free AI email assistant from Rekol.me. Forward emails to assist@rekol.me and get automatic reminders for client follow-ups, deadlines, and tasks—right when you need them."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Helmet>
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
