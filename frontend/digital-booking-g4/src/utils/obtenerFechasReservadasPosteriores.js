import obtenerFechasReservadas from "./obtenerFechasReservadas";

export default function obtenerFechasReservadasPosteriores(startDate){
    const fechasNoSeleccionablesPosteriores=[]
    const excludeDates = obtenerFechasReservadas();
    const excludeDateOrdenado = excludeDates.sort((a,b) => new Date(a).getTime() - new Date(b).getTime());
    
    const nextExcludeDate = excludeDateOrdenado.find(element => element > startDate);
    const auxExcludeDate = new Date(nextExcludeDate);
    const endExcludeDate = auxExcludeDate.setDate(auxExcludeDate.getDate() + 62);
    
    for (let d = new Date(nextExcludeDate); d <= new Date(endExcludeDate) ; d.setDate(d.getDate() + 1)){
        fechasNoSeleccionablesPosteriores.push(new Date(d));
    }

    return fechasNoSeleccionablesPosteriores
}

