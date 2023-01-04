import React,{useEffect} from 'react';
import './Home.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';


// useEffect(() => {
//   Aos.init({ duration: 2000 })
// }, [])


const Home = () => {

  useEffect(() => {
      Aos.init({duration:2000})
  }, [])
  

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title" data-aos='fade-up'>
            Plan Your Trip With Travel Dot
          </h1>
          <p className="subTitle" data-aos='fade-up' data-aos-duration='2500'>
            Travel to the favourite city with respectful to the environment
          </p>
          <button className="btn" data-aos='fade-up' data-aos-duration='3000'>
            <a href="/">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv" data-aos='fade-right' data-aos-duration='2000'>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" placeholder='Dream Destination' />
           </div>

          <div className="distDiv" data-aos='fade-right' data-aos-duration='2500'>
            <label htmlFor="distance">Distance</label>
            <input type="text" name="distance" id="distance" placeholder='-- Meters' />
          </div>

          <div className="priceDiv" data-aos='fade-right' data-aos-duration='3000'>
            <label htmlFor="price">Location</label>
            <input type="text" name="price" id="price" placeholder='800₹' />
          </div>

          <button className="btn" data-aos='fade-left' data-aos-duration='3000'>Search</button>

        </div>
      </div>
    </section>
  )
}

export default Home;