import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "./images/fire logo.png"
import "./navbar.css"

const Navbar = () => {
  return (
    <>

      <div class="innex">
        <div class="nav">
          <img src={img1} class="logo1" alt="" />

          <ul class="animate__animated animate__fadeInUp">
            <Link to="/" className='linker'>Home</Link>

            <Link to={"/Academy/" + "helloooooooo"} className='linker'>Academy</Link>
            <Link to="/Portfolio" className='linker'>Portfolio</Link>
            <Link to="/Contact" className='linker'>Contact</Link>


            <button class="button">ASK QUESTIONS?</button>




          </ul>

          {/* <span class="ham" onclick="openNav()"> <i class="fa-solid fa-bars fa-2x " style="color:#ff9a41"></i></span> */}




        </div>
      </div>





    </>
  )
}

export default Navbar