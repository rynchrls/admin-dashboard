import React, { Component } from 'react'
import Navbar from "../../components/Navbar";
import "../../css/accounts/expenses.css";
import Header from '../../components/header';
import DataTable from 'react-data-table-component'

export class Expenses extends Component {
  render() {
    const {showNav, toShowNav, data} = this.props
    const column = [
      {
        name: 'ID',
        selector: row => row.id,
        sortable: true
      },
      {
        name: 'Item Name',
        selector: row => row.item,
        sortable: true
      },
      {
        name: 'Item Quantity',
        selector: row => row.quantity,
        sortable: true
      },
      {
        name: 'Amount',
        selector: row => row.amount,
        sortable: true
      },
      {
        name: 'Purchase Source',
        selector: row => row.purchase,
        sortable: true
      },
      {
        name: 'Purchase Date',
        selector: row => row.date,
        sortable: true
      },
      {
        name: 'Purchase By',
        selector: row => row.by,
        sortable: true
      }
    ]



    return (
      <main className='App'>
      <Navbar showNav={showNav} />
      <div className='ewan'>
        <Header toShowNav={toShowNav} />
        <div className="main-wrapper">
          <div className="welcome">
              <h2>Expenses</h2>
              <div>
                Dashboard<span> / Expenses</span>
              </div>
          </div>
          <div className="student-list-wrapper">
              <div className="student-list">
                <div className="student-header">
                  <h1>Expenses</h1>
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
                  paginationRowsPerPageOptions={[10, 15, 20]}
                  paginationComponentOptions={{
                    rowsPerPageText: 'Records per page:',
                    rangeSeparatorText: 'out of',
                  }}
                  paginationIconFirstPage
                  >
                  </DataTable>
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

export default Expenses
