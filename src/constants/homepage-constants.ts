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

const INCOMING_MESSAGE = "Incoming Message"

const INTRODUCTION = `<span>
<h2>PROTOC. LI307-A</h2><br>
<h1>Recall What Needs to be Done. Simply.</h1>
Managing your inbox can be overwhelming. Client follow-ups, deadlines, and tasks often slip through the cracks. That’s why we created <b>ECHO, the AI email assistant from rekol.me.</b> When you send an email, you’ll always get the reminders you need, exactly when you need them - and <b>basic reminders are always free</b>.

`

const CONTENT_TWO = `<span><h2>PROTOC. LI307-B</h2>
<h3>How ECHO Works</h3>
<ol>
    <li><b>Forward or send an email</b> to assist@rekol.me.</li>
    <li><b>Tell ECHO when to remind you.</b> For example:
        <ul>
            <li>"Remind me to follow up in 3 days."</li>
            <li>"Set a reminder for next week."</li>
            <li>"Remind me to take the trash out in an hour."</li>
        </ul>
    </li>
    <li><b>ECHO sends you a reminder</b> at the exact time you requested.</li>
</ol>
No apps to install. No logins. Just email, remind, and relax.
</span>
`

const CONTENT_THREE = `<span><h2>PROTOC. LI307-C</h2>
<h3>What ECHO Can Do for You</h3>
<ul>
    <li><b>Never miss client follow-ups</b> - strengthen relationships and close deals.</li>
    <li><b>Simple:</b> - track ongoing issues whitout cluttering your calendar.</li>
    <li><b>Boost productivity</b> - offload reminders to ECHO and focus on what metters.</li>
</ul>
</span>`

const CONTENT_FOUR = `
<span><h2>PROTOC. LI307-D</h2>
<h3>Why rekol.me + ECHO Stands Out</h3>
    <ol>
        <li><b>Basic reminders are always free</b> - no risk, no hidden costs.</li>
        <li><b>Simple:</b> Works directly from your email.</li>
        <li><b>Reliable:</b> ECHO never forgets.</li>
        <li><b>Smart:</b> - Flexible reminders that adapt to you window.</li>
    </ol>
</span>
`

const CONTENT_FIVE = `<span>
<h2>PROTOC. LI307-E</h2>
<h3>Coming Soon: ECHO Premium</h3>
    ECHO is growing with you. While <b>basic reminders are always free</b>, soon you'll have the option to upgrade to <b>ECHO Premium</b> for even more powerful features:
    <ul>
        <li><b>Custom Preferences</b> - choose exactly how and when when reminders are delivered</li>
        <li><b>Personalized Scheduling</b> - manage a full calendar of events directly through ECHO.</li>
        <li><b>Advanced Controls</b> - organize reminders by project, client, or priority</li>
        <li><b>Smarter Insights</b> - track follow-ups and stay ahead of deadlines with AI-powered suggestions.</li>
    </ul>
    Stayed tuned-ECHO Premium is designed for professionals who want full control over their inbox and their time.
</span>`

const CONTENT_BASE_CASE = `<span><h2>PROTOC. BASE-CASE</h2>
    <h3>Get Started in Seconds</h3>
    Take control of your inbox with <b>ECHO by rekol.me</b><br>
    Forward your follow-up to assist@rekol.me and let ECHO handle the rest - <b>basic reminders are always free.</b>
</span>
`

const CONTENT_FAQ = `
<span>
<h3>Frequently Asked Questions About ECHO</h3>
<ol>
    <li>What is Echo?<br>
        ECHO is a <b>free AI email assistant</b> from rekol.me that helps you stay on top of your inbox. Simply forward or send an email to assist@rekol.me with your desired reminder time, and ECHO will send you a reminder exactly when you need it.
    </li>
    <li>
        <b>How do I set an email reminder with ECHO?</b><br>
        It's simple:
        <ul>
            <li>Forward an email to assist@rekol.me</li>
            <li>In the message, write when you want the reminder (e.g., "Remind me in 2 days" or "Follow up next week").</li>
            <li>ECHO will confirm and deliver your reminder at the right time.</li>
        </ul>
    </li>
    <li><b>Do I needto install an app or create an account?</b>
        <br>
        No. ECHO works directly from your email. There’s nothing to download, no new software to learn, and no complicated setup.
    </li>
    <li><b>Can I use ECHO for client follow-ups?</b>
        <Br>
        Yes! ECHO is perfect for sales professionals, consultants, and anyone managing client communication. Forward a client email to ECHO with your preferred follow-up time, and you’ll never miss an opportunity to respond.    </li>
    </li>
    <li>
        <b>What types of reminders can ECHO handle?</b>
        <Br>
        ECHO can remind you to:
        <ul>
            <li>Follow up on client emails.</li>
            <li>Check progress on ongoing issues.</li>
            <li>Review tasks or deadlines.</li>
            <li>Remeber personal commitments directly from your inbox</li>
        </ul>
    </li>
    <li><b>Is ECHO secure?</b>
        <br>
        Yes. rekol.me is built with privacy in mind. ECHO only uses the information needed to send your reminders—it doesn’t share or sell your data.
    </li>
    <li><b>How much does ECHO cost?</b>
        <br>
        ECHO’s basic reminders are always free. You can rely on them for everyday follow-ups and task management without paying a dime. For users who want more control, ECHO Premium is coming soon—with advanced preferences, scheduling, and productivity tools.
    </li>
    <li><b>Why should I use ECHO instead of calendar reminders?</b>
        <Br>
        Unlike traditional calendar apps, ECHO works <b>inside your inbox.</b> That means you can forward actual emails—client messages, invoices, tasks—so your reminders are always connected to the right content, not just a calendar note.
    </li>
</ol>
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

        rightText: CONTENT_TWO,
        rightTextBackground: CyberSpaceTwo,
        rightTextBackgroundStyling: CYBER_STYLING_TWO_ALTERNATE,
        isRightTextFirst: true
    },
    {
        leftText: CONTENT_THREE,
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

        rightText: CONTENT_FOUR,
        rightTextBackground: CyberSpaceTwo,
        rightTextBackgroundStyling: CYBER_STYLING_THREE,
        isRightTextFirst: true
    },
    {
        leftText: CONTENT_FIVE,
        leftTextBackground: CyberSpace,
        leftTextBackgroundStyling: CYBER_STYLING_TWO,
        isLeftTextFirst: true,


        isMainTextFirst: false,

        rightSVG: EmptySpacer,
        isRightTextFirst: true
    },
    {
        leftText: CONTENT_BASE_CASE,
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