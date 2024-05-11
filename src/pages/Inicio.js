import Navbar from '../components/Navbar.js';
import Header from '../components/Header.js';
import About from '../components/About.js';
import Footer from '../components/Footer.js';


export default function Inicio() {
  return (
    <div className="Inicio">
      <Navbar/>
      <Header/>
      <About/>
      <Footer copy="&copy; Teste React com Bootstrap 2024"/>
    </div>
  );
}