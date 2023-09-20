import React from "react";


class Form extends React.Component {
    render() {

       const { value, onChange, onSubmit } = this.props
       
    return(
        
        <form className="d-flex" action="" onSubmit={onSubmit}>
        <div className="me-3">
            <input 
            value={value} 
            onChange={onChange}  
            type="text" 
            required="" 
            class="form-control"
            placeholder="I am going..." />
        </div>
        <button
         type="submit" 
         className="btn btn-primary" >
            add
            </button>
    </form>
    )
    }
}

export default Form 