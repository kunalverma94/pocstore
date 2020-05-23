import React from "react";
import { config } from "../../app/config";

export const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">{config.APPTITLE}</h5>
          <p className="grey-text text-lighten-4">
            This is a Proof Of concep App of React Redux.
          </p>
          <ul className="styled-list">
            <li>Supports Pagination .</li>
            <li>Supports Search .</li>
            <li>Supports Sorting .</li>
            <li>Supports Session Management .</li>
            <li>Supports Cart Operations .</li>
            <li>Mobile/Desktop Friendly UI .</li>
          </ul>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul className="styled-list">
            <li>
              <a className="grey-text text-lighten-3" href="#top">
                TOP
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#search">
                Search
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#search">
                Sorting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © {new Date().toDateString()}
        <a className="grey-text text-lighten-4 right" href="#!">
          Kunal Verma
        </a>
      </div>
    </div>
  </footer>
);
