import React from "react";
import ReactDOM from "react-dom";
import * as Login from"../login/Login.jsx";
import * as NavBar from "./NavBar.jsx";
import * as FilterableProductTable from "../projekt/FilterableProductTable.jsx";



export default class Master extends React.Component {
    render() {
      return (
        <div>
          <NavBar />
          <Login />
          <FilterableProductTable products={PRODUCTS} />,
        </div>
      );
    }
  };
  //the things on the
  const PRODUCTS = [
    {
      price: "bachelor",
      bachelor: true,
      internship: false,
      name: "carlos-ink",
      studyprogram: "WEB",
    },
    {
      price: "internship",
      bachelor: false,
      internship: true,
      name: "carlos-as",
      studyprogram: "grafisk",
    },
    {
      price: "bachelor",
      bachelor: true,
      internship: false,
      name: "carlos-ink",
      studyprogram: "WEb",
    },
    {
      price: "bachelor",
      bachelor: true,
      internship: false,
      name: "carlos",
      studyprogram: "grafisk",
    },
    {
      price: "internship",
      bachelor: false,
      internship: true,
      name: "carlos-as",
      studyprogram: "inter",
    },
    {
      price: "bachelor",
      bachelor: true,
      internship: false,
      name: "carlos",
      studyprogram: "inter",
    },
  ];
  