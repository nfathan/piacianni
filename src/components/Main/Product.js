import ProductItem from './ProductItem';

import cokelat from '../../img/cokelat.png'
import khijau from '../../img/khijau.png'

function Product() {
  return (
    <section id="product" className="pricing">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Produk</h2>
          <p>Harga Produk</p>
        </div>
        <div className="row" data-aos="fade-left">
          <ProductItem 
            dataAosDelay="100"
            class="advanced"
            spanText="Original"
            h3Text="Kacang Hijau"
            imgSrc={khijau}
            imgAlt="kacang-hijau"
          />
          <ProductItem 
            dataAosDelay="200"
            h3Text="Keju"
            imgSrc={cokelat}
            imgAlt="keju"
          />
          <ProductItem 
            dataAosDelay="300"
            h3Text="Cokelat"
            imgSrc={cokelat}
            imgAlt="cokelat"
          />
          <ProductItem 
            dataAosDelay="400"
            class="advanced"
            spanText="Promo"
            h3Text="Semua Varian"
            imgSrc={khijau}
            imgAlt="semua-varian"
          />
        </div>
      </div>
    </section>
  )
}

export default Product 