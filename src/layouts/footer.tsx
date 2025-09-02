import React, {ReactNode, useRef, useEffect, useState} from 'react';
import {ReactComponent as Satellite} from '../assets/satellite.svg';
import {Buttons} from '../assets/image-components';
import {ButtonsTwo} from '../assets/image-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/footer.scss';
import { wait } from '@testing-library/user-event/dist/utils';


function Footer() {

  return (
    <div className="container-footer" >
        <div className="row additional-footer">
            <div className="col-4 d-flex justify-content-center align-items-center additional-footer-left">
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center additional-footer-center">
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center additional-footer-right">
            </div>
        </div>
      <footer className="row footer">
        <div className={`col-4 d-flex justify-content-center align-items-center footer-left`}>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center footer-center">
        </div>
        <div className={`col-4 d-flex justify-content-center align-items-center footer-right`}    >
        </div>
      </footer>
    </div>
  );
}

export default Footer;