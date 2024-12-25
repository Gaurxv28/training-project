import React, { useEffect } from 'react'
import './Contact.css'
import Footer from './Footer'
import Reserve from './Reserve'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (

    <div>
      <br />
      <br />
      <div className="hero" >

        <div className="text" data-aos="fade-up">
          <h1>Say Hii</h1>
          <p><b>We are happy to get in contact with you!</b></p>
        </div>

      </div>

      <Reserve></Reserve>

      <p className='m-5' data-aos="fade-right"><b> Gill Park, Gill Road, Ludhiana-141006</b></p>

      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-sm-12 col-lg-12 col-md-12">
            <iframe className="mp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6849.88470209866!2d75.86188839999998!3d30.860288999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a828f06288cbf%3A0x7b7a27e1fb7b4fe6!2sGill%20Park%2C%20Ludhiana%2C%20Punjab%20141006!5e0!3m2!1sen!2sin!4v1734858251636!5m2!1sen!2sin" width="100%" height="300px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"  ></iframe>
            {/* <iframe className="mp" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1750679.0145499166!2d75.401169!3d31.018030999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1670925152074!5m2!1sen!2sin" width="100%" height="300px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  */}
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>


      <Footer></Footer>

    </div>

  )
}
