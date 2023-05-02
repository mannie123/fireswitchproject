import React from 'react'
import "./academyhero.css"
import Navbar from './Navbar'
import img15 from "../Component/images/mrtim.jpg"
import img16 from "../Component/images/normalguy.jpg"



const Academyhero = ({title}) => {
  return (

   <>
      <div class="background">


<Navbar/>

 <div class="lob animate__animated animate__fadeInLeft">
          <div class="inno">
               <h1>{title}.</h1>
          </div>
          <p class="we">
            You want to learn?
            We want to help you learn fast.
          </p>

          <p class="have">
            We have figured out how to learn fast and we have just the right environment to help you thrive.
          </p>
         </div>
         </div>
         
<div class="beginning">
            
            
            <h1>Sheda House Academy</h1>
            

   <div class="end">

<div class="mrtimmy">
   
 <h1>Web Development</h1>
   
 {/* <img src="./mrtim.jpg" alt="" class="tin animate__animated animate__fadeInLeft"> */}
 
 <img src={img15} class="tin animate__animated animate__fadeInLeft" alt="" />
 
</div>

<div class="learning">
<h3>Learning to code is as simple as ABC. With the right environment and mentors you would soon be building great websites.</h3>
 
<ul>
 <li>+ HTML</li>
 <li>+ CSS</li>
 <li>+ BOOTSTRAO</li>
 <li>+ JAVASCRIPT</li>
 <li>+ REACT/PHP</li>
 <li>+ PRODUCT MANAGEMENT</li>
 
</ul>
<button class="btn"><a href="">REGISTER NOW</a></button>

</div>
</div>
 
          </div>
   <div class="nextblue">
              
              
              <div class="toflex">
                
                
                <div class="thetext">
                  
                  <h4>There are businesses out there who are doing great work but no one knows about them. The point of this course is to show you how you can help them using the following</h4>
                  
                  <ul>
                    <li>+ GRAPHIC DESIGN</li>
                    <li>+ CONTENT CREATION</li>
                    <li>+ SOCIAL MEDIA MANAGEMENT</li>
                    <li>+ ADS MANAGEMENT</li>
                    <li>+ COPY WRITING</li>
                    
                    
                  </ul>
                  <button class="btn"> <a href="">REGISTER NOW</a></button>
                  
                </div>
                
                
                <div class="pkk">
                  
                  <h2>
                    
                    Branding and Design
                  </h2>
                  
                  <div class="normal">
                    
                    {/* <img src="./normalguy.jpg" alt="" class="normalguys animate__animated animate__fadeInLeft"> */}
                    <img src={img16} class="tins animate__animated animate__fadeInLeft" alt="" />
 
                  </div>
                </div>
                
              </div>
              
              
            </div>
   
   </>
    

  )
}

export default Academyhero