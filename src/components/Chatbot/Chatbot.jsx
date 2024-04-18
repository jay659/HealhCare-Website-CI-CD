import React, { useState } from 'react'
import SimpleForm from './SimpleForm';
import chatbot from '../../Images/chatbot.svg';
import "./Chatbot.css";


const Chatbot = () => {
    let [showChat, setShowChat] = useState(false);

    const startChat = () => { setShowChat(true); }
    const hideChat = () => { setShowChat(false); }
  return (
    <>
     
        <div className='chatbot' style ={{display: showChat ? "" : "none"}}>
          <SimpleForm />
        </div> 
        <div className = "bot">
          {!showChat 
            ? <button className="chatbot-btn" aria-label="Open chatbot" onClick={() => startChat()}><img  src={chatbot} alt='chatbot image'/> </button> 
            : <button className="chatbot-btn"  aria-label="Close chatbot" onClick={() => hideChat()}> <img src={chatbot} alt='chatbot image' /></button>}
        </div>
    </>    
  )
}

export default Chatbot
