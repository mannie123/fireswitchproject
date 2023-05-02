import React from 'react'
import { useParams } from 'react-router-dom'
import Academyhero from '../Component/Academyhero.js'
import Footer from '../Component/Footer.js'



const Academy = () => {

  const{message} = useParams()
  console.log(message)
  return (
    <>
    
  
   <Academyhero title={message}/>
    <Footer/>
    


    </>
  )
}

export default Academy