// CLASE 1 


let nombre = "Shippuden Web";

let nombreIngresado = prompt ("Ingresa tu nombre");

console.log(nombre);
console.log(nombreIngresado);
console.log("Hola " + nombreIngresado + ", bienvenido/a!");



let serieFavorita = prompt ("Cuál es tu serie favorita?")

 if (serieFavorita == "Naruto"){

    alert ("El mio también!");
} else if (serieFavorita == "One Piece"){
    alert ("Ese anime no me gusta");
} else {
    //string template
    alert (`Tu anime favorito es ${serieFavorita}. El mío es Dragon Ball Z.`);
}

