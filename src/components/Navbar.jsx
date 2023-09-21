import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";

function Navbar({ showNav}) {
  const [nav, setNav] = React.useState({
    dashboard: false,
    students: false,
    teachers: false,
    departments: false,
    subjects: false,
    invoices: false,
    accounts: false,
    blogs: false,
    authen: false,
  });

  const dashboard = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: !prev.dashboard,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const students = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: false,
      students: !prev.students,
    }));
  };

  const teachers = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: !prev.teachers,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const departments = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: !prev.departments,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const subjects = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: !prev.subjects,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const invoices = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: !prev.invoices,
      accounts: false,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const accounts = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: !prev.accounts,
      blogs: false,
      authen: false,
      students: false,
    }));
  };

  const blogs = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: !prev.blogs,
      authen: false,
      students: false,
    }));
  };

  const authen = () => {
    setNav((prev) => ({
      ...prev,
      dashboard: false,
      teachers: false,
      departments: false,
      subjects: false,
      invoices: false,
      accounts: false,
      blogs: false,
      authen: !prev.authen,
      students: false,
    }));
  };

  return (
    <header className={`scroll ${showNav.isShow === true ? 'show-nav' : ''}`}>
      <h1 className="title">
        ESK<span>WELA</span>
      </h1>
      <h3 className="main">Main Menu</h3>
      <div
        className={`nav-wrapper ${nav.dashboard === true ? "active" : ""}`}
        onClick={dashboard}
      >
        <div
          className={`all-nav ${
            window.location.pathname == "/admin" ||
            window.location.pathname == "/students" ||
            window.location.pathname == "/teachers"
              ? "current-nav"
              : ""
          }`}
        >
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                //   style={styles}
              >
                <path d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"></path>
              </svg>
              <div className="name">Dashboard</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
          <CustomLink to="/admin-dashboard">Admin Dashboard</CustomLink>
          <CustomLink to="/students">Students Dashboard</CustomLink>
          <CustomLink to="/teachers">Teachers Dashboard</CustomLink>
        </div>
      </div>
      <div
        className={`nav-wrapper ${nav.students === true ? "active" : ""}`}
        onClick={students}
      >
        <div
          className={`all-nav ${
            window.location.pathname === "/studentlist" ||
            window.location.pathname === "/studentview" ||
            window.location.pathname === "/studentadd" ||
            window.location.pathname === "/studentedit"
              ? "current-nav"
              : ""
          }`}
        >
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M2 7v1l11 4 9-4V7L11 4z"></path>
                <path d="M4 11v4.267c0 1.621 4.001 3.893 9 3.734 4-.126 6.586-1.972 7-3.467.024-.089.037-.178.037-.268V11L13 14l-5-1.667v3.213l-1-.364V12l-3-1z"></path>
              </svg>
              <div className="name">Students</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
          <CustomLink to="/studentlist">Student List</CustomLink>
          <CustomLink to="/studentview">Student View</CustomLink>
          <CustomLink to="/studentadd">Student Add</CustomLink>
          <CustomLink to="/studentedit">Student edit</CustomLink>
        </div>
      </div>
      <div
        className={`nav-wrapper ${nav.teachers === true ? "active" : ""}`}
        onClick={teachers}
      >
        <div
          className={`all-nav ${
            window.location.pathname === "/teacherview" ||
            window.location.pathname === "/teacheradd" ||
            window.location.pathname === "/teacherlist" ||
            window.location.pathname === "/teacheredit"
              ? "current-nav"
              : ""
          }`}
        >
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M17.988 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11.988zM9 5h6v2H9V5zm5.25 6.25A2.26 2.26 0 0 1 12 13.501c-1.235 0-2.25-1.015-2.25-2.251S10.765 9 12 9a2.259 2.259 0 0 1 2.25 2.25zM7.5 18.188c0-1.664 2.028-3.375 4.5-3.375s4.5 1.711 4.5 3.375v.563h-9v-.563z"></path>
              </svg>
              <div className="name">Teachers</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
          <CustomLink to="/teacherlist">Teacher List</CustomLink>
          <CustomLink to="/teacherview">Teacher View</CustomLink>
          <CustomLink to="/teacheradd">Teacher Add</CustomLink>
          <CustomLink to="/teacheredit">Teacher Edit</CustomLink>
        </div>
      </div>
      <div
        className={`nav-wrapper ${nav.departments === true ? "active" : ""}`}
        onClick={departments}
      >
        <div
          className={`all-nav ${
            window.location.pathname === "/deptadd" ||
            window.location.pathname === "/deptlist" ||
            window.location.pathname === "/deptedit"
              ? "current-nav"
              : ""
          }`}
        >
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M17 2H7a2 2 0 0 0-2 2v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm-6 14H8v-2h3v2zm0-4H8v-2h3v2zm0-4H8V6h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V6h3v2z"></path>
              </svg>
              <div className="name">Departments</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
          <CustomLink to="/deptlist">Department List</CustomLink>
          <CustomLink to="/deptadd">Department Add</CustomLink>
          <CustomLink to="/deptedit">Department Edit</CustomLink>
        </div>
      </div>
      <div
        className={`nav-wrapper ${nav.subjects === true ? "active" : ""}`}
        onClick={subjects}
      >
        <div
          className={`all-nav ${
            window.location.pathname === "/subadd" ||
            window.location.pathname === "/subedit" ||
            window.location.pathname === "/sublist"
              ? "current-nav"
              : ""
          }`}
        >
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758a2.01 2.01 0 0 1 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.08.182.15.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.046.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.01 2.01 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 15h-4.758a4.03 4.03 0 0 0-2.242.689V6c0-.551.448-1 1-1h6v13z"></path>
              </svg>
              <div className="name">Subjects</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
          <CustomLink to="/sublist">Subject List</CustomLink>
          <CustomLink to="/subadd">Subject Add</CustomLink>
          <CustomLink to="/subedit">Subject Edit</CustomLink>
        </div>
      </div>
      <h2 className="main">Management</h2>
      <div
        className={`nav-wrapper ${nav.accounts === true ? "active" : ""}`}
        onClick={accounts}
      >
        <div className={`all-nav ${window.location.pathname === '/feescollection' || window.location.pathname === '/expenses' || window.location.pathname === '/salary' || window.location.pathname === '/addfees' || window.location.pathname === '/addexpenses' || window.location.pathname === '/addsalary' ? 'current-nav' : '' }`}>
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"></path>
                <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"></path>
              </svg>
              <div className="name">Accounts</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
        <CustomLink to="/feescollection">Fees Collection</CustomLink>
        <CustomLink to="/expenses">Expenses</CustomLink>
        <CustomLink to="/salary">Salary</CustomLink>
        <CustomLink to="/addfees">Add Fees</CustomLink>
        <CustomLink to="/addexpenses">Add Expenses</CustomLink>
        <CustomLink to="/addsalary">Add Salary</CustomLink>
        </div>
      </div>
      <div className={`second ${window.location.pathname === '/holiday' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-4.588 15-2.449-1.288L9.514 19l.468-2.728L8 14.342l2.738-.398 1.225-2.48 1.225 2.48 2.738.398-1.981 1.931.467 2.727zM19 9H5V7h14v2z"></path>
        </svg>
        <CustomLink to="/holiday">Holiday</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/fees' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M2 8v4.001h1V18H2v3h16l3 .001V21h1v-3h-1v-5.999h1V8L12 2 2 8zm4 10v-5.999h2V18H6zm5 0v-5.999h2V18h-2zm7 0h-2v-5.999h2V18zM14 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 8z"></path>
        </svg>
        <CustomLink to="/fees">Fees</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/examlist' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M5.282 12.064c-.428.328-.72.609-.875.851-.155.24-.249.498-.279.768h2.679v-.748H5.413c.081-.081.152-.151.212-.201.062-.05.182-.142.361-.27.303-.218.511-.42.626-.604.116-.186.173-.375.173-.578a.898.898 0 0 0-.151-.512.892.892 0 0 0-.412-.341c-.174-.076-.419-.111-.733-.111-.3 0-.537.038-.706.114a.889.889 0 0 0-.396.338c-.094.143-.159.346-.194.604l.894.076c.025-.188.074-.317.147-.394a.375.375 0 0 1 .279-.108c.11 0 .2.035.272.108a.344.344 0 0 1 .108.258.55.55 0 0 1-.108.297c-.074.102-.241.254-.503.453zm.055 6.386a.398.398 0 0 1-.282-.105c-.074-.07-.128-.195-.162-.378L4 18.085c.059.204.142.372.251.506.109.133.248.235.417.306.168.069.399.103.692.103.3 0 .541-.047.725-.14a1 1 0 0 0 .424-.403c.098-.175.146-.354.146-.544a.823.823 0 0 0-.088-.393.708.708 0 0 0-.249-.261 1.015 1.015 0 0 0-.286-.11.943.943 0 0 0 .345-.299.673.673 0 0 0 .113-.383.747.747 0 0 0-.281-.596c-.187-.159-.49-.238-.909-.238-.365 0-.648.072-.847.219-.2.143-.334.353-.404.626l.844.151c.023-.162.067-.274.133-.338s.151-.098.257-.098a.33.33 0 0 1 .241.089c.059.06.087.139.087.238 0 .104-.038.193-.117.27s-.177.112-.293.112a.907.907 0 0 1-.116-.011l-.045.649a1.13 1.13 0 0 1 .289-.056c.132 0 .237.041.313.126.077.082.115.199.115.352 0 .146-.04.266-.119.354a.394.394 0 0 1-.301.134zm.948-10.083V5h-.739a1.47 1.47 0 0 1-.394.523c-.168.142-.404.262-.708.365v.754a2.595 2.595 0 0 0 .937-.48v2.206h.904zM9 6h11v2H9zm0 5h11v2H9zm0 5h11v2H9z"></path>
        </svg>
        <CustomLink to="/examlist">Exam List</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/events' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-1 15h-6v-6h6v6zm1-10H5V7h14v2z"></path>
        </svg>
        <CustomLink to="/events">Events</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/timetable' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3.293 14.707L11 12.414V6h2v5.586l3.707 3.707-1.414 1.414z"></path>
        </svg>
        <CustomLink to="/timetable">Time Table</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/library' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z"></path>
        </svg>
        <CustomLink to="/library">Library</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/settings' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="m2.344 15.271 2 3.46a1 1 0 0 0 1.366.365l1.396-.806c.58.457 1.221.832 1.895 1.112V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.598a8.094 8.094 0 0 0 1.895-1.112l1.396.806c.477.275 1.091.11 1.366-.365l2-3.46a1.004 1.004 0 0 0-.365-1.366l-1.372-.793a7.683 7.683 0 0 0-.002-2.224l1.372-.793c.476-.275.641-.89.365-1.366l-2-3.46a1 1 0 0 0-1.366-.365l-1.396.806A8.034 8.034 0 0 0 15 4.598V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.598A8.094 8.094 0 0 0 7.105 5.71L5.71 4.904a.999.999 0 0 0-1.366.365l-2 3.46a1.004 1.004 0 0 0 .365 1.366l1.372.793a7.683 7.683 0 0 0 0 2.224l-1.372.793c-.476.275-.641.89-.365 1.366zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"></path>
        </svg>
        <CustomLink to="/settings">Settings</CustomLink>
      </div>
      <h2 className="main">Pages</h2>
      <div
        className={`nav-wrapper ${nav.authen === true ? "active" : ""}`}
        onClick={authen}
      >
        <div className={`all-nav ${window.location.pathname === '/login' || window.location.pathname === '/register' || window.location.pathname === '/forgotpassword' || window.location.pathname === '/errorpage' ? 'current-nav'  : '' }`}>
          <div className="nav">
            <div className="span">
              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                // style={styles}
              >
                <path d="M11.488 21.754c.294.157.663.156.957-.001 8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.05-3.566a1.005 1.005 0 0 0-.813.001L3.566 5.747a.99.99 0 0 0-.592.892c-.034 2.379.445 10.806 8.514 15.115zM8.674 10.293l2.293 2.293 4.293-4.293 1.414 1.414-5.707 5.707-3.707-3.707 1.414-1.414z"></path>
              </svg>
              <div className="name">Authentication</div>
            </div>
            <svg
              className="svg svg-active to-right"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              // style={styles}
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
            </svg>
          </div>
        </div>
        <div className="links">
        <CustomLink to="/login">Login</CustomLink>
        </div>
      </div>
      <div className={`second ${window.location.pathname === '/blankpage' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8l8-8V5a2 2 0 0 0-2-2zm-7 16v-7h7l-7 7z"></path>
        </svg>
        <CustomLink to="/blankpage">Blank Page</CustomLink>
      </div>
      <div className={`second ${window.location.pathname === '/sports' ? 'current-nav2' : ''}`}>
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          //   style={styles}
        >
          <path d="M4.929 19.071a9.953 9.953 0 0 0 6.692 2.906c-.463-2.773.365-5.721 2.5-7.856 2.136-2.135 5.083-2.963 7.856-2.5-.092-2.433-1.053-4.839-2.906-6.692s-4.26-2.814-6.692-2.906c.463 2.773-.365 5.721-2.5 7.856-2.136 2.135-5.083 2.963-7.856 2.5a9.944 9.944 0 0 0 2.906 6.692z"></path>
          <path d="M15.535 15.535a6.996 6.996 0 0 0-1.911 6.318 9.929 9.929 0 0 0 8.229-8.229 6.999 6.999 0 0 0-6.318 1.911zm-7.07-7.07a6.996 6.996 0 0 0 1.911-6.318 9.929 9.929 0 0 0-8.23 8.229 7 7 0 0 0 6.319-1.911z"></path>
        </svg>
        <CustomLink to="/sports">Sports</CustomLink>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <div className={isActive ? "current" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default Navbar;
