import React from "react";

function Form(props) {
  return (
    
    <div className="form">
      <form onSubmit={props.handleSubmition}>
        <input
          type="text"
          placeholder="Enter City"
          onChange={props.handleSearches}
          value={props.city}
        />
        <button>Submit</button>
      </form>
    </div>
   
  );
}

export default Form;
