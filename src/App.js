import { useState, useEffect } from "react"
import Navbar from "../src/components/Navbar"
// import Profile from "../src/components/Profile"
import "./App.css"
import { RingLoader } from "react-spinners"
import { Routes, Route } from "react-router-dom"
import Login from "./Landingpages/Login"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <RingLoader color="blue" loading={loading} size={100} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
