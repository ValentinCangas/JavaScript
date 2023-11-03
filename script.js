//8
function categoriaNotas(nota){
    if(nota < 60){
        return "EP"
    }else if(nota < 80){
        return "S"
    }else{
        return "MS"
    }
}

//9
function diasDeLaSemana(dia){
    if(dia == 1){
        return "Lunes"
    }else if(dia == 2){
        return "Martes"
    }else if(dia == 3){
        return "Miercoles"
    }else if(dia == 4){
        return "Jueves"
    }else if(dia == 5){
        return "Viernes"
    }else if(dia == 6){
        return "Sabado"
    }else if(dia == 7){
        return "Domingo"
    }
}


//4
function diasLaborables(dias){
    if((dias == "Domingo") || (dias == "Sabado")) {
        return "Dian No Laborable"
    }else {
        return "Dia Laborable"
    }
}

let esLaborable = prompt("Ingresa un dia l¿de la semana")
alert(diasLaborables(esLaborable))