import React from "react";

function Form(props) {
  return (
    <div className="form">
      <form onSubmit={props.handleSubmition}>
        <span>Enter City </span>
        <input type="text" onChange={props.handleSearches} value={props.city} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
