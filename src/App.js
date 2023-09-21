import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Admin from './pages/dashboard/admin';
import StudentsDashboard from './pages/dashboard/StudentsDashboard';
import TeachersDashboard from './pages/dashboard/TeachersDashboard';
import StudentList from './pages/students/StudentList';
import StudentAdd from './pages/students/StudentAdd';
import StudentEdit from './pages/students/StudentEdit';
import StudentView from './pages/students/StudentView';
import TeacherAdd from './pages/teachers/TeacherAdd';
import TeacherEdit from './pages/teachers/TeacherEdit';
import TeacherList from './pages/teachers/TeacherList';
import TeacherView from './pages/teachers/TeacherView';
import DepartmentAdd from './pages/departments/DepartmentAdd';
import DepartmentEdit from './pages/departments/DepartmentEdit';
import DepartmentList from './pages/departments/DepartmentList';
import SubjectAdd from './pages/subjects/SubjectAdd';
import SubjectEdit from './pages/subjects/SubjectEdit';
import SubjectList from './pages/subjects/SubjectList';
import AddInvoices from './pages/invoices/AddInvoices';
import EditInvoices from './pages/invoices/EditInvoices'
import InvoicesDetails from './pages/invoices/InvoicesDetails'
import InvoicesGrid from './pages/invoices/InvoicesGrid';
import InvoicesList from './pages/invoices/InvoicesList';
import InvoicesSettings from './pages/invoices/InvoicesSettings';
import FeesCollection from './pages/accounts/FeesCollection';
import Expenses from './pages/accounts/Expenses'
import Salary from './pages/accounts/Salary';
import AddFees from './pages/accounts/AddFees'
import AddExpenses from './pages/accounts/AddExpenses'
import AddSalary from './pages/accounts/AddSalary'
import AddBlog from './pages/blogs/AddBlog';
import AllBlogs from './pages/blogs/AllBlogs';
import EditBlog from './pages/blogs/EditBlog';
import ErrorPage from './pages/authentication/ErrorPage';
import ForgotPassword from './pages/authentication/ForgotPassword';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Holiday from './pages/Holiday';
import Fees from './pages/Fees';
import ExamList from './pages/ExamList';
import Events from './pages/Events';
import TimeTable from './pages/TimeTable';
import Library from './pages/Library';
import Settings from './pages/Settings';
import Sports from './pages/Sports';
import BlankPage from './pages/BlankPage';
import Hostel from './pages/Hostel';
import Transport from './pages/Transport';
import Studentgrid from './components/Studentgrid';
import TeacherGrid from './components/TeacherGrid';
import { Link, json } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

