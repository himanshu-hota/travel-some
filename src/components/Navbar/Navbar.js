import React,{useState,useEffect} from 'react';
import './Navbar.scss';
import { SiYourtraveldottv } from 'react-icons/si';
import { TbGridDots } from 'react-icons/tb';
const Navbar = () => {

    const [active, setActive] = useState('navbar');
    const [transparent, setTransparent] = useState('header');

    const handleNavClass = () => {
        if (window.scrollY > 100) {
            setTransparent('header activeHeader');
        } else {
            setTransparent('header ');
        }
    }    


    useEffect(() => {

        window.addEventListener('scroll', handleNavClass);

        return () => {
            window.removeEventListener('scroll', handleNavClass);
        }

    }, [])
    

    const showNavbar = () => {
        
        if(active.includes('active')){
            setActive('navbar');
        }else{
            setActive('navbar activeNavbar');
        }
    }

    

    return (
        <section className="navbarSection">
            <div className={transparent}>
                <div className="logoDiv">
                    <a href='/' className="logo">
                        <h1> <SiYourtraveldottv className='icon' /> Dot </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navList flex">
                        <li className="navItem">
                            <a href="/" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className="navLink">Products</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className="navLink">Resources</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className="navLink">Contacts</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className="navLink">Blog</a>
                        </li>

                        <li className="navItem">
                            <a href="/" className="navLink">Home</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn"> <a href="/">Login</a></button>
                            
                            <button className="btn "> <a href="/">Sign up</a></button>
                        </div>
                    </ul>

                </div>

                <div className="toggleNavbar" onClick={showNavbar}>
                    <TbGridDots className='icon' /> 
                </div>

            </div>
        </section>
    )
}

export default Navbar;