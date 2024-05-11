export default function Footerr(props){
  return(
    <footer>
    <section className="bg-secondary">
      <div className="container">
        <div className="row pb-4 pt-5">
          <div className="col-xl-4">
            <h1 className="text-white">LOGO</h1>
          </div>
          <div className="col-xl-4 text-center">
            <a className="btn rounded-circle btn-top" href="#top" role="button" title="Ir para o topo" ><i className="bi bi-arrow-up-short text-white"></i></a>
          </div>
          <div className="col-xl-4 d-flex justify-content-end align-items-center gap-2">
            <a className="btn btn-light border-0" href="https://pt-br.facebook.com/" role="button" target="_blank"><i className="bi bi-facebook"></i></a>
            <a className="btn btn-light border-0" href="https://www.instagram.com/" role="button" target="_blank"><i className="bi bi-instagram"></i></a>
            <a className="btn btn-light border-0" href="https://www.tiktok.com/explore" role="button" target="_blank"><i className="bi bi-tiktok"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 text-center mt-3 mb-1">
            <p className="text-white">{props.copy}</p>
          </div>
        </div>
      </div>
    </section>
  </footer>
  );
}