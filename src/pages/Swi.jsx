import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import { default as casinoOne } from '../assets/Swiper-casino-games.two.jpg';
import casinoThree from '../assets/Swiper-casino-home.one.jpg';
import bet from '../assets/Swiper-casino-icon.webp';
import casinoTwo from '../assets/Swiper-mobile-casino.two.jpg';
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

const Swi = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={bet} alt="" />
                  <h2>Swiper  Casino</h2>
                  <p>Swiper is a unique hybrid casino that combines the best of social media and online casino gameplay with over 10,000 games.</p>
                  <a href="https://swiper.com/en/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Swiper Casino Review</h2>
                  <div className="rank">
                    <div className="rank-point">
                      <img src={rank} alt="" />
                      <p>80</p>
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
                      <a href="https://swiper.com/en/">View Casino</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus-area">
              <div className="row">
                <div className="col-md-8">
                  <div className="bonus">
                     <h2>100% up to $/€500 + 200 Bonus Spins  </h2>
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
                  <h2>Swiper  Casino Preview</h2>
              <div className="row text-center">
                 <div className="col-md-4">
                  <img src={casinoOne} alt="" className="img-fluid" />
                  <p>Casino Lobby</p>
                 </div>
                 <div className="col-md-4">
                  <img src={casinoThree} alt="" className="img-fluid" />
                  <p>Casino Games</p>
                 </div>
                 <div className="col-md-4">
                  <img src={casinoTwo } alt="" className="img-fluid" />
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
                    <li>Cryptocurrencies available</li>
                    <li>Unique game preview option</li>
                    <li>Amazing selection of games</li>
                    
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li>No weekend withdrawals</li>
                    <li>No Responsible Gambling tools</li>
                    <li>Low withdrawal limit for new players</li>
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
                    <span>2024</span>
                    <h4>Owner</h4>
                    <span>Adonio N.V</span>
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
                    <span>English, Czech, German, Greek, Spanish, Finnish, French, Hungarian, Italian, Norwegian, Polish, Portuguese</span>
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
                    <span>If you enjoy scrolling social media and have ever wondered what it would be like to have those same social elements on a casino platform, then you want to check out Swiper Casino. This online casino combines betting with the popular TikTok reel swipe mechanic. <br />

It’s something new and different, not to mention the massive game library and the opportunity to deposit and play using trusted cryptocurrencies and fiat payment options. Whether you prefer slots, table games, or live casino entertainment, there are games and generous bonuses to boost your gameplay. <br />

Curious? Learn more about Swiper Casino in this dedicated CasinoWow casino review.</span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Swiper Casino debuted in late 2024. The platform is owned and operated by Adonio N.V. and licensed and regulated by Curacao eGaming. <br />

The online gaming platform takes safety very seriously and uses SSL data encryption and other measures to ensure the security of player and financial data. Games run through random number generator software to ensure a secure gameplay experience. <br />

One thing that the platform could afford to add is responsible gaming measures. Currently, there are no responsible gambling tools or resources, which is considered one of the platform's few drawbacks. </span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>One of the most important elements of online gaming platforms are the casino bonuses and promotions available. With the right bonus boost, you can extend your online gameplay for quite an impressive time. <br />

It starts with a generous welcome bonus that can be claimed after successful account registration. The offer is linked to strict terms and conditions, including wagering requirements that must be met before any withdrawals. Once you’ve received the welcome bonus, you can look forward to other exciting offers, such as cashbacks, reloads and more. <br />

There is currently no visible loyalty program, but with the weekly promotions that ensure you get an additional boost every day of the week, you don’t miss as much. However, the addition of a VIP program can only be beneficial.</span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>Suppose you’re looking for a unique online betting experience where the modern platform utilises the best elements of the popular social media platform TikTok. In that case, you should take a chance on Swiper Casino. It’s a hybrid online gaming platform with crypto payment methods, a massive game library, and generous features.

Things to remember about this platform are its lack of weekend withdrawal and responsible gambling tools. New players also have a relatively low withdrawal limit.</span>
                  
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

export default Swi;