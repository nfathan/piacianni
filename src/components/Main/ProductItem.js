import LinkOrder from "../LinkOrder"

function ProductItem(props) {
  return (
    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
      <div className="box " data-aos="zoom-in" data-aos-delay={props.dataAosDelay}>
      <span className={props.class}>{props.spanText}</span>
        <h3>{props.h3Text}</h3>
        <h4><sup>Rp</sup>20.000</h4>
        <ul>
          <li>isi 12 pcs</li>
        </ul>
        <div className="card">
          <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <LinkOrder 
          class="btn-wrap" 
          classElmtA="btn-buy" 
          text="Beli" 
        />
      </div>
    </div>
  )
}

export default ProductItem