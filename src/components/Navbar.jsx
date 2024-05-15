import {Link, useLocation} from 'react-router-dom'

export default function Navbarr() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
      <Link className="navbar-brand text-black fs-1" to="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-black ${location.pathname === '/' ? 'active' : ''}`} to="/">Início</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-black ${location.pathname === '/quem-somos' ? 'active' : ''}`} to="/quem-somos">Quem Somos</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link fs-5 text-black ${location.pathname === '/nossos-projetos' ? 'active' : ''}`} to="/nossos-projetos">Nossos Projetos</Link>
            </li>
            <li className="nav-item">
            <button type="button" className="btn btn-outline-dark rounded-3">Ajude-nos agora</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
