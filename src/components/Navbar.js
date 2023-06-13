import React, { lazy, Suspense } from "react"

const Profile = lazy(() => import("./Profile"))

function Navbar() {
  return (
    <div className="p-1">
      <h4
        style={{ fontSize: "25px", fontWeight: "bold" }}
        className=" mt-1 navbar-brand"
      >
        Chanti.<span style={{ color: "blue" }}>dev</span>
      </h4>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile />
      </Suspense>
    </div>
  )
}

export default Navbar
