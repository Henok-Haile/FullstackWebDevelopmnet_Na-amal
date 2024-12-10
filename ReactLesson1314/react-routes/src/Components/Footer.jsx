import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top w-100 h-100">
      <div className="container d-flex justify-content-between py-4">
        <div className="col-md-4">
          <h5>Features</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-decoration-none text-blue">
                Cool stuff
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-dark">
                Random feature
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-dark">
                Team feature
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-decoration-none text-dark">
                Resource
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-none text-dark">
                Resource name
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>About</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-decoration-underline text-dark">
                Team
              </a>
            </li>
            <li>
              <a href="/" className="text-decoration-underline text-lightblue">
                Locations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
