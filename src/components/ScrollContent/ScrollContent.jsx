import React from "react";
import "./ScrollContent.css";
const ScrollContent = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="fixed-bg bg-1">{/* <h1></h1> */}</div>

        <div className="scroll-bg">
          <h1>We want to buy your car!</h1>
          <h3>
            Looking to sell your car? Sell it to us! Get in touch for a free
            evaluation
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ScrollContent;
