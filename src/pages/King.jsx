import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoTwo from '../assets/Kingmaker-casino-games.two.jpg';
import { default as casinoOne } from '../assets/Kingmaker-casino-home.one.jpg';
import king from '../assets/Kingmaker-casino-icon.png';
import casinoThree from '../assets/Kingmaker-mobile-casino.three.jpg';
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

const King = () => {
    return (
        <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="casino-overview text-center">
                 <img src={king} alt="" />
                  <h2>Kingmaker  Casino</h2>
                  <p>Claim your throne with this hybrid casino, Kingmaker’s regular bonuses, VIP rewards and a wide range of over 8,000 casino games</p>
                  <a href="https://kingmaker.com/en/">visit casino</a>
              </div>
            </div>
            <div className="col-md-8">
            <div className="casino-bg-grad4">
            <div className="row">
                <div className="col-md-6 rank-data">
                  <h2>Kingmaker Casino Review</h2>
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
                      <a href="https://kingmaker.com/en/">View Casino</a>
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
                          <p>8000+ games</p>
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
                  <h2>Kingmaker Casino Preview</h2>
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
                    <li>Deposits & withdrawals in cryptocurrencies</li>
                    <li>Wide variety of Casino Games</li>
                    <li>Sports & Live Betting</li>
                    <li>Tournaments, Shop & VIP Levels</li>
                  </ul>
                 </div>
                </div>
                <div className="col-md-6">
                  <div className="con">
                  <h2>Cons</h2>
                  <ul>
                    <li>Withdrawing funds over the weekend is not possible</li>
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
                    <span>Rabidi NV</span>
                    <h4>Type</h4>
                    <span>Fiat, Instant Play, Mobile</span>
                    <h4>Platforms</h4>
                    <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                  </div>
                </div>
                <div className="col-md-6">
                <div className="Details-area-one">
                <h4>Licenses</h4>
                    <span>PAGCOR</span>
                    <h4>Languages</h4>
                    <span>English, Bulgarian, Czech, Danish, German, Greek, Spanish, Finnish, French, Croatian, Hungarian, Indonesian, Italian, Japanese, Dutch, Norwegian, Polish, Portuguese, Romanian, Russian, Slovak, Slovenian, Serbian, Swedish</span>
                    <h4>Verification</h4>
                    <span>Fast</span>
                    <h4>VPN</h4>
                    <span>not allowed</span>
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
                    <span>8000+ Games</span>
                    <h4>Categories</h4>
                    <span>Video Slots, Jackpot Slots, Classic Slots, Fruit Slots, Vegas Slots, High Roller Slots, Exclusive Slots, Live Casino Games, Roulette Games, Blackjack Games, Baccarat Games, Poker Games, Sic Bo Games, Dice Casino Games, VIP Table Games, Video Poker, Bingo, Scratch Cards</span>
                  
                  </div>
                </div>
                <div className="col-md-6">    <div className="Details-area-one">
                <h4> Total Game Providers</h4>
                    <span>50+</span>
                    <h4>Providers</h4>
                    <span>Microgaming, NetEnt, Novomatic, Play'n GO, Big Time Gaming, Yggdrasil, Betsoft, Evolution Gaming, Merkur Gaming, Thunderkick, Playtech, Quickspin, Pragmatic Play, Push Gaming, Relax Gaming, Hacksaw Gaming, Nolimit City, Amatic, BGaming, ELK Studios, Ezugi, Gamomat, Habanero, Playson, Red Tiger Gaming, Wazdan, Amusnet, 1x2 Gaming, Booming Games, Endorphina, Just for the Win, Spinomenal, Stakelogic, Casino Technology, Rabcat, Evoplay</span>
                  
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
                    <span>Suppose you’re an avid online casino player who enjoys gaming platforms featuring great rewards, a wide variety of casino games, and sports and live betting options. In that case, Kingmaker Casino is for you!. <br />

Kingmaker is a gaming platform where you can find over 8,000 casino games. It’s also a hybrid casino, which means you can fund your account with either crypto or fiat payments. This operator keeps players on their toes by rewarding VIP levels, bonuses, and tournaments. <br />

It’s ideal for players across the globe, with gameplay available in several languages across desktop and mobile devices. Find out all there is to know about Kingmaker Casino in this CasinoWow review.<br /> <br /> </span>
                  
                  </div>
                </div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Security and Licenses</h4>
  
                    <span>Kingmaker Casino is an online gaming platform that launched in 2024. It is owned and operated by Rabidi NV and was licensed and regulated by Curacao eGaming. On July 1, 2024, the casino successfully transitioned from its previous license in Curacao to a new license with PAGCOR. <br />

As a licensed gaming operator, the platform is dedicated to player safety, meeting strict requirements to ensure a secure betting experience. This includes the use of the best security measures like SSL data encryption. <br />

The platform is committed to responsible gambling. Its dedicated Responsible Gaming page gives access to a self-questionnaire and information on organisations that can provide assistance. You can also email the support team to opt for self-exclusion.</span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> Bonuses and Promotions</h4>
  
                    <span>Bonuses and promotions can greatly boost your betting experience and allow you to play your favourite games much longer. At Kingmaker Casino, there’s no shortage of promotions and generous offers for all players. <br />

New players are welcome with a massive welcome bonus, which includes the chance to win a big jackpot in the prize pool. To claim the offer, you need to register your new player account, make a qualifying first deposit and claim your bonus. Other terms to keep in mind are the wagering requirements and the time limit. <br />

The site features daily promotions, including deposit match bonuses, free spins, and tournaments with extra prizes. It also has a 5-level VIP program where you can increase your withdrawal limits, get cashback, invites for exclusive trips, and receive personalised promotions. <br /></span>
                  
                </div></div>
                <div className="col-md-12">    <div className="Details-area-one">
                <h4> CasinoWow Summary</h4>
  
                    <span>There are many online casinos, which may make it difficult to decide on one to call your virtual gaming home. If you want a hybrid casino with thousands of games, sports betting options, and a rewarding VIP program, then CasinoWow recommends Kingmaker Casino.

Factors to keep in mind are that the platform does not offer weekend withdrawals, and new players start with a low withdrawal limit. You can increase the withdrawal limit by participating in gameplay and increasing your VIP level.

Register your new Kingmaker Casino player account today to grab the big welcome bonus.</span>
                  
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

export default King;