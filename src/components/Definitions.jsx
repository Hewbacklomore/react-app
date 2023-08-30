import React from 'react';

class Definitions extends React.Component {
  render() {

    const {data} = this.props;

    return (

      <dl>{data.map(item => 
        
          <div key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </div>
        
        )}</dl>

    )
  };
};

export default Definitions;