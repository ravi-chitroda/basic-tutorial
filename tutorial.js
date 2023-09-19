import React from "react";

const Tutorial = () => {
  return (
    <div>
      <h1>Basic Tutorial</h1>
      <p>
        {" "}
        all react file are rooted at index.html <div id="root"></div>{" "}
      </p>
      <p>
        id = "root" is derive at index.js where root is using reactDOM "const
        root = ReactDOM.createRoot(document.getElementById("root"));"
      </p>
      <p>
        now this root render and wrap it up with react.strictMode. we can create
        our any component over there. Mostly it is App.js
      </p>
    </div>
  );
};
export default Tutorial;
