import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/departments/deptEdit.css";
import Header from "../../components/header";

function DepartmentEdit(props) {
    const { showNav, toShowNav } = props;

    const [addData, setAddData] = React.useState({
      id: "PRE1332",
      name: "Ryan Alcaraz",
      hod: "Ako po",
      student: "2513",
    });

    const handleChange = ({name, value}) => {
      setAddData(prev => ({
        ...prev,
        [name]: value
      }))
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
                      Department Start Date <a>*</a>
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
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
          </div>
        </div>
      </main>
    );
}

export default DepartmentEdit;
