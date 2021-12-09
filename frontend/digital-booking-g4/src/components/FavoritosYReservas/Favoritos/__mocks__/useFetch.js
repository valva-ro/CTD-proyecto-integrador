const data = {
    productosFavoritos=[
        {
            id: 1,
            nombre: "Meliá",
            descripcion: "Complejos turísticos con servicio “todo incluido” para disfrutar de unas vacaciones de lujo, diseñados para mezclarse con su entorno natural en lugares muy exóticos donde disfrutar de una experiencia verdaderamente única.",
            direccion: "Av. 51 715",
            horarioCheckIn: 12,
            categoria: {
                id: 1,
                titulo: "Hoteles",
                descripcion: "807.105 hoteles",
                urlImagen: "https://proyectointegradorimagenes2.s3.us-east-2.amazonaws.com/Categorias/Hoteles.jfif"
            },
            ciudad: {
                id: 2,
                nombre: "La Plata",
                pais: "Argentina",
                latitud: -34.9214,
                longitud: -57.9544
            },
            politicas: [

                {
                    id: 1,
                    nombre: "Check-in: 10:00",
                    tipoPolitica: {
                        id: 1,
                        nombre: "Normas de la casa"
                    }
                },
                {
                    id: 3,
                    nombre: "Dejar organizado antes de salir",
                    tipoPolitica: {
                        id: 1,
                        nombre: "Normas de la casa"
                    }
                }]
        }
    ]
}
export default function useFetch(url) {

    return new Promise((resolve, reject) => {
        const arl = url
        if (arl == "usuarios/1") {
            return data
        } else {
            return null
        }
    })

}