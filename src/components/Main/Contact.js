import ContactItem from './ContactItem'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Kontak</h2>
          <p>Hubungi Kami</p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
              <ContactItem 
                class1="address"
                class2="icofont icofont-google-map"
                h4Text="Lokasi"
                pText="Jl. Towua 1 Lorong Perjuangan No.6c Palu"
              />
              <ContactItem 
                class1="email"
                class2="icofont icofont-envelope"
                h4Text="Email:"
                pText="piacianni@gmail.com"
              />
              <ContactItem 
                class1="phone"
                class2="icofont icofont-whatsapp"
                h4Text={<a href="https://wa.me/6285328749030" target='blank'>WhatsApp</a>}
              />
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <div className="card">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15957.205837123229!2d119.8824501!3d-0.9222585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf336c31f82236a5c!2sPia%20Cianni!5e0!3m2!1sid!2sid!4v1612187730062!5m2!1sid!2sid" title="alamat-piacianni"  height="550" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 