import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/subjects/subEdit.css";
import Header from "../../components/header";

function SubjectEdit(props) {
    const { showNav, toShowNav } = props;

    const [subjectadd, setSubjectAdd] = React.useState({
      id: 'PRE123',
      name: 'MATHEMATICS',
      class: '9',
    })

    
    const handleChange = ({name, value}) => {
      setSubjectAdd(prev => ({
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
              <h2>Add Subject</h2>
              <div>
                Subjects<span> / Add Subjects</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Subject Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" name="id" value={subjectadd.id} onChange={e => handleChange(e.target)} />
                    <span>
                      Subject ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="name" value={subjectadd.name} onChange={e => handleChange(e.target)} />
                    <span>
                      Subject Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="class" value={subjectadd.class} onChange={e => handleChange(e.target)} />
                    <span>
                      Class <a>*</a>
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

export default SubjectEdit;
