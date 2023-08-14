import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/accounts/addSalary.css";
import Header from '../../components/header';

function AddSalary(props) {
    const {showNav, toShowNav, setSalary} = props


    const [addSalary, setAddSalary] = React.useState({
      id: '',
      name: '',
      gender: '',
      date: '',
      amount: '',
      status: (<span className="paid">Paid</span>)
    })

    const handleChange = ({name, value}) => {
      setAddSalary(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const submit = (e) => {
      e.preventDefault()
      setSalary(prev => ([
        ...prev,
        {
          ...addSalary,
          amount: `$${addSalary.amount}`
        }
      ]))
    }


    return (
      <main className='App'>
      <Navbar showNav={showNav} />
      <div className='ewan'>
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
            <div className="welcome">
              <h2>Add Salary</h2>
              <div>
                Accounts<span> / Add Salary</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Salary Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" name='id' value={addSalary.id} onChange={e => handleChange(e.target)} />
                    <span>
                      Staff ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name='name' value={addSalary.name} onChange={e => handleChange(e.target)} />
                    <span>
                      Name <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select name='gender' value={addSalary.gender} onChange={e => handleChange(e.target)} >
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                    </select>
                    <span>Gender<a>*</a></span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" name='date' value={addSalary.date} onChange={e => handleChange(e.target)} />
                    <span>
                      Joining Date<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name='amount' value={addSalary.amount} onChange={e => handleChange(e.target)} />
                    <span>
                      Amount<a>*</a>
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

export default AddSalary
