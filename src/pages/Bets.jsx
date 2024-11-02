import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoTwo from '../assets/bets-io-casino-games.two.jpg';
import { default as casinoOne } from '../assets/bets-io-casino-home.one.jpg';
import bet from '../assets/bets-io-casino-icon.png';
import casinoThree from '../assets/bets-io-mobile-casino.three.jpg';
import lat from '../assets/letslucky-casino-icon.webp';
import { default as ld } from '../assets/lucky-dreams-icone.png';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const Bets = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={bet} alt="" />
                  <h2>Bets.io Casino</h2>
                  <p>Enjoy a sleek and secure online gambling experience with Bets.io - A crypto-only casino that caters to all players.</p>
                  <a href="https://thunderpick.io/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad4">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Bets.io Casino Review</h2>
                  <div className="rank">
                    <div className="rank-point">
                      <img src={rank} alt="" />
                      <p>87</p>
                      <h4>Rank <br />High</h4>
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
                      <a href="https://thunderpick.io/">View Casino</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus-area">
              <div className="row">
                <div className="col-md-8">
                  <div className="bonus">
                     <h2> 100% Bonus up to 1 BTC + 100 Bonus Spins </h2>
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
                          <p>Crypto
                          Casino</p>
                        </div>
                      </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="preview">
                  <h2>Bets.io Casino Preview</h2>
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
                    <li>Livespins feature</li>
                    <li>Instant Deposits & Withdrawals</li>
                    <li>Crypto casino</li>
                    <li>Amazing games lobby</li>
                    <li>Sports betting</li>
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li>No Fiat payments</li>
                    <li>Responsible Limits only through support</li>
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
                    <span>Bets Entertainment N.V.</span>
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
                    <span>English, Czech, German, Finnish, French, Hungarian, Norwegian, Polish, Portuguese, Russian, Turkish</span>
                    <h4>Verification</h4>
                    <span>Fast</span>
                    <h4>VPN</h4>
                    <span>allowed</span>
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
                    <span>If you’ve been searching for a sleek and modern crypto casino that can cater to your online gambling needs, don’t miss out on what Bets.io offers. <br /><br />

This casino is easy on the eyes, sporting a pitch-black theme with futuristic designs. Navigating the site is simple, and it also offers many different ways to play. Thanks to the easy registration process, you’ll know that this online casino is something special from the moment you sign up with a single click. <br /><br />

Join us as we explore what makes this a safe crypto casino option, the games that are available, who the casino owners are, and much more - all in our Bets.io Casino review.<br /> <br /> </span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Bets.io Casino is owned and operated by Bets Entertainment N.V., a trusted company that owns many other online casinos. The site has a Curacao eGaming license, which is trusted by many around the globe. <br /><br />

Thanks to this license, the use of cryptocurrency as a payment option, the top-tier SSL encryption and the 2-factor authentication available, you can rest assured that you’re in good hands. You can play with confidence and peace of mind. </span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>As soon as you sign up for an account, you’ll receive a generous crypto bonus—the offer will differ depending on whether you're playing casino games or betting on sports. You can choose which welcome bonus suits you best, but don’t forget to check back regularly. <br />

The casino offers exciting promotions that are always being updated. These offers include weekly free spins, weekend reload bonuses, cashback offers, free bets, and more. <br />
 
You can also explore daily contests and tournaments, the casino lottery, and huge jackpot prize pools!</span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>Here at CasinoWow, we appreciate casinos that provide the best experience for their customers. You’ll find this in droves at Bets.io. We recommend this crypto-only casino if you want to enjoy great promotions, super fast withdrawals, and a wide range of casino games. <br /> <br />

However, it’s important to note that no fiat payment methods are available if you don’t have access to crypto. You can also only access the responsible gambling tools via the support team, so be sure to drop in and chat with them.</span>
                  
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

export default Bets;