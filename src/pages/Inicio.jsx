import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';


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