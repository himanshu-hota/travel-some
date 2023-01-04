import React,{useEffect} from 'react';
import './About.scss';
import video from '../../assets/video.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';



const About = () => {


  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hiking?
        </h2>

        <div className="mainContent container grid">

          <div className="singleItem" data-aos='fade-up' data-aos-duration='2000'>
            <img src="https://freesvg.org/img/1435942396.png" alt="Mountains" />
            <h1>100+ Mountains</h1>

            <p>Research shows that a chance to break from the normal rhythms of daily life reduces stress and improves health and well-being</p>

          </div>

          <div className="singleItem" data-aos='fade-up' data-aos-duration='2500'>
            <img src="https://freesvg.org/img/markc09_Backpack_(Green_Brown).png" alt="People on mountain" />
            <h1>1000+ Hiking</h1>

            <p>Research shows that a chance to break from the normal rhythms of daily life reduces stress and improves health and well-being</p>

          </div>

          <div className="singleItem" data-aos='fade-up' data-aos-duration='3000'>
            <img src="https://freesvg.org/img/1529053734.png" alt="Customer Care" />
            <h1>2000+ Customers</h1>

            <p>Research shows that a chance to break from the normal rhythms of daily life reduces stress and improves health and well-being</p>

          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid"> 
            <div className="cardText" >
              <h2>Wonderful house experience in there!</h2>
              <p>The advantage subranking is based on an equally weighted average of scores from fice country </p>
            </div>
            
            
            <div className="cardVideo" >
              <video src={video} autoPlay loop muted type='video/mp4' ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;