function Router() {
  const [showNav, setShowNav] = React.useState({
    isShow: false,
  });

  const toShowNav = () => {
    setShowNav((prev) => ({
      ...prev,
      isShow: !prev.isShow,
    }));
  };

  const data = [
    {
      id: "PRE102",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Ryan Alcaraz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE103",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Charles Ryan</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE104",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Max thamondz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE105",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Sage Constania</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE106",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Ally Vior</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE107",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Matet</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE108",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Johann Micosa</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE109",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Shan Clet</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE110",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Andrew Basas</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE111",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Leeyan Alcaraz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE112",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Justine Zach</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE113",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Joshua Antillon</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE114",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lester Rabe</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE115",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Galye Naldo</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE116",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Raymond Momon</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to="/studentview">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: "rgba(0, 0, 0, 0.4)" }}
            >
              <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
            </svg>
          </CustomLink2>
          <CustomLink2 to='/studentedit'>
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
          </CustomLink2>
        </div>
      ),
    },
  ];

  const dataForTeacher = [
    {
      id: "PRE102",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Ryan Alcaraz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE103",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Charles Ryan</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE104",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Max thamondz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE105",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Sage Constania</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE106",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Ally Vior</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE107",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Matet</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE108",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Johann Micosa</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE109",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Shan Clet</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE110",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Andrew Basas</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE111",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Leeyan Alcaraz</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE112",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Justine Zach</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE113",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Joshua Antillon</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE114",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lester Rabe</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE115",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Galye Naldo</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: "PRE116",
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Raymond Momon</div>
        </div>
      ),
      class: "ICT1MA",
      parent: "Rea Stokes",
      number: "09702203203",
      address: "brgy banaba silang etivac",
      action: (
        <div className="action-wrapper">
          <CustomLink2 to='/teacherview'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          </CustomLink2>
          <CustomLink2 to='/teacheredit'>
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
          </CustomLink2>
        </div>
      ),
    },
  ];

  const [dataTeacher, setDataTeacher] = React.useState(dataForTeacher)


  const [Data, setData] = React.useState(data)



  const dataDepartment = [
    {
      id: 'PRE2143',
      name: 'Electrical Engg',
      hod: 'Levell Scott',
      student: '163',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2209',
      name: 'Computer Science Engg',
      hod: 'Aaliyah',
      student: '180',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2213',
      name: 'Mechanical Engg',
      hod: 'Malynne',
      student: '240',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2431',
      name: 'Civil Engg',
      hod: 'Minnie',
      student: '195',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE1534',
      name: 'MCA',
      hod: 'Lois A',
      student: '200',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2153',
      name: 'BCA',
      hod: 'Calvin',
      student: '152',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/deptedit'>
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
          </CustomLink2>
        </div>
      ),
    }
  ]

  const [dataDept, setDataDept] = React.useState(dataDepartment)

  const dataSubject = [
    {
      id: 'PRE2143',
      name: 'Mathematics',
      student: '5',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2209',
      name: 'History',
      student: '6',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2213',
      name: 'Science',
      student: '3',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2431',
      name: 'Geography',
      student: '8',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE1534',
      name: 'Botony',
      student: '9',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    },
    {
      id: 'PRE2153',
      name: 'English',
      student: '4',
      action: (
        <div className="action-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(0, 0, 0, 0.4)" }}
          >
            <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
            <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
          </svg>
          <CustomLink2 to='/subedit'>
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
          </CustomLink2>
        </div>
      ),
    }
  ]

  const [subject, setSubject] = React.useState(dataSubject)


  const datafees = [
    {
      id: 'PRE2209',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Aaliyah</div>
        </div>
      ),
      gender: 'Female',
      fees: 'Mess Fees',
      amount: '$120',
      date: '17 Aug 2020',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2213',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Malynne</div>
        </div>
      ),
      gender: 'Female',
      fees: 'Class Test',
      amount: '$56',
      date: '05 Aug 2020',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2143',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>levell Scott</div>
        </div>
      ),
      gender: 'Male',
      fees: 'Exam Fees',
      amount: '$378',
      date: '04 Sept 2020',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2431',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Minnie</div>
        </div>
      ),
      gender: 'Female',
      fees: 'Exam Fees',
      amount: '$246',
      date: '17 Sept 2020',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE1534',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lois A</div>
        </div>
      ),
      gender: 'Male',
      fees: 'Exam Fees',
      amount: '$56',
      date: '02 Oct 2020',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2153',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Calvin</div>
        </div>
      ),
      gender: 'Male',
      fees: 'Transport Fees',
      amount: '$237',
      date: '17 Oct 2020',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2143',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>levell Scott</div>
        </div>
      ),
      gender: 'Male',
      fees: 'Exam Fees',
      amount: '$378',
      date: '04 Sept 2020',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2213',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Malynne</div>
        </div>
      ),
      gender: 'Female',
      fees: 'Class Test',
      amount: '$56',
      date: '05 Aug 2020',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE1534',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lois A</div>
        </div>
      ),
      gender: 'Male',
      fees: 'Exam Fees',
      amount: '$56',
      date: '02 Oct 2020',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2431',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Minnie</div>
        </div>
      ),
      gender: 'Female',
      fees: 'Exam Fees',
      amount: '$246',
      date: '17 Sept 2020',
      status: (<span className="unpaid">Unpaid</span>)
    }
  ]

  const [fees, setFees] = React.useState(datafees)

  const dataExpenses = [
    {
      id: 'PRE2209',
      item: 'Chair',
      quantity: '6',
      amount: '$120',
      purchase: 'Abc Shop',
      date: '17 Aug 2020',
      by: 'Lois'
    },
    {
      id: 'PRE2213',
      item: 'Table',
      quantity: '2',
      amount: '$56',
      purchase: 'Online',
      date: '05 Aug 2020',
      by: 'Malynne'
    },      
    {
      id: 'PRE2143',
      item: 'Desk',
      quantity: '6',
      amount: '$378',
      purchase: 'Take Away',
      date: '04 Sept 2020',
      by: 'Levell Scott'
    },
    {
      id: 'PRE2431',
      item: 'Projector',
      quantity: '1',
      amount: '$246',
      purchase: 'Real Shop',
      date: '17 Sept 2020',
      by: 'Minnie'
    },
    {
      id: 'PRE1534',
      item: 'Hard Disk',
      quantity: '2',
      amount: '$560',
      purchase: 'Sony Center',
      date: '02 Oct 2020',
      by: 'Lois A'
    },
    {
      id: 'PRE2153',
      item: 'Note books',
      quantity: '100',
      amount: '$236',
      purchase: 'DJ Stationary',
      date: '28 Oct 2020',
      by: 'Calvin'
    },
    {
      id: 'PRE1252',
      item: 'Water Bottle',
      quantity: '267',
      amount: '$237',
      purchase: 'DJ Stationary',
      date: '17 Oct 2020',
      by: 'Joe Kelley'
    },
    {
      id: 'PRE1536',
      item: 'Hard Disk',
      quantity: '3',
      amount: '$560',
      purchase: 'Music Center',
      date: '02 Oct 2020',
      by: 'Lois A'
    }
  ]

  const [expenses, setExpenses] = React.useState(dataExpenses)


  const dataSalary = [
    {
      id: 'PRE2209',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Aaliyah</div>
        </div>
      ),
      gender: 'Female',
      date: '17 Aug 2020',
      amount: '$120',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2213',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Malynne</div>
        </div>
      ),
      gender: 'Female',
      date: '05 Aug 2020',
      amount: '$56',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2143',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>levell Scott</div>
        </div>
      ),
      gender: 'Male',
      date: '04 Sept 2020',
      amount: '$378',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2431',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Minnie</div>
        </div>
      ),
      gender: 'Female',
      date: '17 Sept 2020',
      amount: '$246',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE1534',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lois A</div>
        </div>
      ),
      gender: 'Male',
      date: '02 Oct 2020',
      amount: '$56',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2153',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Calvin</div>
        </div>
      ),
      gender: 'Male',
      date: '17 Oct 2020',
      amount: '$237',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2143',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>levell Scott</div>
        </div>
      ),
      gender: 'Male',
      date: '04 Sept 2020',
      amount: '$378',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE2213',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Malynne</div>
        </div>
      ),
      gender: 'Female',
      date: '05 Aug 2020',
      amount: '$56',
      status: (<span className="paid">Paid</span>)
    },
    {
      id: 'PRE1534',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Lois A</div>
        </div>
      ),
      gender: 'Male',
      date: '02 Oct 2020',
      amount: '$56',
      status: (<span className="unpaid">Unpaid</span>)
    },
    {
      id: 'PRE2431',
      name: (
        <div className="name-wrapper">
          <img src="../../images/mybaby.jpg" className="img" />
          <div>Minnie</div>
        </div>
      ),
      gender: 'Female',
      date: '17 Sept 2020',
      amount: '$246',
      status: (<span className="unpaid">Unpaid</span>)
    }
  ]

  const [salary, setSalary] =React.useState(dataSalary)



