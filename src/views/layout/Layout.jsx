import React from "react";
import Sidebar from "../../components/Sidebar";
import Overlay from "../../components/Overlay";

import styled from "styled-components";
import logo from "../../img/success-logo.png";

import { AiOutlineAlignLeft } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  const clickHumbergurIcon = () => {
    var humbergurIcon = document.querySelector(".c-sidebar");
    var dashboard = document.querySelector(".c-dashboard");
    var overlay = document.querySelector(".c-overlay");

    if (humbergurIcon.classList.contains("c-sidebar-show")) {
      humbergurIcon.classList.remove("c-sidebar-show");
      dashboard.classList.remove("c-dashboard-show");
      overlay.classList.remove("c-overlay-show");
    } else {
      humbergurIcon.classList.add("c-sidebar-show");
      dashboard.classList.add("c-dashboard-show");
      overlay.classList.add("c-overlay-show");
    }
  };

  return (
    <Div>
      <Sidebar />

      <div className="c-dashboard">
        <div className="c-navbar">
          <span
            className="c-humbergur-icon"
            onClick={() => clickHumbergurIcon()}
          >
            <AiOutlineAlignLeft
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            />
          </span>
          <span>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <div
                  className="nav-link"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={logo}
                    alt={logo}
                    width={40}
                    height={40}
                    className="c-navbar-img"
                  />
                </div>
                <div className="dropdown-menu c-dropdown-menu">
                  {/* <a className="dropdown-item c-dropdown-item" href="#">Profil</a>
                  <a className="dropdown-item c-dropdown-item" href="#">Setting</a> */}
                  <NavLink
                    to="/"
                    className="dropdown-item c-dropdown-item"
                    href="#"
                  >
                    Logout
                  </NavLink>
                </div>
              </li>
            </ul>
          </span>
        </div>
        {children}
      </div>

      <Overlay />
    </Div>
  );
}

const Div = styled.div`
  /* dashboard */
  .c-dashboard {
    position: relative;
    left: 0;
    width: 100vw;
    transition: all 0.5s;
    z-index: 2 !important;
    min-height: 100vh;
  }
  .c-dashboard.c-dashboard-show {
    left: 0;
    width: 100vw;
  }
  .c-navbar {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 20px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    width: 100vw !important;
    z-index: 3;
    transition: all 0.5s;
  }
  .c-navbar-img {
    border-radius: 50%;
  }
  .c-dropdown-menu {
    background-color: #faf2ffc9 !important;
    backdrop-filter: blur(5px) !important;
    -webkit-backdrop-filter: blur(5px) !important;
    border: 1px solid transparent;
    border-radius: 10px;
  }
  .c-dropdown-item:focus,
  .c-dropdown-item:hover {
    background-color: #d0d2ff;
    color: #5356fb !important;
  }
  .c-content {
    padding: 15px;
    padding-top: 80px;
  }
  .card {
    background-color: #faf2ff81;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid transparent;
    border-radius: 10px;
  }
  /* akhir dashboard */

  /* responsive */
  @media (min-width: 768px) {
    .c-dashboard {
      left: 220px !important;
      width: calc(100vw - 220px) !important;
    }
    .c-dashboard.c-dashboard-show {
      left: 0 !important;
      width: 100vw !important;
    }
    .c-navbar {
      width: calc(100vw - 220px) !important;
    }
    .c-dashboard.c-dashboard-show .c-navbar {
      width: 100vw !important;
    }
  }
  /* akhir responsive */
`;
