import React from 'react';
class Messages extends React.Component{


render(){
    return (
      <div>
        {this.props.chatPerson.name}
      </div>
    )
  }


}

export default Messages;
