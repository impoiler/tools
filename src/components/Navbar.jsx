import React from "react";
import logo from "../img/Logo_2nd.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="dropwown">
            Tools
            <ul>
              <li><Link to="image2base64">Image to Base 64</Link></li>
              <li><Link to="whois">Whois</Link></li>
              <li><Link to="domain">Domain Availability</Link></li>
              <li><Link to="ip">IP</Link></li>
              <li><Link to="url-short">Url Shortner</Link></li>
              <li><Link to="crypto">Crypto</Link></li>
              <li><Link to="viewport">Viewport</Link></li>
              <li><Link to="tv">TV</Link></li>
             
            </ul>
          </li>
          <li><a href="mailto:hello@suresh.im">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
