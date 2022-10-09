import "../style/main.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex">
      <nav className="navbar">
        <div className="nav-logo">
          <img src="../Assets/adove-Indesign-png.png" alt="logo"></img>
          <Link to="/"> S-LEDGER </Link>
        </div>
        <div className="nav-list">
          <Link to="/" className="nav-link">
            Features
          </Link>
          <Link to="pricing" className="nav-link">
            Pricing
          </Link>
          <Link to="learn-support" className="nav-link">
            Learn & support
          </Link>
          <Link to="tutorials" className="nav-link">
            Tutorial
          </Link>
          <Link to="docs" className="nav-link">
            Docs
          </Link>
          <Link to="about_us" className="nav-link">
            About Us
          </Link>
        </div>
        <div className="signup-login">
          <Link to="app_test" className="app">
            Free Trial
          </Link>
          <Link to="login" className="login">
            Log in
          </Link>
          <Link to="signup" className="signup">
            Sign up
          </Link>
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
