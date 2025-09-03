import React, {ReactNode, useRef, useEffect, useState} from 'react';
import {ReactComponent as Satellite} from '../assets/satellite.svg';
import {Buttons} from '../assets/image-components';
import {ButtonsTwo} from '../assets/image-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavbarStyles.scss';
import { wait } from '@testing-library/user-event/dist/utils';
import './styles/header-fadein.scss';
import shock from '../assets/shock.mp3';

interface NavbarProps {
    onNavigate: (index: number) => void;
}


function NavbarLayout({ onNavigate }: NavbarProps) {

  const jitterRef = useRef<HTMLDivElement>(null);

  const [shaded, setShaded] = useState(false);
  const [shadedAlt, setShadedAlt] = useState(false);

  const handleClick = () => {
    setShaded(!shaded);
    setTimeout(() => setShaded(false), 90)
  }

  const handleClickAlt = () => {
    setShadedAlt(!shadedAlt);
    setTimeout(() => setShadedAlt(false), 90)
  }


  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const audio = new Audio(shock);
    audio.play();

    const handleScroll = () => {

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (jitterRef.current) {
          jitterRef.current.classList.add('jitter');
          setTimeout(() => {
            jitterRef.current?.classList.remove('jitter');
          }, 300);
        }
      }, 150);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container" >
      <header className="row app-header" ref={jitterRef}>
        <div className={`col-4 d-flex justify-content-center align-items-center header-left ${shaded ? "shaded" : ""}`}
            onClick={() => {onNavigate(1); handleClick() }}
        >
            <ButtonsTwo className="buttons-two"/>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-center "
            onClick={() => onNavigate(0)}
        >
          <span className="neon flicker">rekol.me</span>
        </div>
        <div className={`col-4 d-flex justify-content-center align-items-center header-right ${shadedAlt ? "shaded" : ""}`}    
            onClick={() => {onNavigate(2); handleClickAlt() }}
  
        >
            <Buttons className="buttons"/>
        </div>
      </header>
    </div>
  );
}

export default NavbarLayout;