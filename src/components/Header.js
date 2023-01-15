import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../images/logo2.jpeg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="logo_name">
            <h4>MARS</h4>
            <h6>OVERSEAS</h6>
          </div>
        </div>
        <div className="mynavbar">
          <nav class="navbar navbar-expand-lg bg-white">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-0 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" aria-current="page" to="/">
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        Home
                      </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/ielts">
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        IELTS
                      </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/pte">
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        PTE
                      </p>
                    </Link>
                  </li>

                  {/* dropdown for study destination start */}

                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Study-Destinations
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/usa">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            USA
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/ireland">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            Ireland
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/europe">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            Europe
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/canada">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            Canada
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/australia">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            Australia
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/newzealand">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            New-Zealand
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/asia">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            Asia
                          </p>
                        </Link>
                      </li>
                      <li class="nav-item">
                        <Link class="nav-link" to="study-destination/uk">
                          <p
                            data-bs-toggle="collapse"
                            data-bs-target=".navbar-collapse"
                          >
                            United-kingdom
                          </p>
                        </Link>
                      </li>
                    </div>
                  </li>

                  {/* dropdown for study destination End */}

                  <li class="nav-item">
                    <Link class="nav-link" to="/mbbs-abroad">
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        MBBS-Abroad
                      </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about">
                      <p
                        data-bs-toggle="collapse"
                        data-bs-target=".navbar-collapse"
                      >
                        About
                      </p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a href="tel:+918607927944" className="whatsapp">
                      <p>
                        <Icon
                          className="whatsapp_icon"
                          style={{ fontSize: "32px" }}
                          icon="logos:whatsapp-icon"
                        />
                        <span>91 86079 27944</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;

// data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
