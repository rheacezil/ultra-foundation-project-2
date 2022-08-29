import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark py-5 position-relative">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-4 px-5">
            <Link to="/" className="brand text-decoration-none text-white">
              Ultra Foundation
            </Link>
            <p className="text-white mt-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea
              error consectetur illum? Sint voluptatibus quae, sed et
              consectetur earum?
            </p>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3">Contact Us</h5>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="bi bi-pin-map-fill"></i>
              </span>
              <span className="fw-light">
                Ultra Street, Angeles City, Pampanga, Philippines
              </span>
            </div>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="bi bi-phone"></i>
              </span>
              <span className="fw-light">09999321456</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 px-5">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <i className="bis bi-facebook"></i>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <i className="bis bi-twitter"></i>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <i className="bis bi-instagram"></i>
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <i className="bis bi-telegram"></i>
              </li>
            </ul>
          </div>
          <Link to="/" className="position-absolute start-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle text-warning h1"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
