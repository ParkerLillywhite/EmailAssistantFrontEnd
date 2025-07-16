import React, {ReactNode} from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <header className="row App-header">
        <div className="col-4 header-left">
            Left Side
        </div>
        <div className="col-4 header-center">
            Center
        </div>
        <div className="col-4 header-right">
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