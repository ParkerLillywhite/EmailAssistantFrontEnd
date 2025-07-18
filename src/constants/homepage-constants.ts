import {ReactComponent as Logo} from '../logo.svg'

const bunkString = "This is some content I made up here";

//pay attention to 'Text' rather than 'String'
//and 'SVG' rather than 'Svg'

export const SECTIONS = [
    {
        leftText: bunkString,
        leftSVG: Logo,
        leftTextBackground: Logo,
        leftSVGBackground: Logo,
        isLeftTextFirst: true,

        mainText: bunkString,
        mainSVG: Logo,
        mainTextBackground: Logo,
        mainSVGBackground: Logo,
        isMainTextFirst: false,

        rightText: bunkString,
        rightSVG: Logo,
        rightTextBackground: Logo,
        rightSVGBackground: Logo,
        isRightTextFirst: true
    }
]