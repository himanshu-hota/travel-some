import React,{useEffect} from 'react';
import './Popular.scss';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';




const data = [
  {
    id: '1',
    imgSrc: 'https://images.pexels.com/photos/984869/pexels-photo-984869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'Chin chao',
    location: 'Japan',
    grade: '7.5'
  },
  {
    id: '2',
    imgSrc: 'https://images.pexels.com/photos/1115187/pexels-photo-1115187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'San Franciso',
    location: 'America',
    grade: '7.0'
  },
  {
    id: '3',
    imgSrc: 'https://images.pexels.com/photos/1115175/pexels-photo-1115175.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Delhi',
    location: 'India',
    grade: '6.9'
  },
  {
    id: '4',
    imgSrc: 'https://images.pexels.com/photos/1115167/pexels-photo-1115167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Raipur',
    location: 'Chattisgarh',
    grade: '8.2'
  },
  {
    id: '5',
    imgSrc: 'https://images.pexels.com/photos/2103831/pexels-photo-2103831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Mumbai',
    location: 'Maharashtra',
    grade: '7.8'
  },
]

const Popular = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv" data-aos='fade-right' data-aos-duration='2500'>
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>From the historical cities to natural specteculars, come see the best of the world!</p>
          </div>

          <div className="iconsDiv flex" data-aos='fade-left' data-aos-duration='2500'>
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon rightIcon' />
          </div>
        </div>

        <div className="mainContent grid">

        {data.map(location => {
          return (<div key={location.id} className="singleDestination" data-aos='fade-up'>
            <div className="destImage">
              <img src={location.imgSrc} alt="title" />

              <div className="overlayInfo">
                <h3>{location.destTitle}</h3>
                <p>{location.location}</p>

                <BsArrowRightShort className='icon rightIcon' />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">
              0{location.id}
              </div>

              <div className="destText flex">
                <h6>
                  {location.location}
                </h6>

                <span className="flex">
                  <span className="dot">
                    <BsDot className='icon' />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>)
            })
}

        </div>
      </div>
    </section>
  )
}

export default Popular;