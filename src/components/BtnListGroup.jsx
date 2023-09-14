import React from "react";

class BtnListGroup extends React.Component {

   
    
   render() {

    const {data, myFunction} = this.props

    const style = {
        display: 'flex',
        flexWrap: 'wrap',
    }
      

        return (
            <div className="list-group" style={style}>
                    {data.map((item, index) => (
                        <button type="button" key={index} className="list-group-item list-group-item-action" onClick={() => myFunction(index)}>{item}</button>
                    ))}
            </div>
        )
    }
}

export default BtnListGroup;