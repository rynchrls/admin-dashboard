import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/teachers/teacherEdit.css";
import Header from "../../components/header";

function TeacherEdit(props) {
  const { showNav, toShowNav } = props;

  const [addData, setAddData] = React.useState({
    id: "PRE1023",
    name: "Loraine Montecalvo",
    class: "12",
    parent: "Johann Micosa",
    number: "09702203203",
    address: "Brgy Banaba Silang Cavite",
  });

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Teachers</h2>
            <div>
              Teachers<span> / Edit Teachers</span>
            </div>
          </div>
          <div className="add-student">
            <form className="add-student-wrapper">
              <h2>Teacher Information</h2>
              <div className="first-name-section">
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    value={addData.name}
                    name="name"
                    onChange={(e) =>
                      setAddData({ ...addData, name: e.target.value })
                    }
                  />
                  <span>Full Name</span>
                </div>
                <div className="select">
                  <select>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span>Gender</span>
                </div>
              </div>
              <div className="first-name-section">
                <div className="input-box">
                  <input type="date" placeholder="Enter first name" />
                  <span>Date of Birth</span>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter Mobile Number"
                    value={addData.number}
                    name="number"
                    onChange={(e) =>
                      setAddData({ ...addData, number: e.target.value })
                    }
                  />
                  <span>Mobile</span>
                </div>
                <div className="select">
                  <select>
                    <option value="">Please Select Group</option>
                    <option value="B+">B+</option>
                    <option value="A+">A+</option>
                    <option value="O+">O+</option>
                  </select>
                  <span>Blood Group</span>
                </div>
              </div>
              <div className="first-name-section">
                <div className="select">
                  <select>
                    <option value="">Please Select Group</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Christian">Christian</option>
                    <option value="Others">Others</option>
                  </select>
                  <span>Religion</span>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter Address"
                    value={addData.address}
                    name="address"
                    onChange={(e) =>
                      setAddData({ ...addData, address: e.target.value })
                    }
                  />
                  <span>Address</span>
                </div>
                <div className="select">
                  <select
                    value={addData.class}
                    name="class"
                    onChange={(e) =>
                      setAddData({ ...addData, class: e.target.value })
                    }
                  >
                    <option value="12">12</option>
                    <option value="11">11</option>
                    <option value="10">10</option>
                  </select>
                  <span>Please Select Clas</span>
                </div>
              </div>
              <div className="first-name-section">
                <div className="select">
                  <select>
                    <option value="">Please Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                  <span>Admission ID</span>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter Admission ID"
                    value={addData.id}
                    name="id"
                    onChange={(e) =>
                      setAddData({ ...addData, id: e.target.value })
                    }
                  />
                  <span>ID</span>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter Parent Name "
                    value={addData.parent}
                    name="parent"
                    onChange={(e) =>
                      setAddData({ ...addData, parent: e.target.value })
                    }
                  />
                  <span>Name of Parent</span>
                </div>
              </div>
              <h5 className="h5">Upload Student Photo (150px X 150px)</h5>
              <div className="upload">
                <input type="file" placeholder="upload" id="choose-file" />
                <label htmlFor="choose-file">Choose File</label>
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

export default TeacherEdit;
