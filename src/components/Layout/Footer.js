import "./Footer.css";
import Carticon from "../../assets/cart-icon.png";

const Footer = (props) => {
  return (
    <footer>
      <div class="products-footer">
        <div class="products-footer-detail">
          <span class="products-footer-detail__icon">
            <a href=" ">
              <img src={Carticon} alt="" />
            </a>
          </span>
          <span> 4 Items </span>
          <span> $30 </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
