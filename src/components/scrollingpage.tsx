import React, {ReactNode, useEffect, useRef} from 'react';
import { ReactComponent as SVG } from '../assets/right-background.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/scrollingpage.scss';

interface Section {
    leftText?: string;
    leftSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
    leftSVGAlt?: string;
    leftTextBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    leftTextBackgroundAlt?: string
    leftSVGBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    leftSVGBackgroundAlt?: string;
    isLeftTextFirst: Boolean;

    mainText?: string;
    mainSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
    mainSVGAlt?: string;
    mainTextBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    mainTextBackgroundAlt?: string;
    mainSVGBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    mainSVGBackgroundAlt?: string;
    isMainTextFirst: Boolean;

    rightText?: string;
    rightSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
    rightSVGAlt?: string;
    rightTextBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    rightTextBackgroundAlt?: string;
    rightSVGBackground?: React.FC<React.SVGProps<SVGSVGElement>>;
    rightSVGBackgroundAlt?: string;
    isRightTextFirst: Boolean;

    svg?: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface LayoutProps {
    sections: Section[]
    children?: ReactNode
    speed?: number
}

const renderSVGBlock = (
    Component?: React.FC<React.SVGProps<SVGSVGElement>>,
    className?: string
  ) => {
    return Component ? (
      <div className={className}><Component /></div>
    ) : null;
};

const ScrollingPage: React.FC<LayoutProps> = ({
    sections,
    children,
    
}) => {

    const refs = useRef<HTMLDivElement[][]>([]); 

    const speed = 0.3;

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          refs.current.forEach((sectionRefs) => {
            sectionRefs.forEach((el) => {
              if (el) {
                el.style.transform = `translateY(${-scrollY * speed}px)`;
              }
            });
          });
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
  return (
    <div className="container">
        { sections.map((section, index) => (

        <div className="row main-content">
            <svg />
            {section.isLeftTextFirst ? (
                <>
                    {section.leftText && (
                    <div className="col-sm left-section-text-first-text"> 
                        {section.leftText && <div className="left-text">{section.leftText}</div>}
                        {section.leftTextBackground && <div className="left-text-background"     
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.leftTextBackground />
                        </div>}
                    </div>
                    )}
                    {section.leftSVG && (
                    <div className="col-sm left-section-text-first-svg">
                        {section.leftSVG && <div className="left-svg"><section.leftSVG /></div>}
                        {section.leftSVGBackground && <div className="left-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.leftSVGBackground />
                        </div>}
                    </div>
                    )}
                </> 
            ) : ( 
                <>
                    {section.leftSVG && (
                    <div className="col-sm left-section-svg-first-svg">
                        {section.leftSVG && <div className="left-svg"><section.leftSVG /></div>}
                        {section.leftSVGBackground && <div className="left-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.leftSVGBackground />
                        </div>}
                    </div>
                    )}
                    {section.leftText && (
                    <div className="col-sm left-section-svg-first-text">
                        {section.leftText && <div className="left-text">{section.leftText}</div>}
                        {section.leftTextBackground && <div className="left-text-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.leftTextBackground />
                        </div>}
                    </div>
                    )}
                </>
            )
            }
            {section.isMainTextFirst ? (
                <>
                    {section.mainText && (
                    <div className="col-sm main-section-text-first-text">
                        {section.mainText && <div className="main-text">{section.mainText}</div>}
                        {section.mainTextBackground && <div className="main-text-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.mainTextBackground />
                        </div>}
                    </div>
                    )}
                    {section.mainSVG && (
                    <div className="col-sm main-section-text-first-svg">
                        {section.mainSVG && <div className="main-svg"><section.mainSVG /></div>}
                        {section.mainSVGBackground && <div className="main-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.mainSVGBackground />
                        </div>}
                    </div>
                    )}
                </> 
            ) : ( 
                <>
                    {section.mainSVG && (
                    <div className="col-sm main-section-svg-first-svg">
                        {section.mainSVG && <div className="main-svg"><section.mainSVG /></div>}
                        {section.mainSVGBackground && <div className="main-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.mainSVGBackground />
                        </div>}
                    </div>
                    )}
                    {section.mainText && (
                    <div className="col-sm main-section-svg-first-text">
                        {section.mainText && <div className="main-text">{section.mainText}</div>}
                        {section.mainTextBackground && <div className="main-text-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.mainTextBackground />
                        </div>}
                    </div>
                    )}
                </>
            )
            }
            {section.isRightTextFirst ? (
                <>
                    {section.rightText && (
                    <div className="col-sm right-section-text-first-text">
                        {section.rightText && <div className="right-text">{section.rightText}</div>}
                        {section.rightTextBackground && <div className="right-text-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.rightTextBackground />
                        </div>}
                    </div>
                    )}
                    {section.rightSVG && (
                    <div className="col-sm right-section-text-first-svg">
                        {section.rightSVG && <div className="right-svg"><section.rightSVG /></div>}
                        {section.rightSVGBackground && <div className="right-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.rightSVGBackground />
                        </div>}
                    </div>
                    )}
                </> 
            ) : ( 
                <>  
                    {section.rightSVG && (
                    <div className="col-sm right-section-svg-first-svg">
                        {section.rightSVG && <div className="right-svg"><section.rightSVG /></div>}
                        {section.rightSVGBackground && <div className="right-svg-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.rightSVGBackground />
                        </div>}
                    </div>
                    )}
                    {section.rightText && (
                    <div className="col-sm right-section-svg-first-text">
                        {section.rightText && <div className="right-text">{section.rightText}</div>}
                        {section.rightTextBackground && <div className="right-text-background" 
                            ref={(el) => {
                                if (el) {
                                  if (!refs.current[index]) refs.current[index] = [];
                                  refs.current[index].push(el);
                                }
                              }}>
                                <section.rightTextBackground />
                        </div>}
                    </div>
                    )}
                </>
            )
            }
        </div>
        ))}
    </div>
  );
}



export default ScrollingPage;