import React from "react";
import "./search-box.styles.css";

const SeacrhBox = ({ handleChange, placeHolder }) => (
  <input
    className="seacrh"
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);

export default SeacrhBox;
