import React from "react";

/*Botones de las opciones grales*/
function Options(props) {
  const data = [
    {
      text: "Ver tutorial de HostingBook", 
      handler: props.actionProvider.handleTutorialQuiz,
      id: 1
    },
    {
      text: "Contactar con HostingBook", 
      handler: props.actionProvider.handleContactarQuiz,
      id: 2
    },
    {
      text: "Redes Sociales HostingBook",
      handler: props.actionProvider.handleRedesQuiz,
      id: 3
    }
  ];
  const optionsList = data.map((option) => (
    <button key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));
  return (
    <div>
      <p>{optionsList}</p>
    </div>
  );
}
export default Options;