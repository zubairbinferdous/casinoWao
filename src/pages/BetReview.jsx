import React from "react";
import casinoOne from '../assets/Betsafe-Casino-one.jpg';
import casinoTwo from '../assets/Betsafe-Games-two.jpg';
import bet from '../assets/Betsafe-icon2.webp';
import casinoThree from '../assets/BetsafeCasinoThree.jpg';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const BetReview = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>Betsafe Casino</h2>
                <p>Betsafe is a top online casino provider that is operated under the banner of the prestigious BLM/Betsson Group.</p>
                <a href="">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>Betsafe Casino Review</h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>97</p>
                    <h4>Rank Very  <br />High</h4>
                  </div>
                  <div className="rank-score">
                    <img src={trust} alt="" />
                    <h4>Trust Score
                    <br /> Perfect</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="casino-review-button text-center">
                    <a href="">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>100% up to $/€ 100 + 150 Bonus Spins </h2>
                   <p>T&C's Apply. 
                   New players only. Min deposit for deposit match offer is $/€ 10. Ewallets excluded. Wagering requirements – 35x bonus amount within 30 days and 35x spins winning within 3 days. Spins are credited in batches on Gates of Olympus slot. Bonus is available 30 days from registration. Max bet $/€ 6. Gamble responsibly</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="Trophies">
                   <h2>Trophies</h2>
                   <div className="Trophies-data">
                    <div className="tDataOne">
                      <div className="area-section text-center">
                        <img src={wowCasino} alt="" />
                        <p>1000+ games</p>
                      </div>
                    </div>
                    <div className="tDataTwo">
                    <div className="area-section text-center">
                        <img src={wowCasinoRate} alt="" />
                        <p>1000+ games</p>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview">
                <h2>Betsafe Casino Preview</h2>
            <div className="row text-center">
               <div className="col-md-4">
                <img src={casinoOne} alt="" className="img-fluid" />
                <p>Casino Lobby</p>
               </div>
               <div className="col-md-4">
                <img src={casinoTwo} alt="" className="img-fluid" />
                <p>Casino Games</p>
               </div>
               <div className="col-md-4">
                <img src={casinoThree} alt="" className="img-fluid" />
                <p>Mobile Casino</p>
               </div>
            </div>
          </div>
          <div className="proAndCon">
            <div className="row">
              <div className="col-md-6">
                <h2>Pros</h2>
                <ul>
                  <li>Betsafe Casino App for Android & iOS</li>
                  <li>Super Fast Payouts</li>
                  <li>Award-Winning Casino</li>
                  <li>Best for Slots and Table Games</li>
                </ul>
              </div>
              <div className="col-md-6">
              <h2>Cons</h2>
                <ul>
                  <li>No Gamification features</li>
                  <li>Multiple Restricted Countries</li>

                </ul>
              </div>
            </div>
          </div>
          </div>
          <div className="col-md-2">
            <div className="top-casino-area-review-pages">
              <div className="row">
                <div className="menu_review">
                  <ul>
                    <li><img src={bet} alt="" /><a href="">home</a></li>
                    <li><img src={bet} alt="" /><a href="">home</a></li>
                    <li><img src={bet} alt="" /><a href="">home</a></li>
                    <li><img src={bet} alt="" /><a href="">home</a></li>
                    <li><img src={bet} alt="" /><a href="">home</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <Footer></Footer>
    </div>
  );
};

export default BetReview;
