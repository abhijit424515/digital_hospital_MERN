import React from 'react'
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> */}
            {/* <span class="navbar-toggler-icon"></span> */}
          {/* </button> */}
          <div class = "al">
            <button type="button" class="btn btn-outline-primary">Medical Book</button>
            <button type="button" class="btn btn-outline-primary">Doctor's Visit</button>
            <button type="button" class="btn btn-outline-primary">Pharmacy</button>
            <button type="button" class="btn btn-outline-primary">Lab Order</button>
            <button type="button" class="btn btn-outline-primary">Reports</button>
            <button type="button" class="btn btn-outline-primary">Doctor's Availability</button>
            <button type="button" class="btn btn-outline-primary">Doctor's Appoinment</button>
            <button type="button" class="btn btn-outline-primary">Student Information</button>
            <button type="button" class="btn btn-outline-primary">Reimburse</button>
            <button type="button" class="btn btn-outline-primary">Admin</button>
          </div>
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}
