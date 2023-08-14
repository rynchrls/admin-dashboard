import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../css/settings.css";
import Header from "../components/header";

export class Settings extends Component {
  render() {
    const { showNav, toShowNav } = this.props;
    return (
      <main className="App">
        <Navbar showNav={showNav} />
        <div className="ewan">
          <Header toShowNav={toShowNav} />
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Settings</h2>
              <div>
                Settings<span> / General Settings</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Settings</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Website Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Address Line <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      City <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">select</option>
                      <option value="Male">California</option>
                      <option value="Female">Tasmania</option>
                      <option value="Female">Auckland</option>
                      <option value="Other">Marlborough</option>
                    </select>
                    <span>
                      State Province<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Zip/Postal Code <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">select</option>
                      <option value="Male">india</option>
                      <option value="Female">London</option>
                      <option value="Female">France</option>
                      <option value="Other">USA</option>
                    </select>
                    <span>
                      Country<a>*</a>
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
}
{
  /* <div className="first-name-section2">
<div className="input-box2">
  <input type="text" required="required" />
  <span>
    Website Name <a>*</a>
  </span>
</div>
<div className="input-box2">
  <input type="text" required="required" />
  <span>
    Address Line <a>*</a>
  </span>
</div>
<div className="input-box2">
  <input type="text" required="required" />
  <span>
    City <a>*</a>
  </span>
</div>
<div className="select">
  <select>
    <option value="">select</option>
    <option value="Male">California</option>
    <option value="Female">Tasmania</option>
    <option value="Female">Auckland</option>
    <option value="Other">Marlborough</option>
  </select>
  <span>
    State Province<a>*</a>
  </span>
</div>
<div className="input-box2">
  <input type="text" required="required" />
  <span>
    Zip/Postal Code <a>*</a>
  </span>
</div>
<div className="select">
  <select>
    <option value="">select</option>
    <option value="Male">india</option>
    <option value="Female">London</option>
    <option value="Female">France</option>
    <option value="Other">USA</option>
  </select>
  <span>
    Country<a>*</a>
  </span>
</div>
</div>  */
}
export default Settings;
