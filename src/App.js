import React from 'react';
import logo from './logo.svg';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
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
    <HashRouter>
      <header>
        {/* <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}



        <Navbar bg="light" expand="lg" collapseOnSelect className="fixed-top">
          <Navbar.Brand>
            <Link to="/"><img src={logo} className="App-logo" alt="logo"></img></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/projects" eventKey="1">{t('projects.title')}</Nav.Link>
              <Nav.Link as={Link} to="/experience" eventKey="2" >{t('experience.title')}</Nav.Link>
              <Nav.Link as={Link} to="/about" eventKey="3" >{t('about.title')}</Nav.Link>
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
    </HashRouter>
  );
}

export default App;
