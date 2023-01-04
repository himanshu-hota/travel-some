import React,{useEffect} from 'react';
import './Blog.scss';
import { BsArrowRightShort } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css';



const data = [
  {
    id:'f23f',
    postImage:'https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&w=300',
    title:"A day full of social media",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate magni rem aut eveniet eos.' 
  },
  {
    id:'s1d6fsd',
    postImage:'https://images.pexels.com/photos/3367850/pexels-photo-3367850.jpeg?auto=compress&cs=tinysrgb&w=300',
    title:'Nothng more than that',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate magni rem aut eveniet eos.'
  },
  {
    id:'45d6s',
    postImage:'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=300',
    title:'Will power to change',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate magni rem aut eveniet eos.'
  },
  {
    id:'bg123',
    postImage:'https://images.pexels.com/photos/5053835/pexels-photo-5053835.jpeg?auto=compress&cs=tinysrgb&w=300',
    title:'Happy journey',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate magni rem aut eveniet eos.'
  }

]

const Blog = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle" data-aos='fade-up' data-aos-duration='2000'>
            Our Blog
          </h2>
          <p data-aos='fade-up' data-aos-duration='2500'>An insight to the incredible experience to the world!</p>
        </div>

        <div className="mainContainer grid">
        {
          data.map(item => {
            return (<div className="singlePost grid" key={item.id} data-aos='fade-up' data-aos-duration='3500'>

              <div className="imgDiv">
                <img src={item.postImage} alt={item.title} />
              </div>

              <div className="postDetails">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>

              <a href="/" className="flex">
                Read more...
                <BsArrowRightShort className='icon' /> 
              </a>
            </div>);
          })
        }
        </div>
      </div>
    </section>
  )
}

export default Blog;