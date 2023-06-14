import React from "react"

function About() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-8 offset-md-4 mt-3 col-sm-offset-6">
            <h5
              className="card-title"
              style={{ fontWeight: "bolder", color: "blue" }}
            >
              ABOUT ME
            </h5>
            <h6 className="mt-2" style={{ fontWeight: "bolder" }}>
              A dedicated Front-end Developer based in Gudivada, Ap 📍
            </h6>
            <p>
              A dedicated Front-end Developer based in Gudivada, Ap 📍 As a
              Junior Front-End Developer, I possess an impressive arsenal of
              skills in HTML, CSS, JavaScript, React, Bootstrap. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </p>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <img
            className="img-fluid"
            style={{ width: "400px" }}
            src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  )
}

export default About
