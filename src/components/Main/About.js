import Keunggulan from './Keunggulan';

function About() {
  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
            <a href="https://nfathan.github.io/piacianni/" target="blank" ><i className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></i></a>
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>Pia Cianni</h3>
            <p>Merupakan bakpia kering dengan kualitas premium yang berasal dari Kota Palu Sulteng. Pia Cianni dibuat dengan bahan-bahan yang terjamin kualitas dan kebersihanya. Pia Cianni juga dibuat tanpa menggunakan bahan pengawet dan pemanis buatan sehingga anda bisa leluasa menikmatinya bersama keluarga.</p>
            <Keunggulan 
              dataAosDelay="100"
              class="bx bx-cookie"
              title="Renyah"
              desc="Tekstur yang renyah & gurih saat dikunyah membuat kamu ingin ngemil terus"
            />
            <Keunggulan 
              dataAosDelay="200"
              class="icofont icofont-sandwich"
              title="Lembut"
              desc="Kelembutan teksturnya tidak akan membuat kamu bosan dan capek saat ngunyah"
            />
            <Keunggulan 
              dataAosDelay="300"
              class="icofont icofont-donut"
              title="Legit"
              desc="Dengan cita rasa yang enak legit dijamin buat kamu ketagihan"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About