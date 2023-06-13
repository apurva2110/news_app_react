import React from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center py-3">
      <img className="my-3" src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
