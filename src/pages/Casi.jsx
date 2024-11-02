import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import casinoThree from '../assets/CasiGO-casino-games.two.jpg';
import casinoOne from '../assets/CasiGO-casino-home.one.jpg';
import wid2 from '../assets/CasiGO-casino-icon.webp';
import casinoTwo from '../assets/CasiGO-mobile-casino.three.jpg';
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


const Casi = () => {
    return (
        <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={wid2} alt="" />
                <h2>CasiGO Casino</h2>
                <p>Enjoy a trusted and fair gaming experience with great daily promotions and VIP benefits at CasiGO Casino.

</p>
                <a href="https://www.casigo.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad2">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>CasiGO Casino Review</h2>
                <div className="rank">
                  <div className="rank-point">
                    <img src={rank} alt="" />
                    <p>80</p>
                    <h4>Rank   <br />High</h4>
                  </div>
                  <div className="rank-score">
                    <img src={trust} alt="" />
                    <h4>Trust Score
                    <br /> Good</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="casino-review-button text-center">
                    <a href="https://www.casigo.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>100% up to $/€ 1100 + 375 Bonus Spins</h2>
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
                        <p>Fiat
                        Casino</p>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="preview">
                <h2>CasiGO  Casino Preview</h2>
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
               
                <img src={casinoTwo} alt="" className="img-fluid" />
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
                  <li>UKGC licensed casino</li>
                  <li>Great responsible gambling options</li>
                  <li>VIP & Loyalty Programs</li>
                  <li>Pay N Play option</li>
                </ul>
               </div>
              </div>
              <div className="col-md-6">
                <div className="con">
                <h2>Cons</h2>
                <ul>
                  <li>Slow withdrawals</li>
                  <li>No cryptocurrencies are available</li>
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
                  <span>White Hat Gaming Limited</span>
                  <h4>Type</h4>
                  <span>Fiat, Instant Play, Mobile, </span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>UK Gambling Commission, Malta Gaming Authority

</span>
                  <h4>Languages</h4>
                  <span>English, German, Spanish, Finnish, French, Norwegian, Portuguese</span>
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
                  <span>Online casino players who enjoy a clean website layout with access to daily promotions and a wide range of casino games will definitely find CasiGO to be a favourable online gaming platform. <br />

CasiGO is a licensed online casino brand with fair gaming action for fiat currency players. Countries like Finland can also easily register with the Pay ‘n Play option. <br />

The site is accessible via desktop and mobile devices, with the option to enjoy a spectacular selection of 1,500+ games from reputable gaming operators. Gameplay can be boosted with the range of daily promotions or extra incentives provided by the VIP and Loyalty program.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>CasiGO is a fresh online gaming platform that was launched in 2020. It’s a White Hat Gaming Limited brand with licensing from the UK Gambling Commission and the Malta Gaming Authority. <br />

The platform is devoted to providing a secure experience to all with the latest security measures in place, including SSL data encryption and modern firewall technologies. The games run through RNG for a fair and random outcome, and Game RTPs are available at the bottom of the casino page. <br />

Responsible gambling is encouraged, and player protection tools can help you implement player settings like deposit limits, take a break with the time-out option or opt for self-exclusion. </span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>Bonuses and promotions can make the gaming experience thrilling or frustrating. At CasiGO, players benefit from a wide selection of generous promotions, from daily rewards to exclusive VIP and Loyalty benefits. <br />

CasiGO welcomes new players with a generous bonus package. It’s a four-deposit welcome bonus package that awards deposit match bonuses and free spins. To claim each of the bonuses, you need to register a new player account and meet the terms and conditions. br 


Aside from an impressive welcome package the platform has a promotion running every day. Not to mention the VIP Honours Club and Loyalty rewards. The VIP club has 4 tiers, and with each tier, you get access to bigger rewards, including weekly bonus add-ons and cashbacks.</span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> CasinoWow Summary</h4>
                  <span>CasinoWow highly recommends CasiGO due to its wide range of 1,500+ games, generous promotions, exciting VIP benefits, and the Pay ‘n Play option. The fresh design and user-friendly layout also make it a breeze to explore.

Some things that could be improved are the slow withdrawals and the lack of cryptocurrency payment methods. If the platform adds cryptocurrency options, it could reach a new level of popularity.</span>
                
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

export default Casi;