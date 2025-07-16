import React, {ReactNode} from 'react';

interface LayoutProps {
    leftText?: string;
    leftSVG?: ReactNode;
    isLeftTextFirst: Boolean;
    mainText?: string;
    mainSVG?: ReactNode;
    isMainTextFirst: Boolean;
    rightText?: string;
    rightSVG?: ReactNode;
    isRightTextFirst: Boolean;
    svg?: ReactNode;
}

//consider using an Id related to the svg rather than passing in the svg itself as a prop.

const ScrollingPage: React.FC<LayoutProps> = ({ 
    leftText,
    leftSVG,
    isLeftTextFirst,
    mainText,
    mainSVG,
    isMainTextFirst,
    rightSVG,
    rightText,
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
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {leftSVG && <>{leftSVG}</>} 
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {leftSVG && <>{leftSVG}</>} 
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {leftText && <>{leftText}</>}
                    </div>
                </>
            )
            }
            {isMainTextFirst ? (
                <>
                    <div className="col-2 main-section-text-first-text">
                        {mainText && <>{mainText}</>}
                    </div>
                    <div className="col-2 main-section-text-first-svg">
                        {mainSVG && <>{mainSVG}</>} 
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 main-section-svg-first-svg">
                        {mainSVG && <>{mainSVG}</>} 
                    </div>
                    <div className="col-2 main-section-svg-first-text">
                        {mainText && <>{mainText}</>}
                    </div>
                </>
            )
            }
            {isRightTextFirst ? (
                <>
                    <div className="col-2 right-section-text-first-text">
                        {rightText && <>{rightText}</>}
                    </div>
                    <div className="col-2 right-section-text-first-svg">
                        {rightSVG && <>{rightSVG}</>} 
                    </div>
                    )
                </> 
            ) : ( 
                <>
                    <div className="col-2 right-section-svg-first-svg">
                        {rightSVG && <>{rightSVG}</>} 
                    </div>
                    <div className="col-2 right-section-svg-first-text">
                        {rightText && <>{rightText}</>}
                    </div>
                </>
            )
            }
        </div>
    </div>
  );
}



export default ScrollingPage;