import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/accounts/addExpenses.css";
import Header from "../../components/header";

function AddExpenses(props) {
    const { showNav, toShowNav, setExpenses } = props;


    const [addExpenses, setAddExpenses] = React.useState({
      id: ' ',
      item: '',
      quantity: '',
      amount: '',
      purchase: '',
      date: '',
      by: ''
    })

    const handleChange = ({name, value}) => {
      setAddExpenses(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const submit = (e) => {
      e.preventDefault()
      setExpenses(prev => ([
        ...prev,
        {
          ...addExpenses,
          amount: `$${addExpenses.amount}`
        }
      ]))
    }

    return (
      <main className="App">
        <Navbar showNav={showNav} />
        <div className="ewan">
          <Header toShowNav={toShowNav} />
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Add Expenses</h2>
              <div>
                Accounts<span> / Add Expenses</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Expense Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" name="id" value={addExpenses.id} onChange={e => handleChange(e.target)} />
                    <span>
                      Expenses ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="item" value={addExpenses.item} onChange={e => handleChange(e.target)} />
                    <span>
                      Item Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="quantity" value={addExpenses.quantity} onChange={e => handleChange(e.target)} />
                    <span>
                      Item Quantity <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="amount" value={addExpenses.amount} onChange={e => handleChange(e.target)} />
                    <span>
                      Expenses Amount<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="purchase" value={addExpenses.purchase} onChange={e => handleChange(e.target)} />
                    <span>
                      Source of Purchase<a>*</a>
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

export default AddExpenses;
