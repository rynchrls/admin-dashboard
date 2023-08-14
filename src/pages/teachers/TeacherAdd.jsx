import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/teachers/teacherAdd.css";
import Header from '../../components/header';
import { Link, json } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";

function TeacherAdd(props) {
    const {showNav, toShowNav, setDataTeacher} = props

    const [addData, setAddData] = React.useState({
      id: '',
      name: '',
      class: '',
      parent: '',
      number: '',
      address: '',
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
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
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
    })

    const handleChange = ({name, value}) => {
      setAddData(prev => ({
        ...prev,
        [name]: value
      }))
    }


    const submit = (e) => {
      e.preventDefault()
      setDataTeacher(prev => ([...prev, addData]))
    }

    return (
      <main className='App'>
      <Navbar showNav={showNav} />
      <div className='ewan'>
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
            <div className="welcome">
              <h2>Teachers</h2>
              <div>
                Teachers<span> / Add Teachers</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Teacher Information</h2>
                <div className="first-name-section">
                  <div className="input-box">
                    <input type="text" placeholder="Enter first name" required='required' name="name" value={addData.fullname} onChange={e => handleChange(e.target)} />
                    <span>Full Name <a>*</a></span>
                  </div>
                  <div className="select">
                    <select>
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                    </select>
                    <span>Gender</span>
                  </div>
                </div>
                <div className="first-name-section">
                  <div className="input-box">
                    <input type="date" />
                    <span>Date of Birth </span>
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter Mobile Number" required='required' name="number" value={addData.number} onChange={e => handleChange(e.target)} />
                    <span>Mobile <a>*</a></span>
                  </div>
                  <div className="select">
                    <select>
                    <option value=''>Please Select Group</option>
                    <option value='B+'>B+</option>
                    <option value='A+'>A+</option>
                    <option value='O+'>O+</option>
                    </select>
                    <span>Blood Group</span>
                  </div>
                </div>
                <div className="first-name-section">
                <div className="select">
                    <select>
                    <option value=''>Please Select Group</option>
                    <option value='Hindu'>Hindu</option>
                    <option value='Christian'>Christian</option>
                    <option value='Others'>Others</option>
                    </select>
                    <span>Religion</span>
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter Address" required='required' name="address" value={addData.address} onChange={e => handleChange(e.target)} />
                    <span>Address <a>*</a></span>
                  </div>
                  <div className="select">
                    <select name="class" value={addData.class} onChange={e => handleChange(e.target)} >
                    <option value=''>Please Select Class</option>
                    <option value='12'>12</option>
                    <option value='11'>11</option>
                    <option value='10'>10</option>
                    </select>
                    <span>Please Select Class<a>*</a></span>
                  </div>
                </div>
                <div className="first-name-section">
                <div className="select">
                    <select>
                    <option value=''>Please Select Section</option>
                    <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    </select>
                    <span>Admission ID</span>
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter Admission ID" required='required' name="id" value={addData.id} onChange={e => handleChange(e.target)}  />
                    <span>ID <a>*</a></span>
                  </div>
                  <div className="input-box">
                    <input type="text" placeholder="Enter Parent Name " required='required' name="parent" value={addData.parent} onChange={e => handleChange(e.target)} />
                    <span>Name of Parent <a>*</a></span>
                  </div>
                </div>
                <h5 className="h5">Upload Student Photo (150px X 150px)</h5>
                <div className="upload">
                  <input type="file" placeholder="upload" id="choose-file" />
                  <label htmlFor="choose-file">Choose File</label>
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
    <div className={`icon-border ${isActive ? "current2" : ""}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default TeacherAdd;
