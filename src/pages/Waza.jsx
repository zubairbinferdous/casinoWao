import React from "react";
import lat from '../assets/letslucky-casino-icon.webp';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';

import bet2 from '../assets/Betsafe-icon2.webp';
import ld from '../assets/lucky-dreams-icone.png';
import { default as casinoOne } from '../assets/wazambaOne.jpg';
import casinoThree from '../assets/wazambaThree.jpg';
import casinoTwo from '../assets/wazambaTwo.jpg';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const Waza = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={waz} alt="" />
                <h2>Wazamba Casino</h2>
                <p>Enter the jungle of Wazamba Casino for premium gaming with over 1500 games, exciting bonus promotions, tournaments and more every day.</p>
                <a href="https://wazamba.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad3">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>Wazamba Casino Review</h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>73</p>
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
                    <a href="https://wazamba.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2> 100% up to €500/ ₹40,000 + 200 Bonus Spins </h2>
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
                        <p>5000+ games</p>
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
                <h2>Wazamba Casino Preview</h2>
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
                  <li> 24/7 Support</li>
                  <li>Great bonuses and promotions</li>
                  <li>Fiat and Crypto Currencies</li>
                
                </ul>
               </div>
              </div>
              <div className="col-md-6">

                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li> Various Country Restrictions</li>
                  <li>Low withdrawal limits</li>
                  <li>No weekend withdrawals</li>
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
                  <span>Araxio Development N.V.</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile</span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Curacao eGaming</span>
                  <h4>Languages</h4>
                  <span>English, Czech, German, Finnish, Hindi, Hungarian, Italian, Japanese, Norwegian, Polish, Portuguese, Russian, Turkish</span>
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
                  <span>5000+ Games</span>
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
                  <span>Most modern online casinos have a look and feel that players are familiar with experiencing. If you are in the market for a unique online experience with exquisite loyalty rewards, then Wazamba Casino is the place to be! <br /><br />

Wazamba offers a jungle adventure theme with bold, animated designs and lively designs. The casino has more than 1500 games from top software providers in the industry. It is fully licensed and able to operate in 10 different languages. <br /><br />

Here you’ll get to play games, unlock achievements and customise your personal Tiki Totem - making every day one packed with rewards, excitement and mystery. <br /><br />

You can access Wazamba Casino from anywhere at any time via a desktop, tablet or mobile device. Keep reading for more on what this fun and gamified online casino has to offer.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>Launched in 2019, Wazamba Casino is part of the 7 Stars Partners Group. It is fully licensed and regulated by the Curacao Gaming Authority. With licensing in place, it adheres to strict rules and regulations to ensure a secure experience for all players. <br /> <br />

The casino has all the best safety features and security technology in place. As well as SSL data encryption for transactions and storing sensitive information. <br /> <br />

Responsible gambling is encouraged and there are several tools available that are provided to assist those in need of them.</span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>In the wild world of Wazamba, rewards grow on trees and the harvest is always fruitful. It all starts with a lucrative welcome offer exclusively available to new players. <br /> <br />

The new player offer includes a welcome bonus and free spins. This offer is for new players only and can be claimed when the minimum deposit requirements are met on the first deposit. All bonuses are subject to wagering requirements before any winnings can be withdrawn. <br /> <br />

From the welcome bonus, there are weekly cashback, drops and wins and other offers available to boost your weekly gameplay. With the Loyalty Program, you get to collect coins through your daily gameplay which can later be converted into a bonus. These coins can be used in the shop to purchase exciting rewards and other goods. <br /> <br />

Tournaments are always running at Wazamba with big cash prizes up for grabs for leading players. You can take on your fellow players to win cash, loyalty coins or other prizes in the various tournaments running throughout the month. <br /> <br />

As you play, you can unlock achievements for even more rewards and other goodies from the casino.</span>
                
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

export default Waza;
