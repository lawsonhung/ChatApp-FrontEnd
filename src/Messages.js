import React from 'react';

class Messages extends React.Component{

render(){
    console.log(this.props.chatPerson);
    return (
      <div>
        {this.props.chatPerson.name}
      </div>
    )
  }


}

export default Messages;
