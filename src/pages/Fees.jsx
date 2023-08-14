import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "../css/fees.css";
import Header from "../components/header";
import DataTable from "react-data-table-component";

function Fees(props) {
  const { showNav, toShowNav } = props;

  const column = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Fees Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Class",
      selector: (row) => row.class,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
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
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const data = [
    {
      id: "PRE2209",
      name: "Exam Fees",
      class: "10",
      amount: "$345",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      name: "Exam Fees",
      class: "1",
      amount: "$2555",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      name: "Exam Fees",
      class: "9",
      amount: "$545",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      name: "Sports Day Fees",
      class: "8",
      amount: "$234",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      name: "Exam Fees",
      class: "$7",
      amount: "$265",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      name: "Sports Day Fees",
      class: "2",
      amount: "$334",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      id: "PRE1434",
      name: "Sports Day Fees",
      class: "6",
      amount: "$341",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      id: "PRE2345",
      name: "Exam Fees",
      class: "12",
      amount: "$365",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      id: "PRE2365",
      name: "Annual Day Fees",
      class: "11",
      amount: "$83",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
      id: "PRE1234",
      name: "Class Test Fees",
      class: "5",
      amount: "$242",
      start: "23 Apr 2020",
      end: "28 Apr 2020",
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
              <h2>Fees</h2>
              <div>
                Dashboard<span> / Fees</span>
              </div>
            </div>
            <div className="student-list-wrapper">
              <div className="student-list">
                <div className="student-header">
                  <h1>Fees</h1>
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
              <h2>Add Fees</h2>
              <div>
                Fees<span> / Add Fees</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Fees Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Fees ID <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">Select Type</option>
                      <option value="Male">Class Test</option>
                      <option value="Female">Exam Fees</option>
                      <option value="Female">Hostel Fees</option>
                      <option value="Female">Transport Fees</option>
                      <option value="Female">Mess Fees</option>
                      <option value="Other">Other</option>
                    </select>
                    <span>
                      Fees Type<a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">Select Class</option>
                      <option value="Male">LKG</option>
                      <option value="Female">UKG</option>
                      <option value="Female">1</option>
                      <option value="Female">2</option>
                      <option value="Female">3</option>
                      <option value="Other">Other</option>
                    </select>
                    <span>
                      Class<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Fees Amount <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      Start Date <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      End Date <a>*</a>
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
              <h2>Edit Fees</h2>
              <div>
                Fees<span> / Edit Fees</span>
              </div>
            </div>
            <div className="add-student">
              <form className="add-student-wrapper">
                <h2>Fees Information</h2>
                <div className="first-name-section2">
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Fees ID <a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">Select Type</option>
                      <option value="Male">Class Test</option>
                      <option value="Female">Exam Fees</option>
                      <option value="Female">Hostel Fees</option>
                      <option value="Female">Transport Fees</option>
                      <option value="Female">Mess Fees</option>
                      <option value="Other">Other</option>
                    </select>
                    <span>
                      Fees Type<a>*</a>
                    </span>
                  </div>
                  <div className="select">
                    <select>
                      <option value="">Select Class</option>
                      <option value="Male">LKG</option>
                      <option value="Female">UKG</option>
                      <option value="Female">1</option>
                      <option value="Female">2</option>
                      <option value="Female">3</option>
                      <option value="Other">Other</option>
                    </select>
                    <span>
                      Class<a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="text" required="required" />
                    <span>
                      Fees Amount <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      Start Date <a>*</a>
                    </span>
                  </div>
                  <div className="input-box2">
                    <input type="date" required="required" />
                    <span>
                      End Date <a>*</a>
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

export default Fees;
