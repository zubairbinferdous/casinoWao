import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div>
               <header className="navber_header">
       <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                
                <a className="navbar-brand logo" href="/">
                  <img src={logo} alt="" /> 
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Online Casinos
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href='/Casinos'>
                          Online Casinos
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/Crypto-casino">
                          Crypto Casinos
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/Top">
                          Top Online Casinos
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/allCasino">
                          All Casino Reviews
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Bonuses
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href='/bonuses-casino'>
                          Casino Bonus
                          </a>
                        </li>

                        <li>
                          <a className="dropdown-item" href="/no-deposit">
                          No Deposit Bonus
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/first-deposit">
                          First Deposit Bonus
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                         Bonuses
                      </a>
                      <ul className="dropdown-menu">
                     
                        <li>
                          <a className="dropdown-item" href="/DOGE">
                          Casino Bonuses
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/eth">
                          Top 5 Casino Offers
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/ltc">
                          Top Mobile Casino Deals
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/mon">
                          Bonus Guides
                          </a>
                        </li>
                      
                      </ul>
                    </li>

              

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                       
                       Casino Games
 
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href='/Australia'>
                          Online Casino Games
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/Brasil">
                          Online Casino Games
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/Canada">
                          Table Games
                          </a>
                        </li>
    
                        <li>
                          <a className="dropdown-item" href="/Español">
                          Mobile Games
                          </a>
                        </li>
                      
                      </ul>
                    </li>

                    <a
                        className="nav-link "
                        href="/Crypto"
                        role=""
                        data-bs-toggle=""
                        aria-expanded=""
                      >
                        Crypto 
                    </a>

                    <a
                        className="nav-link "
                        href="/Slots"
                        role=""
                        data-bs-toggle=""
                        aria-expanded=""
                      >
                       Free Slots
                    </a>
                 

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
       </header>
        </div>
    );
};

export default Header;