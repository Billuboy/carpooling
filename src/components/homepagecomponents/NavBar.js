import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/logo2.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { FaGithub } from 'react-icons/fa6';
import { HashLink } from 'react-router-hash-link';
// import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // const navigate=useHistory()

  const [activeLink, setActiveLink] = useState('home');
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // const onScroll = () => {
    //   if (window.scrollY > 50) {
    //     setScrolled(true);
    //   } else {
    //     setScrolled(false);
    //   }
    // }
    // window.addEventListener("scroll", onScroll);
    // return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = value => {
    setActiveLink(value);
  };

  return (
    <Navbar
      style={{
        width: '100%',
        position: 'fixed',
        top: '0',
        margin: '0',
      }}>
      <Container>
        <Link
          to='/'
          style={{
            margin: '0',
            color: 'white',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={e => {
            e.target.style.color = '#116D6E';
          }}
          onMouseLeave={e => {
            e.target.style.color = 'white';
          }}
          className='logo'>
          COMMUTE.IO
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav'>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link
              href='/'
              style={{ margin: '0' }}
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link
              href='/commute-io-verification-portal'
              style={{ margin: '0' }}
              className={
                activeLink === 'application-status'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('application-status')}>
              Application
            </Nav.Link>
            <Nav.Link
              href='/PublishARide'
              style={{ margin: '0' }}
              className={
                activeLink === 'testimonials'
                  ? 'active navbar-link'
                  : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('testimonials')}>
              Testimonials
            </Nav.Link>
            <Nav.Link
              href='/BookARide'
              style={{ margin: '0' }}
              className={
                activeLink === 'services' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('services')}>
              Services
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            {/* <div className="social-icon">
                <a href="https://linktr.ee/team_commute_io_linkedin"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/unmani-shinde/paused-P2P-carpooling.git/"><FaGithub style={{color:'white',transform:'scale(1.2)'}} className="github-icon"></FaGithub></a>
                <a href="https://linktr.ee/team_commute_io_instagram"><img src={navIcon3} alt="" /></a>               
              </div> */}

            <button
              className='vvd'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Link to={'/new-application-for-passenger'}>
                <span style={{ color: isHovered ? 'black' : 'white' }}>
                  Register
                </span>
              </Link>
            </button>
            <button
              className='vvd'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Link to={'/login'}>
                <span style={{ color: isHovered ? 'black' : 'white' }}>
                  Login
                </span>
              </Link>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
