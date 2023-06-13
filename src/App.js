import { useState, useEffect } from "react"
import Navbar from "../src/components/Navbar"
// import Profile from "../src/components/Profile"
import "./App.css"
import { RingLoader } from "react-spinners"

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
          <Navbar />
        </>
      )}
    </>
  )
}

export default App
