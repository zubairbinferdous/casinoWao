import React from "react";
import logo1 from '../assets/footer-BeGambleAware.svg';
import logo2 from '../assets/footer-gamcare.svg';
import logo3 from '../assets/footer-GAMSTOP.svg';
import footerTitleOne from '../assets/footer-guides(1).svg';
import logo4 from '../assets/GPWA.svg';
import logo from '../assets/logo.png';
import logo5 from '../assets/paysafe-icon.svg';


const Footer = () => {
  return (
    <div>
      <footer className="mt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-info-area-dat d-flex">
                <img src={footerTitleOne} alt="" />
                <h2>Guides</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-info-area-dat d-flex">
                <img src={footerTitleOne} alt="" />
                <h2>	
                News</h2>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-info-area-dat d-flex">
                <img src={footerTitleOne} alt="" />
                <h2>Help</h2>
              </div>
            </div>
         
          </div>
          <div className="row">
            <div className="col-md-3 logo-area">
              <div className="logo"><img src={logo} alt="" /></div>
              <p>
              Get exclusive deals, news and more
              </p>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <ul>
                  <h4> Online Casino</h4>

                  <li>
                    <a className="dropdown-item" href="/Casinos">
                    Online Casinos
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/Anonymous">
                    Crypto Casinos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Live">
                    Top Online Casinos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Live">
                    All Casino Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <ul>
                  <h4>Bonuses</h4>
                  <li>
                    <a className="dropdown-item" href="/Australia">
                    Casino Bonuses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Brasil">
                    Top 5 Casino Offers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Canada">
                    Top Mobile Casino Deals
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/Danmark">
                    Bonus Guides
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu">
                <ul>
                  <h4>  Casino Games</h4>
                  <li>
                    <a className="dropdown-item" href="/yest">
                    Online Casino Games
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/justBit">
                    Table Games
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/JackBit">
                    Mobile Games
                    </a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-area-para">
            <p>CasinoWow is your trusted online casino comparison site, providing helpful guides, casino news, reviews and information for players worldwide. We're on a mission to create the world's best online gambling community through innovative technology and regulated gambling. DISCLAIMER: Gambling is illegal in some jurisdictions, and you must comply with the laws within your state or country. The legal age to gamble online varies depending on your country of residence. CasinoWow takes no responsibility for your actions. Gambling can be addictive. Please play RESPONSIBLY</p>
            </div>
          </div>
          <div className="footer-all-logo-area text-center">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
