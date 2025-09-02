import React from 'react';
import bracketPng from './brackets.png';
import RobotPng from './Robot.png';
import CrossBeamImage from './cross-beam-removebg-preview.png'
import CyberSpaceImage from './cyberspace.png'
import CyberSpaceTwoImage from './cyberspace-two.png'
import ButtonsImage from './buttons.png'
import ButtonsTwoImage from './buttons-two.png'
import RobotBeefcakeImage from './Robot-Beefcake.png'
import MoonImage from './moon.png'

import '../layouts/styles/NavbarStyles.scss';

export const Bracket: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img className={props.className} src={bracketPng} alt="Bracket" {...props} />
);

export const Robot: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={RobotPng} alt="Robot" {...props} />
);

export const CrossBeam: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={CrossBeamImage} alt="Robot" {...props} />
);

export const CyberSpace: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={CyberSpaceImage} alt="Cyber space" {...props} />
);

export const CyberSpaceTwo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={CyberSpaceTwoImage} alt="Cyber space variant" {...props} />
);

export const Buttons: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={ButtonsImage} alt="Cyber space variant" {...props} />
);

export const ButtonsTwo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={ButtonsTwoImage} alt="Cyber space variant" {...props} />
);

export const RobotBeefCake: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={RobotBeefcakeImage} alt="Cyber space variant" {...props} />
);

export const Moon: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
    <img className={props.className} src={MoonImage} alt="Cyber space variant" {...props} />
);

