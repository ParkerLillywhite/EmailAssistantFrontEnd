import React, {ReactNode} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <header className="row app-header">
        <div className="col-4 d-flex justify-content-center align-items-center header-left">
            Left Side
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-center">
            Center
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center header-right">
            Right side
        </div>
      </header>
      {children}
      <footer>

      </footer>
    </div>
  );
}

export default Layout;