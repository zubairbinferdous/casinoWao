/* eslint-disable no-unused-vars */
import React from "react";
import "../App.css";
import bit from "../assets/bitstarz-casino-icon.webp";
import cas from "../assets/casino-bonuses(1).webp";
import casinoBottom from '../assets/casinowow-bottom-logo-home-page(1).png';
import wow from "../assets/CasinoWow-Emoji-homepage.webp";
import helloWeen from "../assets/HalloWOWeen-game.webp";
import imgOne from "../assets/home-top1.svg";
import imgTwo from "../assets/home-top2.svg";
import imgThree from "../assets/home-top3.svg";
import imgFour from "../assets/home-top4.svg";
import imgFive from "../assets/home-top5.svg";
import imgSix from "../assets/home-top6.svg";
import fiveCasino from "../assets/top-five-online-casinos (1).jpg";

const Home = () => {
  return (
    <div>
      <div className="container-fluid mt-50">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero_area_data">
                <h1>
                  Gambling Information, Reviews & Online Casino Insights You Can
                  Trust
                </h1>
                <p>
                  CasinoWow is the leading destination to find the safest
                  regulated online casinos reviewed by experts and home to the
                  best gambling guides and news.
                </p>
              </div>

              <div className="row">
                <div className="col-md-4 ">
                  <div className="hero_data_area_icon">
                    <img src={imgOne} alt="" />

                    <a href="">online Casino</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero_data_area_icon">
                    <img src={imgTwo} alt="" />

                    <a href="">CRYPTO CASINO</a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="hero_data_area_icon">
                    <img src={imgThree} alt="" />

                    <a href="">best Casino</a>
                  </div>
                </div>
                <div className="col-md-4  mt-20">
                  <div className="hero_data_area_icon">
                    <img src={imgFour} alt="" />

                    <a href="">Casino games</a>
                  </div>
                </div>
                <div className="col-md-4 mt-20">
                  <div className="hero_data_area_icon">
                    <img src={imgFive} alt="" />

                    <a href="">Bonuses Casino</a>
                  </div>
                </div>
                <div className="col-md-4 mt-20">
                  <div className="hero_data_area_icon">
                    <img src={imgSix} alt="" />

                    <a href="">Free Slots</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero-area-img"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row Most">
          <h3 className="text-center">Most popular casinos for players</h3>
          {/* <div className="row ">
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="row text-center casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
            <div className=" mtr col-md-1 casino-data p0">
              <div className="row">
                <img src={bit} alt="" />
              </div>
              <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
          </div> */}

<div className="flex-row">
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>


</div>
<div className="flex-row">
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="col-inner">
            <div className="red-box">
            <img src={bit} alt="" />
            </div>
            <div className="yellow-box">
            <div className="casino-data-small">
                <a href="" className="casino-link-area">
                  BitStarz Casino
                </a>
                <a href="" className="button_link">
                  <span>play</span>
                </a>
              </div>
            </div>
        </div>
    </div>


</div>
        </div>
      </div>


      <div className="container">
        <div className="play-area-casino">
          <div className="row">
            <div className="col-md-6">
              <div className="hallowoween">
                <div className="data-area-hallowoween position-area">
                  <h2>UNLOCK THE MYSTERIES OF HALLOWEEN</h2>
                  <h4>WITH OUR HALLOWOWEEN GAME!</h4>
                </div>

                <div className="hall-button  position-area-bottom">
                  <a href="">play now !</a>
                </div>
                <img src={helloWeen} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="hallowoween">
                <div className="data-area-hallowoween position-area">
                  <h2>TOP CASINO PICKS 2024</h2>
                  <h4>FIVE BEST CASINOS LIST</h4>
                </div>

                <div className="hall-button  position-area-bottom">
                  <a href="">play now !</a>
                </div>
                <img src={fiveCasino} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-color-with">
        <div className="container mt20">
          <div className="row pd-20 text-center">
            <h4>Top 5 Bonus Offers - October 2024</h4>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="container mt20">
        <div className="row pd-30 text-center">
          <h4>Latest Online Casino Games</h4>
          <p>
            Find out everything you need to know about the exciting new slot
            releases and choose from the best casino games of 2024. Simply use
            our handy game categories and you'll quickly find the perfect online
            slot, table game, live dealer game, and more to suit your style and
            needs.
          </p>
        </div>
      </div> */}

      <div className="container-fluid bg-color2">
        <div className="container mt20">
        <div className="row pd-30 text-center">
          <h4>Latest Online Casino Games</h4>
          <p>
            Find out everything you need to know about the exciting new slot
            releases and choose from the best casino games of 2024. Simply use
            our handy game categories and you'll quickly find the perfect online
            slot, table game, live dealer game, and more to suit your style and
            needs.
          </p>
        </div>
          <div className="row pd-20 text-center ">
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-2">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="container mt20">
          <div className="row pd-20 text-start ptb">
              <div className="col-md-6">
                   <div className="our-team">
                    <h4>Our team has more than 10 years of dedication to uncovering the best online gambling sites</h4>
                    <p>CasinoWow is on a clear mission: to offer a secure and safe online gambling experience. Our expert writers conduct thorough reviews of the world's top online casinos, providing in-depth analysis and essential data. We strive to equip our audience with everything they need to safely engage in online gambling.</p>
                    <h5>Bet. Win. WOW.</h5>
                   </div>
              </div>
              <div className="col-md-6">
                <img src={wow} alt="" className="img-fluid"/>
              </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-color3">
        <div className="container mt20">
          <div className="row pd-30 text-center ">
            <h4>We Help You Choose <br/>
            The Best Casino Sites Online</h4>
           <p>Learn more about our review process, which sites to avoid, play safe incentive and about us!</p>
          </div>
          <div className="row mb20">
          <div className="col-md-3">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="casino-bonus-data-area">
                <img src={cas} alt="" />
                <h3>Casino Bonuses list for October 2024</h3>
                <p>
                  Take a look at our list of fantastic casino bonuses and cash
                  in one that can kickstart the fun!
                </p>
                <a href="">see all</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="casino-data-bottom">
              <img src={casinoBottom} alt="" />
              <h4>CasinoWow provides the web with top-rated casino reviews & guides</h4>
              <p>CasinoWow is the leading destination to find the most accurate information among the many online casino comparison sites, gambling forums, and casino portals out there. Our team has studied the online casino industry for over a decade. Our main goal is to make your experience safer and more enjoyable by focusing only on you, "the player". <br />
              <br />

              We have many fantastic features that will guide and inform you, but here is a shortlist of the most popular content at CasinoWow:</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="casino-bottom-side-ber">
            <div className="bottom-right-side">
              <h1>Start your online gambling journey at CasinoWow</h1>
              <p>CasinoWow is the leading destination to find the most accurate information among the many online casino comparison sites, gambling forums, and casino portals out there. Our team has studied the online casino industry for over a decade. Our main goal is to make your experience safer and more enjoyable by focusing only on you, "the player". <br /> <br />

We have many fantastic features that will guide and inform you, but here is a shortlist of the most popular content at CasinoWow:</p>
            </div>
            <div className="bottom-right-side">
              <h1>Latest News & Top Stories</h1>
              <p>Learn all about the latest casino news, interesting discoveries, top stories, changes to gambling regulations, and articles from our Blog that you simply have to know more about. Finding helpful and accurate information on the internet can be a problem, but when you’re visiting CasinoWow, you’ll only find the very best. Be sure to check back on a regular basis as new information and news is added daily.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Guides & Gambling Information</h1>
              <p>Are you searching for information to help you on your journey through the casino industry? We have a ton of information for you to enjoy, including casino guides that cover topics such as getting started at an online casino, game guides for just about every casino game available, and so much more.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Online Casino FAQ</h1>
              <p>We know that there are times when you just need a question answered! We’ve compiled a long and thorough list of possible FAQs you may have when perusing the online casino industry. If you don’t find what you’re looking for, contact us, and we’ll do our best to help you out.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Best Online Casinos for 2024</h1>
              <p>Here at CasinoWow, we always work hard to provide you with the finest experience, which is why we spent countless hours researching, evaluating, and rating the WOW top 5 online casinos. We made sure to give you simple access to the best alternatives out of thousands of casino sites available. Your online safety and satisfaction are important to us, and by compiling this specialised list of the five most excellent casinos, we hope to modify industry norms as well and ease your process of choosing the best of the best casinos.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Crypto Casinos, Games & More</h1>
              <p>Following the latest trends in the crypto world, we created a top-notch page dedicated to crypto in the gambling world. You'll find the top crypto casinos, the latest crypto games, crypto bonuses, and useful insights about crypto in general. Read the latest crypto guides, follow the crypto news, and dive into the world of leading crypto casinos in the industry.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Exclusive Casino Bonuses</h1>
              <p>If you love playing at online casinos but prefer to experience new sites with a trusty bonus, take a look at our exclusive casino bonuses section! Only the most rewarding bonuses at top online casinos are featured, so you never have to worry about the safety of your information or your cash.</p>
            </div>
            <div className="bottom-right-side">
              <h1>Online Casino Games</h1>
              <p>The online casino industry is filled to the brim with new casino games all the time. Whether it’s a classic slot or a brand-new table game, we want to ensure that you have all the information you need to make an informed decision. You can’t go wrong when playing fun and exciting casino games rated by us!</p>
            </div>
            <div className="bottom-right-side">
              <h1>Responsible Gambling</h1>
              <p>Finally, we love online casinos as much as you do, and we believe that playing responsibly is of the utmost importance. We have all the information you need about how to gamble responsibly and how to keep yourself safe while doing so. Take a look at our responsible gambling guides and learn how to set limits, make the most of responsible gambling features found at online casinos, and much more.</p>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
