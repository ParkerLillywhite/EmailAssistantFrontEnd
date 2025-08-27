import React from 'react';
import bracketPng from './brackets.png';
import RobotPng from './Robot.png';
import CrossBeamImage from './cross-beam-removebg-preview.png'
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
