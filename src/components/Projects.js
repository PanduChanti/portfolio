import React, { useEffect, useState } from "react"
import "./Project.css"
import rentUp from "../assets/1.png"
import skillUp from "../assets/2.png"
import myResume from "../assets/3.png"
import portfolio from "../assets/4.png"
import About from "./About"

const obj = [
  {
    id: 1,
    title: "myResume",
    description:
      "Throughout my career, I have worked on various projects, ranging from small personal websites to large-scale enterprise applications. Each project demonstrates my ability to collaborate with cross-functional teams, understand client requirements, and deliver high-quality solutions.",
    editor: "PanduChanti",
    sourceCode: "https://github.com/PanduChanti/myResume",
    live: "https://panduresume.netlify.app/",
    img: myResume,
  },
  {
    id: 2,
    title: "rentUp",
    description:
      "At RentUp, we understand the importance of finding the perfect rental property that suits your needs and lifestyle. Our platform provides a comprehensive database of available rentals, ranging from apartments and houses to condos and vacation homes. With advanced search filters and detailed property listings, you can easily narrow down your options and find the ideal place to call home.",
    editor: "PanduChanti",
    sourceCode: "https://github.com/PanduChanti/rentUp",
    live: "https://panduchanti.github.io/rentUp/",
    img: rentUp,
  },
  {
    id: 3,
    title: "skillUp",
    description:
      "At SkillUp, we believe in the power of continuous learning and personal development. Our platform hosts a diverse collection of courses taught by industry experts, covering a wide array of topics. From technology and business to arts and personal growth, you'll find courses that inspire and challenge you to reach new heights.",
    editor: "PanduChanti",
    sourceCode: "https://github.com/PanduChanti/skillUp",
    live: "https://panduchanti.github.io/skillUp/",
    img: skillUp,
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "I am a skilled front-end developer with expertise in React.js, HTML, CSS, and JavaScript. With a keen eye for design and attention to detail, I strive to create visually appealing and user-friendly web applications.",
    editor: "PanduChanti",
    sourceCode: "https://github.com/PanduChanti/",
    live: "https://panduportfolio.netlify.app/",
    img: portfolio,
  },
]

function Projects() {
  const [data, setData] = useState(obj)

  useEffect(() => {
    setData(obj)
  }, [])

  console.log(data)
  return (
    <div className=" mt-5">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-12 mt-4">
            <div className="row p-4">
              <h6 style={{ fontWeight: "bold", color: "blue" }}>PORTFOLIO</h6>
              <h5 style={{ fontWeight: "bold" }}>
                Each project is a unique piece of development 🧩
              </h5>
              <div className="col-md-4 offset-md-2 mt-3 col-sm-offset-6 text-center">
                <h2 className="card-title">{data[0].title}</h2>
                <p>{data[0].description}</p>

                <div className="d-flex  card-body text-center">
                  <a
                    className="code-link btn"
                    href={data[0].sourceCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <i
                      style={{ fontSize: "20px" }}
                      class="fa-brands fa-github"
                    ></i>
                  </a>

                  <a
                    className="code-link ms-4 btn"
                    href={data[0].live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <img
                  style={{ width: "400px" }}
                  src={data[0].img}
                  alt="img.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd project */}

        <div className="row">
          <div className="col-md-12">
            <div className="row p-4">
              {/* image */}
              <div className=" col-md-4 offset-md-2 mt-1 col-sm-offset-6">
                <img
                  style={{ width: "400px" }}
                  src={data[1].img}
                  alt="img.png"
                />
              </div>
              {/* matter */}
              <div className="col-md-4 mt-1 text-center">
                <h2 className="card-title">{data[1].title}</h2>
                <p>{data[1].description}</p>

                <div className="d-flex card-body text-center">
                  <a
                    className="code-link btn"
                    href={data[1].sourceCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <i
                      style={{ fontSize: "20px" }}
                      class="fa-brands fa-github"
                    ></i>
                  </a>

                  <a
                    className="code-link ms-4 btn"
                    href={data[1].live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd project */}

        <div className="row">
          <div className="col-md-12 ">
            <div className="row p-4">
              <div className="col-md-4 offset-md-2 mt-3 col-sm-offset-6 text-center">
                <h2 className="card-title">{data[2].title}</h2>
                <p>{data[2].description}</p>

                <div className="d-flex card-body text-center">
                  <a
                    className="code-link btn"
                    href={data[2].sourceCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <i
                      style={{ fontSize: "20px" }}
                      class="fa-brands fa-github"
                    ></i>
                  </a>

                  <a
                    className="code-link ms-4 btn"
                    href={data[2].live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <img
                  style={{ width: "400px" }}
                  src={data[2].img}
                  alt="img.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2nd project */}

        <div className="row">
          <div className="col-md-12">
            <div className="row p-4">
              {/* image */}
              <div className="col-md-4 offset-md-2 mt-1 col-sm-offset-6 text-center">
                <img
                  style={{ width: "400px" }}
                  src={data[3].img}
                  alt="img.png"
                />
              </div>
              {/* matter */}
              <div className="col-md-4 mt-1 ">
                <h2 className="card-title">{data[3].title}</h2>
                <p>{data[3].description}</p>

                <div className="d-flex card-body text-center">
                  <a
                    className="code-link btn"
                    href={data[3].sourceCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code{" "}
                    <i
                      style={{ fontSize: "20px" }}
                      class="fa-brands fa-github"
                    ></i>
                  </a>

                  <a
                    className="code-link ms-4 btn"
                    href={data[3].live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
    </div>
  )
}

export default Projects
