import React, {ReactNode} from 'react';

interface LayoutProps {
    leftText?: string;
    leftSVG?: ReactNode;
    leftTextBackground?: ReactNode;
    leftSVGBackground?: ReactNode;
    isLeftTextFirst: Boolean;
    mainText?: string;
    mainSVG?: ReactNode;
    mainTextBackground?: ReactNode;
    mainSVGBackground?: ReactNode;
    isMainTextFirst: Boolean;
    rightText?: string;
    rightSVG?: ReactNode;
    rightTextBackground?: ReactNode;
    rightSVGBackground?: ReactNode;
    isRightTextFirst: Boolean;
    svg?: ReactNode;
}

//consider using an Id related to the svg rather than passing in the svg itself as a prop.

const ScrollingPage: React.FC<LayoutProps> = ({ 
    leftText,
    leftSVG,
    leftSVGBackground,
    leftTextBackground,
    isLeftTextFirst,
    mainText,
    mainSVG,
    mainSVGBackground,
    mainTextBackground,
    isMainTextFirst,
    rightSVG,
    rightText,
    rightSVGBackground,
    rightTextBackground,
    isRightTextFirst

}) => {

    //TODO: better class names!
    
  return (
    <div className="container">
        <div className="row main-content">
            <svg />
            {isLeftTextFirst ? (
                <>
                    <div className="col-2 left-section-text-first-text">
                        {leftText && <div className="left-text">{leftText}</div>}
                        {leftTextBackground && <div className="left-text-background">{leftTextBackground}</div>}
                    </div>
                    <div className="col-2 left-section-text-first-svg">
                        {leftSVG && <div className="left-svg">{leftSVG}</div>} 
                        {leftSVGBackground && <div className="left-svg-background">{leftSVGBackground}</div>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {leftSVG && <div className="left-svg">{leftSVG}</div>} 
                        {leftSVGBackground && <div className="left-svg-background">{leftSVGBackground}</div>}
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {leftText && <div className="left-text">{leftText}</div>}
                        {leftTextBackground && <div className="left-text-background">{leftTextBackground}</div>}
                    </div>
                </>
            )
            }
            {isMainTextFirst ? (
                <>
                    <div className="col-2 main-section-text-first-text">
                        {mainText && <div className="main-text">{mainText}</div>}
                        {mainTextBackground && <div className="main-text-background">{mainTextBackground}</div>}
                    </div>
                    <div className="col-2 main-section-text-first-svg">
                        {mainSVG && <div className="main-svg">{mainSVG}</div>} 
                        {mainSVGBackground && <div className="main-svg-background">{mainSVGBackground}</div>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 main-section-svg-first-svg">
                        {mainSVG && <div className="main-svg">{mainSVG}</div>} 
                        {mainSVGBackground && <div className="main-svg-background">{mainSVGBackground}</div>}
                    </div>
                    <div className="col-2 main-section-svg-first-text">
                        {mainText && <div className="main-text">{mainText}</div>}
                        {mainTextBackground && mainSVGBackground && <div className="main-text-background">{mainSVGBackground}</div>}
                    </div>
                </>
            )
            }
            {isRightTextFirst ? (
                <>
                    <div className="col-2 right-section-text-first-text">
                        {rightText && <div className="right-text">{rightText}</div>}
                        {rightTextBackground && <div className="main-text-background">{mainSVGBackground}</div>}
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {rightSVG && <div className="right-svg">{rightSVG}</div>} 
                        {rightSVGBackground && <div className="right-svg-background">{rightSVGBackground}</div>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {rightSVG && <div className="right-svg">{rightSVG}</div>} 
                        {rightSVGBackground && <div className="right-svg-background">{rightSVGBackground}</div>}
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {rightText && <div className="right-text">{rightText}</div>}
                        {rightTextBackground && <div className="main-text-background">{mainSVGBackground}</div>}
                    </div>
                </>
            )
            }
        </div>
    </div>
  );
}



export default ScrollingPage;