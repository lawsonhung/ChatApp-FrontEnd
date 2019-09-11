import React from 'react';
class EachMessage extends React.Component{

render(){
    return (
      <div className={this.props.message.user_id === parseInt(localStorage.id)? "sender" : "receiver" } >
      {this.props.message.message}
      </div>
    )
  }


}

export default EachMessage;
