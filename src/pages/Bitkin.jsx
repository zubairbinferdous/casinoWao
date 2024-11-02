import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import { default as casinoOne } from '../assets/bitkingz-casino-games-two.jpg';
import casinoTwo from '../assets/bitkingz-casino-one.jpg';
import bet from '../assets/bitkingz-icon.webp';
import casinoThree from '../assets/bitkingz-mobile-casino-three.jpg';
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

const Bitkin= () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>BitKingz  Casino</h2>
                <p>BitKingz Casino provides the royal treatment with high roller bonuses, over 2,000 games and around-the-clock customer support.</p>
                <a href="https://www.bitkingz.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad4">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>BitKingz  Casino Review</h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>70</p>
                    <h4>Rank <br />Good</h4>
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
                    <a href="https://www.bitkingz.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>Up to $/€ 3000 + up to 225 Bonus spins </h2>
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
                        <p>2000+ games</p>
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
                <h2>BitKingz  Casino Preview</h2>
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
                  <li> Huge gaming library</li>
                  <li>BitkKingz VIP Club</li>
                  <li>Cryptocurrency available</li>
                 
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>No phone support</li>
                  <li>Payouts can be faster</li>
                  <li>Low withdrawal limits</li>
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
                  <span>Dama N.V.</span>
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
                  <span>English, Arabic, Czech, German, Spanish, Finnish, French, Hindi, Japanese, Norwegian, Polish, Portuguese, Russian</span>
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
                  <span>2000+ Games</span>
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
                  <span>Unleash your inner child for epic adventures and royal rewards at BitKingz Casino. This thrilling online casino comes with a modern design, great bonuses and over 2,000 casino games. <br />

The casino opened its doors earlier in 2020 and is operated by Dama N.V. In 2023 made a full redesign with a fresh new modern, and user-friendly website. It is powered by industry-leading software providers such as Yggdrasil Gaming, NetEnt and Playtech. With top security features and licensing from Curacao, it ensures a secure gaming experience. <br />

There are plenty of payment methods to choose from when funding your account, ranging from fiat to cryptocurrency options. Customer support is also available 24/7 to assist with all questions and queries.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>BitKingz Casino launched earlier in 2020 and is another online gaming space operated by Dama N.V. The casino is licensed and regulated by Curacao eGaming and adheres to strict rules and regulations. <br /> <br />

Under the licensing agreement, the casino has plenty of security protocols to ensure player information is kept secure. This includes SSL data encryption technology, the latest firewall and malware solutions. <br /> <br />

BitKingz encourages responsible gambling among players and provides a number of tools for players to use. This includes account limits as well as the option to self-exclude when the need arises. </span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>In the pixelated kingdom of BitKingz, you can expect to find plenty of bonuses and promotions. For new and loyal players, there is always a reward waiting to be claimed. <br />

New players can look forward to a generous welcome bonus package. You need to create a new casino account and make a minimum deposit. All welcome offers are subject to wagering requirements before withdrawal can be made from your account. <br />

Also, you can enjoy the thrill of the spinning wheel multiple times a day. There are 4 types of wheels with different spin ticket prices and corresponding prizes. <br />

For loyal players, there are daily offers to enjoy, including King’z Chest. The casino also has a superb VIP program that allows you to enjoy a few gamification features. You will be entering another world, starting to collect King'z Points, and with each level, enjoy more perks, try them all and get the real VIP feeling. With each new level, bigger and better rewards await. <br />
</span>
                
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

export default Bitkin;
