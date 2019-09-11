import React from 'react';
class EachMessage extends React.Component{

render(){
    return (
      <div className="message-sender-receiver">
        <div className={this.props.message.user_id === parseInt(localStorage.id)? "sender" : "receiver" } >
        <p className="sender-receiver" > {this.props.message.message} </p>
        </div>
      </div>
    )
  }


}

export default EachMessage;
