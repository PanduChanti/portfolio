import React from "react"
import Profile from "./Profile"

function Navbar() {
  return (
    <div className="p-1">
      <h4
        style={{ fontSize: "25px", fontWeight: "bold" }}
        className=" mt-1 navbar-brand"
      >
        Chanti.<span style={{ color: "blue" }}>dev</span>
      </h4>
      <Profile />
    </div>
  )
}

export default Navbar
