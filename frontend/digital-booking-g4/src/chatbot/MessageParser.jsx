class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
    //toma las siguientes palabras del input para realizar atajos
    parse(message) {
      const lowercase = message.toLowerCase();
      /*Atajos de saludos*/
      if (lowercase.includes("hola") || lowercase.includes("buenas")) {
        this.actionProvider.messageHandler();
      /*Atajo de tutorial*/
      } else if (lowercase.includes("tutorial")) {
        this.actionProvider.handleTutorialQuiz();
      /*Atajo de contactar*/
      } else if (lowercase.includes("contactar")) {
        this.actionProvider.handleContactarQuiz();
      /*Atajo de redes*/
      } else if (lowercase.includes("redes")) {
        this.actionProvider.handleRedesQuiz();
      /*Atajo de opciones grales*/
      } else if (lowercase.includes("opciones")) {
        this.actionProvider.handleContinue();
      /*Atajos de despedida*/
      } else if (lowercase.includes("gracias") || lowercase.includes("chau")) {
        this.actionProvider.handleGreeting();
      } else {  //todos los otros casos
        this.actionProvider.handleUnknown();
      }
    }
  }
  export default MessageParser;