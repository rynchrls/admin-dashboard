import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import "../../css/students/studentView.css";
import Header from "../../components/header";
import profile from '../../images/mybaby.jpg'
import profileBg from '../../images/profile-background.jpg'

export class StudentView extends Component {
  render() {
    const { showNav, toShowNav } = this.props;
    return (
      <main className="App">
        <Navbar showNav={showNav} />
        <div className="ewan">
          <Header toShowNav={toShowNav} />
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Students</h2>
              <div>
                Student<span> / Student Details</span>
              </div>
            </div>
            <div className="student-profile">
              <div className="student-profile-wrapper">
                <div className="profile-header">Profile</div>
                <div className="profile-section">
                  <div className="background">
                    <img src={profileBg} />
                  </div>
                  <div className="profile-details">
                    <div className="image-section">
                      <div className="profile-portrait">
                        <img src={profile} />
                      </div>
                      <div>
                        <h3>Loraine Montecalvo</h3>
                        <span>Computer Science</span>
                      </div>
                    </div>
                    <div className="followers-section">
                      <div>
                        <span>Followers</span>
                        <h3>2850</h3>
                      </div>
                      <div>
                        <span>Followers</span>
                        <h3>2850</h3>
                      </div>
                      <div>
                        <span>Followers</span>
                        <h3>2850</h3>
                      </div>
                    </div>
                    <div className="button-section">
                      <button>Follow</button>
                      <button className="message">Message</button>
                    </div>
                  </div>
                </div>
                <div className="person-details">
                  <div className="personal-details-wrapper">
                    <div className="personal-details">
                      <h2 className="h2">Personal Details:</h2>
                      <div className="details-wrapper">
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                          <div>
                            <h2>Name</h2>
                            <span>Loraine Montecalvo</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.103 0-2 .897-2 2v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2zm0 18H6V4h12v16z"></path><path d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z"></path></svg>
                          <div>
                            <h2>Department</h2>
                            <span>Computer Science</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg>
                          <div>
                            <h2>Mobile</h2>
                            <span>+63-97022-032-03</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path></svg>
                          <div>
                            <h2>Email</h2>
                            <span>loraine@gmail.com</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
                          <div>
                            <h2>Gender</h2>
                            <span>Female</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-2 8v2H7v-3h10v1zm2-3H5V7h14v2z"></path></svg>
                          <div>
                            <h2>Date of Birth</h2>
                            <span>22 Apr 1995</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7V4H9v3h2.868L9.012 17H5v3h10v-3h-2.868l2.856-10z"></path></svg>
                          <div>
                            <h2>Language</h2>
                            <span>English, Tagalog</span>
                          </div>
                        </div>
                        <div className="all-details">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                          <div>
                            <h2>Adress</h2>
                            <span>Bulihan, Cavite 4118</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skills">
                    <h2 className="h2">Skills:</h2>
                    <div className="skills-wrapper">
                      <div className="skill">
                        <div className="skill-percentage">
                          <h5>Photoshop</h5>
                          <span>90%</span>
                        </div>
                        <div className="skill-line"></div>
                      </div>
                      <div className="skill">
                        <div className="skill-percentage">
                          <h5>Code Editor</h5>
                          <span>90%</span>
                        </div>
                        <div className="skill-line2"></div>
                      </div>
                      <div className="skill">
                        <div className="skill-percentage">
                          <h5>Microsoft Office</h5>
                          <span>90%</span>
                        </div>
                        <div className="skill-line3"></div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="about-me">
                  <h2 className="h2">About Me</h2>
                  <div className="personal-info">
                    <h1>Hello I am Loraine Montecalvo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur officia deserunt mollit anim id est laborum.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <h4>Education</h4>
                    <div>
                      <span>2008-2009</span>
                      <p>Secondary Schooling at xyz school of secondary education, Mumbai.</p>
                    </div>
                    <div>
                      <span>2011-2012</span>
                      <p>Higher Secondary Schooling at xyz school of higher secondary education, Mumbai.</p>
                    </div>
                    <div>
                      <span>2012 - 2015</span>
                      <p>Bachelor of Science at Abc College of Art and Science, Chennai.</p>
                    </div>
                    <div>
                      <span>2015 - 2017</span>
                      <p>Master of Science at Cdm College of Engineering and Technology, Pune.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
          </div>
        </div>
      </main>
    );
  }
}

export default StudentView;
