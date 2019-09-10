import React from 'react';
class Messages extends React.Component{

  state={
    chatPeople:""
  }

  componentDidMount(){

    if (this.props.chatPerson.name){
    let chatPeople = [localStorage.name,this.props.chatPerson.name].join("/")
      this.setState({chatPeople})
    }
    fetch("http://localhost:3000/chats")
    .then(res=> res.json())
    .then(data => {

    })
  }






render(){
    console.log(this.state.chatPeople);
      // let abc ;
      // if (this.props.chatPerson.name){
      //   abc =[localStorage.name,this.props.chatPerson.name].join("/");
      // }
      // console.log(abc)
    return (
      <div>
        {this.props.chatPerson.name}
      </div>
    )
  }


}

export default Messages;
