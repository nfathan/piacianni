import React from 'react';
import logo from '../img/piacianni-logo-white.png';
import Brand from './Brand'

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-info">
            <Brand source={logo} />
            {/* <div className="social-links mt-3">
              <a href="/#" className="twitter"><i className="bx bxl-twitter">twitter</i></a>
              <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div> */}
          </div>
          <div className="container">
              <div className="copyright">
                &copy; 2020 <strong><span>PiaCianni</span></strong>. Design by <a href="https://www.instagram.com/nfathan/" target="blank"> nfathan </a> 
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;