import React from 'react';

import cokelat from '../img/cokelat.png'
import khijau from '../img/khijau.png'
import tanpaPenPem from '../img/pengawet-pemanis.png'
import freeOngkir1 from '../img/free-ongkir1.png'
import freeOngkir2 from '../img/free-ongkir2.png'
// import testi1 from '../img/testimonial/testimoni1.jpg'
import testi2 from '../img/testimonial/testimoni2.jpg'
// import testi3 from '../img/testimonial/testimoni3.jpg'
// import testi4 from '../img/testimonial/testimoni4.jpg'

import 'jquery/dist/jquery.min.js'
import $ from 'jquery';
import Aos from 'aos';

class Main extends React.Component { 
  componentDidMount() {
    // Preloader
    $(window).on('load', function() {
      if ($('#preloader').length) {
        $('#preloader').delay(5).fadeOut('slow', function() {
          $(this).remove();
        });
      }
    });
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
        e.preventDefault();
        var target = $(this.hash);

        if (target.length) {
          var scrollto = target.offset().top;
          var scrolled = 20;

          if ($('#header').length) {
            scrollto -= $('#header').outerHeight()
            if (!$('#header').hasClass('header-scrolled')) {
              scrollto += scrolled;
            }
          }

          if ($(this).attr("href") === '#header') {
            scrollto = 0;
          }

          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');

          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }

          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          
          return false;
        }
      }
    });
    // navigatioan active state on scroll
    var nav_sections = $('section');
    var main_nav = $('.nav-menu, .mobile-nav');
    $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop() + 80;

      nav_sections.each(function() {
        var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
          if (cur_pos <= bottom) {
            main_nav.find('li').removeClass('active');
          }
          main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }

        if (cur_pos < 300) {
          $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
        }
      });
    });
    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
      } else {
        $('#header').removeClass('header-scrolled');
      }
    });

    if ($(window).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    }    
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });

      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');

      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });

      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });

      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      
      return false;
    });

    // initiate venobox
    // $(document).ready(function() {
    //     $('.venobox').venobox();
    // });

    // $('.testimonials-carousel').owlCarousel({
    //     autoplay: true,
    //     dots: true,
    //     loop: true,
    //     items: 1
    // });
  }

  componentWillUnmount() {
    $(window).off('load', 'click', '.nav-menu a, .mobile-nav a, .scrollto', 'scroll', '**')
  }

  render() {
    Aos.init();
    return (
      <main id="main">
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
                  <a href="/#" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
              </div>
              <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
                <h3>Pia Cianni</h3>
                <p>Merupakan bakpia kering dengan kualitas premium yang berasal dari Kota Palu Sulteng. Pia Cianni dibuat dengan bahan-bahan yang terjamin kualitas dan kebersihanya. Pia Cianni juga dibuat tanpa menggunakan bahan pengawet dan pemanis buatan sehingga anda bisa leluasa menikmatinya bersama keluarga.</p>
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
                  <div className="icon"><i className="bx bx-cookie"></i></div>
                  <h4 className="title">Renyah</h4>
                  <p className="description">Tekstur yang renyah & gurih saat dikunyah membuat kamu ingin ngemil terus </p>
                </div>
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
                  <div className="icon"><i className="icofont icofont-sandwich"></i></div>
                  <h4 className="title">Lembut</h4>
                  <p className="description">Kelembutan teksturnya tidak akan membuat kamu bosan dan capek saat ngunyah</p>
                </div>
                <div className="icon-box" data-aos="zoom-in" data-aos-delay="300">
                  <div className="icon"><i className="icofont icofont-donut"></i></div>
                  <h4 className="title">Legit</h4>
                  <p className="description">Dengan cita rasa yang enak legit dijamin buat kamu ketagihan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="details" className="details">
          <div className="container">
            <div className="content center" data-aos="fade-left">
              <img src={tanpaPenPem} className="img-fluid" alt=""/>
            </div>
            <div className="row content">
              <div className="col-md-6 order-1 order-md-2" data-aos="fade-right">
                <img src={freeOngkir2} className="img-fluid" alt=""/>
              </div>
              <div className="col-md-6 order-1 order-md-2" data-aos="fade-up">
                <img src={freeOngkir1} className="img-fluid" alt=""/>
              </div>
            </div>
          </div>          
        </section>
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Produk</h2>
              <p>Harga Produk</p>
            </div>
            <div className="row" data-aos="fade-left">
              <div className="col-lg-3 col-md-6">
                <div className="box" data-aos="zoom-in" data-aos-delay="100">
                  <span className="advanced">Original</span>
                  <h3>Kacang Hijau</h3>
                  <h4><sup>Rp</sup>20.000</h4>
                  <ul>
                    <li>isi 12 pcs</li>
                  </ul>
                  <div className="card">
                    <img src={khijau} alt="" />
                  </div>
                  <div className="btn-wrap">
                    <a href="https://wa.me/6285328749030" className="btn-buy" target='blank'>Beli</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                <div className="box " data-aos="zoom-in" data-aos-delay="200">
                  <h3>Keju</h3>
                  <h4><sup>Rp</sup>20.000</h4>
                  <ul>
                    <li>isi 12 pcs</li>
                    {/* <li>Varian Rasa Keju</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li> */}
                  </ul>
                  <div className="card">
                    <img src={cokelat} alt="" />
                  </div>
                  <div className="btn-wrap">
                    <a href="https://wa.me/6285328749030" className="btn-buy" target='blank' >Beli</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className="box featured" data-aos="zoom-in" data-aos-delay="300">
                  <h3>Cokelat</h3>
                  <h4><sup>Rp</sup>20.000</h4>
                  <ul>
                    <li>isi 12 pcs</li>
                    {/* <li>Varian Rasa Cokelat</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li> */}
                  </ul>
                  <div className="card">
                    <img src={cokelat} alt="" />
                  </div>
                  <div className="btn-wrap">
                    <a href="https://wa.me/6285328749030" className="btn-buy" target='blank' >Beli</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className="box" data-aos="zoom-in" data-aos-delay="400">
                  <span className="advanced">Promo</span>
                  <h3>Semua Varian</h3>
                  <h4><sup>Rp</sup>???</h4>
                  <ul>
                    <li>???</li>
                    {/* <li>Massa ultricies mi</li> */}
                  </ul>
                  <div className="card">
                    <img src={khijau} alt="" />
                  </div>
                  <div className="btn-wrap">
                    <a href="https://wa.me/6285328749030" className="btn-buy" target='blank' >Beli</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Kontak</h2>
              <p>Hubungi Kami</p>
            </div>
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
                <div className="info">
                  <div className="address">
                    <i className="icofont icofont-google-map"></i>
                    <h4>Lokasi</h4>
                    <p>Jl. Towua 1 Lorong Perjuangan No.6c Palu</p>
                  </div>
                  <div className="email">
                    <i className="icofont icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>piacianni@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="icofont icofont-whatsapp"></i>
                    <h4><a href="https://wa.me/6285328749030" target='blank'>WhatsApp</a></h4>
                  </div>
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
        <a href="/#" className="back-to-top">
          <i className="icofont icofont-simple-up"></i>
        </a>
        <div id="preloader"></div>
      </main>
    );
  }
}

export default Main;