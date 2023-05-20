import React from "react";
import styled from "styled-components";
import logo from "../img/success-logo.png";

import {
  AiFillWindows,
  AiFillApple,
  AiFillAndroid,
  AiOutlineArrowDown,
  AiFillSetting,
  AiFillTool,
  AiFillHdd,
  AiFillPieChart,
  AiFillContacts,
  AiFillDollarCircle,
  AiFillFolderOpen,
  AiFillFolder,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const activeMenu = (e) => {
    var navLink = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }

    e.currentTarget.classList.add("active");
  };

  return (
    <Div>
      <div className="c-sidebar">
        <span>
          <div className="c-sidebar-logo-container">
            <div>
              <span className="c-sidebar-logo">
                <img src={logo} alt={logo} width={60} />
              </span>
              <span className="c-sidebar-logo-title">Admin Panel</span>
            </div>
          </div>
          <div className="sidebar-menu-container">
            <div>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span
                  style={{
                    fontSize: "16px",
                    color: "#5356FB",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Menu
                </span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item active" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/dashboard" className="nav-link c-nav-link">
                    <AiFillWindows className="c-icon-nav-link" />
                    Dashboard
                  </NavLink>
                </li>
                <div className="accordion" id="accordionExample">
                  <li className="nav-item" onClick={(e) => activeMenu(e)}>
                    <a
                      className="nav-link c-nav-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <AiFillHdd className="c-icon-nav-link" />
                          Components
                        </div>
                        <AiOutlineArrowDown />
                      </div>
                    </a>
                  </li>
                </div>
                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    <li className="nav-item" onClick={(e) => activeMenu(e)}>
                      <NavLink to="/component1" className="nav-link c-nav-link">
                        <AiFillApple className="c-icon-nav-link" />
                        Components 1
                      </NavLink>
                    </li>
                    <li className="nav-item" onClick={(e) => activeMenu(e)}>
                      <NavLink to="/component2" className="nav-link c-nav-link">
                        <AiFillAndroid className="c-icon-nav-link" />
                        Components 2
                      </NavLink>
                    </li>
                  </div>
                </div>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/contact" className="nav-link">
                    <AiFillContacts className="c-icon-nav-link" />
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/chart" className="nav-link">
                    <AiFillPieChart className="c-icon-nav-link" />
                    Chart
                  </NavLink>
                </li>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/wallet" className="nav-link">
                    <AiFillDollarCircle className="c-icon-nav-link" />
                    Wallet
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span
                  style={{
                    fontSize: "16px",
                    color: "#5356FB",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Page
                </span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/" className="nav-link">
                    <AiFillFolderOpen className="c-icon-nav-link" />
                    Login
                  </NavLink>
                </li>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/register" className="nav-link">
                    <AiFillFolder className="c-icon-nav-link" />
                    Register
                  </NavLink>
                </li>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/forgot_password" className="nav-link">
                    <AiFillFolder className="c-icon-nav-link" />
                    Forgot Password
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span
                  style={{
                    fontSize: "16px",
                    color: "#5356FB",
                    fontWeight: "bold",
                    marginBottom: "5px",
                  }}
                >
                  Settings
                </span>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/setting1" className="nav-link">
                    <AiFillSetting className="c-icon-nav-link" />
                    Setting 1
                  </NavLink>
                </li>
                <li className="nav-item" onClick={(e) => activeMenu(e)}>
                  <NavLink to="/setting2" className="nav-link">
                    <AiFillTool className="c-icon-nav-link" />
                    Setting 2
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="c-sidebar-logout-container">
            <div className="c-sidebar-logout">
              <NavLink to="/">
                <button
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#5356FB",
                    border: "1px solid #5356FB",
                    borderRadius: "15px",
                  }}
                >
                  Logout
                </button>
              </NavLink>
            </div>
          </div>
        </span>
      </div>
    </Div>
  );
}

const Div = styled.div`
  /* sidebar */
  .c-sidebar {
    position: fixed;
    height: 100vh;
    width: 220px;
    transform: translate(-220px, 0);
    transition: all 0.5s;
    z-index: 3 !important;
    background-color: #faf2ff81;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
  .c-sidebar.c-sidebar-show {
    transform: translate(0, 0);
  }
  .c-sidebar-logo-container {
    height: 60px;
    width: 100%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-bottom: 20px;
  }
  .c-sidebar-logo-container div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .c-sidebar-logo {
    padding: 10px 0;
    align-items: center;
  }
  .c-sidebar-logo-title {
    font-size: 20px;
    color: #374456;
    font-weight: 600;
  }
  .sidebar-menu-container {
    padding: 0 10px;
    overflow-y: scroll;
    max-height: 70vh;
  }
  .sidebar-menu-container::-webkit-scrollbar {
    width: 5px;
    background-color: #d0d2ff;
    border-radius: 5px;
  }
  .sidebar-menu-container::-webkit-scrollbar-thumb {
    background-color: #5356fb;
    border-radius: 5px;
  }

  /* hover menu dan active */
  .nav-item:hover {
    background-color: #d0d2ff;
    border-radius: 10px;
  }
  .nav-item:hover a {
    color: #5356fb;
    font-weight: 600;
  }
  .nav-item:hover .c-icon-nav-link {
    background-color: #5356fb;
    color: white;
  }

  .nav-item.active {
    background-color: #d0d2ff;
    border-radius: 10px;
  }
  .nav-item.active a {
    color: #5356fb;
    font-weight: 600;
  }
  .nav-item.active .c-icon-nav-link {
    background-color: #5356fb;
    color: white;
  }
  /* akhir hover menu dan active */

  .nav-item {
    margin-bottom: 5px;
  }
  .nav-item a {
    font-size: 14px !important;
    color: #374456;
    font-weight: 500;
  }
  .c-nav-link {
    display: flex;
    align-items: center;
  }
  .c-icon-nav-link {
    font-size: 25px;
    background-color: #c8cbff;
    padding: 5px;
    border-radius: 50%;
    margin-right: 7px;
    color: #374456;
  }
  .c-sidebar-logout-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    padding: 20px;
  }
  /* akhir sidebar */

  /* responsive */
  @media (min-width: 768px) {
    .c-sidebar {
      transform: translate(0, 0) !important;
    }
    .c-sidebar.c-sidebar-show {
      transform: translate(-220px, 0) !important;
    }
  }
  /* akhir responsive */
`;
