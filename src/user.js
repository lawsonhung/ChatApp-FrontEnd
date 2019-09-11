import React from 'react';

class User extends React.Component{
  state={
    chatPeople: "",
    chat_id: 0
  }

  sendChatInfo = () => {

      if (this.props.user.name){
      let chatPeople = [localStorage.name,this.props.user.name].join("/")
        this.setState({chatPeople})
      }
      fetch("http://localhost:3000/chats")
      .then(res=> res.json())
      .then(data => {
      let abc = data.filter(user => user.name.toLowerCase() === this.state.chatPeople.toLowerCase())
      if (abc.length === 0 ){
        fetch("http://localhost:3000/chats",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.chatPeople
          })
        })
        .then(res => res.json())
        .then(data => {
          this.setState({chat_id : data.id})
          this.props.chatid(this.state.chat_id)
        })

      }
      else{
        this.setState({chat_id: abc[0].id })
        this.props.chatid(abc[0].id)
      }

    })
  }


  sendUserInfo = () => {
    this.props.chatWithThisUser(this.props.user);
    this.sendChatInfo()
  }


render(){
  const {name , online_status} = this.props.user
    return (
      <div onClick={this.sendUserInfo}>
        <p>Name: {name}</p>
        <p>Online?: {online_status ? "online" : "offline"}</p>
      </div>
    )
  }


}

export default User;
