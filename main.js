// CLASE 1 


let nombre = "Shippuden Web";

let nombreIngresado = prompt ("Ingresa tu nombre");

console.log(nombre);
console.log(nombreIngresado);
console.log("Hola " + nombreIngresado + ", bienvenido/a!");



let animeFavorito = prompt ("Cuál es tu serie favorita?")

if (animeFavorito == "Naruto"){

    alert ("El mio también!");
} 
else if (animeFavorito == "Bleach"){
    alert ("Me encanta! Mi personaje favorito es Rukia.");
}
else if (animeFavorito == "One Piece"){
    alert ("Ese anime no lo vi, es muy largo.");
}
else if (animeFavorito == "Dragon Ball"){
    alert ("Entonces podemos ser amigos.");
}
else {
    //string template
    alert (`Tu anime favorito es ${serieFavorita}. El mío es Dragon Ball Z.`);
}

