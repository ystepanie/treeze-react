import React from 'react';
import MessageForm from "./MessageForm";

function ChanbotForm() {
    return (
        <div
        className="d-flex flex-column"
        style={{ width: 1000 }}
        >
        <div
          className="chat-window card"
        >
        <div className="d-flex flex-row">
        <div className="message-nickname"></div>
        <div></div>
        <div className="time"></div>
        </div>
        </div>
        <MessageForm />
      </div>
    )   
}

export default ChanbotForm;