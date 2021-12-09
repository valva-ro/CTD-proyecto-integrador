const data = {
    mail: "estees@elmail.com"
}
export default function get(url) {
    return new Promise((resolve, reject) => {
        const arl = url
        if (arl == "usuarios/confirmarRegistro?token=1234") {
            return data
        } else {
            return null
        }
    })

};

