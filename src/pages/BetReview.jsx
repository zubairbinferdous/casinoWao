import React from "react";
import { default as casinoOne } from '../assets/Betsafe-Casino-one.jpg';
import casinoTwo from '../assets/Betsafe-Games-two.jpg';
import bet from '../assets/Betsafe-icon2.webp';
import casinoThree from '../assets/BetsafeCasinoThree.jpg';
import lat from '../assets/letslucky-casino-icon.webp';
import ld from '../assets/lucky-dreams-icone.png';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
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
                <a href="https://www.bitstarz.com/">visit casino</a>
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
                    <a href="https://www.bitstarz.com/">View Casino</a>
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
               <div className="pro">
               <h2>Pros</h2>
                <ul>
                  <li>Betsafe Casino App for Android & iOS</li>
                  <li>Super Fast Payouts</li>
                  <li>Award-Winning Casino</li>
                  <li>Best for Slots and Table Games</li>
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>No Gamification features</li>
                  <li>Multiple Restricted Countries</li>
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
                  <span>2006</span>
                  <h4>Owner</h4>
                  <span>BML Group</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile, Download</span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Malta Gaming Authority, Swedish Gambling Authority</span>
                  <h4>Languages</h4>
                  <span>English, Estonian, Latvian/Lettish, Polish, Russian, Swedish</span>
                  <h4>Verification</h4>
                  <span>Fast</span>
                  <h4>VPN</h4>
                  <span>Not allowed</span>
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
                  <span>1000+ Games</span>
                  <h4>Categories</h4>
                  <span>Video Slots, Jackpot Slots, Classic Slots, Fruit Slots, Vegas Slots, High Roller Slots, Exclusive Slots, Live Casino Games, Roulette Games, Blackjack Games, Baccarat Games, Poker Games, Sic Bo Games, Dice Casino Games, VIP Table Games, Video Poker, Bingo, Scratch Cards</span>
                
                </div>
              </div>
              <div className="col-md-6">    <div className="Details-area-one">
              <h4> Total Game Providers</h4>
                  <span>100+</span>
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
                  <span>Having been in the gambling business since 2006, over a decade of dedication has yielded a gambling site that lacks for absolutely nothing. The casino content is sure to meet the needs of every form of gambler out there. <br />

The casino site is well-appointed, clean and very user-friendly, which offers a great experience for players. Navigating through the menus and filtering through games is an easy affair, whether you seek to bet from your desktop or mobile device. <br />

Based in Malta, Betsafe is open to a host of countries, including those that demand some of the strictest regulations out there. The site offers secure and fair gaming that competes with the top casino content available in the world.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>Betsafe have proven to be a top online casino contender in the market. Their Microgaming platform is second to none, offering a world-class experience developed by one of the globe’s oldest and most capable casino suppliers.

The licensing held by Betsafe and its Betsson ownership includes top regulator boards which hold the casino to account when it comes to the quality and reliability of their software, which is regularly independently audited.

Betsafe holds licensing by the Malta Gaming Authority and Spel Inspektionen, who are notorious for their high standards and strictness; </span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>In keeping with all top class online casinos, Betsafe offer bonus offers for both their casino content and for some of their sports betting options. In these cases, industry-standard wagering requirements are stipulated to ensure that players play though at the casino and do not abuse the promotions on offer in good faith.

While bonuses and promotions change from time to time, one thing you can always expect from Betsafe is a welcome casino bonus of some sort, as well as a loyalty rewards program. The Blackgold VIP program is a tiered rewards system that ensures a Rakeback for funds spent while gambling on the site. Rewards vary based on which tier (silver, gold, platinum, and diamond) you find yourself on.</span>
                
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
                    <li><img src={bet} alt="" /><a href="/BetReview">	
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

export default BetReview;
