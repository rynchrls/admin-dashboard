import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/departments/deptAdd.css";
import Header from "../../components/header";
import { Link, json } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";

function DepartmentAdd(props) {
  const { showNav, toShowNav, setDataDept } = props;

  const [addData, setAddData] = React.useState({
    id: "",
    name: "",
    hod: "",
    student: "",
    action: (
      <div className="action-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(0, 0, 0, 0.4)" }}
        >
          <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
          <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
        </svg>
        <CustomLink2 to="/deptedit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </CustomLink2>
      </div>
    ),
  });

  const handleChange = ({name, value}) => {
    setAddData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    setDataDept(prev => [...prev, addData])
  }

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Add Department</h2>
            <div>
              Department<span> / Add Department</span>
            </div>
          </div>
          <div className="add-student">
            <form className="add-student-wrapper">
              <h2>Department Details</h2>
              <div className="first-name-section2">
                <div className="input-box2">
                  <input type="text" required="required" name="id" value={addData.id} onChange={e => handleChange(e.target)} />
                  <span>
                    Department ID <a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="text" required="required" name="name" value={addData.name} onChange={e => handleChange(e.target)} />
                  <span>
                    Department Name <a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="text" required="required" name="hod" value={addData.hod} onChange={e => handleChange(e.target)} />
                  <span>
                    Head of Department <a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="date" />
                  <span>
                    Department Start Date
                  </span>
                </div>
                <div className="input-box2">
                  <input type="text" required="required" name="student" value={addData.student} onChange={e => handleChange(e.target)} />
                  <span>
                    No of Students <a>*</a>
                  </span>
                </div>
              </div>
              <div className="form-button">
                <button onClick={submit}>Submit</button>
              </div>
            </form>
          </div>
          <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
        </div>
      </div>
    </main>
  );
}

function CustomLink2({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default DepartmentAdd;
