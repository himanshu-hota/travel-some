import React,{useEffect} from 'react';
import './Offers.scss';
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from 'react-icons/md';
import { FaWifi} from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';



const data = [
  {
    id: '1',
    imgSrc: 'https://images.pexels.com/photos/984869/pexels-photo-984869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'Chin chao',
    location: 'Japan',
    price:3000
  },
  {
    id: '2',
    imgSrc: 'https://images.pexels.com/photos/1115187/pexels-photo-1115187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'San Franciso',
    location: 'America',
    price:5000
  },
  {
    id: '3',
    imgSrc: 'https://images.pexels.com/photos/1115175/pexels-photo-1115175.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Delhi',
    location: 'India',
    price:18000
  },
  {
    id: '4',
    imgSrc: 'https://images.pexels.com/photos/1115167/pexels-photo-1115167.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Raipur',
    location: 'Chattisgarh',
    price:6000
  },
  {
    id: '5',
    imgSrc: 'https://images.pexels.com/photos/2103831/pexels-photo-2103831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    destTitle: 'Mumbai',
    location: 'Maharashtra',
    price:4000
  },
]

const Offers = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro" data-aos='fade-up' data-aos-duration='2500'>
          <h2 className="secTitle">
            Special Offer
          </h2>

          <p>
            From historical cities to natural spectuculars , come see the best of the world!
          </p>

        </div>

        <div className="mainContent grid">

        {
          data.map(item => {
            return (<div className="singleOffer" key={item.id} data-aos='fade-up' data-aos-duration='3000'>
              <div className="destImage">
                <img src={item.imgSrc} alt={item.destTitle} />
                <span className="discount">
                  30% off
                </span>
              </div>

              <div className="offerBody">
                <div className="price flex">
                  <h4>₹{item.price}</h4>
                  <span className="status">
                    For Rent
                  </span>
                </div>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className='icon' />
                  <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                  <MdBathtub className='icon' />
                  <small>1 Bath</small>
                </div>

                <div className="singleAmenity flex">
                  <FaWifi className='icon' />
                  <small>Wi-Fi</small>
                </div>

                <div className="singleAmenity flex">
                  <MdAirportShuttle className='icon' />
                  <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
                <MdLocationOn className='icon' />
                <small>{item.id}50 {item.destTitle} #3{item.id}0,{item.location}</small>
              </div>

              <button className="btn flex">
                View Details
                <BsArrowRightShort className='icon' />
              </button>

            </div>)
          })
        }

          {/* <div className="singleOffer">
            <div className="destImage">
              <img src="https://images.pexels.com/photos/2664046/pexels-photo-2664046.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Location" />
              <span className="discount">
                30% off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>₹100000</h4>
                <span className="status">
                  For Rent
                </span>
              </div>
            </div>

            <div className="amenities flex">
              <div className="singleAmenity flex">
                <MdKingBed className='icon' />
                <small>2 Beds</small>
              </div>

              <div className="singleAmenity flex">
                <MdBathtub className='icon' />
                <small>1 Bath</small>
              </div>

              <div className="singleAmenity flex">
                <FaWifi className='icon' />
                <small>Wi-Fi</small>
              </div>

              <div className="singleAmenity flex">
                <MdAirportShuttle className='icon' />
                <small>Shuttle</small>
              </div>
            </div>

            <div className="location flex">
              <MdLocationOn className='icon' />
              <small>450 Vine #310,London</small>
            </div>

            <button className="btn flex">
              View Details
              <BsArrowRightShort className='icon' />
            </button>

          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Offers;