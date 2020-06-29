import React from 'react';

// console.log(process.env.REACT_APP_API_KEY)

 



function Form(props) {

   

  
    return (    
       <>
        <form onSubmit={props.handleSubmit} >
  Enter city: <input type="text" onChange={props.handleSearch} value={props.city} />
            <button type="submit">Submit</button>
        </form>
       </>
      
    );
  }
  
  export default Form;
  