import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import lat from '../assets/letslucky-casino-icon.webp';
import ld from '../assets/lucky-dreams-icone.png';
import tv from '../assets/lvbet-casino-icon2.webp';
import nomini from '../assets/nomini-casino-icon.webp';
import rank from "../assets/rank-image.svg";
import { default as casinoOne } from '../assets/satoshi-hero-casino-games.one.jpg';
import casinoTwo from '../assets/satoshi-hero-casino-home.two.jpg';
import casinoThree from '../assets/satoshi-hero-mobile-casino.three.jpg';
import bet from '../assets/SatoshiHero-casino-icon (1).webp';
import trust from "../assets/trusted-score-green.svg";
import waz from '../assets/wazamba-casino-icon1.png';
import wowCasinoRate from '../assets/wow_best_rated.svg';
import wowCasino from '../assets/wow_mobile_casino.svg';
import Footer from "./Footer";
import Header from "./Header";

const Set = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={bet} alt="" />
                  <h2>Satoshi   Casino</h2>
                  <p>Enter the crypto-only casino Satoshi Hero and ride towards daily rewards, 7000+ casino games, and a chance to win money on the Fortune Wheel.</p>
                  <a href="https://satoshihero.com/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad4">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Satoshi   Casino Review</h2>
                  <div className="rank">
                    <div className="rank-point">
                      <img src={rank} alt="" />
                      <p>87</p>
                      <h4>Rank   <br />good</h4>
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
                      <a href="https://satoshihero.com/">View Casino</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bonus-area">
              <div className="row">
                <div className="col-md-8">
                  <div className="bonus">
                     <h2> Free spin on the Fortune Whee</h2>
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
                          <p>7000+ games</p>
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
                  <h2>Satoshi   Casino Preview</h2>
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
                    <li>Various cryptocurrencies are available</li>
                    <li>VIP Program</li>
                    <li>Attractive Rewards</li>
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li> Responsible gambling limits only through support</li>
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
                    <span>2022</span>
                    <h4>Owner</h4>
                    <span>Bitplay Global B.V.</span>
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
                    <span>English, German, Spanish, French, Indonesian, Japanese, Korean, Portuguese, Russian, Thai, Turkish, Chinese</span>
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
                    <span>7000+ Games</span>
                    <h4>Categories</h4>
                    <span>Video Slots, Jackpot Slots, Classic Slots, Fruit Slots, Vegas Slots, High Roller Slots, Dice Slots, Branded Slots, Live Casino Games, Roulette Games, Blackjack Games, Baccarat Games, Poker Games, Craps Games, Sic Bo Games, Other Casino Card Games, Dice Casino Games, VIP Table Games, Video Poker, Keno, Bingo, Scratch Cards, Crash Games</span>
                  
                  </div>
                </div>
                <div className="col-md-6">    <div className="Details-area-one">
                <h4> Total Game Providers</h4>
                    <span>50+</span>
                    <h4>Providers</h4>
                    <span>NetEnt, Novomatic, Play'n GO, Big Time Gaming, Betsoft, Evolution Gaming, Merkur Gaming, Playtech, Quickspin, Pragmatic Play, Push Gaming, Relax Gaming, Hacksaw Gaming, Nolimit City, Amatic, BGaming, Ezugi, Habanero, Playson, Red Tiger Gaming, Wazdan, Belatra, Evoplay, Endorphina, Mascot, PG Soft, Platipus, Spinomenal</span>
                  
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
                    <span>If you’re looking for a cryptocurrency-based online casino, you can’t go wrong with Satoshi Hero. This crypto-only operator offers high-quality gameplay and various cryptocurrencies across desktop and mobile devices. <br />

Users can enjoy over 7,000 games from top software providers like Big Time Gaming, Evolution, and NetEnt. While trying out the different slots, crash games, and live dealer variants, you can boost gameplay with daily offers and a spin on the Fortune Wheel, leading to more offers or free cash. <br />

Learn more about Satoshi Hero Casino and why it’s so popular in this dedicated CasinoWow review.</span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Satoshi Hero is a respected online gaming platform for crypto casino players that launched in 2022. Bitplay Global B.V. owns it and is available in various languages, including English, Spanish, German, French, Turkish, Thai, Korean, Japanese, and Russian. <br />

The platform is licensed and regulated by Curacao eGaming and adheres to strict regulatory requirements to ensure random and fair gameplay. SSL data encryption is incorporated, and games are provably fair. <br />

While a page dedicated to responsible gambling and self-exclusion is easily accessible at the bottom of the site, the responsible gambling limits are only accessible through customer support. You can use some tips, resources, and helplines, but it would be nice to see a couple of features added for more control over your account and gameplay. </span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>Aside from the range of crypto methods and massive game library, the casino also features attractive rewards and a quality VIP program. While you may be surprised to see that the structure surrounding rewards is slightly different, you’ll also see that it’s a lot more rewarding. What stands out is that all bonuses are with no wagering requirements. There are weekly bonuses, monthly bonuses and Level Rewards. Players can also enjoy the free Fortune Wheel where they can try their luck every 24h to win various prizes. <br />

The platform has an amazing VIP Club where you can climb the ranks to upgrade your VIP Level. There are 6 different VIP levels, each with 5 sublevels. With each new level you reach, you get instant rewards and prizes. There is also a rakeback bonus that increases with each new level you reach. The platform promotions have set terms and conditions, including minimum deposits and a 24-hour expiration on the offers. <br /></span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>Satoshi is a great site for gamblers wanting to have access to many various forms of betting. It is your one-stop-shop from casino games to sportsbooks, offering the finest customer service and holding a good reputation in the industry.</span>
                  
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

export default Set;