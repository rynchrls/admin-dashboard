import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../css/sports.css";
import Header from "../components/header";
import DataTable from "react-data-table-component";

function Sports({ showNav, toShowNav }) {
  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Coach",
      selector: (row) => row.coach,
      sortable: true,
    },
    {
      name: "Started Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const data = [
    {
      id: "PRE2309",
      name: "Cricket",
      coach: "Jenny",
      year: "2002",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2209",
      name: "Cricket",
      coach: "Jenny",
      year: "2002",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2213",
      name: "Basketball",
      coach: "Jenny",
      year: "2002",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2143",
      name: "Volleyball",
      coach: "Thomas",
      year: "2006",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2909",
      name: "Carrom",
      coach: "Joseph",
      year: "2002",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2431",
      name: "Football",
      coach: "Joseph",
      year: "2002",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE1534",
      name: "Hockey",
      coach: "Thomas",
      year: "2005",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
    {
      id: "PRE2153",
      name: "Volleyball",
      coach: "Joseph",
      year: "2003",
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
          </svg>
        </div>
      ),
    },
  ];

  const [plus, setPlus] = React.useState(false);

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        {plus === false ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Sports</h2>
              <div>
                Dashboard<span> / Sports</span>
              </div>
            </div>
            <div className="student-list-wrapper">
              <div className="student-list">
                <div className="student-header">
                  <h1>Sports</h1>
                  <div className="student-right">
                    <div className="download">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(255,255,255)" }}
                      >
                        <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                        <path d="M20 20H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                      </svg>
                      <h2>Download</h2>
                    </div>
                    <div className="plus" onClick={(e) => setPlus(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(255,255,255)" }}
                      >
                        <path d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="list2">
                  <div className="list-wrapper2">
                    <DataTable
                      columns={column}
                      data={data}
                      highlightOnHover
                      pagination
                      paginationPerPage={8}
                      paginationRowsPerPageOptions={[5, 10, 15, 20]}
                      paginationComponentOptions={{
                        rowsPerPageText: "Records per page:",
                        rangeSeparatorText: "out of",
                      }}
                      paginationIconFirstPage
                    ></DataTable>
                  </div>
                </div>
              </div>
            </div>
            <footer>COPYRIGHT © 2022 DREAMGUYS.</footer>
          </div>
        ) : (
          ""
        )}

        {plus === true ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Add Sports</h2>
              <div>
                Sports<span> / Add Sports</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Sports Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Sports ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Sports Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Coach Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Started Year <a>*</a>
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
        ) : (
          ""
        )}

        {plus === "edit" ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Edit Sports</h2>
              <div>
                Sports<span> / Edit Sports</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Sports Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Sports ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Sports Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Coach Name <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Started Year <a>*</a>
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
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Sports;
