import ImageFluid from '../ImageFluid';

import tanpaPenPem from '../../img/pengawet-pemanis.png'
import freeOngkir1 from '../../img/free-ongkir1.png'
import freeOngkir2 from '../../img/free-ongkir2.png'

function Details() {
  return (
    <section id="details" className="details">
      <div className="container">
        <div className="content center" data-aos="fade-left">
          <ImageFluid source={tanpaPenPem} altImg="tanpa-pengawet-pemanis" />
        </div>
        <div className="row content">
          <div className="col-md-6 order-1 order-md-2" data-aos="fade-right">
            <ImageFluid source={freeOngkir2} altImg="free-ongkir-2" />
          </div>
          <div className="col-md-6 order-1 order-md-2" data-aos="fade-up">
            <ImageFluid source={freeOngkir1} altImg="free-ongkir-1" />
          </div>
        </div>
      </div>          
    </section>
  )
}

export default Details