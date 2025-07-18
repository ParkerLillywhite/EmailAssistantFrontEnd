import React, {ReactNode} from 'react';
import { ReactComponent as SVG } from '../assets/right-background.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

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
}

const ScrollingPage: React.FC<LayoutProps> = ({
    sections,
    children
}) => {
    
  return (
    <div className="container">
        { sections.map((section, index) => (

        <div className="row main-content">
            <svg />
            {section.isLeftTextFirst ? (
                <>
                    <div className="col-2 left-section-text-first-text">
                        {section.leftText && <div className="left-text">{section.leftText}</div>}
                        {section.leftTextBackground && <div className="left-text-background"><section.leftTextBackground /></div>}
                    </div>
                    <div className="col-2 left-section-text-first-svg">
                        {section.leftSVG && <div className="left-svg"><section.leftSVG /></div>}
                        {section.leftSVGBackground && <div className="left-svg-background"><section.leftSVGBackground /></div>}
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="col-2 left-section-svg-first-svg">
                        {section.leftSVG && <div className="left-svg"><section.leftSVG /></div>}
                        {section.leftSVGBackground && <div className="eft-svg-background"><section.leftSVGBackground /></div>}
                    </div>
                    <div className="col-2 left-section-svg-first-text">
                        {section.leftText && <div className="left-text">{section.leftText}</div>}
                        {section.leftTextBackground && <div className="left-text-background"><section.leftTextBackground /></div>}
                    </div>
                </>
            )
            }
            {section.isMainTextFirst ? (
                <>
                    <div className="col-2 main-section-text-first-text">
                        {section.mainText && <div className="main-text">{section.mainText}</div>}
                        {section.mainTextBackground && <div className="main-text-background"><section.mainTextBackground /></div>}
                    </div>
                    <div className="col-2 main-section-text-first-svg">
                        {section.mainSVG && <div className="main-svg"><section.mainSVG /></div>}
                        {section.mainSVGBackground && <div className="main-svg-background"><section.mainSVGBackground /></div>}
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="col-2 main-section-svg-first-svg">
                        {section.mainSVG && <div className="main-svg"><section.mainSVG /></div>}
                        {section.mainSVGBackground && <div className="main-svg-background"><section.mainSVGBackground /></div>}
                    </div>
                    <div className="col-2 main-section-svg-first-text">
                        {section.mainText && <div className="main-text">{section.mainText}</div>}
                        {section.mainTextBackground && <div className="main-text-background"><section.mainTextBackground /></div>}
                    </div>
                </>
            )
            }
            {section.isRightTextFirst ? (
                <>
                    <div className="col-2 right-section-text-first-text">
                        {section.rightText && <div className="right-text">{section.rightText}</div>}
                        {section.rightTextBackground && <div className="right-text-background"><section.rightTextBackground /></div>}
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {section.rightSVG && <div className="right-svg"><section.rightSVG /></div>}
                        {section.rightSVGBackground && <div className="right-svg-background"><section.rightSVGBackground /></div>}
                    </div>
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {section.rightSVG && <div className="right-svg"><section.rightSVG /></div>}
                        {section.rightSVGBackground && <div className="right-svg-background"><section.rightSVGBackground /></div>}
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {section.rightText && <div className="right-text">{section.rightText}</div>}
                        {section.rightTextBackground && <div className="right-text-background"><section.rightTextBackground /></div>}
                    </div>
                </>
            )
            }
        </div>
        ))}
    </div>
  );
}



export default ScrollingPage;