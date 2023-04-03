import React, { Component } from "react";
import { randomColor, randomName } from "./Components/chat";
import Messages from "./Components/Messages";
import Input from "./Components/input";
import "./Components/App.css";

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };

 
  drone = new window.Scaledrone("KCc3Zlz5JzOk4Nm3", {
    data: this.state.member,
  });

  componentDidMount() {
    this.drone.on("open", (error) => {
      if (!error) {
        this.currentMemberId = this.drone.clientId;
      }

      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
     
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({ room: "observable-room", message });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chat aplikacija</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
          key={this.state.member.id}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
