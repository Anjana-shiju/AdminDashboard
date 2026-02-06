import React from "react";
import "./sidebar.css";
import logo from "./images/logooo.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* 1. MOBILE OVERLAY: Sidebar thurannirikkumbo background dark aakan */}
      {isOpen && (
        <div className="sidebar-overlay d-lg-none" onClick={toggleSidebar}></div>
      )}

      {/* 2. SIDEBAR CONTAINER */}
      <div className={`sidebar ${isOpen ? "show" : ""}`}>
        <div className="sidebar-header d-flex align-items-center justify-content-between">
          <img src={logo} className="logo" alt="logo" />
          {/* Sidebar ullile Close Button */}
          <button className="btn d-lg-none text-white p-0 border-0" onClick={toggleSidebar}>
            <i className="bi bi-x-lg fs-4"></i>
          </button>
        </div>

        <ul className="sidebar-menu">
          <li className="active">
            <i className="bi bi-grid-1x2-fill"></i> <span>Dashboard</span>
          </li>
          <li>
            <i className="bi bi-house-door"></i> <span>Properties</span>
          </li>
          <li>
            <i className="bi bi-credit-card"></i> <span>Payments</span>
          </li>
          <li>
            <i className="bi bi-people"></i> <span>Users</span>
          </li>
          <li>
            <i className="bi bi-file-earmark-bar-graph"></i> <span>Reports</span>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <i className="bi bi-box-arrow-right"></i> <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;