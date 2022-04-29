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



class Ninja {
    constructor(nombre, apellido, edad, habilidad, naturaleza) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.habilidad = habilidad;
        this.naturaleza = naturaleza;
    }
}

const Itachi = new Ninja("Itachi", "Uchiha", 19, "Katon, Amaterasu, Sharingan", "Fuego");
const Shisui = new Ninja("Shisui", "Uchiha", 22, "Katon, Kotoamatsukami, Sharingan", "Fuego");
const Kakashi = new Ninja("Kakashi", "Hatake", 28, "Raikiri, Kuchiyose No Jutsu, Sharingan", "Rayo, Tierra");
const Hashirama = new Ninja("Hashirama", "Senju", "Indefinido", "Mokuton", "Madera");
const Tobirama = new Ninja("Tobirama", "Senju", "Indefinido", "Hiraishin", "Agua");
const Madara = new Ninja("Madara", "Uchiha", "Indefinido", "Katon, Susanoo, Rinnegan", "Fuego");
const Obito = new Ninja("Obito", "Uchiha", 29, "Katon, Kamui, Sharingan", "Fuego");
const Minato = new Ninja("Minato", "Namikaze", 24, "Hiraishin, Rasengan, Sennin Modo", "Viento");
console.log(Itachi);
console.log(Shisui);
console.log(Kakashi);
console.log(Hashirama);
console.log(Tobirama);
console.log(Madara);
console.log(Obito);
console.log(Minato);

let nombreNinja = prompt("Cuál es su nombre?");
let apellidoNinja = prompt("Cuál es su apellido?");
let edadNinja = parseInt(prompt("Cuántos años tiene?"));
let habilidadNinja = prompt("Cuál es su hablidad?");
let naturalezaNinja = prompt ("Cuál es su naturaleza de chakra?");

const ninja2 = new Ninja(nombreNinja, apellidoNinja, edadNinja, habilidadNinja, naturalezaNinja);
console.log(ninja2);



let JutsusMasFuertes = ["Rasengan", "Mokuton", "Kotoamatsukami", "Tsukuyomi", "Amaterasu", "Chidori", "Hiraishin", "Rinnegan", "Sharingan", "Byakugan", "Raikiri", "Byakugo"];
console.log(JutsusMasFuertes);
console.log(JutsusMasFuertes[0]);
console.log(JutsusMasFuertes[1]);
console.log(JutsusMasFuertes[2]);
console.log(JutsusMasFuertes[6]);
console.log(JutsusMasFuertes[3]);
console.log(JutsusMasFuertes[7]);
console.log(JutsusMasFuertes[4]);
console.log(JutsusMasFuertes[5]);
console.log(JutsusMasFuertes[8]);
console.log(JutsusMasFuertes[11]);
console.log(JutsusMasFuertes[9]);
console.log(JutsusMasFuertes[10]);

console.log(JutsusMasFuertes.length);


JutsusMasFuertes.unshift("Shinra Tensei");
console.log(JutsusMasFuertes);

JutsusMasFuertes.unshift("Edo Tensei");
console.log(JutsusMasFuertes);

JutsusMasFuertes.unshift("Rasenshuriken");
console.log(JutsusMasFuertes);


JutsusMasFuertes.push("Kage Bunshin No Jutsu");
console.log(JutsusMasFuertes);

JutsusMasFuertes.push("Gatsuga");
console.log(JutsusMasFuertes);

JutsusMasFuertes.push("Baika No Jutsu");
console.log(JutsusMasFuertes);



let listaHerramientasNinja = [
    {nombre: "Kunai", precio: 500},
    {nombre: "Shuriken", precio: 400},
    {nombre: "Papel Bomba", precio: 1100},
    {nombre: "Nunchakus", precio: 1500},
    {nombre: "Bombas de humo", precio: 400},
];
listaHerramientasNinja.forEach(producto => {
    console.log(`La herramienta es ${producto.nombre} y su precio es de $${producto.precio} Ryos`);
})

let buscarPrecio = listaHerramientasNinja.filter(obj => obj.precio < 1000);
console.log(buscarPrecio);

let buscarPrecios = listaHerramientasNinja.filter(obj => obj.precio > 1000);
console.log(buscarPrecios);



console.log(new Date());


// (ESTÁ EN LA SECCION PERSONAJES)
console.log(document.getElementsByClassName("Naruto"));
console.log(document.getElementsByClassName("Sasuke"));
console.log(document.getElementsByClassName("Sakura"));
console.log(document.getElementsByClassName("Kakashi"));
console.log(document.getElementsByClassName("Itachi"));
console.log(document.getElementsByClassName("Minato"));
console.log(document.getElementsByClassName("Obito"));
console.log(document.getElementsByClassName("Madara"));
console.log(document.getElementsByClassName("Hashirama"));
console.log(document.getElementsByClassName("Tobirama"));
console.log(document.getElementsByClassName("Pain"));
console.log(document.getElementsByClassName("Sarutobi"));
console.log(document.getElementsByClassName("Tsunade"));
console.log(document.getElementsByClassName("Orochimaru"));
console.log(document.getElementsByClassName("Jiraiya"));


// (ESTÁ EN EL INDEX)
let titulo = document.getElementById("headerrr");
let jutsus = prompt("Cuál es tu jutsu favorito?");
titulo.innerText = "Tu jutsu es " + jutsus;


const boton = document.querySelector("#headerrr");
boton.addEventListener("mouseover", ()=>{       
   
console.log("Qué poder!");
})


//(EN INDEX)
console.log(localStorage.getItem("jutsu"));  

let jutsu = "Mi jutsu es Kotoamatsukami";

localStorage.setItem("jutsu", jutsu);


let herramientaShinobi = {
    nombre: "Bombas de humo",
    precio: 400
}
localStorage.setItem("herramienta", JSON.stringify(herramientaShinobi));
    