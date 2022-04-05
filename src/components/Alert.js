import React, { Component } from 'react'

 class Alert extends Component {
  render() {
    if(this.props.alert!==null) 
    {
        const {msg,type} = this.props.alert;
        return (
            <div className="container">
                <div className={"alert alert-"+type}>{msg}</div>
            </div>
        )
    }
    else
        return (<></>)
  }
}

export default Alert