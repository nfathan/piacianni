import imghero from '../../img/piacianni.png';
import LinkOrder from '../LinkOrder';

function HeroInfo() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
          <div data-aos="zoom-out">
            <h1>Bakpia Kering <span>Cianni</span></h1>
            <h2>Nikmati Pia Kering Dengan Tekstur Renyah & Lembut Ditambah Cita Rasa Yang Bikin Kamu Ketagihan </h2>
            <LinkOrder 
              class="text-center text-lg-left" 
              classElmtA="btn-get-started scrollto" 
              text="Beli Sekarang" 
            />
          </div>
        </div>
        <div 
          className="col-lg-5 order-1 order-lg-2 hero-img" 
          data-aos="zoom-out" 
          data-aos-delay="300">
            <img src={imghero} className="img-fluid animated" alt="imghero" />
        </div>
      </div>
    </div>
  )
}

export default HeroInfo