import React from 'react';
import logo from  '../assets/img/logo-full.svg';
import starling from '../assets/img/starling.png';

const Main = (props) => {
  return (
    <>
      <h3 className="page_header">Hello, I'm Natalia!</h3>
      <div className="container-overlay">
        <img src={logo} alt="logo" className="logo"></img>
        <img src={starling} alt="logo" className="logo-overlay"></img>
      </div>
    </>
  );
}

export default Main;