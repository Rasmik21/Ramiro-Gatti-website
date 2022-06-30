let nombre = "Shippuden Web";

let nombreIngresado = prompt ("Ingresa tu nombre");

console.log(nombre);
console.log(nombreIngresado);
console.log("Hola " + nombreIngresado + ", bienvenido/a!");


let animeFavorito = prompt ("Cuál es tu serie favorita?");

if (animeFavorito == "Naruto"){
    alert ("El mio también!");
    
    let personajes = prompt("Cuál es tu personaje favorito de Naruto?");
    while (personajes != "Naruto") {
        switch (personajes) {
            case "Kakashi":
            alert ("Raikiri!");
            break;
    
            case "Itachi":
            alert ("Amaterasu!");
            break;
            
            case "Sasuke":
            alert ("Chidori!");
            break;
    
            default:
            alert ("No conozco sus poderes.");
            break;
    
            function nombreCompleto(nombre, apellido){
                let nombreApellido = `Su nombre completo es ${nombre} ${apellido}`;
                alert(`Su nombre completo es ${nombre} ${apellido}`);
                return nombreApellido;
            }
            
            let nombrePersonaje = prompt("Cual es su nombre?");
            let apellidoPersonaje = prompt("Cual es su apellido?");
        
            nombreCompleto(nombrePersonaje, apellidoPersonaje);
            break;
    } 
     break;
}
} 

else if (animeFavorito == "Bleach"){
    alert ("Me encanta! Mi personaje favorito es Rukia.");

    let personajeFavorito = prompt ("Cuál es tu personaje favorito de Bleach?");
    if (personajeFavorito == "Ichigo"){
        alert ("El más fuerte!");
    }
    else if (personajeFavorito == "Rukia"){
        alert ("La mejor!");
    }
    else if (personajeFavorito == "Kempachi"){
        alert ("El gran Capitán!");
    }
    else if (personajeFavorito == "Byakuya"){
        alert ("El mejor Capitán!");
    }
}

else if (animeFavorito == "One Piece"){
    alert ("Ese anime no lo vi, es muy largo.");
}

else if (animeFavorito == "Dragon Ball"){
    alert ("Entonces podemos ser amigos.");
}

else {
    //string template
    alert (`Tu anime favorito es ${animeFavorito}. El mío es Dragon Ball Z.`);
}



