import { Fragment } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <div class="header-container">
          <img src={logo} alt="apple" />
          <h1>React Store</h1>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
