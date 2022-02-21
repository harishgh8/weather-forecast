import React from "react";

const Spinner = (props) => {
  return (
    
      <div className="ui active dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
    
  );
};

export default Spinner;