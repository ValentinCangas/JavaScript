let nota = 8

function estaAprobado(notaExamen)
{
    let estado 
    if (notaExamen >= 6)
    {
        estado = "Felicidades, aprobaste."
    }
    else {
        estado = "Desaprobaste, segui estudiando"
    }
    return estado
}

