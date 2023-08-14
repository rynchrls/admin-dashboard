import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/authentication/forgotPassword.css";
import Header from '../../components/header';

export class ForgotPassword extends Component {
  render() {
    const {showNav, toShowNav} = this.props
    return (
      <main className='App'>
      <Navbar showNav={showNav} />
      <div className='ewan'>
        <Header toShowNav={toShowNav} />
      </div>
  </main>
    );
  }
}

export default ForgotPassword
