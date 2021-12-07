import "./AsistenteVirtual.css";
import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import MessageParser from "../../chatbot/MessageParser";
import config from "../../chatbot/config";
import ActionProvider from "../../chatbot/ActionProvider";
import { ReactComponent as Button } from "../../assets/robot.svg";

function AsistenteVirtual() {
  const [showBot, setBot] = useState(true);
  function handleBot() {
    const botState = !showBot;
    setBot(botState);
  }
  return (
    <section className="App">
      {showBot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <button className="app-chatbot-button" onClick={handleBot}>
        <Button className="app-chatbot-button-icon" />
      </button>
    </section>
  );
}
export default AsistenteVirtual;