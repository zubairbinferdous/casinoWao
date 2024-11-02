import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoTwo from '../assets/fortune-panda-casino-games.y.jpg';
import { default as casinoOne } from '../assets/fortune-panda-casino-home.on.jpg';
import casinoThree from '../assets/fortune-panda-mobile-casino.th.jpg';
import bet from '../assets/FortunePanda-casino-icon.webp';
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

const Fortune = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={bet} alt="" />
                  <h2>Fortune  Casino</h2>
                  <p>Join the most adorable creatures at Fortune Panda Casino for relaxed days, a generous welcome bonus, VIP rewards and 11,000+ games.</p>
                  <a href="https://www.fortunepanda.com/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Fortune  Casino Review</h2>
                  <div className="rank">
                    <div className="rank-point">
                      <img src={rank} alt="" />
                      <p>77</p>
                      <h4>Rank<br />good</h4>
                    </div>
                    <div className="rank-score">
                      <img src={trust} alt="" />
                      <h4>Trust Score
                      <br /> Okay</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="casino-review-button text-center">
                      <a href="https://www.fortunepanda.com/">View Casino</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus-area">
              <div className="row">
                <div className="col-md-8">
                  <div className="bonus">
                     <h2> 450% up to $/€1000 + 150 Free Spins</h2>
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
                          <p>10000+ games</p>
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
                  <h2>Fortune  Casino Preview</h2>
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
                    <li>Crypto-friendly casino</li>
                    <li>Excellent game portfolio</li>
                    <li>VIP Program</li>
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li>Deposits may incur charges</li>
                    <li>Monthly max withdrawal limit applies to progressive jackpot wins</li>
                    <li>No sports betting</li>
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
                    <span>2020</span>
                    <h4>Owner</h4>
                    <span>Versus Odds B.V.</span>
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
                    <span>English, Arabic, Bulgarian, Danish, German, Greek, Spanish, Finnish, French, Hindi, Japanese, Polish, Portuguese, Russian, Serbian, Swedish, Turkish, Chinese</span>
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
                    <span>10000+ Games</span>
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
                    <span>Fortune Panda is a crypto-friendly online casino that caters to fiat and crypto casino players. The platform has a massive game library featuring 11,000 casino games from over 100 of the best software providers in the industry. <br />

Players on this platform will always have something new and exciting to try, whether they prefer slots, table games, jackpot titles or even virtual sports. The promotional section always features offers to boost gameplay for new and regular players. <br />

The platform runs smoothly on desktop and mobile and has a rewarding VIP Program. Learn more about Fortune Panda Casino in this dedicated CasinoWow review.</span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Fortune Panda Casino is a modern platform that was established in 2020. It offers crypto and fiat gameplay options. Versus Odds B.V. owns the site and has licensing from Curacao eGaming. <br />

Player safety is a priority, and the platform ensures that all customer data is encrypted and protected via VeriSign SSL. This ensures that players can play easily, knowing the highest online security is used. <br />

Responsible gaming is encouraged, and an entire page is dedicated to it. With Fortune Panda Casino, you can set your daily deposit limits or take some time off from gameplay via the restrictions tab on your profile. You can freeze your account for up to a year or opt for self-exclusion. </span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>With Fortune Panda, players can indulge in the most exciting bonuses and promotions. They start with a choice of welcome offers: a crypto welcome bonus and a general welcome bonus. Both offers come with a large deposit match percentage bonus. Terms and conditions apply, including minimum deposit limits, maximum payouts, and wagering requirements. <br />

There are plenty of offers for regular players, including weekly reload offers, daily cashbacks and free spins. You can also participate in tournaments on the week's provider to grab your share of the prize pool. <br />

We can’t leave out the VIP Program, which offers exclusive benefits and bonuses that are instantly withdrawable. The VIP program comes with 4 ranks, and as you climb the ranks, you gain access to special bonuses, cashbacks without restrictions, a monthly bonus, and a level-up gift.</span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>If you’ve been looking for a crypto-friendly casino with an excellent game portfolio, Fortune Panda Casino is CasinoWow’s top recommendation. The platform offers over 11,000 casino games, including jackpot titles and crash games, as well as a generous range of bonuses and VIP Rewards.

Some things to note are that Fortune Panda has a monthly max withdrawal limit on progressive jackpot wins, no sports betting options and some payment methods may incur charges.</span>
                  
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

export default Fortune;