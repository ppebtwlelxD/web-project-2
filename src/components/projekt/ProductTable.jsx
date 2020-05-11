import React from "react";
import ReactDOM from "react-dom";

import * as ProductRow from"./ProductRow.jsx"

export default class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        //serch bar
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        //check box
        if (inStockOnly && !product.stocked) {
          return;
        }
        //displays a row for each product
        // from a previous class
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
      //making the name/price tabel header
      return (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Type of Projekt</th>
              <th>Studyprogram</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  