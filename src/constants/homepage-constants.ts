import {ReactComponent as Logo} from '../logo.svg'
import {Bracket} from '../assets/image-components'
import {Robot} from '../assets/image-components';
import EmptySpacer from './EmptySpacer';

const bunkString = "This is some content I made up here. It is plentiful, and good. I think this paragraph is a great one.";

const bracket = 'bracket';
const BRACKET_ALT = "bracket-alt";

const ROBOT_STYLING = "robot-styling";

const robot = "robot";

//pay attention to 'Text' rather than 'String'
//and 'SVG' rather than 'Svg'

//*****the booleans are required for now!!!

export const SECTIONS = [
    {
        leftText: bunkString,
        leftTextBackground: Bracket,
        leftTextBackgroundStyling: bracket,
        isLeftTextFirst: true,

        isMainTextFirst: false,

        rightText: bunkString,
        rightSVG: Logo,
        rightTextBackground: Bracket,
        rightTextBackgroundStyling: bracket,
        rightSVGBackground: Bracket,
        rightSVGBackgroundStyling: bracket,
        isRightTextFirst: true
    },
    {
        leftText: bunkString,
        leftSVG: Logo,
        leftTextBackground: Bracket,
        leftTextBackgroundStyling: bracket,
        isLeftTextFirst: false,

        mainText: bunkString,
        mainSVG: Logo,

        isMainTextFirst: true,

        isRightTextFirst: false
    },
    {
        leftSVG: EmptySpacer,
        isLeftTextFirst: false,

        mainTextBackgroundStyling: bracket,
        mainSVG: Robot,
        mainSVGStyling: ROBOT_STYLING,
        mainSVGBackground: Bracket,
        mainSVGBackgroundStyling: BRACKET_ALT,

        isMainTextFirst: true,

        isRightTextFirst: false
    }
]