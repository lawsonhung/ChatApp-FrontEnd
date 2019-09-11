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

  // toggleUserCard = (name , online_status) => {
  //   if (online_status) {
  //     if (online_status && name !== localStorage.name) {
  //       return (
  //         <div onClick={this.sendUserInfo} className="onlineUsers" > Name: {name} is online ........ </div>: null
  //       )}
  //   } else {
  //     return (
  //       <div>Name: {name}</div>
          // <div>{online_status ? "online" : "offline"}</div>
  //
  //     )
  //   }
  // }


render(){
  const {name , online_status} = this.props.user
    return (
      <div className="flipCard">
        <div className="flipCardInner" >
          {online_status && name !== localStorage.name ?
            (<div onClick={this.sendUserInfo} className="user onlineUsers" > {name} is online </div>)
            :
            (<div className="user">Name: {name} is offline</div>)
          }
        </div>
      </div>
    )
  }


}

export default User;
