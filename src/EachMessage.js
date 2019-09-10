import React from 'react';
class EachMessage extends React.Component{

render(){
console.log(this.props.message)
    return (
      <div >
      {this.props.message.message}
      </div>
    )
  }


}

export default EachMessage;
