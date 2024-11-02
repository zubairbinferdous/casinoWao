import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoTwo from '../assets/Immerion-casino-games.two.jpg';
import { default as casinoOne } from '../assets/Immerion-casino-home.one.jpg';
import imr from '../assets/Immerion-casino-icon.webp';
import casinoThree from '../assets/Immerion-mobile-casino.three.jpg';
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

const Immer = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={imr} alt="" />
                  <h2>Immerion Casino</h2>
                  <p>Step into Immerion Casino's high-end gaming realm to enjoy an extensive game collection and a big welcome bonus.</p>
                  <a href="https://immerion.com/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad4">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Immerion Casino Review</h2>
                  <div className="rank">
                    <div className="rank-point">
                      <img src={rank} alt="" />
                      <p>73</p>
                      <h4>Rank <br />High</h4>
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
                      <a href="https://immerion.com/">View Casino</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus-area">
              <div className="row">
                <div className="col-md-8">
                  <div className="bonus">
                     <h2> Up to $/€ 8000 Welcome Package Offer</h2>
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
                          <p>6000+ games</p>
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
                  <h2>Immerion Casino Preview</h2>
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
                    <li>Engine of Fortune</li>
                    <li>Extensive games collection</li>
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li>No info about VIP program or Promos</li>
                    <li>Limited Responsible Gambling tools</li>
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
                    <span>Goodwin N.V.</span>
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
                    <span>English, Bulgarian, Czech, Danish, German, Greek, Spanish, Finnish, French, Croatian, Hungarian, Indonesian, Italian, Japanese, Dutch, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Slovenian, Serbian, Swedish</span>
                    <h4>Verification</h4>
                    <span>Fast</span>
                    <h4>VPN</h4>
                    <span> allowed</span>
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
                    <span>6000+ Games</span>
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
                    <span>If you prefer an elegant and classic online casino look with a modern, user-friendly interface that makes navigation less of a hassle, then you may want to explore a crypto-friendly online casino like Immerion Casino. <br />

This user-friendly platform features high-quality graphics and animations, generous offers, and an extensive game collection featuring over 6,000 titles from the best providers. It is a crypto-focused platform that will appeal to tech-savvy players. The platform is optimised for mobile devices, and the visuals keep their charm on all devices. <br />

If you’re curious about the games and promotions this mobile-friendly platform has to offer, read the dedicated CasinoWow review for more information. <br /> <br /> </span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Immerion Casino is a fresh face on the online gaming scene. The operator popped up online in 2024 and is owned and operated by Goodwin N.V. It is licensed and regulated by Curacao eGaming. <br />

As a licensed online casino platform, they strongly focus on secure gaming for all players. SSL data encryption and other security technologies are implemented to provide a safe experience. This includes the use of blockchain technology and trusted payment options. <br />

Its dedicated Responsible Gaming platform strives to provide users with a quality betting environment where they implement control. There are tools you can use to set limits on your gameplay and an option to track your activity. You can also opt to self-exclude at any time. You can contact the customer support team to implement any of these measures.</span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>Bonuses and promotions can quickly determine a player's experience. While the platform only displays select offers and provides little information about the VIP program or other promotions, there are a couple of generous offers to look out for. <br />

We start with a massive welcome bonus offer that can be claimed after successful registration. Remember that the deposit match bonus and free spins offer have strict terms and conditions, including wagering requirements. <br />

The platform has daily and weekly cashback, which awards cashbacks weekly. You can access the casino's Telegram channel for additional cashbacks. Then, there is the Engine of Fortune, activated with a deposit of €50 or more. You will receive Fortune Spins throughout your gameplay. Then, you can spin the Engine of Fortune to unlock one of 16 prizes, which include ETH, deposit sums of up to 100%, and even bigger cashbacks. <br /></span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>Immerion Casino makes it onto CasinoWow’s top recommendation list for its user-friendly navigation and extensive game collection. You can’t ignore the Engine of Fortune awarding different bonus prizes or the secure payment methods this crypto-friendly platform offers. <br />

While the withdrawal limits are low for new players, they can be increased by climbing the VIP ranks. Register with Immerion Casino today for a big welcome boost and start exploring over 6,000 high-quality games</span>
                  
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

export default Immer;