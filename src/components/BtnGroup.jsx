import React from 'react';
import cn from 'classnames';

class BtnGroup extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      leftActive: false,
      rightActive: false,
    }
  }

  handleFirst = () => {
      this.setState({leftActive: true, rightActive: false});
  }

  handleSecond = () => {
    this.setState({leftActive: false, rightActive: true})
  }
  render() {

    const {leftActive, rightActive} = this.state

    const firstBtnClass = cn('btn btn-secondary left', {
        active: leftActive
    })

    const secondBtnClass = cn('btn btn-secondary right', {
        active: rightActive
    })


    return (

      <div class="btn-group" role="group">
        <button type="button" className={firstBtnClass} onClick={this.handleFirst} >Left</button>
        <button type="button" className={secondBtnClass} onClick={this.handleSecond}>Right</button>
</div>

    )
  };
};

export default BtnGroup;

