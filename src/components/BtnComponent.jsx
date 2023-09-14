import React from 'react';
import BtnListGroup from './BtnListGroup';


class BtnComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        log: []
    }
  }



  handleIncrement = () => {
    
      const {log} = this.state;

      const value = log.length > 0? log[0] + 1 : 1;

      this.setState({
        log: [value, ... log]
      })
      
    
  }

  handleDecrement = () => {
      const {log} = this.state

      const value = log.length > 0 ? log[0] - 1 : 1

      this.setState({
        log: [value, ...log]
      })
  }

  deleteItem = (index) => {

      const {log} = this.state;

      const newItem = [...log];

      newItem.splice(index, 1);

      this.setState({
          log: newItem
      })
  }


  render() {

    const {log} = this.state

      return (
        
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.handleIncrement}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleDecrement} >-</button>
    </div>
    <BtnListGroup data = {log} myFunction = {this.deleteItem}/>
</div>
    
      )
  }
};


export default BtnComponent;

