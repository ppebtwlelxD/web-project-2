import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";


//navbar
class NavBar extends React.Component {
    render() {
      return (
        <nav id="mavbar" className="navbar navbar-dark bg-dark mb-3">
          <a className="navbar-brand" href="/#">
            Navigation
          </a>
          <ul>
            <li>Project</li>
            <li>company</li>
            <li>Log Out</li>
          </ul>
        </nav>
      );
    }
  }
  
  //login
  class Login extends React.Component {
    render() {
      return (
        //mmaking the tabel
        <div id="Login">
        <LogInTitel />
        <LogInText />
        <LogInForm />
      </div>
      );
    }
  }

  export default class LogInForm extends React.Component {
    render() {
      return (
        <div>
        <form id="LogInForm" action="/action_page.php">
        <label for="user"></label>
        <input type="text" id="user" name="user" value="Username"></input>
        <label for="pword"></label>
        <input type="text" id="pword" name="pword" value="Password"></input>
        <br></br>
        <input type="checkbox" id="remeber" name="remeber" value="1"></input>
        <label for="remeber">husk meg</label>
        <br></br>
        <input id="logbutton" type="submit" value="Log in"></input>
      </form>
      </div>
      );
    }
  }
  
  class LogInText extends React.Component {
    render() {
      return (
      <p id="LogInText">Her kan du logge inn med din brukernavn og passord</p>
      );
    }
  }
  
  class LogInTitel extends React.Component {
    render() {
      return (
        <div>
        <h1 id="LogInTitel">log in</h1>;
        </div>
      );
    }
  }

//projekts
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
  
  class ProductTable extends React.Component {
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
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
  
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
  
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
  
    render() {
      return (
        //making input search form
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />{" "}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  

 //master (last class)
  class Master extends React.Component {
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
  

ReactDOM.render(<Master />, document.getElementById("root"));
