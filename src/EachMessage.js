import React from 'react';
class EachMessage extends React.Component{

render(){
    return (
      <div >
      {this.props.message.message}
      </div>
    )
  }


}

export default EachMessage;
