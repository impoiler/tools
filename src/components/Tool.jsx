import React from "react";
import { Link } from "react-router-dom";

const Tool = (props) => {
  let { name, icon, link } = props.data;

  return (
    <div className="tool">
      <Link to={link}>
        <img src={icon} alt="" />
        <h2>{name}</h2>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width=""
            height=""
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default Tool;
