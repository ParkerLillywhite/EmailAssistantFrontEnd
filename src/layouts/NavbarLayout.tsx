import React, {ReactNode, useRef, useEffect} from 'react';
import {ReactComponent as Satellite} from '../assets/satellite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

interface NavbarProps {
    children: ReactNode;
    onNavigate: (index: number) => void;
}

const NavbarLayout: React.FC<NavbarProps> = ({ onNavigate }) => {

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
    <div className="container">
      <header className="row app-header">
        <div className="col-4 d-flex justify-content-center align-items-center header-left"
            onClick={() => onNavigate(0)}
        >
            Left Side
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-center"
            onClick={() => onNavigate(1)}
        >
            Center
        </div>
        <div ref={jitterRef} className="col-4 d-flex justify-content-end align-items-center header-right"
            onClick={() => onNavigate(2)}        
        >
            <Satellite className="satellite"/>
        </div>
      </header>
    </div>
  );
}

export default NavbarLayout;