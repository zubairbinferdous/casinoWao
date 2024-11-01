import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import lat from '../assets/letslucky-casino-icon.webp';
import ld from '../assets/lucky-dreams-icone.png';
import tv from '../assets/lvbet-casino-icon2.webp';
import casinoOne from '../assets/lvbet-casino-one.jpg';
import casinoThree from '../assets/lvbet-casino-three.jpg';
import casinoTwo from '../assets/lvbet-casino-two.jpg';
import bet from '../assets/lvbet.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const LvCasino = () => {
    return (
        <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>LV BET Casino</h2>
                <p>LV BET Casino is focussed on efficient customer support and a healthy games selection to keep you coming back for more.

</p>
                <a href="https://lvbet.com/en/casino/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad2">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>LV BET Casino Review</h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>87</p>
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
                    <a href="https://lvbet.com/en/casino/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>Up to $/€ 400 + up to 100 LV spins </h2>
                   <p>
                                                                                                  T&C's Apply. 
                                                                                                                                                   New players only. Min deposit for match bonus $/€ 10. LV spins are available for 5 days on pre-selected games. Wagering 30x bonus amount within 15 days. Max bet is $/€ 5. Ewallets excluded. Gamble responsibly.                                                                                             </p>
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
                        <p>WOW
                        High Roller</p>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview">
                <h2>LV BET  Casino Preview</h2>
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
                  <li>Regular Promotions</li>
                  <li>Special LV Points Rewards Program</li>
                  <li>Very Good Casino Game Collection</li>
                  <li>Exclusive LV Wheel</li>
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>Withdrawal Fees</li>
                  <li>No 24/7 Support</li>
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
                  <span>2015</span>
                  <h4>Owner</h4>
                  <span>Fairload Ltd</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile, </span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Malta Gaming Authority</span>
                  <h4>Languages</h4>
                  <span>English, German, Finnish, Hungarian, Polish, Slovenian, Vietnamese</span>
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
                  <span>LV BET Casino is a full-service online casino site where gamers can play all their favourite games of chance, place sports bets on live and virtual matches and enjoy a well-rounded live casino experience. <br />

After years of offering casino services, they have refined their offering to include not only the latest and greatest in casino games but also all your favourite classics. <br />

The site loads quickly via your Android or iOS smartphone and tablet, which makes it incredibly easy to play casino games on the go. As will many mobile versions of online casino sites, the game catalogue is slightly reduced, however, players will love transacting on their casino account, playing casino games and experiencing the live casino. <br />

While no app is available for the casino side of things, the mobile responsive site shrinks to fit the screen you are using to view it for the most user-friendly experience possible. So, there is no need to download anything, simply load the site using your web browser on your mobile device, log in and start winning.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>With its head office based in Malta, this online casino was established in 2015 and is licensed by both the Malta Gaming Authority. <br /> <br />

The site doesn’t seem to bear the stamp of approval of any 3rd party agency like eCOGRA, however, they have been certified by Casino Meister which indicated that the site is safe and fair. <br /> <br />

LV BET is tough on safety and only wants the best for its customers. You can rest assured that your personal information is safe and sound as LV BET makes use of SSL encryption whenever you’re interacting with the casino. <br /> <br /> </span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>LV BET takes care of existing customers through their LV Points rewards program and the LV Wheel. In order to earn points, simply create a player account and receive points for every cash wager made.

For every 100 points, you can receive €1 in casino credit and you need a minimum of 200 points to start converting those points.

LV Wheel
The LV Wheel is how existing customers benefit from freebies and promotional offers on a daily basis. Simply spin the wheel to receive a bonus credit, free spins, a reload bonus or LV Points.

To activate this wheel of fortune, visit the slot section of the casino and start playing your favourite game. Every wager you make adds to the LV Wheel power bar and, once it has been filled, this will trigger the Wheel.</span>
                
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

export default LvCasino;