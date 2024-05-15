import ExImg from '../assets/images/ExImg.png';

export default function Header() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ExImg} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={ExImg} className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
          <img src={ExImg} className="d-block w-100" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span aria-hidden="true"><i className="bi bi-arrow-left-circle-fill fs-1"></i></span>
        <span className="visually-hidden">Previous</span>
        
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span aria-hidden="true"><i className="bi bi-arrow-right-circle-fill fs-1"></i></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-caption text-start">
        <h5 className='display-3'>Ajuda humanitária</h5>
        <p className='fs-5'>O nosso trabalho visa comunidades indígenas em situação de vulnerabilidade social. Combatemos a fome, erradicamos pobreza e oferecemos programas de geração de renda.</p>
      </div>
    </div>
  );
}
