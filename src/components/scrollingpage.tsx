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

    
  return (
    <div className="container">
        <div className="row main-content">
            <svg />
            {isLeftTextFirst ? (
                <>
                    <div className="col-2 right-section-text-first-text">
                        {leftText && <>{leftText}</>}
                        {leftTextBackground && <>{leftTextBackground}</>}
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {leftSVG && <>{leftSVG}</>} 
                        {leftSVGBackground && <>{leftSVGBackground}</>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {leftSVG && <>{leftSVG}</>} 
                        {leftSVGBackground && <>{leftSVGBackground}</>}
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {leftText && <>{leftText}</>}
                        {leftTextBackground && <>{leftTextBackground}</>}
                    </div>
                </>
            )
            }
            {isMainTextFirst ? (
                <>
                    <div className="col-2 main-section-text-first-text">
                        {mainText && <>{mainText}</>}
                        {mainTextBackground && <>{mainTextBackground}</>}
                    </div>
                    <div className="col-2 main-section-text-first-svg">
                        {mainSVG && <>{mainSVG}</>} 
                        {mainSVGBackground && <>{mainSVGBackground}</>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 main-section-svg-first-svg">
                        {mainSVG && <>{mainSVG}</>} 
                        {mainSVGBackground && <>{mainSVGBackground}</>}
                    </div>
                    <div className="col-2 main-section-svg-first-text">
                        {mainText && <>{mainText}</>}
                        {mainTextBackground && <>{mainTextBackground}</>}
                    </div>
                </>
            )
            }
            {isRightTextFirst ? (
                <>
                    <div className="col-2 right-section-text-first-text">
                        {rightText && <>{rightText}</>}
                        {rightTextBackground && <>{rightTextBackground}</>}
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {rightSVG && <>{rightSVG}</>} 
                        {rightSVGBackground && <>{rightSVGBackground}</>}
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {rightSVG && <>{rightSVG}</>} 
                        {rightSVGBackground && <>{rightSVGBackground}</>}
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {rightText && <>{rightText}</>}
                        {rightTextBackground && <>{rightTextBackground}</>}
                    </div>
                </>
            )
            }
        </div>
    </div>
  );
}



export default ScrollingPage;