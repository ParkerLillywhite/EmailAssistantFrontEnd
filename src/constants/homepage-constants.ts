import {ReactComponent as Logo} from '../logo.svg'
import {ReactComponent as Cell} from '../assets/cell.svg'
import {Bracket} from '../assets/image-components'
import {Robot} from '../assets/image-components';
import { RobotBeefCake } from '../assets/image-components';
import { CyberSpace } from '../assets/image-components';
import { CyberSpaceTwo } from '../assets/image-components';
import EmptySpacer from './EmptySpacer';
import { Moon } from '../assets/image-components'

const bunkString = "This is some content I made up here. It is plentiful, and good. I think this paragraph is a great one.";

const CYBER_STYLING = 'cyber-space';
const CYBER_STYLING_TWO = "cyber-space-two";
const CYBER_STYLING_TWO_ALTERNATE = "cyber-space-two-alternate"
const CYBER_STYLING_THREE = "cyber-space-three";
const bracket = "bracket";
const BRACKET_ALT = "bracket-alt";
const MOON = "moon";
const SMALLER_SPACE = "smaller-space";
const BOTTOM_TEXT_STYLING = "bottom-text";

const TITLE_A = "PROC. LI310-A"
const TITLE_B = "PROC. LI310-B"
const TITLE_C = "PROC. LI310-C"

const ROBOT_STYLING = "robot-styling";

const robot = "robot";

const INTRODUCTION = `<span>
<h2>PROTOC. LI307-A</h2><br>
Never forget an important email or forget that you are waiting on a reply from a client.<br>
<br>

It <em>is</em> easy to forget. We've all been there. That's why we created a simple solution. Meet HAL.<br>
<br>

`

const INTRODUCTION_TWO = `<span><h2>PROTOC. LI307-B</h2>
Just send an email to assist@rekol.me with the time that you want to be reminded. That's it. HAL will then send you a reminder about that content at the time you specify. You may, for instance, forward an email to HAL that says, “remind me to follow up on this in a week” or “set a reminder for 3 days.”<br>
<br>
<br></span>
`

const INTRODUCTION_THREE = `<span><h2>PROTOC. LI307-C</h2>
Use our recall tool to:<br>
<br>
<ul>
<li>Follow up on an email to a client-never miss a beat.<br>

<li>Set a remember to check back on an issue-stay on top of everything.<br>

<li>Get a reminder to follow up on anything.
</ul>
</span>`

const INTRODUCTION_FOUR = `
<span><h2>PROTOC. LI307-D</h2>Simply forward your important emails or send a quick email to assist@rekol.me. Our AI will handle the rest, so you can stop worrying and start doing.<br>
<br>
<br>
</span>
`

const INTRODUCTION_FIVE = `<span><h2>PROTOC. BASE-CASE</h2>
Stay on top of your email tasks. Give rekol.me a try.
</span>
`

//pay attention to 'Text' rather than 'String'
//and 'SVG' rather than 'Svg'

//*****the booleans are required for now!!!

export const SECTIONS = [

    {
        leftText: INTRODUCTION,
        leftTextBackground: CyberSpace,
        leftTextBackgroundStyling: CYBER_STYLING,
        isLeftTextFirst: true,


        isMainTextFirst: false,

        rightSVG: Moon,
        rightSVGStyling: MOON,
        isRightTextFirst: true
    },
    {
        leftSVG: EmptySpacer,
        isLeftTextFirst: true,

        isMainTextFirst: false,

        rightText: INTRODUCTION_TWO,
        rightTextBackground: CyberSpaceTwo,
        rightTextBackgroundStyling: CYBER_STYLING_TWO_ALTERNATE,
        isRightTextFirst: true
    },
    {
        leftText: INTRODUCTION_THREE,
        leftTextBackground: CyberSpace,
        leftTextBackgroundStyling: CYBER_STYLING_TWO,
        isLeftTextFirst: true,


        isMainTextFirst: false,

        rightSVG: EmptySpacer,
        isRightTextFirst: true
    },
    {
        leftSVG: EmptySpacer,
        isLeftTextFirst: true,


        isMainTextFirst: false,

        rightText: INTRODUCTION_FOUR,
        rightTextBackground: CyberSpaceTwo,
        rightTextBackgroundStyling: CYBER_STYLING_THREE,
        isRightTextFirst: true
    },
    {
        leftText: INTRODUCTION_FIVE,
        leftTextStyling: BOTTOM_TEXT_STYLING,
        isLeftTextFirst: true,

        mainTextBackgroundStyling: bracket,
        mainSVG: Robot,
        mainSVGStyling: ROBOT_STYLING,
        mainSVGBackground: CyberSpace,
        mainSVGBackgroundStyling: bracket,

        isMainTextFirst: true,

        isRightTextFirst: false
    }
]