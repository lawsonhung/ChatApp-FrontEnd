import React from 'react';

class User extends React.Component{
  state={
    // chatPeople: "",
    chatPeople: [],
    chat_id: 0
  }

  sendChatInfo = () => {

      if (this.props.user.name){
      let chatPeople = [localStorage.name,this.props.user.name].sort().join()

        this.setState({chatPeople})
        console.log(chatPeople)
      }
      fetch("https://lets-chat-flatiron.herokuapp.com/chats")
      .then(res=> res.json())
      .then(data => {
      let abc = data.filter(user => user.name === this.state.chatPeople)
      if (abc.length === 0 ){
        fetch("https://lets-chat-flatiron.herokuapp.com/chats",{
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
    <div>
      <div className="user" >
        <div>Name: {name}</div>
        <div>Online status?: {online_status ? "online" : "offline"}</div>
      </div>

      <div className="OnlineUsers">
          {online_status && name !== localStorage.name ?
            <div onClick={this.sendUserInfo} > Name: {name} is online ........ </div>: null
          }
      </div>
    </div>
    )
  }


}

export default User;
