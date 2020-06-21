import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';
import './utils/i18n';
import { useTranslation } from 'react-i18next'
import './App.scss';

import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import LangToggler from './components/LangToggler';
import Footer from './components/Footer';


function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <header>
        <Navbar bg="light" expand="lg" className="fixed-top">
          <Navbar.Brand>
            <Link to="/"><img src={logo} className="App-logo" alt="logo"></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mr-auto">
              <Button variant="link"><Link to="/projects">{t('projects.title')}</Link></Button>
              <Button variant="link"><Link to="/experience">{t('experience.title')}</Link></Button>
              <Button variant="link"><Link to="/about">{t('about.title')}</Link></Button>
            </Nav>
            <LangToggler />
          </Navbar.Collapse>
        </Navbar>
      </header>
      <main role="main" className="main-content">
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path='/experience' component={Experience} />
        <Route path='/projects' component={Projects} />
      </main>
      <Route path={["/about", "/experience", "/projects"]} component={Footer} />
    </BrowserRouter>
  );
}

export default App;
