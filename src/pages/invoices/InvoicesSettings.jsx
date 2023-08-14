import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/invoices/invoiceList.css";
import Header from '../../components/header';

export class InvoicesSettings extends Component {
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

export default InvoicesSettings
