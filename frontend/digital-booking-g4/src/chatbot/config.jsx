import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import BotAvatar from "../components/AsistenteVirtual/BotAvatar/BotAvatar.jsx";
import Options from "../components/AsistenteVirtual/Options/Options.jsx";
import UserAvatar from "../components/AsistenteVirtual/UserAvatar/UserAvatar.jsx";
import LinkList from "../components/AsistenteVirtual/LinkList/LinkList.jsx";
import LinkListTutorial from "../components/AsistenteVirtual/LinkList/LinkListTutorial.jsx";
import LinkListContacto from "../components/AsistenteVirtual/LinkList/LinkListContacto.jsx"

const config = {
    botName: "QuizBot",
    initialMessages: [
        /*Presentación automática cuando abren el chat con Marco */
        createChatBotMessage("Hola, soy Marco! y a partir de este momento seré tu asistente virtual"),   /*Saludo de bienvenida de Marco*/
        createChatBotMessage("Puedo ayudarte con las siguientes opciones", {
            withAvatar: false,
            delay: 500,
            widget: "options"
        })
    ],

    customStyles: {
        botMessageBox: {
            backgroundColor: "#28334AFF"
        },
        chatButton: {
            backgroundColor: "#567572ff"
        }
    },

    customComponents: {
        header: () => (
            <div    /*Estilos del header del chatbox */
                style={{
                    backgroundColor: "rgb(40, 51, 74)",/*"#567572ff",*/
                    padding: "5px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                    display: "flex",
                    fontSize: "1rem",
                    color: "rgb(255, 255, 255)",/*"rgb(29, 190, 181)",*/
                    paddingTop: "12.5px",
                    paddingBottom: "12.5px",
                    paddingRight: "12.5px",
                    paddingLeft: "12.5px",
                    fontWeight: "700",
                    alignItems: "center"
                }}
            >
                Chat con Marco
            </div>
        ),
        botAvatar: (props) => <BotAvatar {...props} />,
        userAvatar: (props) => <UserAvatar {...props} />
    },

    widgets: [
        /*OPCIONES / PRIMER MENU*/
        {
            widgetName: "options",
            widgetFunc: (props) => <Options {...props} />
        },

        /*REDES SOCIALES*/
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Facebook",
                        url: "https://www.facebook.com/HostingBook-104939168676273",
                        id: 1
                    },
                    {
                        text: "Instagram",
                        url: "https://www.instagram.com/hostingbook/",
                        id: 2
                    },
                    {
                        text: "Twitter",
                        url: "https://twitter.com/Hosting_Book",
                        id: 3
                    },
                    {
                        text: "LinkedIn",
                        url: "https://www.linkedin.com/in/hostingbook/",
                        id: 4
                    }
                ]
            }
        },
        
        /*Camino al link del tutorial*/
        {
            widgetName: "linkTutorial",
            widgetFunc: (props) => <LinkListTutorial {...props} />,
            props: {
                options: [
                    {
                      text: "Ver tutorial",
                      url: "https://youtube.com",   //aca va el link del tutorial
                      id: 1
                    }
                ]
            }
        },
        
        /*Camino a la pagina de contacto*/
        {
            widgetName: "linkContacto",
            widgetFunc: (props) => <LinkListContacto {...props} />,
            props: {
                options: [
                    {
                      text: "Contactanos",
                      url: "https://google.com",    //aca va la pagina de contacto
                      id: 1
                    }
                ]
            }
        },
    ]
};
export default config;