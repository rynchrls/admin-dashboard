import Navbar from "../../components/Navbar";
import "../../css/dashboard/admin.css";
import React, { Component } from "react";
import Header from "../../components/header";
import Barchart from "../../components/barchart";
import Linechart from "../../components/linechart";
import Skeleton from "../../components/skeleton";
import studentImg from '../../images/student.jpg'
import awardImg from '../../images/award.jpg'
import buildingImg from '../../images/building.jpg'
import revenueImg from '../../images/revenue.jpg'
import icon1 from '../../icons/icon1.jpg'
import icon2 from '../../icons/icon2.jpg'
import icon3 from '../../icons/icon3.jpg'
import icon4 from '../../icons/icon4.jpg'
import facebook from '../../icons/facebook.png'
import twitter from '../../icons/twitter.png'
import instagram from'../../icons/instagram.jpg'
import linkedin from '../../icons/linkedin.png'

function Admin({showNav, toShowNav}) {
  const studentCounts = [
    {
      id: 1,
      month: "January",
      boys: 420,
      girls: 700,
    },
    {
      id: 2,
      month: "February",
      boys: 553,
      girls: 720,
    },
    {
      id: 3,
      month: "March",
      boys: 690,
      girls: 510,
    },
    {
      id: 4,
      month: "April",
      boys: 470,
      girls: 320,
    },
    {
      id: 5,
      month: "May",
      boys: 120,
      girls: 700,
    },
    {
      id: 6,
      month: "June",
      boys: 642,
      girls: 710,
    },
    {
      id: 7,
      month: "July",
      boys: 353,
      girls: 610,
    },
  ];
  const [student, setStudent] = React.useState({
    labels: studentCounts.map((label) => label.month),
    datasets: [
      {
        label: "Teacher",
        data: studentCounts.map((boy) => boy.boys),
        pointBorderColor: "transparent",
        pointBorderWidth: 1,
        tension: 0.4,
        borderColor: "rgb(0, 60, 255)",
        backgroundColor: "rgb(0, 60, 255)",
        borderWidth: 8
      },
      {
        label: "Student",
        data: studentCounts.map((girl) => girl.girls),
        pointBorderColor: "transparent",
        tension: 0.4,
        borderColor: "rgb(0, 255, 179)",
        backgroundColor: "rgb(0, 255, 179)",
        borderWidth: 8
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
        min: 2,
        max: 1000,
        // grid: {
        //   display: false,
        // },
      },
    },
  };

  const [student2, setStudent2] = React.useState({
    labels: studentCounts.map((label) => label.month),
    datasets: [
      {
        label: "Boys",
        data: studentCounts.map((boy) => boy.boys),
        borderColor: "rgb(0, 60, 255)",
        backgroundColor: "rgb(0, 60, 255)",
        barThickness: 24
      },
      {
        label: "Girls",
        data: studentCounts.map((girl) => girl.girls),
        borderColor: "rgb(0, 255, 179)",
        backgroundColor: "rgb(0, 255, 179)",
        barThickness: 24
      },
    ],
  });

  const [skeleton, setSkeleton] = React.useState(undefined)

  React.useEffect(() => {
    setTimeout(() => {
      setSkeleton(true)
    },1000)

  }, [])

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        {skeleton === undefined ? <Skeleton /> :
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Welcome Admin!</h2>
            <div>
              Home<span> / Admin</span>
            </div>
          </div>
          <div className="flash-card">
            <div className="card">
              <div>
                <p>Students</p>
                <h5>50055</h5>
              </div>
              <img src={studentImg} alt="student" />
            </div>
            <div className="card">
              <div>
                <p>Award</p>
                <h5>50+</h5>
              </div>
              <img src={awardImg} />
            </div>
            <div className="card">
              <div>
                <p>Department</p>
                <h5>30+</h5>
              </div>
              <img src={buildingImg} />
            </div>
            <div className="card">
              <div>
                <p>Revenue</p>
                <h5>$505</h5>
              </div>
              <img src={revenueImg} />
            </div>
          </div>
          <div className="chart">
            <div className="line">
              <div className="line-title">
                <h1>Overview</h1>
                <div className="legend">
                  <div className="boys">
                    <div></div>
                    <h6>Teacher</h6>
                  </div>
                  <div className="girls">
                    <div></div>
                    <h6>Student</h6>
                  </div>
                </div>
              </div>
              <Linechart chartData={student} option={options} />
            </div>
            <div className="bar">
              <div className="line-title">
                <h1>Number of Students</h1>
                <div className="legend">
                  <div className="boys">
                    <div></div>
                    <h6>Boys</h6>
                  </div>
                  <div className="girls">
                    <div></div>
                    <h6>Girls</h6>
                  </div>
                </div>
              </div>
              <Barchart chartData={student2} option={options} />
            </div>
          </div>
          <div className="for-student">
            <div className="star-student">
              <h2>Star Students</h2>
              <div className="table">
                <div className="first-row">
                  <div>ID</div>
                  <div className="Name">Name</div>
                  <div>Marks</div>
                  <div>Percentage</div>
                  <div>Year</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div className="Name2">Ryan Charles Alcaraz</div>
                  <div className="mark">11233</div>
                  <div className="percent">98.3%</div>
                  <div className="year">2023</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div>Ryan Charles Alcaraz</div>
                  <div>11233</div>
                  <div>98.3%</div>
                  <div>2023</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div>Ryan Charles Alcaraz</div>
                  <div>11233</div>
                  <div>98.3%</div>
                  <div>2023</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div>Ryan Charles Alcaraz</div>
                  <div>11233</div>
                  <div>98.3%</div>
                  <div>2023</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div>Ryan Charles Alcaraz</div>
                  <div>11233</div>
                  <div>98.3%</div>
                  <div>2023</div>
                </div>
                <div className="second-row">
                  <div>PRE123</div>
                  <div>Ryan Charles Alcaraz</div>
                  <div>11233</div>
                  <div>98.3%</div>
                  <div>2023</div>
                </div>
              </div>
            </div>
            <div className="student-activity">
              <h2>Student Activity</h2>
              <div className="act-wrapper">
                <div className="act">
                  <div className="act-title">
                    <img src={icon1} />
                    <div>
                      <h3>1st place in "Chess”</h3>
                      <p>John Doe won 1st place in "Chess"</p>
                    </div>
                  </div>
                  <div className="day">1 Day ago</div>
                </div>
                <div className="act">
                  <div className="act-title">
                    <img src={icon2} />
                    <div>
                      <h3>Participated in "Carrom"</h3>
                      <p>Justin Lee participated in "Carrom"</p>
                    </div>
                  </div>
                  <div className="day">2 hours ago</div>
                </div>
                <div className="act">
                  <div className="act-title">
                    <img src={icon3} />
                    <div>
                      <h3>Internation conference in "St.John School"</h3>
                      <p>Justin Leeattended internation conference in "St.John School"</p>
                    </div>
                  </div>
                  <div className="day">2 Week ago</div>
                </div>
                <div className="act">
                  <div className="act-title">
                    <img src={icon4} />
                    <div>
                      <h3>Won 1st place in "Chess"</h3>
                      <p>John Doe won 1st place in "Chess"</p>
                    </div>
                  </div>
                  <div className="day">3 Day ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="facebook">
              <div>
                <h1>Like us on Facebook</h1>
                <p>50,095</p>
              </div>
              <div className="img-wrapper2">
                <img src={facebook} />
              </div>
            </div>
            <div className="twitter">
              <div>
                <h1>Follow us on twitter</h1>
                <p>48,596</p>
              </div>
              <div className="img-wrapper2">
                <img src={twitter} />
              </div>
            </div>
            <div className="instagram">
              <div>
                <h1>Follow us on instagram</h1>
                <p>52,085</p>
              </div>
              <div className="img-wrapper2">
                <img src={instagram} />
              </div>
            </div>
            <div className="linkedin">
              <div>
                <h1>Follow us on linkedin</h1>
                <p>69,050</p>
              </div>
              <div className="img-wrapper2">
                <img src={linkedin} />
              </div>
            </div>
          </div>
          <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
        </div>}
      </div>
    </main>
  );
}

export default Admin;
