import React, { useState } from "react"
import ChatBot from "../assets/chat-bot.png"
import "./Chatbot.css"

function Chatbot() {
  const [Bot, setBot] = useState()
  const [isToggle, setisToggle] = useState(false)
  const toggleHandler = (e) => {
    e.preventDefault()
    setisToggle(!isToggle)
  }

  const Time = new Date().toDateString()

  //   if (Bot === "Hire Me") {
  //     console.log("data accepted")
  //   }

  return (
    <div className="container-fluid">
      <div className="col-md-12 ">
        {isToggle && (
          <div className="chatbot-container offset-sm-10 bg-light border rounded">
            <div className="bg-primary text-white p-2">Chatbot</div>
            <div className="chat-messages p-2" style={{ height: "200px" }}>
              <div className="message">Hello! How can I help you?</div>
              {Bot === "Hire Me" && (
                <p>
                  <strong>Email:- panduakurati@gmail.com</strong>
                </p>
              )}
              {Bot === "What's New?" && (
                <p>
                  <strong>Adding new Features....</strong>
                </p>
              )}
              {Bot === "Present Time" && (
                <p>
                  <strong>{Time}</strong>
                </p>
              )}
            </div>
            <div className="user-input p-2">
              <button onClick={(e) => setBot(e.currentTarget.innerText)}>
                Hire Me
              </button>
              <button onClick={(e) => setBot(e.currentTarget.innerText)}>
                What's New?
              </button>
              <button onClick={(e) => setBot(e.currentTarget.innerText)}>
                Present Time
              </button>
            </div>
          </div>
        )}
        <div className="offset-11">
          <img
            onClick={toggleHandler}
            src={ChatBot}
            alt={ChatBot}
            style={{ width: "90px", cursor: "pointer", padding: "10px" }}
          />
        </div>
      </div>
    </div>
  )
}

export default Chatbot
