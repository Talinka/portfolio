import React from 'react';
import logo from '../assets/img/logo-full.svg';
import starling from '../assets/img/starling.png';
import { Button } from 'react-bootstrap';
import cv from '../assets/cv.pdf';
import downloadIcon from '../assets/img/icons/download.svg';

const Main = () => {
  return (
    <>
      <div className="container-overlay">
        <img src={logo} alt="logo" className="logo"></img>
        <img src={starling} alt="logo" className="logo-overlay"></img>
      </div>
      <div className="cv">
        <p className="motto">I like to create beautiful things</p>
        <Button variant="light" href={cv} download><img src={downloadIcon} alt="curriculum vitae" /> Download CV</Button>
      </div>
    </>
  );
}

export default Main;