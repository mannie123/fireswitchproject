import React from 'react'
import "./hero.css"
import Navbar from './Navbar'
import img2 from "./images/star.ac0a9a52.png"
import img3 from "./images/goodness.jfif"
import img4 from "./images/down.jpeg"
import {array} from "../Array.js"

const Hero = ({title}) => {
  

  

  return (
    <>
    
     
  
    
    <div class={title?"background":"background background2"}>



        <Navbar/>


    <div class="lob animate__animated animate__fadeInLeft">
          <div class="inno">
            <h1>{title}</h1>
          </div>
          <p class="we">
            We are great at solving business problems with technology
          </p>

          <p class="have">
            We have the experience & Technical experience to solve must of your
            business
          </p>
        </div>



      </div>
    
      <div class="ppp">
        <div class="weeee">
          <div class="wwq animate__animated animate__fadeInDown">
            <h1>We Provide the following Services:</h1>
          </div>
          <div class="olo">
        
      

            <div  class="web wick animate__animated animate__fadeInLeft">
             
              <img src={img2} class="star"  alt="" />
              <h4>Web Development</h4>
              <p>
                We create websites that represent the hand & communicate Brand
                values effectively.
              </p>
            </div>
            <div class="brand wick animate__animated animate__fadeInUp">
           
              <img src={img2} class="star"  alt="" />
              <h4>Branding & Design</h4>
              <p>
                With a proper understanding of design & marketing, we help put
                your brand a beautiful light.
              </p>
            </div>
            <div class="digital wick animate__animated animate__fadeInRight">
            
              <img src={img2} class="star"  alt="" />
              <h4>Digital Marketing</h4>
              <p>
                We know just how to help You get customers using email, content
                marketing, SEO and Social media.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bluestory">
        <div class="blue">
          <div class="mom">
            <div class="bj">
              <div class="whoor">
                <h2>Who We Are?</h2>
                <p>
                  We are tech driven digital agency committed to providing tech
                  solution to common business problems.
                </p>
              </div>

              <div class="whowee">
                <h2>Who We Service?</h2>
                <p>
                  We service business and business owners who seek tech
                  solutions.
                </p>
              </div>
            </div>

            <div class="cj">
              <div class="whygo">
                <h2>Why Go Digital?</h2>
                <p>
                  Going digital offers endless opportunities higher productivity
                  and efficient business decisions.
                </p>
              </div>

              <div class="how">
                <h2>How Can We Help You?</h2>
                <p>
                  We can provide the help and guidance needed to take your brand
                  from where it is to where you need it to be.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="imgs">
          <h1>What makes us different ?</h1>

          {/* <img src="./goodness.jfif" alt="" class="good" /> */}

          <img src={img3}  class="good" alt="" />


          <h4>
            We genuinely care about your business and we constantly think of
            ideas & new technologies to give you your customers the best
            experience.
          </h4>

          <button class="button">
            <a href="#"> GET STARTED</a>
          </button>
        </div>
      </div>

      <div class="twitter">
        <div class="tweet">
          <img src="./twitter.jfif" alt="" class="tw" />

          <div class="maps">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d15824.697895789177!2d3.8953122714447184!3d7.445940190901902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x105162a6bdc03921%3A0x9539a48ff7b83210!2sUniversity%20of%20Ibadan%2C%20Oduduwa%20Road%2C%20Ibadan!3m2!1d7.443309999999999!2d3.900317!4m5!1s0x1039ed30468c5d27%3A0x669f8aa7b9205771!2sSh%C3%A8d%C3%A1%20house%2C%20No%205%2C%20Orogun%2C%20Off%20UI%2C%20Lagos%20-%20Ojoo%20Expy%2C%20Ibadan!3m2!1d7.4548535!2d3.9085007!5e0!3m2!1sen!2sng!4v1655825394617!5m2!1sen!2sng"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="mappy"
            ></iframe> */}
          </div>
        </div>
      </div>

      <div class="black">
        <div class="blk">
          <h1>Want to start a project?</h1>
          <h4>We are ready to bring your ideas to life</h4>

          <button class="buttonss">GET IN TOUCH</button>
        </div>
      </div>

    
    
    
    </>
  )
}

export default Hero