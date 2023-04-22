//toDo Realizar un programa que dada la vida de un personaje, realice una accion:
//    . Si la vida esta entre 0 y 20 que el personaje huya (escribir)
//    . Si la vida esta entre 21 y 50 que el personaje se ponga en modo defensivo.
//    . Si la vida esta entre 51 y 80 que el personaje se ponga en modo moderado.
//    . Si la vida esta entre 81 y 100 que el personaje se ponga en modo ofensivo.
//   a) Resolverlo sin conectores lógicos
//  b) Resolverlo con conectores lógicos (contemplar que tantos valores a cero y mayores a cien no pueden ser validos).



//!!!!!!!!!!!!!!!!! CON CONECTORES LÓGICOS !!!!!!!!!!!!!!!!!!!!!!!!!!

let charAction = ["estás huyendo" , "estás en modo defensivo" , "estás en modo moderado" , "estás en modo ofensivo"];
let vida = parseInt(prompt("Ingresa tus puntos de vida"));

while (isNaN(vida) || vida < 0 || vida > 100 ) {
    alert("Por favor, ingresa un valor entre 0 y 100");
    vida = parseInt(prompt("Ingresa tus puntos de vida"));

}

let actionIndex; 
if (vida >= 0 && vida <=20){
    actionIndex = 0;

}else if (vida >= 21 && vida <= 50){
    actionIndex = 1;
}else if (vida >= 51 && vida <= 80){
    actionIndex = 2;
}else if (vida >= 81 && vida <= 100){
    actionIndex = 3;
}

console.log(`Tu salud es de ${vida}, ${charAction[actionIndex]}`)

