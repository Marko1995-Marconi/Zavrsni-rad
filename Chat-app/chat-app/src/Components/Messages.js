import React from "react";

function Messages(props) {
 
  const { messages, currentMember } = props;

  function renderMessage(message) {
    
    const { member, text } = message;
  
    const messageFromMe = member.id === currentMember.id;
   
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li className={className} key={message.time}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username" style={{ color: member.clientData.color }}>
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;
