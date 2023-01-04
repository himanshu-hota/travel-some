import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Popular from './components/Popular/Popular';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Popular />
        <Offers />
        <About />
        <Blog />
        <Footer />
    </>
  );
}

export default App;

