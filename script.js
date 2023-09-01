function cuadrado(num)
{
    return num * num
}

function cubo(x)
{
    return x * x * x
}



//x^2-x-10
function operacionA(x)
{
    let resultado = cuadrado(x) - x - 10
    return resultado 
}

   //b) (x-3)*2
    function operacionB(x)
    {
        let resultado = (x - 3) * 2
        return resultado
    } 
   
   //c) x*x^2+20
   function operacionC(x)
   {
       let resultado = x * cuadrado(x) + 20
       return resultado
   }
   
   //d) (x/2)+5
   function operacionD(x)
   {
       let resultado = (x / 2) + 5
       return resultado
   }
   //e) x^3+x^2+10
   function operacionE(x)
   {
       let resultado = cubo(x) + cuadrado(x) + 10
       return resultado
   }
   //f) (x*10)*5 
   function operacionF(x)
   {
       let resultado = (x * 10) * 5
       return resultado
   }

