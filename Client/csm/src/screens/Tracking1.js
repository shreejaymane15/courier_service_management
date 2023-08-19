import React from 'react';
import './App.css'

function Tracking() {
    return(<div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Logis Bootstrap Template - Index</title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        {/* <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" /> */}
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
        {/* <link href="assets/vendor/aos/aos.css" rel="stylesheet" /> */}
        {/* Template Main CSS File */}
        <link href="assets/css/main.css" rel="stylesheet" />
        {/* =======================================================
  * Template Name: Logis
  * Updated: Jul 27 2023 with Bootstrap v5.3.1
  * Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        {/* ======= Header ======= */}
        <header id="header" className="header d-flex align-items-center fixed-top ">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
            <nav id="navbar" className="navbar">
              <ul>
                <li><a href="index.html" className="active"><h3>Home</h3></a></li>
              </ul>
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="hero d-flex align-items-center">
          <div className="container">
            <div className="row gy-4 d-flex justify-content-between">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 data-aos="fade-up">Track your Courier</h2>
                <form action="#" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay={200}>
                  <input type="text" className="form-control" placeholder="Type tracking id here..." />
                  <button type="submit" className="btn btn-primary">Track</button>
                </form>
                <center><p data-aos="fade-up" data-aos-delay={100} /><h5>Fill the tracking id correctly</h5><p /></center>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src="assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt="" />
              </div>
            </div>
          </div>
        </section>{/* End Hero Section */}
        {/* ======= Footer ======= */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-5 col-md-12 footer-info">
                <div className="social-links d-flex mt-4">
                  <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                  <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                  <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                  <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="copyright">
              © Copyright <strong><span>SwiftTransit</span></strong>. All Rights Reserved
            </div>
        </div>
        </footer>
        </div>
    );

}

export default Tracking;