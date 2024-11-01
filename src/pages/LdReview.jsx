import React from "react";
import casinoTwo from '../assets/ldTwo.jpg';
import lat from '../assets/letslucky-casino-icon.webp';
import { default as bet, default as ld } from '../assets/lucky-dreams-icone.png';
import casinoThree from '../assets/lucky-dreams-three.jpg';
import { default as casinoOne } from '../assets/luckyOne.jpg';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const LdReview = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>Lucky Dreams Casino</h2>
                <p>Enter the world of Lucky Dreams to play over 9,500+ games, participate in the crypto lottery and claim daily Pick & Dream bonuses.</p>
                <a href="https://www.luckydreams.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad4">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>Lucky Dreams Casino Review </h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>77</p>
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
                    <a href="https://www.luckydreams.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>Up to $/€ 10,000 + up to 500 Bonus Spins </h2>
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
                        <p>9000+ games</p>
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
                <h2>Lucky Dreams Preview</h2>
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
                  <li>Cryptocurrencies are available</li>
                  <li>Exclusive VIP Program and Crypto Lottery</li>
                  <li>Amazing collection of Slots and Table Games</li>
                
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>Win limit of 100,000 per day</li>
                  <li>Max win cap on Welcome Package bonus</li>
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
                  <span>2021</span>
                  <h4>Owner</h4>
                  <span>Dama N.V.</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile, Download</span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Curacao eGaming</span>
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
                  <span>9000+ Games</span>
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
                  <span>Finding the right online casino can be difficult, with hundreds of sites available at your fingertips. Lucky Dreams might be for you if you're looking for a hybrid casino with great game variety and superb promotions. <br />

Lucky Dreams Casino is home to over 9,500+ online casino games from top software developers; it caters to fiat and cryptocurrency players and has plenty of exciting promotions to boost gameplay. This includes its Pick & Dream daily bonuses and the crypto lottery. <br />

Read the full CasinoWow review on Lucky Dreams Casino to see why this online operator has quickly become a favourite.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>Lucky Dreams Casino is a relatively new online casino that hit the gaming industry in 2021. It carries a Curacao Gaming License and is owned and operated by Dama N.V. As a licensed operator, it adheres to strict regulations to provide a secure gaming experience to all players. <br />

Some of the safety measures in place include SSL data encryption and the latest firewall technologies. On top of that, RNG software is used to ensure game outcomes are random and fair. This RNG software is also tested randomly by independent third parties to ensure fairness. <br />

Responsible gaming is encouraged among Lucky Dreams users, and the casino has a page with access to external help resources. You can also opt to exclude yourself from gambling by contacting customer support 24/7.</span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>Get started with a 4-deposit welcome bonus package which you can claim by registering a new player account. From there, you will be required to make a minimum deposit to claim each of the 4 bonuses. <br /> <br />

The first bonus can be claimed straight away, while the 2nd to 4th will require the use of a special bonus code available in the casino's Promotions section. Before any winnings can be withdrawn, the wagering requirements must be met. <br /> <br />

The casino has many promotions, but the Pick & Dream is by far a favourite. With this promotion, you make the required deposit and enter the bonus code DREAM. Then you pick your Lucky Shell and reveal your prize!  <br /> <br />

Let's not forget the Lucky Dreams VIP program, where players are rewarded for their loyalty. The program runs on different travel destinations starting from Atlantic City, with the hope of getting all the way to Las Vegas. With each new destination you reach, you unlock bigger and better rewards, including a trip to Las Vegas when you reach your final destination.</span>
                
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
                    <li><img src={bet} alt="" /><a href="">	
                    BitStarz Casino</a></li>
                    <li><img src={waz} alt="" /><a href="">Wazamba Casino</a></li>
                    <li><img src={lat} alt="" /><a href="">Let’s Lucky Casino</a></li>
                    <li><img src={tv} alt="" /><a href="">	
                    LV BET Casino</a></li>
                    <li><img src={ld} alt="" /><a href="">Lucky Dreams Casino</a></li>
                    <li><img src={nomini} alt="" /><a href="">Nomini Casino</a></li>
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

export default LdReview;
