// import testi1 from '../../img/testimonial/testimoni1.jpg'
import testi2 from '../../img/testimonial/testimoni2.jpg'
// import testi3 from '../../img/testimonial/testimoni3.jpg'
// import testi4 from '../../img/testimonial/testimoni4.jpg'

function Testimonials() {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="owl-carousel testimonials-carousel" data-aos="zoom-in">
            {/* <div className="testimonial-item">
              <img src={testi1} className="testimonial-img" alt=""/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div> */}
            <div className="testimonial-item">
              <img src={testi2} className="testimonial-img" alt=""/>
              <h3>nfathan</h3>
              <h4>Frontend Developer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                Beda banget nih pia kering, teksturnya tidak seret di leher ditambah rasanya nggak bosanin 
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
            {/* <div className="testimonial-item">
              <img src={testi3} className="testimonial-img" alt=""/>
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
            <div className="testimonial-item">
              <img src={testi4} className="testimonial-img" alt=""/>
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div> */}
          </div>
        </div>
      </section>
    )
}

export default Testimonials

