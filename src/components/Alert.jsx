import React from 'react';


class Alert extends React.Component {
  render() {

    const {text, type} = this.props

    const typeAlerts = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
   
    const checkClasses = typeAlerts.includes(type) ? type : typeAlerts[0]

    const style = `alert alert-${checkClasses}`;


    return (

      <div className = {style} role="alert">{text}</div>

    )
  };
};

export default Alert;