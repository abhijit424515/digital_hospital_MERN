import React from 'react'
import "../styles/Navbar.css"

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
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
        </div>
      </nav>
    </div>
  )
}
