import React from "react";
import Header from "../../components/Header/Header";
import { NONAME } from "dns";

const ApplicationPage = props => {
  return (
    <div>
      <Header />
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/shrpKxqeKVGHWr1AT?backgroundColor=orange"
        style={{
          width: "100%",
          height: "500px",
          background: "transparent",
          border: "none",
          frameBorder: "0",
          onMouseWheel: ""
        }}
      />
    </div>
  );
};

export default ApplicationPage;
