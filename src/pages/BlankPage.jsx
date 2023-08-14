import React from "react";
import Navbar from "../components/Navbar";
import "../css/blankpage.css";
import Header from "../components/header";

function BlankPage(props) {
  const { showNav, toShowNav } = props;
  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Blank Page</h2>
            <div>
              Dashboard<span> / Blank Page</span>
            </div>
          </div>
          <span className="spantikol">Contents here</span>
        </div>
      </div>
    </main>
  );
}

export default BlankPage;
