import "../../style/main.scss";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex">
      <nav className="navbar">
        <div className="nav-logo">
          <img src="../Assets/adove-Indesign-png.png" alt="logo"></img>
          <a href="index.html"> S-LEDGER </a>
        </div>
        <div className="nav-list">
          <a href="features.html" className="nav-link">
            Features
          </a>
          <a href="pricing.html" className="nav-link">
            Pricing
          </a>
          <a href="learn-and-support.html" className="nav-link">
            Learn & support
          </a>
          <a href="./docs.html" className="nav-link">
            Tutorial
          </a>
          <a href="./docs.html" className="nav-link">
            Docs
          </a>
          <a href="./about-us.html" className="nav-link">
            About Us
          </a>
        </div>
        <div className="signup-login">
          <a href="#" className="login">
            Free Trial
          </a>
          <a href="./login.html" className="login">
            Log in
          </a>
          <a href="./signup.html" className="signup">
            Sign up
          </a>
        </div>
      </nav>
      {/* <!--End of navbar --> */}

      {/* <!-- menu --> */}
      <div className="menu">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default Header;
