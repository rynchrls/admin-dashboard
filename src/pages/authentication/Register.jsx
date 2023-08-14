import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/authentication/register.css";
import Header from '../../components/header';

export class Register extends Component {
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

export default Register
