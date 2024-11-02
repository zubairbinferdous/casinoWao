import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoTwo from '../assets/Roobet-casino-games.two.jpg';
import { default as casinoOne } from '../assets/Roobet-casino-home.one.jpg';
import casinoThree from '../assets/Roobet-mobile-casino.three.jpg';
import lat from '../assets/letslucky-casino-icon.webp';
import ld from '../assets/lucky-dreams-icone.png';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import bet from '../assets/roobet-casino-icon.png';
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const Roob = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>Roobet  Casino</h2>
                <p>Light up and get ready to experience this one-of-a-kind crypto casino all the way from Australia. Read our review and learn all about Roobet Casino.</p>
                <a href="https://roobet.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad4">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>Roobet  Casino Review</h2>
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
                    <a href="https://roobet.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>20% Cashback for the first 7 days </h2>
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
                        <p>Hybrid
                        Casino</p>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview">
                <h2>Roobet  Casino Preview</h2>
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
               <div className="pro">
               <h2>Pros</h2>
                <ul>
                  <li>VIP Club & Exclusive Roowards</li>
                  <li>Special Roollion currency</li>
                  <li>Exclusive Roo Slots & Table games</li>
                  <li>Best promotions, bonuses & loyalty program</li>
                  <li>Best customer service</li>
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>Fiat deposits not available in all countries</li>
                  <li>No user settings for responsible gambling</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="casino-Details">
            <h2 className="text-center">Casino Details</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="Details-area-one">
                  <h4>Established</h4>
                  <span>2019</span>
                  <h4>Owner</h4>
                  <span>Raw Entertainment B.V</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile, </span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Curacao eGaming</span>
                  <h4>Languages</h4>
                  <span>English, Spanish, French, Portuguese, Serbian</span>
                  <h4>Verification</h4>
                  <span>Fast</span>
                  <h4>VPN</h4>
                  <span> Allowed</span>
              </div>
              </div>
            
            </div>
          </div>

          <div className="casino-Details">
            <h2 className="text-center">Casino Games</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="Details-area-one">
                  <h4>Total Games</h4>
                  <span>3000+ Games</span>
                  <h4>Categories</h4>
                  <span>Video Slots, Jackpot Slots, Classic Slots, Fruit Slots, Vegas Slots, High Roller Slots, Exclusive Slots, Live Casino Games, Roulette Games, Blackjack Games, Baccarat Games, Poker Games, Sic Bo Games, Dice Casino Games, VIP Table Games, Video Poker, Bingo, Scratch Cards</span>
                
                </div>
              </div>
              <div className="col-md-6">    <div className="Details-area-one">
              <h4> Total Game Providers</h4>
                  <span>50+</span>
                  <h4>Providers</h4>
                  <span>Microgaming, NetEnt, Novomatic, Play'n GO, Big Time Gaming, Barcrest, WMS, NYX Interactive, NextGen Gaming, IGT, Yggdrasil, Evolution Gaming, Thunderkick, Quickspin, Bally Gaming, SG Digital, Pragmatic Play, Push Gaming, Blueprint Gaming, ELK Studios, iSoftBet, Red Tiger Gaming, Greentube, Just for the Win, Lightning Box, Rabcat</span>
                
              </div></div>
          
            </div>
          </div>


          <div className="casino-Details">
            <h2 className="text-center">
            </h2>
            <div className="row">
              <div className="col-md-12">
                <div className="Details-area-one">
                <h4> Casino Review</h4>
                  <span>If you’re searching for a unique and one-of-a-kind casino experience, Roobet is the site for you. This crypto online casino hopped out of Australia and is taking over the iGaming world as it offers more than 3000 casino games and fun ways to play. <br />

A division of Raw Entertainment B.V., Roobet Casino, launched in 2019 and holds a license from the Government of Curacao. The casino features the best software providers and ensures everyone is entertained, safe, and having fun. The deep purple theme and a menu that is easy to navigate mean you’ll never miss out on what’s new and hot on the homepage. You can also choose from multiple languages to customise your playing experience. <br />

Mr Roo and Snoop Dogg recently partnered in what the casino describes as its “first foray into the web3 space”. As Roobet and Snoop work to transform digital entertainment, you can look forward to epic events, tournaments, and even original games. <br />

Safe gambling experiences, a wide range of supported currencies, and top-notch 24/7 customer support all help make Roobet a casino that caters for you.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>Roobet Casino is licensed by the Government of Curacao and has a trusted reputation in the iGaming industry. To ensure that all personal information and transactions are safe, the site uses the latest 256-bit SSL encryption technology.

The site used Provably Fair tech to ensure that every outcome is random. This can be tracked on different games using server and client seed, as well as nonce that is found on games like Dice and Mines.

There are plenty of responsible gambling features available to keep you playing safe. You can easily activate limits on your account, take temporary breaks, or self-exclude. </span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>When it comes to bonuses and rewards, Roobet has made sure that you’re never without something fun to enjoy. The welcome offer will dish out free spins, but that’s only the start. You can look forward to special events (many featuring Snoop Dogg), Drops & Wins, and Roowards. <br />

For those who enjoy sports betting, special offers are available at the sportsbook. <br />

Available by invite only, Roobet has a premium VIP club for elite players. Exclusive perks such as a personal VIP manager, special bonuses, and VIP events are all waiting to be claimed.</span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> CasinoWow Summary</h4>

                  <span>Betsafe is a great site for gamblers wanting to have access to many various forms of betting. It is your one-stop-shop from casino games to sportsbooks, offering the finest customer service and holding a good reputation in the industry.</span>
                
              </div></div>
          
            </div>
          </div>
          
          </div>
          <div className="col-md-2">
            <div className="top-casino-area-review-pages">
              <div className="row">
                <div className="menu_review">
                  <ul>
                    <li><img src={bet2} alt="" /><a href="/BetReview">	
                    BitStarz Casino</a></li>
                    <li><img src={waz} alt="" /><a href="/wazaCasino">Wazamba Casino</a></li>
                    <li><img src={lat} alt="" /><a href="/luckyCasino">Let’s Lucky Casino</a></li>
                    <li><img src={tv} alt="" /><a href="/lvCasino">	
                    LV BET Casino</a></li>
                    <li><img src={ld} alt="" /><a href="/luckyDream">Lucky Dreams Casino</a></li>
                    <li><img src={nomini} alt="" /><a href="/nomini">Nomini Casino</a></li>
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

export default Roob;