function CustomLink2({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  return (
    <div>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}


  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/admin-dashboard' element={<Admin showNav={showNav} toShowNav={toShowNav} />} />
        <Route path="/students" element={<StudentsDashboard showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path="/teachers" element={<TeachersDashboard showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/studentlist' element={<StudentList showNav={showNav} toShowNav={toShowNav} data={Data}  />} />
        <Route path='/studentadd' element={<StudentAdd showNav={showNav} toShowNav={toShowNav} setData={setData}  />} />
        <Route path='/studentview' element={<StudentView  showNav={showNav} toShowNav={toShowNav} />} />
        <Route path='/studentedit' element={<StudentEdit showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/teacherview' element={<TeacherView showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/teacheradd' element={<TeacherAdd showNav={showNav} toShowNav={toShowNav} setDataTeacher={setDataTeacher}  />} />
        <Route path='/teacherlist' element={<TeacherList showNav={showNav} toShowNav={toShowNav} data={dataTeacher}   />} />
        <Route path='/teacheredit' element={<TeacherEdit showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/deptadd' element={<DepartmentAdd showNav={showNav} toShowNav={toShowNav} setDataDept={setDataDept}  />} />
        <Route path='/deptedit' element={<DepartmentEdit showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/deptlist' element={<DepartmentList showNav={showNav} toShowNav={toShowNav} data={dataDept} />} />
        <Route path='/subadd' element={<SubjectAdd showNav={showNav} toShowNav={toShowNav} setSubject={setSubject}  />} />
        <Route path='/subedit' element={<SubjectEdit showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/sublist' element={<SubjectList showNav={showNav} toShowNav={toShowNav} data={subject}  />} />
        <Route path='/feescollection' element={<FeesCollection showNav={showNav} toShowNav={toShowNav} data={fees}  />} />
        <Route path='/expenses' element={<Expenses showNav={showNav} toShowNav={toShowNav} data={expenses}  />} />
        <Route path='/salary' element={<Salary showNav={showNav} toShowNav={toShowNav} data={salary}  />} />
        <Route path='/addfees' element={<AddFees showNav={showNav} toShowNav={toShowNav} setFees={setFees}  />} />
        <Route path='/addexpenses' element={<AddExpenses showNav={showNav} toShowNav={toShowNav} setExpenses={setExpenses}  />} />
        <Route path='/addsalary' element={<AddSalary showNav={showNav} toShowNav={toShowNav} setSalary={setSalary}  />} />
        <Route path='/allblogs' element={<AllBlogs showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/addblog' element={<AddBlog showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/editblog' element={<EditBlog showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/login' element={<Login showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/register' element={<Register showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/forgotpassword' element={<ForgotPassword showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/errorpage' element={<ErrorPage showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/holiday' element={<Holiday showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/fees' element={<Fees showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/examlist' element={<ExamList showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/events' element={<Events showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/timetable' element={<TimeTable showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/library' element={<Library showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/settings' element={<Settings showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='sports' element={<Sports showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='blankpage' element={<BlankPage showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='hostel' element={<Hostel showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='transport' element={<Transport showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/studentgrid' element={<Studentgrid showNav={showNav} toShowNav={toShowNav}  />} />
        <Route path='/teachergrid' element={<TeacherGrid showNav={showNav} toShowNav={toShowNav}  />} />
      </Routes>
    </BrowserRouter>
  )
}