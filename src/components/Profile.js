import React, { lazy, Suspense } from "react"
import Image from "../assets/output.png"
import "./Profile.css"
import Bootstrap from "../assets/skills/Bootstrap.svg"
import CSS from "../assets/skills/css.svg"
import HTML from "../assets/skills/html.svg"
import JavaScr from "../assets/skills/js.svg"
import ReactLogo from "../assets/skills/react.svg"

const Projects = lazy(() => import("./Projects"))

function Profile({ isDarkMode }) {
  const a = {
    fontSize: "40px",
    color: "black",
  }

  const imageContainer = {
    borderRadius: "75% 25% 70% 30% / 30% 74% 26% 70%",
    width: "290px",
    height: "370px",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "2px solid black",
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <div className="container-fluid offset-md-5 mt-5">
            <div className="img" style={imageContainer}></div>
          </div>
        </div>
        <div className="col-md-5 mt-5">
          <div className="container-fluid">
            <div className="container">
              <h5
                style={{ fontWeight: "bolder", fontSize: "50px" }}
                className="me-md-5"
              >
                Front-End <span style={{ color: "blue" }}>React</span> <br />{" "}
                Developer
              </h5>
              <p className="mt-3">
                Hi, I'm <span> A Pandu Ranga Rao</span>. A passionate Front-end
                React <br /> Developer based in Gudivada, Andhra Pradesh.
              </p>
              <div className="container-fluid mt-4">
                <a
                  href="https://www.linkedin.com/in/pandu-ranga-rao-akurati-81b554164/"
                  style={a}
                >
                  <i
                    style={{ color: isDarkMode ? "white" : "black" }}
                    className="fab fa-linkedin"
                  ></i>
                </a>
                <a
                  style={{
                    marginLeft: "15px",
                    fontSize: "40px",
                    color: "black",
                  }}
                  href="https://github.com/PanduChanti/"
                >
                  <i
                    style={{ color: isDarkMode ? "white" : "black" }}
                    className="fab fa-github"
                  ></i>
                </a>{" "}
                | <span>Social Media</span>
              </div>
              <div className="container-fluid mt-4">
                <img src={HTML} style={{ width: "40px" }} alt="img.png" />
                <img
                  className="ms-1"
                  src={CSS}
                  style={{ width: "40px" }}
                  alt="img.png"
                />
                <img
                  className="ms-1"
                  src={JavaScr}
                  style={{ width: "40px" }}
                  alt="img.png"
                />
                <img
                  className="ms-1"
                  src={ReactLogo}
                  style={{ width: "40px" }}
                  alt="img.png"
                />
                <img src={Bootstrap} style={{ width: "58px" }} alt="img.png" />|{" "}
                <span>Skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Projects isDarkMode={isDarkMode} />
      </Suspense>
    </div>
  )
}

export default Profile
