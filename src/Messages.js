import React from 'react';
class Messages extends React.Component{

  state={
    chatPeople: []
  }

  componentDidMount(){

    console.log("Messages props: ", this.props);
    console.log("Chatperson name: ", this.props.chatPerson.name);

    if (this.props.chatPerson.name){
      // let chatPeople = [localStorage.name,this.props.chatPerson.name].join("/")
      let chatPeople = [localStorage.name,this.props.chatPerson.name]
      this.setState({chatPeople})
    }
    fetch("http://localhost:3000/chats")
    .then(res=> res.json())
    .then(data => {
      // console.log(data);
    })
  }





  render(){
    // console.log(this.state.chatPeople);
      // let abc ;
      // if (this.props.chatPerson.name){
      //   abc =[localStorage.name,this.props.chatPerson.name].join("/");
      // }
      // console.log(abc)
    return (
      <div>
        <p>Start talking to {this.props.chatPerson.name}!</p>
      </div>
    )
  }


}

export default Messages;
