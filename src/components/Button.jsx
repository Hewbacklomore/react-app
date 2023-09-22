import React from "react";
import PostCatalog from "./PostCatalog";


class Button extends React.Component {

    render() {
        
        const { onClick, data } = this.props
        
        return(
        <div>
            <button onClick={onClick}>SUBMIT</button>
            
                {data? <PostCatalog data = {data}></PostCatalog> : null}
                 
            
        </div>
        )
    }
}

export default Button