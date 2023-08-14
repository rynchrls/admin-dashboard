import Navbar from "../../components/Navbar";
import "../../css/students/studentList.css";
import React, { Component } from "react";
import Header from "../../components/header";
import DataTable from "react-data-table-component";
import { Link, json } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";
import StudentAdd from "./StudentAdd";

function StudentList(props) {
  const { showNav, toShowNav, data } = props;

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
      name: "Class",
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: "Parent",
      selector: (row) => row.parent,
      sortable: true,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.number,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
            <h2>Students</h2>
            <div>
              Student<span> / All Students</span>
            </div>
          </div>
          <div className="search-section">
            <input type="text" placeholder="search by id..." />
            <input type="text" placeholder="search by name..." />
            <input type="text" placeholder="search by phone..." />
            <button>SEARCH</button>
          </div>
          <div className="student-list-wrapper">
            <div className="student-list">
              <div className="student-header">
                <h1>Students</h1>
                <div className="student-right">
                  <CustomLink to="/studentlist">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8V6H8.023v2H20.8zM8 11h12v2H8zm0 5h12v2H8z"></path>
                    </svg>
                  </CustomLink>
                  <CustomLink to="/studentgrid">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
                    </svg>
                  </CustomLink>
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
                </div>
              </div>
              <div className="list">
                <div className="list-wrapper">
                  <DataTable
                    columns={column}
                    data={data}
                    selectableRows
                    highlightOnHover
                    pagination
                    paginationPerPage={10}
                    paginationRowsPerPageOptions={[10, 15, 20, 25]}
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
      </div>
    </main>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <div className={`icon-border ${isActive ? "current2" : ""}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default StudentList;
