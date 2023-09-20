import React from "react";



class Item extends React.Component {
    render() {

        const { text , onRemove} = this.props
        console.log(text);
        
        return(
            <div className="row">
                    <div className="col-auto">
                        <button onClick={onRemove} type="button" className="btn btn-primary btn-sm">-</button>
                    </div>
                <div className="col">{text}</div>
            </div>
        )
    }
}


export default Item 

