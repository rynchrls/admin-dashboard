import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/dashboard/studentsDash.css";
import Header from "../../components/header";
import TeacherActivity from "../../components/TeacherActivity";
import Calendar2 from "../../components/calendar";
import Skeleton from "../../components/skeleton";
import classImg from '../../images/class.jpg'
import clock from '../../images/clock.jpg'
import book from '../../images/book.jpg'
import studentImg from '../../images/student.jpg'

function StudentsDashboard({ showNav, toShowNav }) {
  const studentCounts = [
    {
      id: 1,
      month: "January",
      teachers: 45,
      students: 24,
    },
    {
      id: 2,
      month: "February",
      teachers: 60,
      students: 48,
    },
    {
      id: 3,
      month: "March",
      teachers: 75,
      students: 56,
    },
    {
      id: 4,
      month: "April",
      teachers: 51,
      students: 32,
    },
    {
      id: 5,
      month: "May",
      teachers: 42,
      students: 34,
    },
    {
      id: 6,
      month: "June",
      teachers: 42,
      students: 52,
    },
    {
      id: 7,
      month: "July",
      teachers: 30,
      students: 25,
    },
  ];
  const [student, setStudent] = React.useState({
    labels: studentCounts.map((label) => label.month),
    datasets: [
      {
        label: "Teacher",
        data: studentCounts.map((boy) => boy.teachers),
        pointBorderColor: "transparent",
        pointBorderWidth: 0,
        tension: 0,
        borderColor: "rgb(0, 60, 255)",
        backgroundColor: "rgba(0, 60, 255, 0.2)",
        borderWidth: 4,
        fill: true,
      },
      {
        label: "Student",
        data: studentCounts.map((girl) => girl.students),
        pointBorderColor: "transparent",
        tension: 0,
        borderColor: "rgb(0, 255, 179)",
        backgroundColor: "rgba(0, 255, 179, 0.2)",
        borderWidth: 4,
        fill: true,
      },
    ],
  });
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      intersect: false,
      mode: "index",
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          useBorderRadius: true,
          borderRadius: 5,
          boxWidth: 10,
          color: "black",
          fillStyle: "blue",
          padding: 12,
        },
      },
      tooltip: {
        usePointStyle: true,
        backgroundColor: "white",
        titleColor: "black",
        bodyColor: "black",
        titleMarginBottom: 4,
        titleSpacing: 6,
        boxWidth: 20,
        boxPadding: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 10,
        max: 80,
        // grid: {
        //   display: false,
        // },
      },
    },
  };
  const [skeleton, setSkeleton] = React.useState(undefined);

  React.useEffect(() => {
    setTimeout(() => {
      setSkeleton(true);
    }, 1000);
  }, []);

  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffSet = dashArray - (dashArray * 25) / 60;

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        {skeleton === undefined ? (
          <Skeleton />
        ) : (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Welcome Ryan!</h2>
              <div>
                Home<span> / Teacher</span>
              </div>
            </div>
            <div className="flash-card">
              <div className="card">
                <div>
                  <p>All Courses</p>
                  <h5>04/60</h5>
                </div>
                <img src={classImg} />
              </div>
              <div className="card">
                <div>
                  <p>All Projects</p>
                  <h5>40/60</h5>
                </div>
                <img src={studentImg} />
              </div>
              <div className="card">
                <div>
                  <p>Test Attended</p>
                  <h5>30/50</h5>
                </div>
                <img src={book} />
              </div>
              <div className="card">
                <div>
                  <p>Test Passed</p>
                  <h5>15/20</h5>
                </div>
                <img src={clock} />
              </div>
            </div>
            <div className="flex-cards">
              <div className="left-cards">
                <div className="two-section">
                  <div className="upcoming-lesson">
                    <div className="for-header">
                      <h3>Upcoming Lesson</h3>
                      <span>View all Courses</span>
                    </div>
                    <div className="lesson">
                      <div className="lesson-left">
                        <h4>Lessons 30</h4>
                        <span className="sub-title">3.1 Ipsuum dolor</span>
                        <span className="sched">
                          <div className="time-date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "gray" }}
                            >
                              <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                            </svg>
                            <div>Sep 5, 2022</div>
                            <div>|</div>
                          </div>
                          <div className="time-date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "gray" }}
                            >
                              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
                            </svg>
                            <div>09:00 - 10:00 am</div>
                          </div>
                        </span>
                      </div>
                      <div className="lesson-right">
                        <span>Confirmed</span>
                        <button>Reschedule</button>
                      </div>
                    </div>
                    <div className="lesson">
                      <div className="lesson-left">
                        <h4>Lessons 30</h4>
                        <span className="sub-title">3.1 Ipsuum dolor</span>
                        <span className="sched">
                          <div className="time-date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "gray" }}
                            >
                              <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                            </svg>
                            <div>Sep 5, 2022</div>
                            <div>|</div>
                          </div>
                          <div className="time-date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              style={{ fill: "gray" }}
                            >
                              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
                            </svg>
                            <div>09:00 - 10:00 am</div>
                          </div>
                        </span>
                      </div>
                      <div className="lesson-right">
                        <span>Confirmed</span>
                        <button>Reschedule</button>
                      </div>
                    </div>
                  </div>
                  <div className="semester-progress">
                    <h1>Semester Progress</h1>
                    <div className="circle-progress">
                      <svg width={200} height={200} viewBox={"0 0 200 200"}>
                        <circle
                          cx={200 / 2}
                          cy={200 / 2}
                          strokeWidth="10px"
                          r={radius}
                          className="circle-background"
                        />
                        <circle
                          cx={200 / 2}
                          cy={200 / 2}
                          strokeWidth="10px"
                          r={radius}
                          className="circle-progress"
                          style={{
                            strokeDasharray: dashArray,
                            strokeDashoffset: dashOffSet,
                          }}
                          transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
                        />
                        <text
                          x="50%"
                          y="44%"
                          dy="0.3em"
                          textAnchor="middle"
                          className="circle-text"
                        >
                          25/60
                        </text>
                        <text
                          x="50%"
                          y="57%"
                          dy="0.3em"
                          textAnchor="middle"
                          className="circle-span"
                        >
                          Lesson Progressed
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="teaching-activity">
                  <h1>Learning Activity</h1>
                  <TeacherActivity chartData={student} option={options} />
                </div>
                <div className="teaching-wrapper">
                  <h1>Teaching History</h1>
                  <div className="teaching-history">
                    <div className="history">
                      <div>Sep22</div>
                      <div>Sep23</div>
                      <div>Sep24</div>
                    </div>
                    <div className="history-panel">
                      <div className="panel-details">
                        <h3>Mathematics</h3>
                        <div className="panel">
                          <div className="wrapper">
                            <div className="time-date2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                              </svg>
                              <div>September 5, 2022</div>
                            </div>
                            <div className="time-date2">
                              <span>|</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
                              </svg>
                              <div>09:00am - 10:00am(60 Minutes)</div>
                            </div>
                          </div>
                          <button>In Progress</button>
                        </div>
                        <div className="history-circle">
                          <div></div>
                        </div>
                      </div>
                      <div className="panel-details">
                        <h3>Geography</h3>
                        <div className="panel">
                          <div className="wrapper">
                            <div className="time-date2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                              </svg>
                              <div>September 5, 2022</div>
                            </div>
                            <div className="time-date2">
                              <span>|</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
                              </svg>
                              <div>09:00am - 10:00am(60 Minutes)</div>
                            </div>
                          </div>
                          <button>In Progress</button>
                        </div>
                        <div className="history-circle">
                          <div></div>
                        </div>
                      </div>
                      <div className="panel-details">
                        <h3>Botony</h3>
                        <div className="panel">
                          <div className="wrapper">
                            <div className="time-date2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"></path>
                              </svg>
                              <div>September 5, 2022</div>
                            </div>
                            <div className="time-date2">
                              <span>|</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                style={{ fill: "gray" }}
                              >
                                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
                              </svg>
                              <div>09:00am - 10:00am(60 Minutes)</div>
                            </div>
                          </div>
                          <button>In Progress</button>
                        </div>
                        <div className="history-circle2">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-cards">
                <div className="calendar">
                  <Calendar2 />
                </div>
                <div className="upcoming-events">
                  <h1>Upcoming Events</h1>
                  <div className="events">
                    <h2>10 Jan</h2>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Botony</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Botony</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Botony</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                  </div>
                  <div className="events">
                    <h2>10 Jan</h2>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Science</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Biology</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Modern Culture</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                  </div>
                  <div className="events">
                    <h2>10 Jan</h2>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>English</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>Mathematics</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                    <div className="event">
                      <div className="time">08:00 am</div>
                      <div className="event-wrapper">
                        <div className="event-title">
                          <h3>History</h3>
                          <span>Lorem ipsum sit amet</span>
                        </div>
                        <div className="event-time">08:00 - 09:00 am</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
          </div>
        )}
      </div>
    </main>
  );
}

export default StudentsDashboard;
