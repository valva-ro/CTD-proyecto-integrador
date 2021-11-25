export default function obtenerFechasReservadas(){
    const fechasReservadas = [  
        //año, mes, dia --> el mes está corrido. ej: 11 = diciembre / 12 = enero
        //TODO: consumir de la API reservas 
        new Date(2021, 11, 2),
        new Date(2021, 11, 3),
        new Date(2021, 11, 4),
        new Date(2021, 11, 5),
        new Date(2021, 11, 17),
        new Date(2021, 11, 18),
        new Date(2021, 11, 19),
        new Date(2021, 11, 20),
        new Date(2021, 11, 21),
        new Date(2021, 11, 28),
        new Date(2021, 11, 29),
        new Date(2022, 0, 6),
        new Date(2022, 0, 7),
        new Date(2022, 0, 8),
        new Date(2022, 0, 9),
        new Date(2022, 0, 12),
        new Date(2022, 0, 13),
        new Date(2022, 0, 14),
        new Date(2022, 0, 15),
        new Date(2022, 0, 30),
        new Date(2022, 0, 31),
        new Date(2022, 1, 5),
        new Date(2022, 1, 6),
        new Date(2022, 1, 10),
        new Date(2022, 1, 11),
        new Date(2022, 2, 19),
        new Date(2022, 2, 20),   
    ];

    return fechasReservadas;
};
