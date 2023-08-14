import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/accounts/addFees.css";
import Header from "../../components/header";

function AddFees(props) {
  const { showNav, toShowNav, setFees } = props;

  const [addfees, setAddFees] = React.useState({
    id: " ",
    name: '',
    gender: "",
    fees: " ",
    amount: " ",
    date: " ",
    status: <span className="unpaid">Unpaid</span>,
  });


  const handleChange = ({name, value}) => {
    setAddFees(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    setFees(prev => ([...prev, addfees]))
  }


  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Add Fees</h2>
            <div>
              Accounts<span> / Add Fees</span>
            </div>
          </div>
          <div className="add-student">
            <form className="add-student-wrapper">
              <h2>Fees Information</h2>
              <div className="first-name-section2">
                <div className="input-box2">
                  <input type="text" required="required" name="id" value={addfees.id} onChange={e => handleChange(e.target)} />
                  <span>
                    Student ID <a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="text" required="required" name="name" value={addfees.name} onChange={e => handleChange(e.target)} />
                  <span>
                    Student Name <a>*</a>
                  </span>
                </div>
                <div className="select">
                  <select name="gender" value={addfees.gender} onChange={e => handleChange(e.target)} >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <span>
                    Gender<a>*</a>
                  </span>
                </div>
                <div className="select">
                  <select name="fees" value={addfees.fees} onChange={e => handleChange(e.target)} >
                    <option value="">Select Type</option>
                    <option value="Class">Class Test</option>
                    <option value="Exam">Exam Fees</option>
                    <option value="Hostel">Hostel Fees</option>
                    <option value="Transport">Transport Fees</option>
                    <option value="Mess">Mess Fees</option>
                  </select>
                  <span>
                    Fees Type<a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="text" required="required" name="amount" value={addfees.amount} onChange={e => handleChange(e.target)} />
                  <span>
                    Fees Amount <a>*</a>
                  </span>
                </div>
                <div className="input-box2">
                  <input type="date" required="required" name="date" value={addfees.date} onChange={e => handleChange(e.target)} />
                  <span>
                    Paid Date <a>*</a>
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

export default AddFees;
