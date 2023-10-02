import React, { lazy, Suspense, useState } from "react"
import { Link } from "react-router-dom"

const Profile = lazy(() => import("./Profile"))

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
        overflowX: "hidden",
      }}
      className={`p-1 ${isDarkMode ? "dark-mode" : ""}`}
    >
      <Link
        to="/"
        style={{
          fontSize: "25px",
          fontWeight: "bold",
        }}
        className="mt-1 navbar-brand"
      >
        Chanti.<span style={{ color: "blue" }}>dev</span>
      </Link>

      <button
        onClick={toggleMode}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          border: "none",
          borderRadius: "10px",
        }}
      >
        {isDarkMode ? "N-Mode" : "D-Mode"}
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        <Profile isDarkMode={isDarkMode} />
      </Suspense>
    </div>
  )
}

export default Navbar
