import React, { lazy, Suspense, useState } from "react"

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
      <h4
        style={{
          fontSize: "25px",
          fontWeight: "bold",
        }}
        className="mt-1 navbar-brand"
      >
        Chanti.<span style={{ color: "blue" }}>dev</span>
      </h4>
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
        {isDarkMode ? "Normal Mode" : "Dark Mode"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        <Profile isDarkMode={isDarkMode} />
      </Suspense>
    </div>
  )
}

export default Navbar
