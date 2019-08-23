import React from "react";
import Header from "../../components/Header/Header";
import { NONAME } from "dns";

const ApplicationPage = props => {
  return (
    <div>
      <Header />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdHuztQiwbsRedLlxKDbI0BGi9OfFtzB5tBUiy5ZqmoE1YMCw/viewform?embedded=true"
        style={{
          width: "100%",
          height: "500px",
          frameborder: "0",
          marginheight: "0",
          marginwidth: "0"
        }}
      >
        Loading…
      </iframe>
      {/* <iframe
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
      /> */}
    </div>
  );
};

export default ApplicationPage;
