import React from 'react';
import bracketPng from './brackets.png';

const Bracket: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => (
  <img src={bracketPng} alt="Bracket" {...props} />
);

export default Bracket;