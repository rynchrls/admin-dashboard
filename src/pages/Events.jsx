import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../css/events.css";
import Header from "../components/header";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css"

function Events(props) {
  const { showNav, toShowNav } = props;

  const events = [
    {
      title: "Test Event",
      start: "2023-08-11T08:00:00",
    },
    {
      title: "Test Event",
      start: "2023-08-12T08:00:00",
    },
  ];

  const [plus, setPlus] = React.useState(false);

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        {plus === false ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Events</h2>
              <div>
                Dashboard<span> / Events</span>
              </div>
            </div>
            <div className="plus1">
              <div className="plus1-wrapper" onClick={() => setPlus(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(255,255,255)" }}
                >
                  <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path>
                </svg>
              </div>
            </div>
            <div className="full-calendar">
              <div className="full-calendar-wrapper">
                <Fullcalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  initialView={"dayGridMonth"}
                  headerToolbar={{
                    start: "prev,next today", // will normally be on the left. if RTL, will be on the right
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
                  }}
                  droppable
                  events={events}
                  eventDidMount={(info) => {
                    return new bootstrap.Popover(info.el, {
                      title: info.event.title,
                      placement: "auto",
                      trigger: "hover",
                      customClass: "popoverStyle",
                      content: "<p>Goodmorning </p>",
                      html: true,
                    });
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {plus === true ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Add Event</h2>
              <div>
                Event<span> / Add Event</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Event Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Event ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      Event Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      Event Date <a>*</a>
                    </span>
                  </div>
                </div>
                <div className="form-button">
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
          </div>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Events;
