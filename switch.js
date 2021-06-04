
var producto = 'naraanjas';

switch (producto){
    case "papas":
        console.log("El precio de las papas es 50")
        break;

    case "naranjas":
        console.log("las naranjas están a 20 pesos")
        break;
    case "dureaznos":
        console.log("los duraznos están a 120 pesos")
        break;
    default:
        console.log ("no tenemos ese producto")    
}

var contador = 5;

while(contador < 10){
    console.log(contador)
    contador++
}

do{
    console.log(contador)
    contador++
} while (contador < 20);