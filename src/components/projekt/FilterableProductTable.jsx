import React from "react";
import ReactDOM from "react-dom";

import * as SearchBar from "./SearchBar.jsx";
import * as ProductTable from"./ProductTable.jsx";

class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //creates the page without search parameters
        filterText: "",
        inStockOnly: false,
      };
  
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    //chages the page if search text is uppdated
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText,
      });
    }
    //chages the page if check box is uppdated
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly,
      });
    }
    // rendring the rest of the classes on the page
  
    render() {
      return (
        <div id="FilterableProductTable">
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }
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
  