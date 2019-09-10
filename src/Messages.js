import React from 'react';
import MessageForm from './MessageForm'
class Messages extends React.Component{

state={
  messages: []
}

componentDidUpdate(){
  let abc ;
  if (abc !== this.props.chatPerson.id){
    fetch("http://localhost:3000/chat_boxes")
    .then(res=> res.json())
    .then(data =>{
      data.map(message => {
        if(message.user_id === parseInt(localStorage.id) && this.props.chatid === message.chat_id){
          this.setState({messages : [...this.state.messages , message ] })
          abc = this.props.chatPerson.id
        }
      })
    })
  }
}

render(){
  console.log(this.state.message)
    return (
      <div >
        {this.props.chatPerson.id}

        <MessageForm chatid = {this.props.chatid}/>
      </div>
    )
  }


}

export default Messages;
