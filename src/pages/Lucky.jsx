import React from "react";
import bet2 from '../assets/Betsafe-icon2.webp';
import { default as bet, default as lat } from '../assets/letslucky-casino-icon.webp';
import casinoOne from '../assets/letsluckyOne.jpg';
import casinoTwo from '../assets/letsluckyThree.jpg';
import casinoThree from '../assets/letsluckyTwo.jpg';
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

const Lucky = () => {
    return (
        <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="casino-overview text-center">
               <img src={bet} alt="" />
                <h2>Let’s Lucky Casino</h2>
                <p>Add a little luck to your gameplay with Let's Lucky Casino as you dive into over 9,500 casino games from top software providers.

</p>
                <a href="https://www.letslucky.com/">visit casino</a>
            </div>
          </div>
          <div className="col-md-8">
          <div className="casino-bg-grad3">
          <div className="row">
              <div className="col-md-6 rank-data">
                <h2>Let’s Lucky Casino Review</h2>
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
                    <a href="https://www.letslucky.com/">View Casino</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bonus-area">
            <div className="row">
              <div className="col-md-8">
                <div className="bonus">
                   <h2>Up to $/€ 4500 + up to 300 Bonus Spins </h2>
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
                        <p>9000+
                        Games</p>
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
                  <li>Amazing collection of Slots and Table Games</li>
                  <li>Exclusive VIP Program & Tournaments</li>
                  <li>Cryptocurrencies are available</li>
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
                  <span>2022</span>
                  <h4>Owner</h4>
                  <span>Hollycorn N.V.</span>
                  <h4>Type</h4>
                  <span>Hybrid, Instant Play, Mobile, Download </span>
                  <h4>Platforms</h4>
                  <span>macOS, Microsoft Windows, Tablet, Smartphone, Phablet, iPad, iPhone, iPod, Android Phone, Android Tablet, Windows Mobile</span>
                </div>
              </div>
              <div className="col-md-6">
              <div className="Details-area-one">
              <h4>Licenses</h4>
                  <span>Curacao eGaming</span>
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
                  <span>Picking an online casino is a tough process, as there are many things to consider. If you want a casino where luck just might be sprinkled extra generously, then Let's Lucky Casino is one to consider. <br />

This hybrid casino accepts fiat and crypto payments and has various cryptocurrency options. If game variety is what you're after, then you'll adore this site's selection of over 9,500+ games. On top of that, there are an exclusive VIP program and game tournaments to partake in. <br />

Read the full CasinoWow review to find out all there is to know about Let's Lucky Casino.</span>
                
                </div>
              </div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Security and Licenses</h4>

                  <span>Let's Lucky Casino launched in 2022 and is owned and operated by Hollycorn N.V. It carries a Curacao Gaming License and provides service in English, German, Norwegian, French, and Finnish. <br /> <br />

Security is a main priority, and the latest security measures are implemented to provide a safe gaming experience. This includes SSL data encryption and other security software to secure all player information and transactions. Games fairness is tested by independent third parties. <br /> <br />

Responsible Gaming is a top priority, and there are tools and tips to assist players in staying on track. Options for a Time-out or Self-exclusion are available for anyone who needs to take a break.</span>
                
              </div></div>
              <div className="col-md-12">    <div className="Details-area-one">
              <h4> Bonuses and Promotions</h4>

                  <span>Get ready to change your luck with the best bonuses and promotions from Let's Lucky Casino. You'll have access to generous rewards to boost your gameplay from the get-go. <br /> <br />

New players who register at Let's Lucky Casino are treated to a 4-deposit welcome bonus package. The first bonus requires only a deposit, but from the second deposit bonus onwards, you'll need to use a special bonus code when making your deposit to claim the offer. Wagering requirements must be fulfilled to withdraw any winnings, and there is a max win cap on the welcome bonus package. <br /> <br />

The casino has many other exciting promotions, including daily bonuses, free spins, and reload rewards. A big drawcard is the VIP program, where you can climb the ranks by playing your favourite games. The VIP program plays on travel fun, with each level being a different place. <br /> <br />

There is Sydney, Tokyo, Amsterdam, Goa, New York, Ibiza, and Las Vegas. You start in Sydney and travel all the way to Las Vegas as you climb the ranks. With each level, you earn access to bigger rewards. And if you make your way to the Las Vegas level, you could score a trip to Las Vegas in real life.</span>
                
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

export default Lucky;