import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../css/holiday.css";
import Header from "../components/header";
import DataTable from "react-data-table-component";

function Holiday(props) {
  const { showNav, toShowNav } = props;

  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Holiday Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.start,
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => row.end,
      sortable: true,
    },
  ];

  const data2 = [
    {
      id: "PRE2209",
      name: "Sports Day",
      type: "College Holiday",
      start: "17 Aug 2020",
      end: "19 Aug 2020",
    },
    {
      id: "PRE2213",
      name: "Memorial Day",
      type: "Public Holiday",
      start: "05 Aug 2020",
      end: "06 Aug 2020",
    },
    {
      id: "PRE2143",
      name: "Annual Day",
      type: "College Holiday",
      start: "04 Sept 2020",
      end: "07 Aug 2020",
    },
    {
      id: "PRE2431",
      name: "Exam HoliDay",
      type: "Semester leave",
      start: "17 Spet 2020",
      end: "30 Sept 2020",
    },
    {
      id: "PRE2209",
      name: "Sports Day",
      type: "College Holiday",
      start: "17 Aug 2020",
      end: "19 Aug 2020",
    },
    {
      id: "PRE2213",
      name: "Memorial Day",
      type: "Public Holiday",
      start: "05 Aug 2020",
      end: "06 Aug 2020",
    },
    {
      id: "PRE2143",
      name: "Annual Day",
      type: "College Holiday",
      start: "04 Sept 2020",
      end: "07 Aug 2020",
    },
    {
      id: "PRE2431",
      name: "Exam HoliDay",
      type: "Semester leave",
      start: "17 Spet 2020",
      end: "30 Sept 2020",
    },
  ];

  const [plus, setPlus] = React.useState(false);

  const [data, setData] = React.useState(data2)


  const[addData, setaddData] = React.useState({
    id: "",
    name: "",
    type: "",
    start: "",
    end: "",
  })

  const handleChange = ({name, value}) => {
    setaddData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    setData(prev => ([
      ...prev,
      addData
    ]))
    console.log(data)
  }






  return (
    <main className="App">
      <Navbar showNav={showNav} />
      <div className="ewan">
        <Header toShowNav={toShowNav} />
        {plus === false ? (
          <div className="main-wrapper">
            <div className="welcome">
              <h2>Holiday</h2>
              <div>
                Dashboard<span> / Holiday</span>
              </div>
            </div>
            <div className="student-list-wrapper">
              <div className="student-list">
                <div className="student-header">
                  <h1>Holiday</h1>
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
                      paginationPerPage={5}
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
              <h2>Add Holiday</h2>
              <div>
                Holiday<span> / Add Holiday</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Holiday Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" name="id" value={addData.id} onChange={e => handleChange(e.target)} />
                    <span>
                      Holiday ID <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" name="name" value={addData.name} onChange={e => handleChange(e.target)} />
                    <span>
                      Holiday Name <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select name="type" value={addData.type} onChange={e => handleChange(e.target)} >
                      <option value="">Select Holiday</option>
                      <option value="Male">Public Holiday</option>
                      <option value="Female">College Holiday</option>
                      <option value="Female">Exam Holiday</option>
                      <option value="Other">Other</option>
                    </select>
                    <span>
                      Type of Holiday<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" name="start" value={addData.start} onChange={e => handleChange(e.target)} />
                    <span>
                      Start Date <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" name="end" value={addData.end} onChange={e => handleChange(e.target)} />
                    <span>
                      End Date <a>*</a>
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
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Holiday;
