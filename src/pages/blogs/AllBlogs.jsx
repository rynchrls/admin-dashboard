import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/blogs/allBlogs.css";
import Header from '../../components/header';

export class AllBlogs extends Component {
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

export default AllBlogs
