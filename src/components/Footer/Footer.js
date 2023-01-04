import React,{useEffect} from 'react';
import './Footer.scss';
import { SiYourtraveldottv } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Footer = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos='fade-up' data-aos-duration='2000'>
            <a href="/" className="logo flex">

              <h1 className="flex">
                <SiYourtraveldottv className='icon' />
                Dot</h1>
            </a>
          </div>

          <div className="social flex" data-aos='fade-up' data-aos-duration='2500'>
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>

        <div className="footerLinks" data-aos='fade-up' data-aos-duration='4000'>
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </div>

        <div className="footerLinks" data-aos='fade-up' data-aos-duration='4000'>
          <span className="linkTitle">
            Helpful Links
          </span>
          <li>
            <a href="/">Destination</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
          <li>
            <a href="/">Travel & Conditions</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </div>

        <div className="footerLinks fLast" data-aos='fade-up' data-aos-duration='4000'>
          <span className="linkTitle">
            Contact Us: 
          </span>
          <span className="phone"> +91 999999999</span>
          
          <span className="email">HimanshuHota55@gmail.com</span>
        </div>


      </div>
    </div>

  )
}

export default Footer;