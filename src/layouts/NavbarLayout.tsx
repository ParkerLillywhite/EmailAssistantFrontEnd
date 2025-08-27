import React, {ReactNode, useRef, useEffect} from 'react';
import {ReactComponent as Satellite} from '../assets/satellite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavbarStyles.scss';

interface NavbarProps {
    onNavigate: (index: number) => void;
}

function NavbarLayout({ onNavigate }: NavbarProps) {

  const jitterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

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
        <div className="col-4 d-flex justify-content-center align-items-center header-left"
            onClick={() => onNavigate(0)}
        >
          <span>home</span>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-center"
            onClick={() => onNavigate(1)}
        >
          <span className="neon flicker">rekol.me</span>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-right"        
        >
            <Satellite className="satellite neon"/>
        </div>
      </header>
    </div>
  );
}

export default NavbarLayout;