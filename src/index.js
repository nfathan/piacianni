import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@icon/icofont/icofont.css';
import 'boxicons/css/boxicons.min.css';
import 'venobox/venobox/venobox.css';
import 'remixicon/fonts/remixicon.css';
// import 'owl.carousel/dist/assets/owl.carousel.css'
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'aos/dist/aos.css';

import './styles/index.css';

import 'jquery/dist/jquery.min.js'
import 'jquery.easing/jquery.easing.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'owl.carousel/dist/owl.carousel.js'
// import 'owl.carousel/dist/owl.carousel.min.js'
// import 'venobox/venobox/venobox.min.js'
// import 'waypoints/lib/jquery.waypoints.min.js'
// import 'counterup/jquery.counterup.min.js'
import 'aos/dist/aos.js'

import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
