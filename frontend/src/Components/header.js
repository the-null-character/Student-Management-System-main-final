import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/get">
            MANAV - School Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/get">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add">
                  Add Student
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/getMarks">
                  Marks and Grades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/attendance">
                  Attendance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About MANAV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>
  );
}

export default Header;
