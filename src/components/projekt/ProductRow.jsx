import React from "react";
import ReactDOM from "react-dom";

class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
  
      return (
        //mmaking the tabel
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.studyprogram}</td>
        </tr>
      );
    }
  }
  