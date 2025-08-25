import React from 'react';
import bracketPng from './brackets.png';
import '../layouts/styles/styles.scss';

const Bracket: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img className={props.className} src={bracketPng} alt="Bracket" {...props} />
);

export default Bracket;