import React, {ReactNode, useRef, useEffect} from 'react';
import {ReactComponent as Satellite} from '../assets/satellite.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

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
        <div className="col-4 d-flex justify-content-center align-items-center header-left">
            Left Side
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-center">
            Center
        </div>
        <div ref={jitterRef} className="col-4 d-flex justify-content-center align-items-center header-right">
            <Satellite />
        </div>
      </header>
      {children}
      <footer>

      </footer>
    </div>
  );
}

export default Layout;